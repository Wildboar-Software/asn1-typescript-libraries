/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    PosteRestanteAddress,
    _decode_PosteRestanteAddress,
    _encode_PosteRestanteAddress,
} from "../PkiPmiExternalDataTypes/PosteRestanteAddress.ta.mjs";
/**
 * @summary poste_restante_address
 * @description
 *
 * OR-address extension attribute for the Printable encoding of `poste-restante-address`
 * (ITU-T X.402 (1999), §18.3.20; X.411 (1999), Annex A). Printable, Teletex and
 * Universal encodings of the same value are equivalent for comparison (X.402 §18.4).
 * Universal language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * poste-restante-address EXTENSION-ATTRIBUTE ::= {
 *                  PosteRestanteAddress
 *   IDENTIFIED BY  19 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PosteRestanteAddress>}
 * @implements {EXTENSION_ATTRIBUTE<PosteRestanteAddress>}
 */
export const poste_restante_address: EXTENSION_ATTRIBUTE<PosteRestanteAddress> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PosteRestanteAddress,
    },
    encoderFor: {
        "&Type": _encode_PosteRestanteAddress,
    },
    "&id": 19 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
