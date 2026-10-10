/* eslint-disable */
import { IncompatibleTerminalParam, _decode_IncompatibleTerminalParam, _encode_IncompatibleTerminalParam } from "../MAP-ER-DataTypes/IncompatibleTerminalParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary incompatibleTerminal
 * @description
 * 
 * Returned when the requested facility is not supported by the terminal (3GPP
 * TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 28. Optional parameter `IncompatibleTerminalParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * incompatibleTerminal  ERROR ::= {
 *     PARAMETER
 *     IncompatibleTerminalParam
 *     -- optional
 *     CODE    local:28 }
 * ```
 * 
 * @constant
 * @type {ERROR<IncompatibleTerminalParam>}
 * @implements {ERROR<IncompatibleTerminalParam>}
 */
export
const incompatibleTerminal: ERROR<IncompatibleTerminalParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_IncompatibleTerminalParam,
    },
    encoderFor: {
        "&ParameterType": _encode_IncompatibleTerminalParam,
    },
    "&errorCode": { local: 28 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
