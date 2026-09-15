/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { opcode_disconnectForwardConnection } from "../CAP-operationcodes/opcode-disconnectForwardConnection.va.mjs";
// export { opcode_disconnectForwardConnection } from "../CAP-operationcodes/opcode-disconnectForwardConnection.va.mjs";


/**
 * @summary disconnectForwardConnection
 * @description
 * 
 * gsmSCF clears a forward temporary connection to a gsmSRF (previously
 * ConnectToResource or EstablishTemporaryConnection) or the assist path between
 * initiating gsmSSF and assisting gsmSSF. Does not release the gsmSSF–end-user
 * connection. Shall not be used when a CallSegmentID is required (use
 * DisconnectForwardConnectionWithArgument). gsmSCF → gsmSSF. Unconfirmed
 * (`RETURN RESULT FALSE`). Local opcode 18. Timer `Tdfc` (short: 1 s–10 s;
 * operator-defined within range). (3GPP TS 29.078 V19.0.0 clauses 6.1.1 and
 * 11.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * disconnectForwardConnection OPERATION ::= {
 *     RETURN RESULT    FALSE
 *     ERRORS        {systemFailure |
 *             taskRefused |
 *             unexpectedComponentSequence}
 *     CODE        opcode-disconnectForwardConnection}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const disconnectForwardConnection: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ systemFailure, taskRefused, unexpectedComponentSequence, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_disconnectForwardConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
