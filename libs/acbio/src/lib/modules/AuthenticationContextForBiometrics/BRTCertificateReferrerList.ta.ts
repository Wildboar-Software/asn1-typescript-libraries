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
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta';
export {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta';

/* START_OF_SYMBOL_DEFINITION BRTCertificateReferrerList */
/**
 * @summary BRTCertificateReferrerList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRTCertificateReferrerList  ::=  SEQUENCE OF URI
 * ```
 */
export type BRTCertificateReferrerList = URI[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BRTCertificateReferrerList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BRTCertificateReferrerList */
let _cached_decoder_for_BRTCertificateReferrerList: $.ASN1Decoder<BRTCertificateReferrerList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BRTCertificateReferrerList */

/* START_OF_SYMBOL_DEFINITION _decode_BRTCertificateReferrerList */
/**
 * @summary Decodes an ASN.1 element into a(n) BRTCertificateReferrerList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRTCertificateReferrerList} The decoded data structure.
 */
export function _decode_BRTCertificateReferrerList(el: _Element) {
    if (!_cached_decoder_for_BRTCertificateReferrerList) {
        _cached_decoder_for_BRTCertificateReferrerList = $._decodeSequenceOf<URI>(
            () => _decode_URI
        );
    }
    return _cached_decoder_for_BRTCertificateReferrerList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BRTCertificateReferrerList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BRTCertificateReferrerList */
let _cached_encoder_for_BRTCertificateReferrerList: $.ASN1Encoder<BRTCertificateReferrerList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BRTCertificateReferrerList */

/* START_OF_SYMBOL_DEFINITION _encode_BRTCertificateReferrerList */
/**
 * @summary Encodes a(n) BRTCertificateReferrerList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRTCertificateReferrerList, encoded as an ASN.1 Element.
 */
export function _encode_BRTCertificateReferrerList(
    value: BRTCertificateReferrerList,
    elGetter: $.ASN1Encoder<BRTCertificateReferrerList>
) {
    if (!_cached_encoder_for_BRTCertificateReferrerList) {
        _cached_encoder_for_BRTCertificateReferrerList = $._encodeSequenceOf<URI>(
            () => _encode_URI,
            $.BER
        );
    }
    return _cached_encoder_for_BRTCertificateReferrerList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BRTCertificateReferrerList */

/* eslint-enable */
