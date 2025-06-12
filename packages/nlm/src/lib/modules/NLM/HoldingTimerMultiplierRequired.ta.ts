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

/* START_OF_SYMBOL_DEFINITION HoldingTimerMultiplierRequired */
/**
 * @summary HoldingTimerMultiplierRequired
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldingTimerMultiplierRequired  ::=  INTEGER(3)
 * ```
 */
export type HoldingTimerMultiplierRequired = INTEGER;
/* END_OF_SYMBOL_DEFINITION HoldingTimerMultiplierRequired */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HoldingTimerMultiplierRequired */
let _cached_decoder_for_HoldingTimerMultiplierRequired: $.ASN1Decoder<HoldingTimerMultiplierRequired> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HoldingTimerMultiplierRequired */

/* START_OF_SYMBOL_DEFINITION _decode_HoldingTimerMultiplierRequired */
/**
 * @summary Decodes an ASN.1 element into a(n) HoldingTimerMultiplierRequired
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HoldingTimerMultiplierRequired} The decoded data structure.
 */
export function _decode_HoldingTimerMultiplierRequired(el: _Element) {
    if (!_cached_decoder_for_HoldingTimerMultiplierRequired) {
        _cached_decoder_for_HoldingTimerMultiplierRequired = $._decodeInteger;
    }
    return _cached_decoder_for_HoldingTimerMultiplierRequired(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HoldingTimerMultiplierRequired */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HoldingTimerMultiplierRequired */
let _cached_encoder_for_HoldingTimerMultiplierRequired: $.ASN1Encoder<HoldingTimerMultiplierRequired> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HoldingTimerMultiplierRequired */

/* START_OF_SYMBOL_DEFINITION _encode_HoldingTimerMultiplierRequired */
/**
 * @summary Encodes a(n) HoldingTimerMultiplierRequired into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldingTimerMultiplierRequired, encoded as an ASN.1 Element.
 */
export function _encode_HoldingTimerMultiplierRequired(
    value: HoldingTimerMultiplierRequired,
    elGetter: $.ASN1Encoder<HoldingTimerMultiplierRequired>
) {
    if (!_cached_encoder_for_HoldingTimerMultiplierRequired) {
        _cached_encoder_for_HoldingTimerMultiplierRequired = $._encodeInteger;
    }
    return _cached_encoder_for_HoldingTimerMultiplierRequired(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HoldingTimerMultiplierRequired */

/* eslint-enable */
