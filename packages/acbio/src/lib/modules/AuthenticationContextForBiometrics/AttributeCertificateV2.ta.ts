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
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from '@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/AttributeCertificate.ta.js';

/* START_OF_SYMBOL_DEFINITION AttributeCertificateV2 */
/**
 * @summary AttributeCertificateV2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateV2  ::=  AttributeCertificate
 * ```
 */
export type AttributeCertificateV2 = AttributeCertificate; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttributeCertificateV2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateV2 */
let _cached_decoder_for_AttributeCertificateV2: $.ASN1Decoder<AttributeCertificateV2> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateV2 */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCertificateV2 */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateV2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateV2} The decoded data structure.
 */
export function _decode_AttributeCertificateV2(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateV2) {
        _cached_decoder_for_AttributeCertificateV2 = _decode_AttributeCertificate;
    }
    return _cached_decoder_for_AttributeCertificateV2(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCertificateV2 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateV2 */
let _cached_encoder_for_AttributeCertificateV2: $.ASN1Encoder<AttributeCertificateV2> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateV2 */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCertificateV2 */
/**
 * @summary Encodes a(n) AttributeCertificateV2 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateV2, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateV2(
    value: AttributeCertificateV2,
    elGetter: $.ASN1Encoder<AttributeCertificateV2>
) {
    if (!_cached_encoder_for_AttributeCertificateV2) {
        _cached_encoder_for_AttributeCertificateV2 = _encode_AttributeCertificate;
    }
    return _cached_encoder_for_AttributeCertificateV2(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCertificateV2 */

/* eslint-enable */
