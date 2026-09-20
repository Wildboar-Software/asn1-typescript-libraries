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
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { referentAccessError_ParameterType, _decode_referentAccessError_ParameterType, _encode_referentAccessError_ParameterType } from "../DFRAbstractService/referentAccessError-ParameterType.ta.mjs";
import { id_errcode_referent_access_error } from "../DFRAbstractService/id-errcode-referent-access-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary referentAccessError
 * @description
 *
 * Problem accessing a referent through a reference or DOR. `referent-modified`
 * is a warning (does not abort) when copying or listing a group. ISO/IEC
 * 10166-1:1991 §8.3.5; ISO/IEC 10166-1:1991/Cor.2:1994
 * (`referent-no-longer-exists`). Local error 5 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * referentAccessError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         entry   [0] CHOICE {
 *             dfr-entry   [0] DfrEntryName,
 *             dor         [1] NULL
 *         },
 *         problem [1] ReferentAccessProblem
 *     }
 *     CODE        id-errcode-referent-access-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<referentAccessError_ParameterType>}
 * @implements {ERROR<referentAccessError_ParameterType>}
 */
export
const referentAccessError: ERROR<referentAccessError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_referentAccessError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_referentAccessError_ParameterType,
    },
    "&errorCode": id_errcode_referent_access_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
