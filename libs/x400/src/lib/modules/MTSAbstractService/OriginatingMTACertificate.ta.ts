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
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificates.ta';
export {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificates.ta';

/* START_OF_SYMBOL_DEFINITION OriginatingMTACertificate */
/**
 * @summary OriginatingMTACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingMTACertificate  ::=  Certificates
 * ```
 */
export type OriginatingMTACertificate = Certificates; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatingMTACertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatingMTACertificate */
let _cached_decoder_for_OriginatingMTACertificate: $.ASN1Decoder<OriginatingMTACertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatingMTACertificate */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatingMTACertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingMTACertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatingMTACertificate} The decoded data structure.
 */
export function _decode_OriginatingMTACertificate(el: _Element) {
    if (!_cached_decoder_for_OriginatingMTACertificate) {
        _cached_decoder_for_OriginatingMTACertificate = _decode_Certificates;
    }
    return _cached_decoder_for_OriginatingMTACertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatingMTACertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatingMTACertificate */
let _cached_encoder_for_OriginatingMTACertificate: $.ASN1Encoder<OriginatingMTACertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatingMTACertificate */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatingMTACertificate */
/**
 * @summary Encodes a(n) OriginatingMTACertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingMTACertificate, encoded as an ASN.1 Element.
 */
export function _encode_OriginatingMTACertificate(
    value: OriginatingMTACertificate,
    elGetter: $.ASN1Encoder<OriginatingMTACertificate>
) {
    if (!_cached_encoder_for_OriginatingMTACertificate) {
        _cached_encoder_for_OriginatingMTACertificate = _encode_Certificates;
    }
    return _cached_encoder_for_OriginatingMTACertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatingMTACertificate */

/* eslint-enable */
