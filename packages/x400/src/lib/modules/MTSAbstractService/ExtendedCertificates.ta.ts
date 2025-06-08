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
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from '../MTSAbstractService/ExtendedCertificate.ta';
export {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from '../MTSAbstractService/ExtendedCertificate.ta';

/* START_OF_SYMBOL_DEFINITION ExtendedCertificates */
/**
 * @summary ExtendedCertificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificates  ::=  SET SIZE (1..ub-certificates) OF ExtendedCertificate
 * ```
 */
export type ExtendedCertificates = ExtendedCertificate[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ExtendedCertificates */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedCertificates */
let _cached_decoder_for_ExtendedCertificates: $.ASN1Decoder<ExtendedCertificates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedCertificates */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedCertificates */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificates} The decoded data structure.
 */
export function _decode_ExtendedCertificates(el: _Element) {
    if (!_cached_decoder_for_ExtendedCertificates) {
        _cached_decoder_for_ExtendedCertificates = $._decodeSetOf<ExtendedCertificate>(
            () => _decode_ExtendedCertificate
        );
    }
    return _cached_decoder_for_ExtendedCertificates(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedCertificates */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedCertificates */
let _cached_encoder_for_ExtendedCertificates: $.ASN1Encoder<ExtendedCertificates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedCertificates */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedCertificates */
/**
 * @summary Encodes a(n) ExtendedCertificates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificates, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificates(
    value: ExtendedCertificates,
    elGetter: $.ASN1Encoder<ExtendedCertificates>
) {
    if (!_cached_encoder_for_ExtendedCertificates) {
        _cached_encoder_for_ExtendedCertificates = $._encodeSetOf<ExtendedCertificate>(
            () => _encode_ExtendedCertificate,
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedCertificates(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedCertificates */

/* eslint-enable */
