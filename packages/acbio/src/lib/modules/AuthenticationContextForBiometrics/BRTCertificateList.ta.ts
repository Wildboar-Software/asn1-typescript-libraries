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
    BRTCertificate,
    _decode_BRTCertificate,
    _encode_BRTCertificate,
} from '../AuthenticationContextForBiometrics/BRTCertificate.ta.js';
export {
    BRTCertificate,
    _decode_BRTCertificate,
    _encode_BRTCertificate,
} from '../AuthenticationContextForBiometrics/BRTCertificate.ta.js';

/* START_OF_SYMBOL_DEFINITION BRTCertificateList */
/**
 * @summary BRTCertificateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRTCertificateList  ::=  SEQUENCE OF BRTCertificate
 * ```
 */
export type BRTCertificateList = BRTCertificate[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BRTCertificateList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BRTCertificateList */
let _cached_decoder_for_BRTCertificateList: $.ASN1Decoder<BRTCertificateList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BRTCertificateList */

/* START_OF_SYMBOL_DEFINITION _decode_BRTCertificateList */
/**
 * @summary Decodes an ASN.1 element into a(n) BRTCertificateList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRTCertificateList} The decoded data structure.
 */
export function _decode_BRTCertificateList(el: _Element) {
    if (!_cached_decoder_for_BRTCertificateList) {
        _cached_decoder_for_BRTCertificateList = $._decodeSequenceOf<BRTCertificate>(
            () => _decode_BRTCertificate
        );
    }
    return _cached_decoder_for_BRTCertificateList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BRTCertificateList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BRTCertificateList */
let _cached_encoder_for_BRTCertificateList: $.ASN1Encoder<BRTCertificateList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BRTCertificateList */

/* START_OF_SYMBOL_DEFINITION _encode_BRTCertificateList */
/**
 * @summary Encodes a(n) BRTCertificateList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRTCertificateList, encoded as an ASN.1 Element.
 */
export function _encode_BRTCertificateList(
    value: BRTCertificateList,
    elGetter: $.ASN1Encoder<BRTCertificateList>
) {
    if (!_cached_encoder_for_BRTCertificateList) {
        _cached_encoder_for_BRTCertificateList = $._encodeSequenceOf<BRTCertificate>(
            () => _encode_BRTCertificate,
            $.BER
        );
    }
    return _cached_encoder_for_BRTCertificateList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BRTCertificateList */

/* eslint-enable */
