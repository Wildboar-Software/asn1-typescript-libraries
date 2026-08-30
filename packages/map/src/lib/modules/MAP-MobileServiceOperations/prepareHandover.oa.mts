/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PrepareHO_Arg, _decode_PrepareHO_Arg, _encode_PrepareHO_Arg } from "../MAP-MS-DataTypes/PrepareHO-Arg.ta.mjs";
// export { PrepareHO_Arg, _decode_PrepareHO_Arg, _encode_PrepareHO_Arg } from "../MAP-MS-DataTypes/PrepareHO-Arg.ta.mjs";
import { PrepareHO_Res, _decode_PrepareHO_Res, _encode_PrepareHO_Res } from "../MAP-MS-DataTypes/PrepareHO-Res.ta.mjs";
// export { PrepareHO_Res, _decode_PrepareHO_Res, _encode_PrepareHO_Res } from "../MAP-MS-DataTypes/PrepareHO-Res.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
// export { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { noHandoverNumberAvailable } from "../MAP-Errors/noHandoverNumberAvailable.oa.mjs";
// export { noHandoverNumberAvailable } from "../MAP-Errors/noHandoverNumberAvailable.oa.mjs";
import { targetCellOutsideGroupCallArea } from "../MAP-Errors/targetCellOutsideGroupCallArea.oa.mjs";
// export { targetCellOutsideGroupCallArea } from "../MAP-Errors/targetCellOutsideGroupCallArea.oa.mjs";


/**
 * @summary prepareHandover
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * prepareHandover  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     PrepareHO-Arg
 *     RESULT
 *     PrepareHO-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     noHandoverNumberAvailable |
 *     targetCellOutsideGroupCallArea }
 *     CODE    local:68 }
 * ```
 * 
 * @constant
 * @type {OPERATION<PrepareHO_Arg, PrepareHO_Res>}
 * @implements {OPERATION<PrepareHO_Arg, PrepareHO_Res>}
 */
export
const prepareHandover: OPERATION<PrepareHO_Arg, PrepareHO_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PrepareHO_Arg,
        "&ResultType": _decode_PrepareHO_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_PrepareHO_Arg,
        "&ResultType": _encode_PrepareHO_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, noHandoverNumberAvailable, targetCellOutsideGroupCallArea, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 68 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
