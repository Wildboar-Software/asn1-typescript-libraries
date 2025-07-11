/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    PostalCode,
    _decode_PostalCode,
    _encode_PostalCode,
} from "../MTSAbstractService/PostalCode.ta.mjs";
/**
 * @summary postal_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postal-code EXTENSION-ATTRIBUTE ::= {PostalCode
 *                                      IDENTIFIED BY  9
 * }
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
