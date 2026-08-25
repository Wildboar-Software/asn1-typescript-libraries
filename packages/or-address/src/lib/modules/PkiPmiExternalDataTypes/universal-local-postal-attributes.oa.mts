/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalLocalPostalAttributes,
    _decode_UniversalLocalPostalAttributes,
    _encode_UniversalLocalPostalAttributes,
} from "../PkiPmiExternalDataTypes/UniversalLocalPostalAttributes.ta.mjs";
/**
 * @summary universal_local_postal_attributes
 * @description
 *
 * OR-address extension attribute for the Universal encoding of `local-postal-attributes`
 * (ITU-T X.402 (1999), §18.3.6; X.411 (1999), Annex A). Printable, Teletex and Universal
 * encodings of the same value are equivalent for comparison (X.402 §18.4). Universal
 * language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-local-postal-attributes EXTENSION-ATTRIBUTE ::= {
 *                  UniversalLocalPostalAttributes
 *   IDENTIFIED BY  40 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalLocalPostalAttributes>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalLocalPostalAttributes>}
 */
export const universal_local_postal_attributes: EXTENSION_ATTRIBUTE<UniversalLocalPostalAttributes> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalLocalPostalAttributes,
    },
    encoderFor: {
        "&Type": _encode_UniversalLocalPostalAttributes,
    },
    "&id": 40 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
