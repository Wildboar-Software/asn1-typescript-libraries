/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    TeletexCommonName,
    _decode_TeletexCommonName,
    _encode_TeletexCommonName,
} from "../PkiPmiExternalDataTypes/TeletexCommonName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    TeletexCommonName,
    _decode_TeletexCommonName,
    _encode_TeletexCommonName,
} from "../PkiPmiExternalDataTypes/TeletexCommonName.ta";

/* START_OF_SYMBOL_DEFINITION teletex_common_name */
/**
 * @summary teletex_common_name
 * @description
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
/* END_OF_SYMBOL_DEFINITION teletex_common_name */

/* eslint-enable */
