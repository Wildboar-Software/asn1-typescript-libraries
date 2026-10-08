/**
 * @module
 * @description
 *
 * Short Message Relay Service Element (SMRSE) types for relaying short
 * messages and alerts between a Short Message Service Centre (SC) and a
 * Gateway or Interworking MSC. GSM does not mandate a protocol below
 * the transfer layer; SMRSE is one example of the Short Message Relay
 * Layer (SM-RL). See
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * (GSM 03.47) clauses 1, 2, and 3. The SM-RL requirements themselves
 * are summarized in GSM 03.40 clause 9, which clause 1 cites.
 *
 * Clause 2 maps these services onto ACSE and ROSE. Clause 3 maps them
 * onto the OSI Network Service (N-CONNECT, N-DATA, N-DISCONNECT).
 * Clause 4 is a separate SMS-MAP stack; its error numbers are not the
 * integers in `Error-reason`.
 *
 * The assignments in this module follow the Nokia SMRP profile
 * (CAG63590 clause 7.2.1.2), which changes several PDUs relative to the
 * ASN.1 printed in clauses 2.2 and 3.2. Those differences are noted on
 * the types they affect. PDUs are BER-encoded.
 */
export * from "./Connect-fail.ta.mjs";
export * from "./Error-reason.ta.mjs";
export * from "./IMSI-Address.ta.mjs";
export * from "./Password.ta.mjs";
export * from "./RP-MR.ta.mjs";
export * from "./RP-UD.ta.mjs";
export * from "./RPAck.ta.mjs";
export * from "./RPAlertSC.ta.mjs";
export * from "./RPDataMO.ta.mjs";
export * from "./RPDataMT.ta.mjs";
export * from "./RPError.ta.mjs";
export * from "./SM-TC.ta.mjs";
export * from "./SMR-Bind-Confirm.ta.mjs";
export * from "./SMR-Bind-Failure.ta.mjs";
export * from "./SMR-Bind.ta.mjs";
export * from "./SMR-Unbind.ta.mjs";
export * from "./SMS-Address-address-type.ta.mjs";
export * from "./SMS-Address-address-value.ta.mjs";
export * from "./SMS-Address-numbering-plan.ta.mjs";
export * from "./SMS-Address.ta.mjs";
export * from "./SemiOctetString.ta.mjs";
export * from "./ub-password-length.va.mjs";
