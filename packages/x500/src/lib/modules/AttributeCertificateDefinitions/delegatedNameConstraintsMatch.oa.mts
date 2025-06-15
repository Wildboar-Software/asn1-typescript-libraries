/* eslint-disable */
import { id_mr_delegatedNameConstraintsMatch } from "../AttributeCertificateDefinitions/id-mr-delegatedNameConstraintsMatch.va.mjs";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary delegatedNameConstraintsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegatedNameConstraintsMatch MATCHING-RULE ::= {
 *   SYNTAX  NameConstraintsSyntax
 *   ID      id-mr-delegatedNameConstraintsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<NameConstraintsSyntax>}
 * @implements {MATCHING_RULE<NameConstraintsSyntax>}
 */
export const delegatedNameConstraintsMatch: MATCHING_RULE<NameConstraintsSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_NameConstraintsSyntax,
    },
    "&id": id_mr_delegatedNameConstraintsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
