/**
 * @module
 * @description
 *
 * Nokia SMRP profile of the Short Message Relay Service Element
 * (SMRSE) in
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * (GSM 03.47) clause 3. A service centre and a gateway MSC use one
 * association to relay short messages and alerts.
 *
 * The party designated to open the association sends `SMR-Bind`
 * first (clause 3.3). The peer accepts with `SMR-Bind-Confirm` or
 * rejects with `SMR-Bind-Failure`. `SMR-Unbind` releases it.
 * `RPDataMT` is the service-centre-to-GMSC relay of one SMS
 * transfer-layer PDU; `RPDataMO` is the GMSC-to-service-centre
 * relay. Either completes with `RPAck` or `RPError`. `RPAlertSC`
 * reports that a previously unattainable mobile station has
 * recovered (clause 3.1).
 *
 * Clause 3 maps bind and bind-confirm onto N-CONNECT user data,
 * bind-failure and unbind onto N-DISCONNECT user data, and the
 * relay, alert, ack, and error PDUs onto N-DATA. Clause 3.2 wraps
 * the N-DATA PDUs in `RELAYapdus` (context tags 1 to 5) and the
 * disconnect PDUs in `RELAYdiscs`. This module encodes each PDU on
 * its own and does not include those choices.
 *
 * Against clause 3.2, this profile also drops the application tags
 * on `SMS-Address`, `RP-MR`, and `RP-UD`, widens `RP-MR` from
 * 0..255 to 0..65535, and adds Nokia components (`mt-origVMSCAddr`,
 * `mt-tariffClass`, `origVMSCAddr`, `moimsi`, and an alert
 * `message-reference`). After an N-RESET, an unacknowledged
 * `RPDataMT` or `RPDataMO` is retransmitted (clause 3.3).
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
