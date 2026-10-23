/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CcOptionalArg, _decode_CcOptionalArg, _encode_CcOptionalArg } from "../SS-CC-Operations-asn1-97/CcOptionalArg.ta.mjs";

/**
 * @summary ccCancel
 * @description
 *
 * Cancels one CC Request (ECMA-186 §6.5.2.1.10, §6.5.3.1.8). Either
 * PINX may send it. No result. Local code 28.
 *
 * From the Originating PINX, `extArg` is used in the RELEASE of an
 * existing signalling connection or in the DISCONNECT of a reserved
 * path. Otherwise `fullArg` is sent in a new SETUP, with the same
 * basic call information as the original request. The connection or
 * CC call is then cleared with cause 16.
 *
 * From the Terminating PINX, `extArg` is sent in RELEASE when a
 * signalling connection exists; otherwise `fullArg` is sent in a
 * new SETUP. Basic call information on an existing connection is
 * ignored. A `ccCancel` that matches no request is ignored, but a
 * new signalling connection is still released (§6.5.2.2.2,
 * §6.5.3.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccCancel OPERATION ::= {
 *     ARGUMENT CcOptionalArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 28
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcOptionalArg>}
 * @implements {OPERATION<CcOptionalArg>}
 */
export
const ccCancel: OPERATION<CcOptionalArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcOptionalArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcOptionalArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 28 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
