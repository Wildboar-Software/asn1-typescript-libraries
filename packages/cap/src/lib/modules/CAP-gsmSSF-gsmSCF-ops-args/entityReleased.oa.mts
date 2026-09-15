import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EntityReleasedArg, _decode_EntityReleasedArg, _encode_EntityReleasedArg } from "../CAP-gsmSSF-gsmSCF-ops-args/EntityReleasedArg.ta.mjs";
import { opcode_entityReleased } from "../CAP-operationcodes/opcode-entityReleased.va.mjs";

/**
 * @summary entityReleased
 * @description
 *
 * CSA informs gsmSCF that a Call Segment or BCSM was released due to error or
 * exception, when that fact cannot be conveyed by TC_ABORT or TC_END because
 * other entities in the CSA still need the dialogue. Not used if the last Call
 * Segment in the CSA was released. gsmSSF → gsmSCF. Unconfirmed (`RETURN RESULT
 * FALSE`, `ALWAYS RESPONDS FALSE`). Local opcode 96. Timer `Ter` (short: 1 s–10
 * s; operator-defined within range). Class 4. (3GPP TS 29.078 V19.0.0 clauses
 * 6.1.1 and 11.16).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * entityReleased {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	EntityReleasedArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ALWAYS RESPONDS	FALSE
 * 	CODE		opcode-entityReleased}
 * ```
 *
 * @constant
 * @type {OPERATION<EntityReleasedArg>}
 * @implements {OPERATION<EntityReleasedArg>}
 */
export
const entityReleased: OPERATION<EntityReleasedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EntityReleasedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EntityReleasedArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_entityReleased /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
