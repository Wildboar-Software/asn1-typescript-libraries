/* eslint-disable */
import {
    AuthorityAttributeIdentifierSyntax,
    _decode_AuthorityAttributeIdentifierSyntax,
    _encode_AuthorityAttributeIdentifierSyntax,
} from "../AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta.js";
import { id_mr_authAttIdMatch } from "../AttributeCertificateDefinitions/id-mr-authAttIdMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export {
    AuthorityAttributeIdentifierSyntax,
    _decode_AuthorityAttributeIdentifierSyntax,
    _encode_AuthorityAttributeIdentifierSyntax,
} from "../AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta.js";
export { id_mr_authAttIdMatch } from "../AttributeCertificateDefinitions/id-mr-authAttIdMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION authAttIdMatch */
/**
 * @summary authAttIdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authAttIdMatch MATCHING-RULE ::= {
 *   SYNTAX  AuthorityAttributeIdentifierSyntax
 *   ID      id-mr-authAttIdMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<AuthorityAttributeIdentifierSyntax>}
 * @implements {MATCHING_RULE<AuthorityAttributeIdentifierSyntax>}
 */
export const authAttIdMatch: MATCHING_RULE<AuthorityAttributeIdentifierSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AuthorityAttributeIdentifierSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_AuthorityAttributeIdentifierSyntax,
    },
    "&id": id_mr_authAttIdMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authAttIdMatch */

/* eslint-enable */
