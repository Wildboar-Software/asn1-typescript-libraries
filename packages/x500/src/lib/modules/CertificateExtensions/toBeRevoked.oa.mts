/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_toBeRevoked } from "../CertificateExtensions/id-ce-toBeRevoked.va.mjs";
import {
    ToBeRevokedSyntax,
    _decode_ToBeRevokedSyntax,
    _encode_ToBeRevokedSyntax,
} from "../CertificateExtensions/ToBeRevokedSyntax.ta.mjs";
/**
 * @summary toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * toBeRevoked EXTENSION ::= {
 *   SYNTAX         ToBeRevokedSyntax
 *   IDENTIFIED BY  id-ce-toBeRevoked }
 * ```
 *
 * @constant
 * @type {EXTENSION<ToBeRevokedSyntax>}
 * @implements {EXTENSION<ToBeRevokedSyntax>}
 */
export const toBeRevoked: EXTENSION<ToBeRevokedSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ToBeRevokedSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_ToBeRevokedSyntax,
    },
    "&id": id_ce_toBeRevoked /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
