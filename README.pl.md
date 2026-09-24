<p align="center">
  <a href="https://nexocode.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="NexoCode logo">
    </picture>
  </a>
</p>
<p align="center">Otwartoźródłowy agent kodujący AI.</p>
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

### Instalacja

```bash
# YOLO
curl -fsSL https://nexocode.ai/install | bash

# Menedżery pakietów
npm i -g nexocode-ai@latest        # albo bun/pnpm/yarn
scoop install nexocode             # Windows
choco install nexocode             # Windows
brew install ricodevvv/tap/nexocode # macOS i Linux (polecane, zawsze aktualne)
brew install nexocode              # macOS i Linux (oficjalna formuła brew, rzadziej aktualizowana)
sudo pacman -S nexocode            # Arch Linux (Stable)
paru -S nexocode-bin               # Arch Linux (Latest from AUR)
mise use -g nexocode               # dowolny system
nix run nixpkgs#nexocode           # lub github:ricodevvv/nexocode dla najnowszej gałęzi dev
```

> [!TIP]
> Przed instalacją usuń wersje starsze niż 0.1.x.

### Aplikacja desktopowa (BETA)

NexoCode jest także dostępny jako aplikacja desktopowa. Pobierz ją bezpośrednio ze strony [releases](https://github.com/ricodevvv/nexocode/releases) lub z [nexocode.ai/download](https://nexocode.ai/download).

| Platforma             | Pobieranie                         |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `nexocode-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `nexocode-desktop-mac-x64.dmg`     |
| Windows               | `nexocode-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` lub AppImage        |

```bash
# macOS (Homebrew)
brew install --cask nexocode-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/nexocode-desktop
```

#### Katalog instalacji

Skrypt instalacyjny stosuje następujący priorytet wyboru ścieżki instalacji:

1. `$NEXOCODE_INSTALL_DIR` - Własny katalog instalacji
2. `$XDG_BIN_DIR` - Ścieżka zgodna ze specyfikacją XDG Base Directory
3. `$HOME/bin` - Standardowy katalog binarny użytkownika (jeśli istnieje lub można go utworzyć)
4. `$HOME/.nexocode/bin` - Domyślny fallback

```bash
# Przykłady
NEXOCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://nexocode.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://nexocode.ai/install | bash
```

### Agents

NexoCode zawiera dwóch wbudowanych agentów, między którymi możesz przełączać się klawiszem `Tab`.

- **build** - Domyślny agent z pełnym dostępem do pracy developerskiej
- **plan** - Agent tylko do odczytu do analizy i eksploracji kodu
  - Domyślnie odmawia edycji plików
  - Pyta o zgodę przed uruchomieniem komend bash
  - Idealny do poznawania nieznanych baz kodu lub planowania zmian

Dodatkowo jest subagent **general** do złożonych wyszukiwań i wieloetapowych zadań.
Jest używany wewnętrznie i można go wywołać w wiadomościach przez `@general`.

Dowiedz się więcej o [agents](https://nexocode.ai/docs/agents).

### Dokumentacja

Więcej informacji o konfiguracji NexoCode znajdziesz w [**dokumentacji**](https://nexocode.ai/docs).

### Współtworzenie

Jeśli chcesz współtworzyć NexoCode, przeczytaj [contributing docs](./CONTRIBUTING.md) przed wysłaniem pull requesta.

### Budowanie na NexoCode

Jeśli pracujesz nad projektem związanym z NexoCode i używasz "nexocode" jako części nazwy (na przykład "nexocode-dashboard" lub "nexocode-mobile"), dodaj proszę notatkę do swojego README, aby wyjaśnić, że projekt nie jest tworzony przez zespół NexoCode i nie jest z nami w żaden sposób powiązany.

---

**Dołącz do naszej społeczności** [Discord](https://discord.gg/nexocode) | [X.com](https://x.com/nexocode)
