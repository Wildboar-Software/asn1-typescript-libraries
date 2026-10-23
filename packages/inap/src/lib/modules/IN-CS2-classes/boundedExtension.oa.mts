/* eslint-disable */
import { ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";
// export { CriticalityType, _enum_for_CriticalityType, CriticalityType_ignore /* IMPORTED_LONG_ENUMERATION_ITEM */, ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */, CriticalityType_abort /* IMPORTED_LONG_ENUMERATION_ITEM */, abort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CriticalityType, _encode_CriticalityType } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { BoundedExtensionSyntax, _decode_BoundedExtensionSyntax, _encode_BoundedExtensionSyntax } from "../IN-CS2-classes/BoundedExtensionSyntax.ta.mjs";
// export { BoundedExtensionSyntax, _decode_BoundedExtensionSyntax, _encode_BoundedExtensionSyntax } from "../IN-CS2-classes/BoundedExtensionSyntax.ta.mjs";
import { type EXTENSION } from "../IN-CS2-classes/EXTENSION.oca.mjs";


/**
 * @summary boundedExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * boundedExtension EXTENSION ::= {
 *   EXTENSION-SYNTAX  BoundedExtensionSyntax
 *   CRITICALITY       ignore
 *   IDENTIFIED BY     local:2
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<BoundedExtensionSyntax>}
 * @implements {EXTENSION<BoundedExtensionSyntax>}
 */
export
const boundedExtension: EXTENSION<BoundedExtensionSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtensionType": _decode_BoundedExtensionSyntax,
    },
    encoderFor: {
        "&ExtensionType": _encode_BoundedExtensionSyntax,
    },
    "&criticality": ignore /* OBJECT_FIELD_SETTING */,
    "&id": { local: 2 } /* OBJECT_FIELD_SETTING */,
    "&ExtensionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
