/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    TeletexCommonName,
    _decode_TeletexCommonName,
    _encode_TeletexCommonName,
} from "../PkiPmiExternalDataTypes/TeletexCommonName.ta.mjs";
/**
 * @summary teletex_common_name
 * @description
 *
 * OR-address extension attribute for the Teletex encoding of `common-name` (ITU-T X.402
 * (1999), §18.3.2; X.411 (1999), Annex A). Printable, Teletex and Universal encodings of
 * the same value are equivalent for comparison (X.402 §18.4). Universal language codes
 * are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-common-name EXTENSION-ATTRIBUTE ::= {
 *                  TeletexCommonName
 *   IDENTIFIED BY  2 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TeletexCommonName>}
 * @implements {EXTENSION_ATTRIBUTE<TeletexCommonName>}
 */
export const teletex_common_name: EXTENSION_ATTRIBUTE<TeletexCommonName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexCommonName,
    },
    encoderFor: {
        "&Type": _encode_TeletexCommonName,
    },
    "&id": 2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
