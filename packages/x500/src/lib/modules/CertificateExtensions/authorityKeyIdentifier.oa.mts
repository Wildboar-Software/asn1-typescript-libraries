/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
    _encode_AuthorityKeyIdentifier,
} from "../CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import { id_ce_authorityKeyIdentifier } from "../CertificateExtensions/id-ce-authorityKeyIdentifier.va.mjs";
/**
 * @summary authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityKeyIdentifier EXTENSION ::= {
 *   SYNTAX         AuthorityKeyIdentifier
 *   IDENTIFIED BY  id-ce-authorityKeyIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION<AuthorityKeyIdentifier>}
 * @implements {EXTENSION<AuthorityKeyIdentifier>}
 */
export const authorityKeyIdentifier: EXTENSION<AuthorityKeyIdentifier> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityKeyIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityKeyIdentifier,
    },
    "&id": id_ce_authorityKeyIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
