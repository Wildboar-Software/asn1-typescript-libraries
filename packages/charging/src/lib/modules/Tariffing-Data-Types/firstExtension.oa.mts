/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../Tariffing-Data-Types/CriticalityType.ta.mjs";
// export { CriticalityType, _enum_for_CriticalityType, CriticalityType_ignore /* IMPORTED_LONG_ENUMERATION_ITEM */, ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */, CriticalityType_abort /* IMPORTED_LONG_ENUMERATION_ITEM */, abort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CriticalityType, _encode_CriticalityType } from "../Tariffing-Data-Types/CriticalityType.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Tariffing-Data-Types/Code.ta.mjs";
import { type EXTENSION } from "../Tariffing-Data-Types/EXTENSION.oca.mjs";


/**
 * @summary firstExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * firstExtension EXTENSION ::= {
 *     EXTENSION-SYNTAX NULL
 *     CRITICALITY ignore
 *     IDENTIFIED BY local:1
 *     }
 * ```
 * 
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export
const firstExtension: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtensionType": $._decodeNull,
    },
    encoderFor: {
        "&ExtensionType": $._encodeNull,
    },
    "&criticality": ignore /* OBJECT_FIELD_SETTING */,
    "&id": { local: 1 } /* OBJECT_FIELD_SETTING */,
    "&ExtensionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
