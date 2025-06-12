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

/* START_OF_SYMBOL_DEFINITION InformationLossSuspected */
/**
 * @summary InformationLossSuspected
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationLossSuspected  ::=  BOOLEAN
 * ```
 */
export type InformationLossSuspected = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION InformationLossSuspected */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationLossSuspected */
let _cached_decoder_for_InformationLossSuspected: $.ASN1Decoder<InformationLossSuspected> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationLossSuspected */

/* START_OF_SYMBOL_DEFINITION _decode_InformationLossSuspected */
/**
 * @summary Decodes an ASN.1 element into a(n) InformationLossSuspected
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationLossSuspected} The decoded data structure.
 */
export function _decode_InformationLossSuspected(el: _Element) {
    if (!_cached_decoder_for_InformationLossSuspected) {
        _cached_decoder_for_InformationLossSuspected = $._decodeBoolean;
    }
    return _cached_decoder_for_InformationLossSuspected(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InformationLossSuspected */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationLossSuspected */
let _cached_encoder_for_InformationLossSuspected: $.ASN1Encoder<InformationLossSuspected> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationLossSuspected */

/* START_OF_SYMBOL_DEFINITION _encode_InformationLossSuspected */
/**
 * @summary Encodes a(n) InformationLossSuspected into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationLossSuspected, encoded as an ASN.1 Element.
 */
export function _encode_InformationLossSuspected(
    value: InformationLossSuspected,
    elGetter: $.ASN1Encoder<InformationLossSuspected>
) {
    if (!_cached_encoder_for_InformationLossSuspected) {
        _cached_encoder_for_InformationLossSuspected = $._encodeBoolean;
    }
    return _cached_encoder_for_InformationLossSuspected(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InformationLossSuspected */

/* eslint-enable */
