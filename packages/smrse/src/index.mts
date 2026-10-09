/**
 * @module
 * @description
 *
 * Nokia SMRP profile of the Short Message Relay Service Element
 * (SMRSE) from
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * (GSM 03.47) clause 3. Import from `@wildboar/smrse` or
 * `@wildboar/smrse/SMRS`.
 *
 * Bind, unbind, mobile-terminated and mobile-originated relay,
 * acknowledgement, error, and alert PDUs are BER-encoded. See the
 * `SMRS` module for how this profile differs from clause 3.2.
 */
export * from "./lib/modules/SMRS/index.mjs";
