/* eslint-disable */
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type UISCRIPT } from "../IN-SCF-SRF-Classes/UISCRIPT.oca.mjs";


/**
 * @summary firstScript
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * firstScript UISCRIPT ::= {IDENTIFIED BY  local:1
 * }
 * ```
 * 
 * @constant
 * @type {UISCRIPT}
 * @implements {UISCRIPT}
 */
export
const firstScript: UISCRIPT = {
    class: "UISCRIPT",
    decoderFor: {
        "&SpecificInfo": undefined,
        "&Result": undefined,
    },
    encoderFor: {
        "&SpecificInfo": undefined,
        "&Result": undefined,
    },
    "&id": { local: 1 } /* OBJECT_FIELD_SETTING */,
    "&SpecificInfo": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Result": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
