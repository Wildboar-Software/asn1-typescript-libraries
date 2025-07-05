/* eslint-disable */
import {
    AttributeCertificateExactAssertion,
    _decode_AttributeCertificateExactAssertion,
    _encode_AttributeCertificateExactAssertion,
} from "../AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta.mjs";
import { id_mr_attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/id-mr-attributeCertificateExactMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
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

/* eslint-enable */
