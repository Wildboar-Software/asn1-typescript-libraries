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
    QualityEvaluationExtension,
    _decode_QualityEvaluationExtension,
    _encode_QualityEvaluationExtension,
} from '../AuthenticationContextForBiometrics/QualityEvaluationExtension.ta';
export {
    QualityEvaluationExtension,
    _decode_QualityEvaluationExtension,
    _encode_QualityEvaluationExtension,
} from '../AuthenticationContextForBiometrics/QualityEvaluationExtension.ta';
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

/* START_OF_SYMBOL_DEFINITION QualityEvaluationExtensionInformation */
/**
 * @summary QualityEvaluationExtensionInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QualityEvaluationExtensionInformation  ::=  CHOICE {
 *     qualityEvaluationExtension          QualityEvaluationExtension,
 *     qualityEvaluationExtensionReferrer  URI }
 * ```
 */
export type QualityEvaluationExtensionInformation =
    | {
          qualityEvaluationExtension: QualityEvaluationExtension;
      } /* CHOICE_ALT_ROOT */
    | { qualityEvaluationExtensionReferrer: URI } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION QualityEvaluationExtensionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_QualityEvaluationExtensionInformation */
let _cached_decoder_for_QualityEvaluationExtensionInformation: $.ASN1Decoder<QualityEvaluationExtensionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_QualityEvaluationExtensionInformation */

/* START_OF_SYMBOL_DEFINITION _decode_QualityEvaluationExtensionInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) QualityEvaluationExtensionInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QualityEvaluationExtensionInformation} The decoded data structure.
 */
export function _decode_QualityEvaluationExtensionInformation(el: _Element) {
    if (!_cached_decoder_for_QualityEvaluationExtensionInformation) {
        _cached_decoder_for_QualityEvaluationExtensionInformation = $._decode_inextensible_choice<QualityEvaluationExtensionInformation>(
            {
                'CONTEXT 0': [
                    'qualityEvaluationExtension',
                    _decode_QualityEvaluationExtension,
                ],
                'CONTEXT 1': [
                    'qualityEvaluationExtensionReferrer',
                    _decode_URI,
                ],
            }
        );
    }
    return _cached_decoder_for_QualityEvaluationExtensionInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_QualityEvaluationExtensionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_QualityEvaluationExtensionInformation */
let _cached_encoder_for_QualityEvaluationExtensionInformation: $.ASN1Encoder<QualityEvaluationExtensionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_QualityEvaluationExtensionInformation */

/* START_OF_SYMBOL_DEFINITION _encode_QualityEvaluationExtensionInformation */
/**
 * @summary Encodes a(n) QualityEvaluationExtensionInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualityEvaluationExtensionInformation, encoded as an ASN.1 Element.
 */
export function _encode_QualityEvaluationExtensionInformation(
    value: QualityEvaluationExtensionInformation,
    elGetter: $.ASN1Encoder<QualityEvaluationExtensionInformation>
) {
    if (!_cached_encoder_for_QualityEvaluationExtensionInformation) {
        _cached_encoder_for_QualityEvaluationExtensionInformation = $._encode_choice<QualityEvaluationExtensionInformation>(
            {
                qualityEvaluationExtension: _encode_QualityEvaluationExtension,
                qualityEvaluationExtensionReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_QualityEvaluationExtensionInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_QualityEvaluationExtensionInformation */

/* eslint-enable */
