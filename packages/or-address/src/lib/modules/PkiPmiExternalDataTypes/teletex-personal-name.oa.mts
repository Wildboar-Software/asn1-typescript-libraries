/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    TeletexPersonalName,
    _decode_TeletexPersonalName,
    _encode_TeletexPersonalName,
} from "../PkiPmiExternalDataTypes/TeletexPersonalName.ta.mjs";
/**
 * @summary teletex_personal_name
 * @description
 *
 * OR-address extension attribute for the Teletex encoding of `personal-name` (ITU-T
 * X.402 (1999), §18.3.12; X.411 (1999), Annex A). Printable, Teletex and Universal
 * encodings of the same value are equivalent for comparison (X.402 §18.4). Universal
 * language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  TeletexPersonalName
 *   IDENTIFIED BY  4 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TeletexPersonalName>}
 * @implements {EXTENSION_ATTRIBUTE<TeletexPersonalName>}
 */
export const teletex_personal_name: EXTENSION_ATTRIBUTE<TeletexPersonalName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexPersonalName,
    },
    encoderFor: {
        "&Type": _encode_TeletexPersonalName,
    },
    "&id": 4 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
