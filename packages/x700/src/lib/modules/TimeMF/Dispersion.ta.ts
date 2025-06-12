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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.js';
export {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.js';

/* START_OF_SYMBOL_DEFINITION Dispersion */
/**
 * @summary Dispersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Dispersion  ::=  TimeInterval
 * ```
 */
export type Dispersion = TimeInterval; // DefinedType
/* END_OF_SYMBOL_DEFINITION Dispersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Dispersion */
let _cached_decoder_for_Dispersion: $.ASN1Decoder<Dispersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Dispersion */

/* START_OF_SYMBOL_DEFINITION _decode_Dispersion */
/**
 * @summary Decodes an ASN.1 element into a(n) Dispersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Dispersion} The decoded data structure.
 */
export function _decode_Dispersion(el: _Element) {
    if (!_cached_decoder_for_Dispersion) {
        _cached_decoder_for_Dispersion = _decode_TimeInterval;
    }
    return _cached_decoder_for_Dispersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Dispersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Dispersion */
let _cached_encoder_for_Dispersion: $.ASN1Encoder<Dispersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Dispersion */

/* START_OF_SYMBOL_DEFINITION _encode_Dispersion */
/**
 * @summary Encodes a(n) Dispersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Dispersion, encoded as an ASN.1 Element.
 */
export function _encode_Dispersion(
    value: Dispersion,
    elGetter: $.ASN1Encoder<Dispersion>
) {
    if (!_cached_encoder_for_Dispersion) {
        _cached_encoder_for_Dispersion = _encode_TimeInterval;
    }
    return _cached_encoder_for_Dispersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Dispersion */

/* eslint-enable */
