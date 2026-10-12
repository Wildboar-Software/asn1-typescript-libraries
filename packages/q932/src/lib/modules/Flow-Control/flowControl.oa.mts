/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t
} from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_flowControl_ArgumentType, _encode_flowControl_ArgumentType, flowControl_ArgumentType } from "../Flow-Control/flowControl-ArgumentType.ta.mjs";


/**
 * @summary flowControl
 * @description
 * 
 * Class 5 operation. The VPN node tells a physical PINX whether the public
 * network will accept more FACILITY and NOTIFY messages that need transport
 * through the public network, for calls in a VPN context. The global code is
 * `{itu-t recommendation q 932 flow-control(8) operation(1)}`.
 *
 * Send it in a FACILITY message whose Facility information element uses
 * protocol profile "networking extensions" and an Interpretation component
 * coded `discardAnyUnrecognisedInvokeComponent`.
 *
 * `receiverNotReady`: further FACILITY and NOTIFY messages that need transport
 * through the public network may be discarded. FACILITY messages that do not
 * need that transport are still processed. `receiverReady`: further such
 * messages can be accepted. `maximumNumberOfMessages` and `timerT` may be
 * included with `receiverReady`. The specification does not state the unit of
 * `timerT`.
 *
 * As a network option, a burst of N FACILITY and NOTIFY messages is allowed per
 * call reference. N starts at the burst parameter X, decreases by one for each
 * such message, and increases by the replenishment parameter Y at each interval
 * T, never above X. If Y is 0, the limit is X messages for that call reference.
 * Messages beyond N are discarded. X, Y, T, and whether the timer is
 * implemented are network options.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex D, D.6 and Figure D.4; ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Figure D.4 bis.
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
