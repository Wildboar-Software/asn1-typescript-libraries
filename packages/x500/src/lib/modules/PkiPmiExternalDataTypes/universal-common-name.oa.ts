/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.js";
import {
    UniversalCommonName,
    _decode_UniversalCommonName,
    _encode_UniversalCommonName,
} from "../PkiPmiExternalDataTypes/UniversalCommonName.ta.js";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.js";
export {
    UniversalCommonName,
    _decode_UniversalCommonName,
    _encode_UniversalCommonName,
} from "../PkiPmiExternalDataTypes/UniversalCommonName.ta.js";

/* START_OF_SYMBOL_DEFINITION universal_common_name */
/**
 * @summary universal_common_name
 * @description
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
/* END_OF_SYMBOL_DEFINITION universal_common_name */

/* eslint-enable */
