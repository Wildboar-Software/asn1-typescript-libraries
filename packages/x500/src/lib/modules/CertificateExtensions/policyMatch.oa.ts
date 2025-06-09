/* eslint-disable */
import {
    PolicyID,
    _decode_PolicyID,
    _encode_PolicyID,
} from "../AuthenticationFramework/PolicyID.ta.js";
import { id_mr_policyMatch } from "../CertificateExtensions/id-mr-policyMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export {
    PolicyID,
    _decode_PolicyID,
    _encode_PolicyID,
} from "../AuthenticationFramework/PolicyID.ta.js";
export { id_mr_policyMatch } from "../CertificateExtensions/id-mr-policyMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION policyMatch */
/**
 * @summary policyMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyMatch MATCHING-RULE ::= {
 *   SYNTAX  PolicyID
 *   ID      id-mr-policyMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<PolicyID>}
 * @implements {MATCHING_RULE<PolicyID>}
 */
export const policyMatch: MATCHING_RULE<PolicyID> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PolicyID,
    },
    encoderFor: {
        "&AssertionType": _encode_PolicyID,
    },
    "&id": id_mr_policyMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION policyMatch */

/* eslint-enable */
