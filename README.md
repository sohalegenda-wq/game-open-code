# The Observer: Signal Lost

Офлайн-игра для Android: оператор ведёт Марка через 15 зон объекта «Крот-7».
Веб-часть — HTML, CSS и Vanilla JS; Android-оболочка — Capacitor 6.2.1.

## Скачать

[**Скачать готовый APK для Android**](https://github.com/sohalegenda-wq/game-open-code/raw/refs/heads/main/downloads/The-Observer-Signal-Lost.apk) · [Архив проекта](https://github.com/sohalegenda-wq/game-open-code/raw/refs/heads/main/downloads/The-Observer-source.zip)

## Установка готового APK

Откройте `The-Observer-Signal-Lost.apk` на Android 6.0+ (API 23+) и разрешите установку из выбранного файлового менеджера, если Android спросит. Либо:

```sh
adb install -r The-Observer-Signal-Lost.apk
```

Это debug-сборка с отладочной подписью, пригодная для прямой установки. Для публикации в Google Play нужен отдельный release-ключ и AAB. Поддерживайте Android System WebView в актуальном состоянии.

## Требования для сборки

- Node.js 18+ и npm.
- JDK 17 (также можно JDK 21 с включённым Gradle 8.7).
- Android SDK: Platform 34, Build Tools 34.0.0, Platform Tools.
- Интернет при первой установке npm/Gradle/SDK-зависимостей. Сама игра работает без сети.

Android SDK удобно установить через Android Studio → SDK Manager. Задайте `ANDROID_HOME` на каталог SDK или создайте файл `android/local.properties`:

```properties
sdk.dir=/absolute/path/to/Android/Sdk
```

На Windows используйте прямые слеши в пути, например `sdk.dir=C:/Users/YourName/AppData/Local/Android/Sdk`.

## Сборка из архива проекта

Распакуйте архив и откройте терминал в каталоге проекта:

```sh
npm ci
npm run build:apk
```

`build:apk` выполняет:

```sh
npx cap sync android
cd android
./gradlew assembleDebug
```

На Windows последнюю команду замените на `gradlew.bat assembleDebug` (либо выполните `npx cap sync android && cd android && gradlew.bat assembleDebug` после `npm ci`).

Результат:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Установка:

```sh
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

Каталог `android/` уже включён в проект: `npx cap add android` повторять не нужно. Если вы создаёте оболочку с нуля, после установки зависимостей выполните `npx cap add android`, затем перенесите из этого проекта портретный AndroidManifest.xml и MainActivity.java с обработкой паузы, и используйте Gradle 8.7. После каждого изменения в `www/` запускайте `npx cap sync android`.

## Управление

- Нажмите «НАЧАТЬ СВЯЗЬ»; сработает продолжение с сохранённой зоны.
- Стрелки или свайп по монитору дают один шаг. Между командами — 120 мс.
- Удерживайте «СВЕТ», когда монстр близко. Можно одновременно нажимать стрелки вторым пальцем.
- Свет тратит энергию, без света она восстанавливается. После полного разряда включение доступно с 30%.
- Красная точка — монстр; круг с обводкой — Марк; зелёная клетка — выход. Ложные точки существуют только на радаре.
- Стресс усиливает помехи, но сам по себе не убивает.
- В браузере также доступны стрелки/WASD и удерживание пробела.

Сохранение: `observer_progress` в localStorage. Смерть сохраняет текущую зону, победа открывает следующую, финал сбрасывает прогресс на 1. При запрете localStorage игра остаётся работоспособной, но прогресс между запусками не сохраняется.

## Структура

```text
package.json
package-lock.json
capacitor.config.json
www/
  index.html
  style.css
  game.js          # LEVELS, генератор, состояния, звук, ввод, игровой цикл
android/
  app/src/main/AndroidManifest.xml
  app/src/main/java/com/observer/signallost/MainActivity.java
  ...             # проект Android и Gradle Wrapper
README.md
VERIFICATION.md
```

Игра не загружает ассеты или шрифты. Звуки синтезирует AudioContext после первого пользовательского жеста. Лабиринт — DOM/CSS Grid, радар — DOM. В фоне игра останавливает rAF, звук и печать терминала; при возврате сбрасывает временную отметку, свет остаётся выключенным. Native lifecycle дополнительно сообщает о сворачивании через события observerPause/observerResume.

## Решения по неоднозначностям ТЗ

- Применены финальные уточнения сессий 2–3: у зоны 3 обычная генерация без dualPath; у зоны 14 fastMonster с интервалом 1100 мс и lightDrainMul 1.3; у зоны 15 два монстра без allEvents; декор общий с акцентом на зону.
- В 5×5 невозможно разместить монстра в 6 шагах от (1,1): максимум 4. В зоне 4 используется расстояние 4. В остальных зонах — не менее 6. Монстр может стартовать на выходе, оставаясь отдельной сущностью. У старта монстра и у выхода открываются минимум две соседние клетки, чтобы свет мог оттеснить монстра из тупика.
- При высоте экрана до 820 CSS-пикселей свет расположен рядом с D-Pad: так сохраняются разделение 55/45 и размер кнопок 64×64 без обрезания. На более высоком экране свет находится над стрелками.
- Радар 64×64 закреплён в правом углу шапки высотой 32 и выступает вниз над краем области лабиринта.
- Телепорт проходит 2–3 соседние проходимые клетки по BFS-пути, не пересекает стены и не приземляется на игроке. Если игрок слишком близко, сдвиг сокращается или пропускается.

## Troubleshooting

**`gradlew: permission denied`**

```sh
chmod +x android/gradlew
```

**`SDK location not found` / `sdk not found`** — задайте `ANDROID_HOME` либо корректный `android/local.properties`; установите Platform 34 и Build Tools 34.0.0.

**Не приняты лицензии SDK** — выполните `sdkmanager --licenses` и подтвердите лицензии.

**Неподходящая Java / `Unsupported class file major version`** — проверьте `java -version` и `JAVA_HOME`. Используйте JDK 17 или 21 и включённый Gradle Wrapper 8.7.

**Не скачиваются Gradle/Maven-зависимости** — проверьте доступ к Google Maven, Maven Central и downloads.gradle.org. В корпоративной сети настройте прокси Gradle и доверие к корпоративному CA. Не отключайте проверку TLS.

**`INSTALL_FAILED_UPDATE_INCOMPATIBLE`** — установленная копия подписана другим ключом. Удалите старую копию перед установкой (это удалит её прогресс).

**Нет звука** — коснитесь кнопки управления, проверьте мультимедийную громкость и обновите Android System WebView.
