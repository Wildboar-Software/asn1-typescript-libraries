/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SnapshotCallDataArgument, _decode_SnapshotCallDataArgument, _encode_SnapshotCallDataArgument } from "../CSTA-snapshot-call-data/SnapshotCallDataArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary snapshotCallData
 * @description
 *
 * Switching-function-to-computing-function operation that delivers Snapshot
 * CallData segments. ECMA-269 §16.1.3.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * snapshotCallData OPERATION ::= {     ARGUMENT         SnapshotCallDataArgument
 *     ERRORS             {universalFailure }
 *     ALWAYS RESPONDS     FALSE
 *     CODE             local: 76 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SnapshotCallDataArgument>}
 * @implements {OPERATION<SnapshotCallDataArgument>}
 */
export
const snapshotCallData: OPERATION<SnapshotCallDataArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SnapshotCallDataArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SnapshotCallDataArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 76 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
