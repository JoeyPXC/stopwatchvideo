# Stopwatch Video

A camera app with a burned-in stopwatch overlay, meant for filming races when
you don't have FinishLynx running (away meets, filming from the stands, etc).

- **Start/Stop Clock** and **Record** are independent. Start the clock when
  the gun goes off; it keeps running the whole time regardless of what the
  recording is doing.
- **Pause** (the II button next to the record button) pauses the *recording*
  only — skip any down time when not recording someone running, resume when runners come back
  into view. The clock never stops or resets when you do this.
- The time is burned directly into the video frames, so anyone who gets the
  file later can pause playback and read the exact time, no separate app or
  sync step needed.
- Recordings save as `.webm`, which Google Drive plays natively — just upload
  and share, no conversion needed.

## Installing it as an app on your phone

1. Open the GitHub Pages URL above in **Chrome** on Android.
2. Chrome should show an **Install app** banner automatically, or tap the
   **⋮** menu → **Add to Home screen** / **Install app**.
3. It'll now sit on your home screen with its own icon and open full-screen
   like a normal app, no browser bar.

## Known limitations (first version)

- Frame rate/resolution depends on what the phone's camera + browser exposes
  — typically solid 1080p/30fps, but not guaranteed high-speed capture.
- Recordings are `.webm` (VP8), not `.mp4`. Plays fine in Drive, most phones,
  and most video players, but some older/pickier software may want `.mp4`.
- No flipping the camera mid-recording (stop first, then flip).

