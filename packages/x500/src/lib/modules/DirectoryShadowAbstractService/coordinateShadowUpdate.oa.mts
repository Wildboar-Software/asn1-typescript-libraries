/* eslint-disable */
import { id_opcode_coordinateShadowUpdate } from "../CommonProtocolSpecification/id-opcode-coordinateShadowUpdate.va.mjs";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import {
    CoordinateShadowUpdateArgument,
    _decode_CoordinateShadowUpdateArgument,
    _encode_CoordinateShadowUpdateArgument,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgument.ta.mjs";
import {
    CoordinateShadowUpdateResult,
    _decode_CoordinateShadowUpdateResult,
    _encode_CoordinateShadowUpdateResult,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResult.ta.mjs";
import { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa.mjs";
/**
 * @summary coordinateShadowUpdate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * coordinateShadowUpdate OPERATION ::= {
 *   ARGUMENT  CoordinateShadowUpdateArgument
 *   RESULT    CoordinateShadowUpdateResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-coordinateShadowUpdate
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<CoordinateShadowUpdateArgument, CoordinateShadowUpdateResult>}
 * @implements {OPERATION<CoordinateShadowUpdateArgument, CoordinateShadowUpdateResult>}
 */
export const coordinateShadowUpdate: OPERATION<
    CoordinateShadowUpdateArgument,
    CoordinateShadowUpdateResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CoordinateShadowUpdateArgument,
        "&ResultType": _decode_CoordinateShadowUpdateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CoordinateShadowUpdateArgument,
        "&ResultType": _encode_CoordinateShadowUpdateResult,
    },
    "&Errors": [shadowError] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_coordinateShadowUpdate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
