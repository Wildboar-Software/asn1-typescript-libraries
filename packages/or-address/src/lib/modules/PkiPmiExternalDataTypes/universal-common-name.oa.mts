/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalCommonName,
    _decode_UniversalCommonName,
    _encode_UniversalCommonName,
} from "../PkiPmiExternalDataTypes/UniversalCommonName.ta.mjs";
/**
 * @summary universal_common_name
 * @description
 *
 * OR-address extension attribute for the Universal encoding of `common-name` (ITU-T
 * X.402 (1999), §18.3.2; X.411 (1999), Annex A). Printable, Teletex and Universal
 * encodings of the same value are equivalent for comparison (X.402 §18.4). Universal
 * language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-common-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalCommonName
 *   IDENTIFIED BY  24 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalCommonName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalCommonName>}
 */
export const universal_common_name: EXTENSION_ATTRIBUTE<UniversalCommonName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalCommonName,
    },
    encoderFor: {
        "&Type": _encode_UniversalCommonName,
    },
    "&id": 24 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
