/* eslint-disable */
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { BoundedSpecificInfo, _decode_BoundedSpecificInfo, _encode_BoundedSpecificInfo } from "../IN-CS2-classes/BoundedSpecificInfo.ta.mjs";
// export { BoundedSpecificInfo, _decode_BoundedSpecificInfo, _encode_BoundedSpecificInfo } from "../IN-CS2-classes/BoundedSpecificInfo.ta.mjs";
import { type UISCRIPT } from "../IN-CS2-classes/UISCRIPT.oca.mjs";


/**
 * @summary boundedScript
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * boundedScript UISCRIPT ::= {
 *   WITH-SPECIFICINFO  BoundedSpecificInfo
 *   IDENTIFIED BY      local:2
 * }
 * ```
 * 
 * @constant
 * @type {UISCRIPT<BoundedSpecificInfo>}
 * @implements {UISCRIPT<BoundedSpecificInfo>}
 */
export
const boundedScript: UISCRIPT<BoundedSpecificInfo> = {
    class: "UISCRIPT",
    decoderFor: {
        "&SpecificInfo": _decode_BoundedSpecificInfo,
        "&Result": undefined,
    },
    encoderFor: {
        "&SpecificInfo": _encode_BoundedSpecificInfo,
        "&Result": undefined,
    },
    "&id": { local: 2 } /* OBJECT_FIELD_SETTING */,
    "&SpecificInfo": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Result": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
