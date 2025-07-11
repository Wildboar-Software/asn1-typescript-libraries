/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalUniquePostalName,
    _decode_UniversalUniquePostalName,
    _encode_UniversalUniquePostalName,
} from "../MTSAbstractService/UniversalUniquePostalName.ta.mjs";
/**
 * @summary universal_unique_postal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unique-postal-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalUniquePostalName
 *   IDENTIFIED BY  39
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalUniquePostalName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalUniquePostalName>}
 */
export const universal_unique_postal_name: EXTENSION_ATTRIBUTE<UniversalUniquePostalName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalUniquePostalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalUniquePostalName,
    },
    "&id": 39 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
