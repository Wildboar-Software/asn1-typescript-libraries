/* eslint-disable */
import {
    AuthorityAttributeIdentifierSyntax,
    _decode_AuthorityAttributeIdentifierSyntax,
    _encode_AuthorityAttributeIdentifierSyntax,
} from "../AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_authorityAttributeIdentifier } from "./id-ce-authorityAttributeIdentifier.va.mjs";

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

/* eslint-enable */
