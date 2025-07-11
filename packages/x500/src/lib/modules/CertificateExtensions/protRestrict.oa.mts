/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_protRestrict } from "../CertificateExtensions/id-ce-protRestrict.va.mjs";
import {
    ProtRestriction,
    _decode_ProtRestriction,
    _encode_ProtRestriction,
} from "../CertificateExtensions/ProtRestriction.ta.mjs";
/**
 * @summary protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protRestrict EXTENSION ::= {
 *   SYNTAX        ProtRestriction
 *   IDENTIFIED BY id-ce-protRestrict }
 * ```
 *
 * @constant
 * @type {EXTENSION<ProtRestriction>}
 * @implements {EXTENSION<ProtRestriction>}
 */
export const protRestrict: EXTENSION<ProtRestriction> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ProtRestriction,
    },
    encoderFor: {
        "&ExtnType": _encode_ProtRestriction,
    },
    "&id": id_ce_protRestrict /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
