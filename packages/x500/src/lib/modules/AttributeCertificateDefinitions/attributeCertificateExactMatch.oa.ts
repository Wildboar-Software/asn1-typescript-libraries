/* eslint-disable */
import {
    AttributeCertificateExactAssertion,
    _decode_AttributeCertificateExactAssertion,
    _encode_AttributeCertificateExactAssertion,
} from "../AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta.js";
import { id_mr_attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/id-mr-attributeCertificateExactMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export {
    AttributeCertificateExactAssertion,
    _decode_AttributeCertificateExactAssertion,
    _encode_AttributeCertificateExactAssertion,
} from "../AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta.js";
export { id_mr_attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/id-mr-attributeCertificateExactMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION attributeCertificateExactMatch */
/**
 * @summary attributeCertificateExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateExactMatch MATCHING-RULE ::= {
 *   SYNTAX  AttributeCertificateExactAssertion
 *   ID      id-mr-attributeCertificateExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<AttributeCertificateExactAssertion>}
 * @implements {MATCHING_RULE<AttributeCertificateExactAssertion>}
 */
export const attributeCertificateExactMatch: MATCHING_RULE<AttributeCertificateExactAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeCertificateExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeCertificateExactAssertion,
    },
    "&id": id_mr_attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeCertificateExactMatch */

/* eslint-enable */
