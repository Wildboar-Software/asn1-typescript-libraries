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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
import { err_delivery_control_violated } from '../MTSAccessProtocol/err-delivery-control-violated.va.js';
export { err_delivery_control_violated } from '../MTSAccessProtocol/err-delivery-control-violated.va.js';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.js';
export { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.js';

/* START_OF_SYMBOL_DEFINITION delivery_control_violated */
/**
 * @summary delivery_control_violated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delivery-control-violated ABSTRACT-ERROR ::= {
 *   PARAMETER  NULL
 *   CODE       err-delivery-control-violated
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<NULL>}
 * @implements {ABSTRACT_ERROR<NULL>}
 */
export const delivery_control_violated: ABSTRACT_ERROR<NULL> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': $._decodeNull,
    },
    encoderFor: {
        '&ParameterType': $._encodeNull,
    },
    '&errorCode': err_delivery_control_violated /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION delivery_control_violated */

/* eslint-enable */
