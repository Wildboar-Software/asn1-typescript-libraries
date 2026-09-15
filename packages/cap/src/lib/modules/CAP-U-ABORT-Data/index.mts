/**
 * @description
 *
 * ASN.1 module `CAP-U-ABORT-Data` (3GPP TS 29.078 V19.0.0 clause 5.7).
 *
 * CAP-defined TC-U-ABORT user reason (`CAP-U-ABORT-REASON`) and its
 * abstract syntax, carried in TC User Information. Reasons include
 * application-timer expiry, illegal CAP procedures, congestion, GPRS
 * reference mismatch/absence, and overlapping GPRS dialogues
 * (clauses 10.2.1, 14.1.1.3.7 and 14.1.4).
 */
export * from "./cAP-U-ABORT-Reason-Abstract-Syntax.oa.mjs";
export * from "./CAP-U-ABORT-REASON.ta.mjs";
export * from "./id-CAP-U-ABORT-Reason.va.mjs";
