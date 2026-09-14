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
import { ReserveArgument, _decode_ReserveArgument, _encode_ReserveArgument } from "../DFRAbstractService/ReserveArgument.ta.mjs";
// export { ReserveArgument, _decode_ReserveArgument, _encode_ReserveArgument } from "../DFRAbstractService/ReserveArgument.ta.mjs";
import { ReserveResult, _decode_ReserveResult, _encode_ReserveResult } from "../DFRAbstractService/ReserveResult.ta.mjs";
// export { ReserveResult, _decode_ReserveResult, _encode_ReserveResult } from "../DFRAbstractService/ReserveResult.ta.mjs";
import { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
// export { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
import { nameError } from "../DFRAbstractService/nameError.oa.mjs";
// export { nameError } from "../DFRAbstractService/nameError.oa.mjs";
import { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
// export { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
import { securityError } from "../DFRAbstractService/securityError.oa.mjs";
// export { securityError } from "../DFRAbstractService/securityError.oa.mjs";
import { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
import { id_opcode_reserve } from "../DFRAbstractService/id-opcode-reserve.va.mjs";
// export { id_opcode_reserve } from "../DFRAbstractService/id-opcode-reserve.va.mjs";


/**
 * @summary reserve
 * @description
 *
 * Change reservation level/status of one entry. Never blocks reading
 * attributes. Unbind does not clear reservations. Reserving a reference does
 * not reserve the referent. ISO/IEC 10166-1:1991 §8.2.9. Local opcode 9
 * (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reserve OPERATION ::= {
 *     ARGUMENT    ReserveArgument
 *     RESULT      ReserveResult
 *     ERRORS {
 *         abandoned
 *         | nameError
 *         | reservationError
 *         | securityError
 *         | serviceError
 *     }
 *     CODE        id-opcode-reserve
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReserveArgument, ReserveResult>}
 * @implements {OPERATION<ReserveArgument, ReserveResult>}
 */
export
const reserve: OPERATION<ReserveArgument, ReserveResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReserveArgument,
        "&ResultType": _decode_ReserveResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReserveArgument,
        "&ResultType": _encode_ReserveResult,
    },
    "&Errors": [ abandoned, nameError, reservationError, securityError, serviceError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_reserve /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
