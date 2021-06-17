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

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item */
/**
 * @summary ErrorCode_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorCode-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ErrorCode_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_noError */
/**
 * @summary ErrorCode_Item_noError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_noError: ErrorCode_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_noError */

/* START_OF_SYMBOL_DEFINITION noError */
/**
 * @summary ErrorCode_Item_noError
 * @constant
 * @type {number}
 */
export const noError: ErrorCode_Item = ErrorCode_Item_noError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noError */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_noScriptError */
/**
 * @summary ErrorCode_Item_noScriptError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_noScriptError: ErrorCode_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_noScriptError */

/* START_OF_SYMBOL_DEFINITION noScriptError */
/**
 * @summary ErrorCode_Item_noScriptError
 * @constant
 * @type {number}
 */
export const noScriptError: ErrorCode_Item = ErrorCode_Item_noScriptError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noScriptError */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_scriptRejectedError */
/**
 * @summary ErrorCode_Item_scriptRejectedError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptRejectedError: ErrorCode_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_scriptRejectedError */

/* START_OF_SYMBOL_DEFINITION scriptRejectedError */
/**
 * @summary ErrorCode_Item_scriptRejectedError
 * @constant
 * @type {number}
 */
export const scriptRejectedError: ErrorCode_Item = ErrorCode_Item_scriptRejectedError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION scriptRejectedError */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_invalidParameterTypeError */
/**
 * @summary ErrorCode_Item_invalidParameterTypeError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParameterTypeError: ErrorCode_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_invalidParameterTypeError */

/* START_OF_SYMBOL_DEFINITION invalidParameterTypeError */
/**
 * @summary ErrorCode_Item_invalidParameterTypeError
 * @constant
 * @type {number}
 */
export const invalidParameterTypeError: ErrorCode_Item = ErrorCode_Item_invalidParameterTypeError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidParameterTypeError */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_invalidParameterValueError */
/**
 * @summary ErrorCode_Item_invalidParameterValueError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParameterValueError: ErrorCode_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_invalidParameterValueError */

/* START_OF_SYMBOL_DEFINITION invalidParameterValueError */
/**
 * @summary ErrorCode_Item_invalidParameterValueError
 * @constant
 * @type {number}
 */
export const invalidParameterValueError: ErrorCode_Item = ErrorCode_Item_invalidParameterValueError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidParameterValueError */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_scriptSyntaxError */
/**
 * @summary ErrorCode_Item_scriptSyntaxError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptSyntaxError: ErrorCode_Item = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_scriptSyntaxError */

/* START_OF_SYMBOL_DEFINITION scriptSyntaxError */
/**
 * @summary ErrorCode_Item_scriptSyntaxError
 * @constant
 * @type {number}
 */
export const scriptSyntaxError: ErrorCode_Item = ErrorCode_Item_scriptSyntaxError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION scriptSyntaxError */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_scriptExecutionFailedError */
/**
 * @summary ErrorCode_Item_scriptExecutionFailedError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptExecutionFailedError: ErrorCode_Item = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_scriptExecutionFailedError */

/* START_OF_SYMBOL_DEFINITION scriptExecutionFailedError */
/**
 * @summary ErrorCode_Item_scriptExecutionFailedError
 * @constant
 * @type {number}
 */
export const scriptExecutionFailedError: ErrorCode_Item = ErrorCode_Item_scriptExecutionFailedError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION scriptExecutionFailedError */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_invalidParmeterNumber */
/**
 * @summary ErrorCode_Item_invalidParmeterNumber
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParmeterNumber: ErrorCode_Item = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_invalidParmeterNumber */

/* START_OF_SYMBOL_DEFINITION invalidParmeterNumber */
/**
 * @summary ErrorCode_Item_invalidParmeterNumber
 * @constant
 * @type {number}
 */
export const invalidParmeterNumber: ErrorCode_Item = ErrorCode_Item_invalidParmeterNumber; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidParmeterNumber */

/* START_OF_SYMBOL_DEFINITION ErrorCode_Item_unauthorizedAccessError */
/**
 * @summary ErrorCode_Item_unauthorizedAccessError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_unauthorizedAccessError: ErrorCode_Item = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorCode_Item_unauthorizedAccessError */

/* START_OF_SYMBOL_DEFINITION unauthorizedAccessError */
/**
 * @summary ErrorCode_Item_unauthorizedAccessError
 * @constant
 * @type {number}
 */
export const unauthorizedAccessError: ErrorCode_Item = ErrorCode_Item_unauthorizedAccessError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorizedAccessError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorCode_Item */
let _cached_decoder_for_ErrorCode_Item: $.ASN1Decoder<ErrorCode_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorCode_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorCode_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ErrorCode_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorCode_Item} The decoded data structure.
 */
export function _decode_ErrorCode_Item(el: _Element) {
    if (!_cached_decoder_for_ErrorCode_Item) {
        _cached_decoder_for_ErrorCode_Item = $._decodeInteger;
    }
    return _cached_decoder_for_ErrorCode_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ErrorCode_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorCode_Item */
let _cached_encoder_for_ErrorCode_Item: $.ASN1Encoder<ErrorCode_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorCode_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorCode_Item */
/**
 * @summary Encodes a(n) ErrorCode_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorCode_Item, encoded as an ASN.1 Element.
 */
export function _encode_ErrorCode_Item(
    value: ErrorCode_Item,
    elGetter: $.ASN1Encoder<ErrorCode_Item>
) {
    if (!_cached_encoder_for_ErrorCode_Item) {
        _cached_encoder_for_ErrorCode_Item = $._encodeInteger;
    }
    return _cached_encoder_for_ErrorCode_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ErrorCode_Item */

/* eslint-enable */
