function
(
  f,  // the formula generating the sound

      // placeholder arguments
  t,  // tick
  S   // header+body of our WAVE PCM
)
{
  for
  (
    t|=
    // start with a butchered but working WAVE PCM header
    S='RIFF_oO_WAVEfmt '+atob('EAAAAAEAAQBAHwAAQB8AAAEACAA')+'data'
    ;++t<3e5;
  )
  // eval and append the next 8bits value of the sound
  S+=String.fromCharCode( eval(f) );
  // and return the sound
  return S
}