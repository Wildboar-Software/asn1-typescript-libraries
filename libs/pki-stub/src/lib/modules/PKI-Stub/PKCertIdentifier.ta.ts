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
    IssuerSerialNumber,
    _decode_IssuerSerialNumber,
    _encode_IssuerSerialNumber,
} from '../PKI-Stub/IssuerSerialNumber.ta';
export {
    IssuerSerialNumber,
    _decode_IssuerSerialNumber,
    _encode_IssuerSerialNumber,
} from '../PKI-Stub/IssuerSerialNumber.ta';
import {
    FingerPrint,
    _get_decoder_for_FingerPrint,
    _get_encoder_for_FingerPrint,
} from '../PKI-Stub/FingerPrint.ta';
export {
    FingerPrint,
    _get_decoder_for_FingerPrint,
    _get_encoder_for_FingerPrint,
} from '../PKI-Stub/FingerPrint.ta';
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from '../PKI-Stub/Certificate.ta';
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from '../PKI-Stub/Certificate.ta';
import {
    PublicKey,
    _decode_PublicKey,
    _encode_PublicKey,
} from '../PKI-Stub/PublicKey.ta';
export {
    PublicKey,
    _decode_PublicKey,
    _encode_PublicKey,
} from '../PKI-Stub/PublicKey.ta';

/* START_OF_SYMBOL_DEFINITION PKCertIdentifier */
/**
 * @summary PKCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCertIdentifier  ::=  CHOICE {
 *   issuerSerialNumber         IssuerSerialNumber,
 *   fingerprintPKC        [0]  IMPLICIT FingerPrint {Certificate},
 *   fingerprintPK         [1]  IMPLICIT FingerPrint {PublicKey},
 *   ... }
 * ```
 */
export type PKCertIdentifier =
    | { issuerSerialNumber: IssuerSerialNumber } /* CHOICE_ALT_ROOT */
    | { fingerprintPKC: FingerPrint<Certificate> } /* CHOICE_ALT_ROOT */
    | { fingerprintPK: FingerPrint<PublicKey> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PKCertIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCertIdentifier */
let _cached_decoder_for_PKCertIdentifier: $.ASN1Decoder<PKCertIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCertIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_PKCertIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) PKCertIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCertIdentifier} The decoded data structure.
 */
export function _decode_PKCertIdentifier(el: _Element) {
    if (!_cached_decoder_for_PKCertIdentifier) {
        _cached_decoder_for_PKCertIdentifier = $._decode_extensible_choice<PKCertIdentifier>(
            {
                'UNIVERSAL 16': [
                    'issuerSerialNumber',
                    _decode_IssuerSerialNumber,
                ],
                'CONTEXT 0': [
                    'fingerprintPKC',
                    $._decode_implicit<FingerPrint<Certificate>>(() =>
                        _get_decoder_for_FingerPrint<Certificate>(
                            _decode_Certificate
                        )
                    ),
                ],
                'CONTEXT 1': [
                    'fingerprintPK',
                    $._decode_implicit<FingerPrint<PublicKey>>(() =>
                        _get_decoder_for_FingerPrint<PublicKey>(
                            _decode_PublicKey
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PKCertIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKCertIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCertIdentifier */
let _cached_encoder_for_PKCertIdentifier: $.ASN1Encoder<PKCertIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCertIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_PKCertIdentifier */
/**
 * @summary Encodes a(n) PKCertIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCertIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PKCertIdentifier(
    value: PKCertIdentifier,
    elGetter: $.ASN1Encoder<PKCertIdentifier>
) {
    if (!_cached_encoder_for_PKCertIdentifier) {
        _cached_encoder_for_PKCertIdentifier = $._encode_choice<PKCertIdentifier>(
            {
                issuerSerialNumber: _encode_IssuerSerialNumber,
                fingerprintPKC: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_FingerPrint<Certificate>(
                            _encode_Certificate
                        ),
                    $.BER
                ),
                fingerprintPK: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_FingerPrint<PublicKey>(
                            _encode_PublicKey
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PKCertIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKCertIdentifier */

/* eslint-enable */
