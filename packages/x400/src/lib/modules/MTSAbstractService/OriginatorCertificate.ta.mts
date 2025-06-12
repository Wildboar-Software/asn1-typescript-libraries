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
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificates.ta.mjs';
export {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificates.ta.mjs';

/* START_OF_SYMBOL_DEFINITION OriginatorCertificate */
/**
 * @summary OriginatorCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorCertificate  ::=  Certificates
 * ```
 */
export type OriginatorCertificate = Certificates; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatorCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorCertificate */
let _cached_decoder_for_OriginatorCertificate: $.ASN1Decoder<OriginatorCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorCertificate} The decoded data structure.
 */
export function _decode_OriginatorCertificate(el: _Element) {
    if (!_cached_decoder_for_OriginatorCertificate) {
        _cached_decoder_for_OriginatorCertificate = _decode_Certificates;
    }
    return _cached_decoder_for_OriginatorCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorCertificate */
let _cached_encoder_for_OriginatorCertificate: $.ASN1Encoder<OriginatorCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorCertificate */
/**
 * @summary Encodes a(n) OriginatorCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorCertificate, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorCertificate(
    value: OriginatorCertificate,
    elGetter: $.ASN1Encoder<OriginatorCertificate>
) {
    if (!_cached_encoder_for_OriginatorCertificate) {
        _cached_encoder_for_OriginatorCertificate = _encode_Certificates;
    }
    return _cached_encoder_for_OriginatorCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorCertificate */

/* eslint-enable */
