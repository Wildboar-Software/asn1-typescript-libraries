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
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from '@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/AttributeCertificate.ta';

/* START_OF_SYMBOL_DEFINITION AttributeCertificates */
/**
 * @summary AttributeCertificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificates  ::=  SEQUENCE SIZE (1..MAX) OF AttributeCertificate
 * ```
 */
export type AttributeCertificates = AttributeCertificate[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AttributeCertificates */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificates */
let _cached_decoder_for_AttributeCertificates: $.ASN1Decoder<AttributeCertificates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificates */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCertificates */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificates} The decoded data structure.
 */
export function _decode_AttributeCertificates(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificates) {
        _cached_decoder_for_AttributeCertificates = $._decodeSequenceOf<AttributeCertificate>(
            () => _decode_AttributeCertificate
        );
    }
    return _cached_decoder_for_AttributeCertificates(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCertificates */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificates */
let _cached_encoder_for_AttributeCertificates: $.ASN1Encoder<AttributeCertificates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificates */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCertificates */
/**
 * @summary Encodes a(n) AttributeCertificates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificates, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificates(
    value: AttributeCertificates,
    elGetter: $.ASN1Encoder<AttributeCertificates>
) {
    if (!_cached_encoder_for_AttributeCertificates) {
        _cached_encoder_for_AttributeCertificates = $._encodeSequenceOf<AttributeCertificate>(
            () => _encode_AttributeCertificate,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeCertificates(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCertificates */

/* eslint-enable */
