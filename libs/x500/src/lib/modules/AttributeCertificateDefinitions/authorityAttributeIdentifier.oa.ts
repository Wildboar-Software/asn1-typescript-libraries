/* eslint-disable */
import {
    AuthorityAttributeIdentifierSyntax,
    _decode_AuthorityAttributeIdentifierSyntax,
    _encode_AuthorityAttributeIdentifierSyntax,
} from "../AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_authorityAttributeIdentifier } from "./id-ce-authorityAttributeIdentifier.va";

/* START_OF_SYMBOL_DEFINITION authorityAttributeIdentifier */
/**
 * @summary authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityAttributeIdentifier EXTENSION ::= {
 *   SYNTAX         AuthorityAttributeIdentifierSyntax
 *   IDENTIFIED BY  id-ce-authorityAttributeIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION<AuthorityAttributeIdentifierSyntax>}
 * @implements {EXTENSION<AuthorityAttributeIdentifierSyntax>}
 */
export const authorityAttributeIdentifier: EXTENSION<AuthorityAttributeIdentifierSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityAttributeIdentifierSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityAttributeIdentifierSyntax,
    },
    "&id": id_ce_authorityAttributeIdentifier,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authorityAttributeIdentifier */

/* eslint-enable */
