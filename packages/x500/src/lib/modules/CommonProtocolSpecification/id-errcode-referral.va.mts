/* eslint-disable */
import { Code } from "../CommonProtocolSpecification/Code.ta.mjs";
/**
 * @summary id_errcode_referral
 * @description
 *
 * DAP local:4 (`referral`). DAP only — DSP uses `dsaReferral` (9)
 * instead. Do not send this on DSP.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-referral               Code ::= local:4
 * ```
 *
 * @constant
 */
export const id_errcode_referral: Code = { local: 4 };

/* eslint-enable */
