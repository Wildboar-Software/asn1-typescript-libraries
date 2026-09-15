import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PlayToneArg, _decode_PlayToneArg, _encode_PlayToneArg } from "../CAP-gsmSSF-gsmSCF-ops-args/PlayToneArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { opcode_playTone } from "../CAP-operationcodes/opcode-playTone.va.mjs";

/**
 * @summary playTone
 * @description
 *
 * gsmSCF instructs gsmSSF to play tones to a leg or a Call Segment using the
 * MSC's tone generator. If a Call Segment is indicated, tones are played to all
 * active legs in that segment; if a leg is indicated, only that leg. gsmSCF →
 * gsmSSF. Unconfirmed (`RETURN RESULT FALSE`). Local opcode 97. Timer `Tpt`
 * (short: 1 s–10 s; operator-defined within range). (3GPP TS 29.078 V19.0.0
 * clauses 6.1.1 and 11.24).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * playTone {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	PlayToneArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownLegID |
 * 			unknownCSID}
 * 	CODE		opcode-playTone}
 * ```
 *
 * @constant
 * @type {OPERATION<PlayToneArg>}
 * @implements {OPERATION<PlayToneArg>}
 */
export
const playTone: OPERATION<PlayToneArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PlayToneArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_PlayToneArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_playTone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
