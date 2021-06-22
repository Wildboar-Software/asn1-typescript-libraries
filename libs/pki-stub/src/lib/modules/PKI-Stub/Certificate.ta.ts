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
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from '../PKI-Stub/SIGNED.ta';
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from '../PKI-Stub/SIGNED.ta';
import {
    TBSCertificate,
    _decode_TBSCertificate,
    _encode_TBSCertificate,
} from '../PKI-Stub/TBSCertificate.ta';
export {
    TBSCertificate,
    _decode_TBSCertificate,
    _encode_TBSCertificate,
} from '../PKI-Stub/TBSCertificate.ta';

/* START_OF_SYMBOL_DEFINITION Certificate */
/**
 * @summary Certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificate  ::=  SIGNED{TBSCertificate}
 * ```
 */
export type Certificate = SIGNED<TBSCertificate>; // DefinedType
/* END_OF_SYMBOL_DEFINITION Certificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificate */
let _cached_decoder_for_Certificate: $.ASN1Decoder<Certificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificate */

/* START_OF_SYMBOL_DEFINITION _decode_Certificate */
/**
 * @summary Decodes an ASN.1 element into a(n) Certificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Certificate} The decoded data structure.
 */
export function _decode_Certificate(el: _Element) {
    if (!_cached_decoder_for_Certificate) {
        _cached_decoder_for_Certificate = _get_decoder_for_SIGNED<TBSCertificate>(
            _decode_TBSCertificate
        );
    }
    return _cached_decoder_for_Certificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Certificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificate */
let _cached_encoder_for_Certificate: $.ASN1Encoder<Certificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificate */

/* START_OF_SYMBOL_DEFINITION _encode_Certificate */
/**
 * @summary Encodes a(n) Certificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificate, encoded as an ASN.1 Element.
 */
export function _encode_Certificate(
    value: Certificate,
    elGetter: $.ASN1Encoder<Certificate>
) {
    if (!_cached_encoder_for_Certificate) {
        _cached_encoder_for_Certificate = _get_encoder_for_SIGNED<TBSCertificate>(
            _encode_TBSCertificate
        );
    }
    return _cached_encoder_for_Certificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Certificate */

/* eslint-enable */
