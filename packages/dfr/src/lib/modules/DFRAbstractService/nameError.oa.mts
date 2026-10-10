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
import * as $ from "@wildboar/asn1/functional";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { nameError_ParameterType_Item, _decode_nameError_ParameterType_Item, _encode_nameError_ParameterType_Item } from "../DFRAbstractService/nameError-ParameterType-Item.ta.mjs";
import { id_errcode_name_error } from "../DFRAbstractService/id-errcode-name-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary nameError
 * @description
 *
 * Bad or hidden name. If the user has no read right, problem 1 or 2 is
 * reported so the entry's existence stays hidden. Several named entries may be
 * listed, but only this error type is returned. ISO/IEC 10166-1:1991 §8.3.2.
 * Local error 2 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nameError ERROR ::= {
 *     PARAMETER SEQUENCE OF SEQUENCE {
 *         entry       [0] DfrEntryName,
 *         problem     [1] NameProblem
 *     }
 *     CODE        id-errcode-name-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<nameError_ParameterType_Item[]>}
 * @implements {ERROR<nameError_ParameterType_Item[]>}
 */
export
const nameError: ERROR<nameError_ParameterType_Item[]> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": $._decodeSequenceOf<nameError_ParameterType_Item>(() => _decode_nameError_ParameterType_Item),
    },
    encoderFor: {
        "&ParameterType": $._encodeSequenceOf<nameError_ParameterType_Item>(() => _encode_nameError_ParameterType_Item, $.BER),
    },
    "&errorCode": id_errcode_name_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
