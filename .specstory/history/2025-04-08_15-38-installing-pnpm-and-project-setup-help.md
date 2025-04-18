<!-- Generated by SpecStory -->

# Installing pnpm and Project Setup Help (2025-04-08 11:38:33)

_**User**_

help 

---

_**Assistant**_

I notice you're getting a "command not found: pnpm" error. This means pnpm (a package manager) isn't installed on your system. Let me help you fix this.

First, you'll need to install pnpm. Here are the installation instructions for different operating systems:

### For macOS (using Homebrew):
```bash
brew install pnpm
```

### For Windows (using PowerShell):
```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

### For Linux:
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

After installing pnpm, you can proceed with the project setup:

```bash
cd quiltt-nextjs-template
pnpm install
```

If you prefer to use npm or yarn instead of pnpm, you can modify the commands in the README to use your preferred package manager. For example, with npm:

```bash
npm install
npm run graphql:generate
npm run dev
```

Would you like me to help you with anything else?

---



---

