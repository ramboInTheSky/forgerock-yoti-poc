declare enum WebAuthnOutcome {
  Error = 'ERROR',
  Unsupported = 'unsupported',
}
declare enum WebAuthnStepType {
  None = 0,
  Authentication = 1,
  Registration = 2,
}
export { WebAuthnOutcome, WebAuthnStepType };
