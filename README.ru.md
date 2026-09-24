<p align="center">
  <a href="https://nexocode.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="NexoCode logo">
    </picture>
  </a>
</p>
<p align="center">Открытый AI-агент для программирования.</p>
<p align="center">
  <a href="https://nexocode.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/nexocode-ai"><img alt="npm" src="https://img.shields.io/npm/v/nexocode-ai?style=flat-square" /></a>
  <a href="https://github.com/ricodevvv/nexocode/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/ricodevvv/nexocode/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![NexoCode Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://nexocode.ai)

---

### Установка

```bash
# YOLO
curl -fsSL https://nexocode.ai/install | bash

# Менеджеры пакетов
npm i -g nexocode-ai@latest        # или bun/pnpm/yarn
scoop install nexocode             # Windows
choco install nexocode             # Windows
brew install ricodevvv/tap/nexocode # macOS и Linux (рекомендуем, всегда актуально)
brew install nexocode              # macOS и Linux (официальная формула brew, обновляется реже)
sudo pacman -S nexocode            # Arch Linux (Stable)
paru -S nexocode-bin               # Arch Linux (Latest from AUR)
mise use -g nexocode               # любая ОС
nix run nixpkgs#nexocode           # или github:ricodevvv/nexocode для самой свежей ветки dev
```

> [!TIP]
> Перед установкой удалите версии старше 0.1.x.

### Десктопное приложение (BETA)

NexoCode также доступен как десктопное приложение. Скачайте его со [страницы релизов](https://github.com/ricodevvv/nexocode/releases) или с [nexocode.ai/download](https://nexocode.ai/download).

| Платформа             | Загрузка                           |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `nexocode-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `nexocode-desktop-mac-x64.dmg`     |
| Windows               | `nexocode-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` или AppImage        |

```bash
# macOS (Homebrew)
brew install --cask nexocode-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/nexocode-desktop
```

#### Каталог установки

Скрипт установки выбирает путь установки в следующем порядке приоритета:

1. `$NEXOCODE_INSTALL_DIR` - Пользовательский каталог установки
2. `$XDG_BIN_DIR` - Путь, совместимый со спецификацией XDG Base Directory
3. `$HOME/bin` - Стандартный каталог пользовательских бинарников (если существует или можно создать)
4. `$HOME/.nexocode/bin` - Fallback по умолчанию

```bash
# Примеры
NEXOCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://nexocode.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://nexocode.ai/install | bash
```

### Agents

В NexoCode есть два встроенных агента, между которыми можно переключаться клавишей `Tab`.

- **build** - По умолчанию, агент с полным доступом для разработки
- **plan** - Агент только для чтения для анализа и изучения кода
  - По умолчанию запрещает редактирование файлов
  - Запрашивает разрешение перед выполнением bash-команд
  - Идеален для изучения незнакомых кодовых баз или планирования изменений

Также включен сабагент **general** для сложных поисков и многошаговых задач.
Он используется внутренне и может быть вызван в сообщениях через `@general`.

Подробнее об [agents](https://nexocode.ai/docs/agents).

### Документация

Больше информации о том, как настроить NexoCode: [**наши docs**](https://nexocode.ai/docs).

### Вклад

Если вы хотите внести вклад в NexoCode, прочитайте [contributing docs](./CONTRIBUTING.md) перед тем, как отправлять pull request.

### Разработка на базе NexoCode

Если вы делаете проект, связанный с NexoCode, и используете "nexocode" как часть имени (например, "nexocode-dashboard" или "nexocode-mobile"), добавьте примечание в README, чтобы уточнить, что проект не создан командой NexoCode и не аффилирован с нами.

---

**Присоединяйтесь к нашему сообществу** [Discord](https://discord.gg/nexocode) | [X.com](https://x.com/nexocode)
