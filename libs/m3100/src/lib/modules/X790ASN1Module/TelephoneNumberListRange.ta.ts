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
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from '../X790ASN1Module/TelephoneNumber.ta';
export {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from '../X790ASN1Module/TelephoneNumber.ta';

/* START_OF_SYMBOL_DEFINITION TelephoneNumberListRange */
/**
 * @summary TelephoneNumberListRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelephoneNumberListRange  ::=  SET SIZE (0..64) OF TelephoneNumber
 * ```
 */
export type TelephoneNumberListRange = TelephoneNumber[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TelephoneNumberListRange */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephoneNumberListRange */
let _cached_decoder_for_TelephoneNumberListRange: $.ASN1Decoder<TelephoneNumberListRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephoneNumberListRange */

/* START_OF_SYMBOL_DEFINITION _decode_TelephoneNumberListRange */
/**
 * @summary Decodes an ASN.1 element into a(n) TelephoneNumberListRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TelephoneNumberListRange} The decoded data structure.
 */
export function _decode_TelephoneNumberListRange(el: _Element) {
    if (!_cached_decoder_for_TelephoneNumberListRange) {
        _cached_decoder_for_TelephoneNumberListRange = $._decodeSetOf<TelephoneNumber>(
            () => _decode_TelephoneNumber
        );
    }
    return _cached_decoder_for_TelephoneNumberListRange(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TelephoneNumberListRange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephoneNumberListRange */
let _cached_encoder_for_TelephoneNumberListRange: $.ASN1Encoder<TelephoneNumberListRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephoneNumberListRange */

/* START_OF_SYMBOL_DEFINITION _encode_TelephoneNumberListRange */
/**
 * @summary Encodes a(n) TelephoneNumberListRange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephoneNumberListRange, encoded as an ASN.1 Element.
 */
export function _encode_TelephoneNumberListRange(
    value: TelephoneNumberListRange,
    elGetter: $.ASN1Encoder<TelephoneNumberListRange>
) {
    if (!_cached_encoder_for_TelephoneNumberListRange) {
        _cached_encoder_for_TelephoneNumberListRange = $._encodeSetOf<TelephoneNumber>(
            () => _encode_TelephoneNumber,
            $.BER
        );
    }
    return _cached_encoder_for_TelephoneNumberListRange(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TelephoneNumberListRange */

/* eslint-enable */
