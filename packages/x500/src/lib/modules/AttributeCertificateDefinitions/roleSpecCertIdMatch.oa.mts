/* eslint-disable */
import { id_mr_roleSpecCertIdMatch } from "../AttributeCertificateDefinitions/id-mr-roleSpecCertIdMatch.va.mjs";
import {
    RoleSpecCertIdentifierSyntax,
    _decode_RoleSpecCertIdentifierSyntax,
    _encode_RoleSpecCertIdentifierSyntax,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary roleSpecCertIdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleSpecCertIdMatch MATCHING-RULE ::= {
 *   SYNTAX  RoleSpecCertIdentifierSyntax
 *   ID      id-mr-roleSpecCertIdMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<RoleSpecCertIdentifierSyntax>}
 * @implements {MATCHING_RULE<RoleSpecCertIdentifierSyntax>}
 */
export const roleSpecCertIdMatch: MATCHING_RULE<RoleSpecCertIdentifierSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_RoleSpecCertIdentifierSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_RoleSpecCertIdentifierSyntax,
    },
    "&id": id_mr_roleSpecCertIdMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
