/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activateDiversionQ } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ.oa.mjs";
import { deactivateDiversionQ } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ.oa.mjs";
import { interrogateDiversionQ } from "../Call-Diversion-Operations-asn1-97/interrogateDiversionQ.oa.mjs";
import { checkRestriction } from "../Call-Diversion-Operations-asn1-97/checkRestriction.oa.mjs";
import { callRerouteing } from "../Call-Diversion-Operations-asn1-97/callRerouteing.oa.mjs";
import { divertingLegInformation1 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation1.oa.mjs";
import { divertingLegInformation2 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation2.oa.mjs";
import { divertingLegInformation3 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation3.oa.mjs";
import { cfnrDivertedLegFailed } from "../Call-Diversion-Operations-asn1-97/cfnrDivertedLegFailed.oa.mjs";

/**
 * @summary Call_Diversion_Operations
 * @description
 *
 * SS-DIV operations (ECMA-174 §6.3.1): remote activation, deactivation, and
 * interrogation; `checkRestriction`; invocation by `callRerouteing`; and the
 * notifications `divertingLegInformation1`, `divertingLegInformation2`,
 * `divertingLegInformation3`, and `cfnrDivertedLegFailed`. Invoke APDUs are
 * addressed to `endPINX`. The notifications require an Interpretation APDU that
 * discards an unrecognised invoke. `callRerouteing` may omit that APDU or
 * reject an unrecognised invoke. Other operations may omit it, reject an
 * unrecognised PDU, or clear the call if an invoke is not recognised
 * (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Diversion-Operations OPERATION ::= {
 *     activateDiversionQ
 *     | deactivateDiversionQ
 *     | interrogateDiversionQ
 *     | checkRestriction
 *     | callRerouteing
 *     | divertingLegInformation1
 *     | divertingLegInformation2
 *     | divertingLegInformation3
 *     | cfnrDivertedLegFailed
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Call_Diversion_Operations: (OPERATION)[] = [ activateDiversionQ, deactivateDiversionQ, interrogateDiversionQ, checkRestriction, callRerouteing, divertingLegInformation1, divertingLegInformation2, divertingLegInformation3, cfnrDivertedLegFailed, ];

/* eslint-enable */
