export default {
  preparing: "Preparing...",
  startingInstall: "Starting installation",
  installationComplete: "Installation Complete",
  installationFailed: "Installation Failed",
  installingHermes: "Connecting to GetRida",
  installationFailedHint:
    "Installation failed. Please try again or install via terminal.",
  retryInstallation: "Retry Installation",
  copied: "Copied!",
  copyLogs: "Copy Logs",
  stepLabel: "Step {{step}}/{{total}}: {{title}}",
  waitingToStart: "Waiting to start...",
  continueToSetup: "Continue to Setup",
  confirmTitle: "Before installing",
  confirmLocationLabel: "GetRida will be installed at:",
  confirmFresh:
    "No existing installation was found here — a fresh copy will be set up.",
  confirmUpdate:
    "An existing GetRida installation is here — it will be updated to the latest version.",
  confirmReplace:
    "A folder exists here but isn't a valid GetRida installation — installing will delete and replace it.",
  confirmNotInherited:
    "If you installed GetRida somewhere else, or via the command line, it won't be carried over.",
  confirmInstallBtn: "Connect GetRida",
  useExistingBtn: "Use an existing installation",
  useExistingHint:
    "Select the folder that holds your existing GetRida installation (the one containing the getrida-agent folder).",
  useExistingInvalid: "No usable GetRida installation was found in that folder.",
  useExistingDone:
    "Existing installation set — quit and reopen GetRida Work to apply it.",
  useExistingQuitBtn: "Quit GetRida",
} as const;
