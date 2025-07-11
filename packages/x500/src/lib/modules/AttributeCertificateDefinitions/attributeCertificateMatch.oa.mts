/* eslint-disable */
import {
    AttributeCertificateAssertion,
    _decode_AttributeCertificateAssertion,
    _encode_AttributeCertificateAssertion,
} from "../AttributeCertificateDefinitions/AttributeCertificateAssertion.ta.mjs";
import { id_mr_attributeCertificateMatch } from "../AttributeCertificateDefinitions/id-mr-attributeCertificateMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary attributeCertificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateMatch MATCHING-RULE ::= {
 *   SYNTAX  AttributeCertificateAssertion
 *   ID      id-mr-attributeCertificateMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<AttributeCertificateAssertion>}
 * @implements {MATCHING_RULE<AttributeCertificateAssertion>}
 */
export const attributeCertificateMatch: MATCHING_RULE<AttributeCertificateAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeCertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeCertificateAssertion,
    },
    "&id": id_mr_attributeCertificateMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
