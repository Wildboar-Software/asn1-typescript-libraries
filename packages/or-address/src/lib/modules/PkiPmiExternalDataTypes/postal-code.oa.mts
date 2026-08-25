/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    PostalCode,
    _decode_PostalCode,
    _encode_PostalCode,
} from "../PkiPmiExternalDataTypes/PostalCode.ta.mjs";
/**
 * @summary postal_code
 * @description
 *
 * OR-address extension attribute for the Printable/Numeric encoding of `postal-code`
 * (ITU-T X.402 (1999), §18.3.19; X.411 (1999), Annex A). Printable, Teletex and Universal
 * encodings of the same value are equivalent for comparison (X.402 §18.4). Universal
 * language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postal-code EXTENSION-ATTRIBUTE ::= {
 *                  PostalCode
 *   IDENTIFIED BY  9 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PostalCode>}
 * @implements {EXTENSION_ATTRIBUTE<PostalCode>}
 */
export const postal_code: EXTENSION_ATTRIBUTE<PostalCode> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalCode,
    },
    encoderFor: {
        "&Type": _encode_PostalCode,
    },
    "&id": 9 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
