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

/* START_OF_SYMBOL_DEFINITION _enum_for_CircuitDirectionality */
/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```@enum {number}
 */
export enum _enum_for_CircuitDirectionality {
    onewayOut = 0,
    onewayIn = 1,
    twoway = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality */
/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```@enum {number}
 */
export type CircuitDirectionality = _enum_for_CircuitDirectionality;
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality */
/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```@enum {number}
 */
export const CircuitDirectionality = _enum_for_CircuitDirectionality;
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality_onewayOut */
/**
 * @summary CircuitDirectionality_onewayOut
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_onewayOut: CircuitDirectionality =
    CircuitDirectionality.onewayOut; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality_onewayOut */

/* START_OF_SYMBOL_DEFINITION onewayOut */
/**
 * @summary onewayOut
 * @constant
 * @type {number}
 */
export const onewayOut: CircuitDirectionality =
    CircuitDirectionality.onewayOut; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION onewayOut */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality_onewayIn */
/**
 * @summary CircuitDirectionality_onewayIn
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_onewayIn: CircuitDirectionality =
    CircuitDirectionality.onewayIn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality_onewayIn */

/* START_OF_SYMBOL_DEFINITION onewayIn */
/**
 * @summary onewayIn
 * @constant
 * @type {number}
 */
export const onewayIn: CircuitDirectionality =
    CircuitDirectionality.onewayIn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION onewayIn */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality_twoway */
/**
 * @summary CircuitDirectionality_twoway
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_twoway: CircuitDirectionality =
    CircuitDirectionality.twoway; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality_twoway */

/* START_OF_SYMBOL_DEFINITION twoway */
/**
 * @summary twoway
 * @constant
 * @type {number}
 */
export const twoway: CircuitDirectionality =
    CircuitDirectionality.twoway; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION twoway */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitDirectionality */
let _cached_decoder_for_CircuitDirectionality: $.ASN1Decoder<CircuitDirectionality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION _decode_CircuitDirectionality */
/**
 * @summary Decodes an ASN.1 element into a(n) CircuitDirectionality
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CircuitDirectionality} The decoded data structure.
 */
export function _decode_CircuitDirectionality(el: _Element) {
    if (!_cached_decoder_for_CircuitDirectionality) {
        _cached_decoder_for_CircuitDirectionality = $._decodeEnumerated;
    }
    return _cached_decoder_for_CircuitDirectionality(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitDirectionality */
let _cached_encoder_for_CircuitDirectionality: $.ASN1Encoder<CircuitDirectionality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION _encode_CircuitDirectionality */
/**
 * @summary Encodes a(n) CircuitDirectionality into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CircuitDirectionality, encoded as an ASN.1 Element.
 */
export function _encode_CircuitDirectionality(
    value: CircuitDirectionality,
    elGetter: $.ASN1Encoder<CircuitDirectionality>
) {
    if (!_cached_encoder_for_CircuitDirectionality) {
        _cached_encoder_for_CircuitDirectionality = $._encodeEnumerated;
    }
    return _cached_encoder_for_CircuitDirectionality(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CircuitDirectionality */

/* eslint-enable */
