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
    SIGNEDDATA,
    _get_decoder_for_SIGNEDDATA,
    _get_encoder_for_SIGNEDDATA,
} from '../AuthenticationContextForBiometrics/SIGNEDDATA.ta';
export {
    SIGNEDDATA,
    _get_decoder_for_SIGNEDDATA,
    _get_encoder_for_SIGNEDDATA,
} from '../AuthenticationContextForBiometrics/SIGNEDDATA.ta';
import {
    EncapsulatedContentInfoBRTCertificate,
    _decode_EncapsulatedContentInfoBRTCertificate,
    _encode_EncapsulatedContentInfoBRTCertificate,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoBRTCertificate.ta';
export {
    EncapsulatedContentInfoBRTCertificate,
    _decode_EncapsulatedContentInfoBRTCertificate,
    _encode_EncapsulatedContentInfoBRTCertificate,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoBRTCertificate.ta';

/* START_OF_SYMBOL_DEFINITION ContentBRTCertificate */
/**
 * @summary ContentBRTCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentBRTCertificate  ::=  SIGNEDDATA { EncapsulatedContentInfoBRTCertificate }
 * ```
 */
export type ContentBRTCertificate = SIGNEDDATA<EncapsulatedContentInfoBRTCertificate>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ContentBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentBRTCertificate */
let _cached_decoder_for_ContentBRTCertificate: $.ASN1Decoder<ContentBRTCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_ContentBRTCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentBRTCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentBRTCertificate} The decoded data structure.
 */
export function _decode_ContentBRTCertificate(el: _Element) {
    if (!_cached_decoder_for_ContentBRTCertificate) {
        _cached_decoder_for_ContentBRTCertificate = _get_decoder_for_SIGNEDDATA<EncapsulatedContentInfoBRTCertificate>(
            _decode_EncapsulatedContentInfoBRTCertificate
        );
    }
    return _cached_decoder_for_ContentBRTCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentBRTCertificate */
let _cached_encoder_for_ContentBRTCertificate: $.ASN1Encoder<ContentBRTCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentBRTCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_ContentBRTCertificate */
/**
 * @summary Encodes a(n) ContentBRTCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentBRTCertificate, encoded as an ASN.1 Element.
 */
export function _encode_ContentBRTCertificate(
    value: ContentBRTCertificate,
    elGetter: $.ASN1Encoder<ContentBRTCertificate>
) {
    if (!_cached_encoder_for_ContentBRTCertificate) {
        _cached_encoder_for_ContentBRTCertificate = _get_encoder_for_SIGNEDDATA<EncapsulatedContentInfoBRTCertificate>(
            _encode_EncapsulatedContentInfoBRTCertificate
        );
    }
    return _cached_encoder_for_ContentBRTCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentBRTCertificate */

/* eslint-enable */
