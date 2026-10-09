/**
 * @description
 *
 * ASN.1 module `LNPDQP-Protocol` from the GR-533 i2 (2001) extract shipped
 * with this package. It defines the `ProvideInstructionArg` and
 * `ConnectionControlArg` sets for the local number portability database
 * query protocol. The module header declares `IMPLICIT TAGS`.
 *
 * `ServiceKey` is a `CHOICE`, so the context tag on
 * `ProvideInstructionArg.calledPartyNumber` is encoded explicitly.
 */
export * from "./BillingIndicators.ta.mjs";
export * from "./ConnectionControlArg.ta.mjs";
export * from "./Digits.ta.mjs";
export * from "./OriginatingStationType.ta.mjs";
export * from "./ProvideInstructionArg.ta.mjs";
export * from "./ServiceKey.ta.mjs";
