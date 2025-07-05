/* eslint-disable */
import { id_mr_pkiPathMatch } from "../CertificateExtensions/id-mr-pkiPathMatch.va.mjs";
import {
    PkiPathMatchSyntax,
    _decode_PkiPathMatchSyntax,
    _encode_PkiPathMatchSyntax,
} from "../CertificateExtensions/PkiPathMatchSyntax.ta.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary pkiPathMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPathMatch MATCHING-RULE ::= {
 *   SYNTAX  PkiPathMatchSyntax
 *   ID      id-mr-pkiPathMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<PkiPathMatchSyntax>}
 * @implements {MATCHING_RULE<PkiPathMatchSyntax>}
 */
export const pkiPathMatch: MATCHING_RULE<PkiPathMatchSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PkiPathMatchSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_PkiPathMatchSyntax,
    },
    "&id": id_mr_pkiPathMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
