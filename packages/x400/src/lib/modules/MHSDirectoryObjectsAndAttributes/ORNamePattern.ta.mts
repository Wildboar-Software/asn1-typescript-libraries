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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ORNamePattern */
/**
 * @summary ORNamePattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORNamePattern  ::=  ORName
 * ```
 */
export type ORNamePattern = ORName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ORNamePattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ORNamePattern */
let _cached_decoder_for_ORNamePattern: $.ASN1Decoder<ORNamePattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ORNamePattern */

/* START_OF_SYMBOL_DEFINITION _decode_ORNamePattern */
/**
 * @summary Decodes an ASN.1 element into a(n) ORNamePattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORNamePattern} The decoded data structure.
 */
export function _decode_ORNamePattern(el: _Element) {
    if (!_cached_decoder_for_ORNamePattern) {
        _cached_decoder_for_ORNamePattern = _decode_ORName;
    }
    return _cached_decoder_for_ORNamePattern(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ORNamePattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ORNamePattern */
let _cached_encoder_for_ORNamePattern: $.ASN1Encoder<ORNamePattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ORNamePattern */

/* START_OF_SYMBOL_DEFINITION _encode_ORNamePattern */
/**
 * @summary Encodes a(n) ORNamePattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORNamePattern, encoded as an ASN.1 Element.
 */
export function _encode_ORNamePattern(
    value: ORNamePattern,
    elGetter: $.ASN1Encoder<ORNamePattern>
) {
    if (!_cached_encoder_for_ORNamePattern) {
        _cached_encoder_for_ORNamePattern = _encode_ORName;
    }
    return _cached_encoder_for_ORNamePattern(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ORNamePattern */

/* eslint-enable */
