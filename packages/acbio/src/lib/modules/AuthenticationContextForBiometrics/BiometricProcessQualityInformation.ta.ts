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
    BiometricProcessQuality,
    _decode_BiometricProcessQuality,
    _encode_BiometricProcessQuality,
} from '../AuthenticationContextForBiometrics/BiometricProcessQuality.ta.js';
export {
    BiometricProcessQuality,
    _decode_BiometricProcessQuality,
    _encode_BiometricProcessQuality,
} from '../AuthenticationContextForBiometrics/BiometricProcessQuality.ta.js';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.js';
export {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.js';

/* START_OF_SYMBOL_DEFINITION BiometricProcessQualityInformation */
/**
 * @summary BiometricProcessQualityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcessQualityInformation  ::=  CHOICE {
 *     biometricProcessQuality             BiometricProcessQuality,
 *     biometricProcessQualityReferrer     URI }
 * ```
 */
export type BiometricProcessQualityInformation =
    | { biometricProcessQuality: BiometricProcessQuality } /* CHOICE_ALT_ROOT */
    | { biometricProcessQualityReferrer: URI } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BiometricProcessQualityInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessQualityInformation */
let _cached_decoder_for_BiometricProcessQualityInformation: $.ASN1Decoder<BiometricProcessQualityInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessQualityInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricProcessQualityInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) BiometricProcessQualityInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricProcessQualityInformation} The decoded data structure.
 */
export function _decode_BiometricProcessQualityInformation(el: _Element) {
    if (!_cached_decoder_for_BiometricProcessQualityInformation) {
        _cached_decoder_for_BiometricProcessQualityInformation = $._decode_inextensible_choice<BiometricProcessQualityInformation>(
            {
                'CONTEXT 0': [
                    'biometricProcessQuality',
                    _decode_BiometricProcessQuality,
                ],
                'CONTEXT 1': ['biometricProcessQualityReferrer', _decode_URI],
            }
        );
    }
    return _cached_decoder_for_BiometricProcessQualityInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BiometricProcessQualityInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessQualityInformation */
let _cached_encoder_for_BiometricProcessQualityInformation: $.ASN1Encoder<BiometricProcessQualityInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessQualityInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricProcessQualityInformation */
/**
 * @summary Encodes a(n) BiometricProcessQualityInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricProcessQualityInformation, encoded as an ASN.1 Element.
 */
export function _encode_BiometricProcessQualityInformation(
    value: BiometricProcessQualityInformation,
    elGetter: $.ASN1Encoder<BiometricProcessQualityInformation>
) {
    if (!_cached_encoder_for_BiometricProcessQualityInformation) {
        _cached_encoder_for_BiometricProcessQualityInformation = $._encode_choice<BiometricProcessQualityInformation>(
            {
                biometricProcessQuality: _encode_BiometricProcessQuality,
                biometricProcessQualityReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BiometricProcessQualityInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_BiometricProcessQualityInformation */

/* eslint-enable */
