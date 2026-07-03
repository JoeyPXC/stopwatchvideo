# Stopwatch Video

A camera PWA with a burned-in stopwatch overlay for filming races at meets. Record with the clock burned into every frame, review footage with sync tools, mark finishers, and export results — all from your phone.

**[▶ Open the app](https://joeypxc.github.io/stopwatchvideo/)**

---

## Features

### Recording
- **Independent clock and recording** — start the clock when the gun goes off; it keeps running regardless of what the recording is doing
- **Pause recording** (❚❚ button) to skip the far side of the track and resume when runners come back into view — the clock never stops
- **Stopwatch burned into every frame** — anyone who gets the file can pause playback and read the exact time, no separate app or sync needed
- **Lap button** — marks a split reference point on the clock
- **Pinch to zoom** the camera while recording
- **Flip camera** between front and rear
- **Wake lock** keeps the screen on during recording
- **Haptic feedback** on key actions
- **Clock persists** across sessions — if you close the app mid-race it remembers where the clock was

### Review & Results
- **Upload an external video** for post-race review — load any video file and sync the clock to it
- **Gun flash sync** — tap "Set Gun Flash (0.00)" on the exact frame the gun fires to auto-sync the clock to that video
- **Manual sync** — set the clock offset manually if the gun flash isn't visible
- **Mark finishers** while scrubbing through the video — tap to log each finish time with the calculated race time
- **Editable results table** — add notes to each finisher, delete entries, reorder as needed
- **Export to CSV** — download your finisher list with times and notes

### Sharing
- **Share Video** — burns the clock back onto an uploaded video at native frame rate and shares via the Android share sheet or downloads as `.webm`
- Recordings save as `.webm` which Google Drive plays natively — upload and share with no conversion needed

---

## Installing on your phone

1. Open **[the app](https://joeypxc.github.io/stopwatchvideo/)** in **Chrome on Android**
2. Tap **⋮ → Add to Home Screen / Install app** (or accept the install banner)
3. Grant camera and microphone permissions when prompted

It'll open full-screen from your home screen like a native app.

---

## Deploying your own copy (optional)

1. Fork this repo or create a new public GitHub repository and upload all files (`index.html`, `manifest.json`, `sw.js`, and the `icons/` folder)
2. Go to **Settings → Pages**, set Source to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
3. GitHub will give you a live HTTPS URL within a minute or two — HTTPS is required for camera access to work

---

## Known limitations

- Frame rate and resolution depend on your phone's camera and browser — typically solid 1080p/30fps
- Recordings are `.webm` (VP8), not `.mp4`. Plays fine in Google Drive, most phones, and most modern video players. Some older software may need conversion to `.mp4`
- No switching cameras mid-recording — stop first, then flip
