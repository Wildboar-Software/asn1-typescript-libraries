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

/* START_OF_SYMBOL_DEFINITION _enum_for_ConversionWithLossProhibited */
/**
 * @summary ConversionWithLossProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionWithLossProhibited  ::=  ENUMERATED {
 *   conversion-with-loss-allowed(0), conversion-with-loss-prohibited(1)
 * }
 * ```@enum {number}
 */
export enum _enum_for_ConversionWithLossProhibited {
    conversion_with_loss_allowed = 0,
    conversion_with_loss_prohibited = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION ConversionWithLossProhibited */
/**
 * @summary ConversionWithLossProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionWithLossProhibited  ::=  ENUMERATED {
 *   conversion-with-loss-allowed(0), conversion-with-loss-prohibited(1)
 * }
 * ```@enum {number}
 */
export type ConversionWithLossProhibited = _enum_for_ConversionWithLossProhibited;
/* END_OF_SYMBOL_DEFINITION ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION ConversionWithLossProhibited */
/**
 * @summary ConversionWithLossProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionWithLossProhibited  ::=  ENUMERATED {
 *   conversion-with-loss-allowed(0), conversion-with-loss-prohibited(1)
 * }
 * ```@enum {number}
 */
export const ConversionWithLossProhibited = _enum_for_ConversionWithLossProhibited;
/* END_OF_SYMBOL_DEFINITION ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION ConversionWithLossProhibited_conversion_with_loss_allowed */
/**
 * @summary ConversionWithLossProhibited_conversion_with_loss_allowed
 * @constant
 * @type {number}
 */
export const ConversionWithLossProhibited_conversion_with_loss_allowed: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_allowed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ConversionWithLossProhibited_conversion_with_loss_allowed */

/* START_OF_SYMBOL_DEFINITION conversion_with_loss_allowed */
/**
 * @summary conversion_with_loss_allowed
 * @constant
 * @type {number}
 */
export const conversion_with_loss_allowed: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION conversion_with_loss_allowed */

/* START_OF_SYMBOL_DEFINITION ConversionWithLossProhibited_conversion_with_loss_prohibited */
/**
 * @summary ConversionWithLossProhibited_conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const ConversionWithLossProhibited_conversion_with_loss_prohibited: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ConversionWithLossProhibited_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION conversion_with_loss_prohibited */
/**
 * @summary conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const conversion_with_loss_prohibited: ConversionWithLossProhibited =
    ConversionWithLossProhibited.conversion_with_loss_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConversionWithLossProhibited */
let _cached_decoder_for_ConversionWithLossProhibited: $.ASN1Decoder<ConversionWithLossProhibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION _decode_ConversionWithLossProhibited */
/**
 * @summary Decodes an ASN.1 element into a(n) ConversionWithLossProhibited
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConversionWithLossProhibited} The decoded data structure.
 */
export function _decode_ConversionWithLossProhibited(el: _Element) {
    if (!_cached_decoder_for_ConversionWithLossProhibited) {
        _cached_decoder_for_ConversionWithLossProhibited = $._decodeEnumerated;
    }
    return _cached_decoder_for_ConversionWithLossProhibited(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConversionWithLossProhibited */
let _cached_encoder_for_ConversionWithLossProhibited: $.ASN1Encoder<ConversionWithLossProhibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConversionWithLossProhibited */

/* START_OF_SYMBOL_DEFINITION _encode_ConversionWithLossProhibited */
/**
 * @summary Encodes a(n) ConversionWithLossProhibited into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConversionWithLossProhibited, encoded as an ASN.1 Element.
 */
export function _encode_ConversionWithLossProhibited(
    value: ConversionWithLossProhibited,
    elGetter: $.ASN1Encoder<ConversionWithLossProhibited>
) {
    if (!_cached_encoder_for_ConversionWithLossProhibited) {
        _cached_encoder_for_ConversionWithLossProhibited = $._encodeEnumerated;
    }
    return _cached_encoder_for_ConversionWithLossProhibited(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConversionWithLossProhibited */

/* eslint-enable */
