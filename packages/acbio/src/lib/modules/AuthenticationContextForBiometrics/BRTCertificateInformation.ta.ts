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
    BRTCertificateList,
    _decode_BRTCertificateList,
    _encode_BRTCertificateList,
} from '../AuthenticationContextForBiometrics/BRTCertificateList.ta.js';
export {
    BRTCertificateList,
    _decode_BRTCertificateList,
    _encode_BRTCertificateList,
} from '../AuthenticationContextForBiometrics/BRTCertificateList.ta.js';
import {
    BRTCertificateReferrerList,
    _decode_BRTCertificateReferrerList,
    _encode_BRTCertificateReferrerList,
} from '../AuthenticationContextForBiometrics/BRTCertificateReferrerList.ta.js';
export {
    BRTCertificateReferrerList,
    _decode_BRTCertificateReferrerList,
    _encode_BRTCertificateReferrerList,
} from '../AuthenticationContextForBiometrics/BRTCertificateReferrerList.ta.js';

/* START_OF_SYMBOL_DEFINITION BRTCertificateInformation */
/**
 * @summary BRTCertificateInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRTCertificateInformation  ::=  CHOICE {
 *     brtCertificateList          BRTCertificateList,
 *     brtCertificateReferrerList  BRTCertificateReferrerList }
 * ```
 */
export type BRTCertificateInformation =
    | { brtCertificateList: BRTCertificateList } /* CHOICE_ALT_ROOT */
    | {
          brtCertificateReferrerList: BRTCertificateReferrerList;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BRTCertificateInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BRTCertificateInformation */
let _cached_decoder_for_BRTCertificateInformation: $.ASN1Decoder<BRTCertificateInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BRTCertificateInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BRTCertificateInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) BRTCertificateInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRTCertificateInformation} The decoded data structure.
 */
export function _decode_BRTCertificateInformation(el: _Element) {
    if (!_cached_decoder_for_BRTCertificateInformation) {
        _cached_decoder_for_BRTCertificateInformation = $._decode_inextensible_choice<BRTCertificateInformation>(
            {
                'CONTEXT 0': ['brtCertificateList', _decode_BRTCertificateList],
                'CONTEXT 1': [
                    'brtCertificateReferrerList',
                    _decode_BRTCertificateReferrerList,
                ],
            }
        );
    }
    return _cached_decoder_for_BRTCertificateInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BRTCertificateInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BRTCertificateInformation */
let _cached_encoder_for_BRTCertificateInformation: $.ASN1Encoder<BRTCertificateInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BRTCertificateInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BRTCertificateInformation */
/**
 * @summary Encodes a(n) BRTCertificateInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRTCertificateInformation, encoded as an ASN.1 Element.
 */
export function _encode_BRTCertificateInformation(
    value: BRTCertificateInformation,
    elGetter: $.ASN1Encoder<BRTCertificateInformation>
) {
    if (!_cached_encoder_for_BRTCertificateInformation) {
        _cached_encoder_for_BRTCertificateInformation = $._encode_choice<BRTCertificateInformation>(
            {
                brtCertificateList: _encode_BRTCertificateList,
                brtCertificateReferrerList: _encode_BRTCertificateReferrerList,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BRTCertificateInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BRTCertificateInformation */

/* eslint-enable */
