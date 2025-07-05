/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniquePostalName,
    _decode_UniquePostalName,
    _encode_UniquePostalName,
} from "../MTSAbstractService/UniquePostalName.ta.mjs";
/**
 * @summary unique_postal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unique-postal-name EXTENSION-ATTRIBUTE ::= {UniquePostalName
 *                                             IDENTIFIED BY  20
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniquePostalName>}
 * @implements {EXTENSION_ATTRIBUTE<UniquePostalName>}
 */
export const unique_postal_name: EXTENSION_ATTRIBUTE<UniquePostalName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniquePostalName,
    },
    encoderFor: {
        "&Type": _encode_UniquePostalName,
    },
    "&id": 20 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
