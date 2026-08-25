/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalUniquePostalName,
    _decode_UniversalUniquePostalName,
    _encode_UniversalUniquePostalName,
} from "../PkiPmiExternalDataTypes/UniversalUniquePostalName.ta.mjs";
/**
 * @summary universal_unique_postal_name
 * @description
 *
 * OR-address extension attribute for the Universal encoding of `unique-postal-name` (ITU-T
 * X.402 (1999), §18.3.26; X.411 (1999), Annex A). Printable, Teletex and Universal
 * encodings of the same value are equivalent for comparison (X.402 §18.4). Universal
 * language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unique-postal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalUniquePostalName
 *   IDENTIFIED BY  39 }
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
