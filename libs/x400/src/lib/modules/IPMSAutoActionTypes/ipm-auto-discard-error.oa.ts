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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
import {
    ipm_auto_discard_error_ParameterType,
    _decode_ipm_auto_discard_error_ParameterType,
    _encode_ipm_auto_discard_error_ParameterType,
} from '../IPMSAutoActionTypes/ipm-auto-discard-error-ParameterType.ta';
export {
    ipm_auto_discard_error_ParameterType,
    _decode_ipm_auto_discard_error_ParameterType,
    _encode_ipm_auto_discard_error_ParameterType,
} from '../IPMSAutoActionTypes/ipm-auto-discard-error-ParameterType.ta';
import { id_aae_auto_discard_error } from '../IPMSObjectIdentifiers/id-aae-auto-discard-error.va';
export { id_aae_auto_discard_error } from '../IPMSObjectIdentifiers/id-aae-auto-discard-error.va';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca';
export { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca';

/* START_OF_SYMBOL_DEFINITION ipm_auto_discard_error */
/**
 * @summary ipm_auto_discard_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-discard-error AUTO-ACTION-ERROR ::= {
 *   PARAMETER  SET {problem  [0]  AutoDiscardProblem}
 *   CODE       global:id-aae-auto-discard-error
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR<ipm_auto_discard_error_ParameterType>}
 * @implements {AUTO_ACTION_ERROR<ipm_auto_discard_error_ParameterType>}
 */
export const ipm_auto_discard_error: AUTO_ACTION_ERROR<ipm_auto_discard_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_ipm_auto_discard_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_ipm_auto_discard_error_ParameterType,
    },
    '&errorCode': {
        global: id_aae_auto_discard_error,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ipm_auto_discard_error */

/* eslint-enable */
