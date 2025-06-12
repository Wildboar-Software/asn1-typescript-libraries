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
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.js';
export {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.js';

/* START_OF_SYMBOL_DEFINITION EstablishmentTime */
/**
 * @summary EstablishmentTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishmentTime  ::=  Timespec
 * ```
 */
export type EstablishmentTime = Timespec; // DefinedType
/* END_OF_SYMBOL_DEFINITION EstablishmentTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EstablishmentTime */
let _cached_decoder_for_EstablishmentTime: $.ASN1Decoder<EstablishmentTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EstablishmentTime */

/* START_OF_SYMBOL_DEFINITION _decode_EstablishmentTime */
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishmentTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishmentTime} The decoded data structure.
 */
export function _decode_EstablishmentTime(el: _Element) {
    if (!_cached_decoder_for_EstablishmentTime) {
        _cached_decoder_for_EstablishmentTime = _decode_Timespec;
    }
    return _cached_decoder_for_EstablishmentTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EstablishmentTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EstablishmentTime */
let _cached_encoder_for_EstablishmentTime: $.ASN1Encoder<EstablishmentTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EstablishmentTime */

/* START_OF_SYMBOL_DEFINITION _encode_EstablishmentTime */
/**
 * @summary Encodes a(n) EstablishmentTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishmentTime, encoded as an ASN.1 Element.
 */
export function _encode_EstablishmentTime(
    value: EstablishmentTime,
    elGetter: $.ASN1Encoder<EstablishmentTime>
) {
    if (!_cached_encoder_for_EstablishmentTime) {
        _cached_encoder_for_EstablishmentTime = _encode_Timespec;
    }
    return _cached_encoder_for_EstablishmentTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EstablishmentTime */

/* eslint-enable */
