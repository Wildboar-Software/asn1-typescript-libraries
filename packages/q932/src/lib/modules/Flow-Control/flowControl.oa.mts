/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t
} from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_flowControl_ArgumentType, _encode_flowControl_ArgumentType, flowControl_ArgumentType } from "../Flow-Control/flowControl-ArgumentType.ta.mjs";
// export { flowControl_ArgumentType, _decode_flowControl_ArgumentType, _encode_flowControl_ArgumentType } from "../Flow-Control/flowControl-ArgumentType.ta.mjs";


/**
 * @summary flowControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl OPERATION ::= {
 *   ARGUMENT
 *     SEQUENCE {controlReceiver
 *                 ENUMERATED {receiverNotReady(0), receiverReady(1)},
 *               maximumNumberOfMessages  [0] IMPLICIT INTEGER(1..255) OPTIONAL,
 *               replenishmentParameter   [1] IMPLICIT INTEGER(1..255) OPTIONAL,
 *               timerT                   [2] IMPLICIT INTEGER(1..30) OPTIONAL
 *   }
 *   CODE      global:{itu-t recommendation q 932 flow-control(8) operation(1)}
 * 
 * 
 * -- When the receiverReady coding is sent in FACILITY message, the
 * -- maximumNumberOfMessages and timerT data elements may optionally
 * -- be included. The MaximumNumberOfMessages is an integer that specifies
 * -- the number of messages that may be sent in the time interval specifed by
 * -- timerT for the call reference identified in the FACILITY message and these
 * -- may optionally be included when the receiverReady coding is sent. The
 * -- replenishmentParameter indicates the number of additional messages that
 * -- may be sent at the end of timer interval timerT.
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<flowControl_ArgumentType>}
 * @implements {OPERATION<flowControl_ArgumentType>}
 */
export
const flowControl: OPERATION<flowControl_ArgumentType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_flowControl_ArgumentType,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_flowControl_ArgumentType,
        "&ResultType": undefined,
    },
    "&operationCode": { global: _OID.fromParts([
        /* recommendation */ 0,
        /* q */ 17,
        932,
        /* flow-control */ 8,
        /* operation */ 1,
    ], itu_t) } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
