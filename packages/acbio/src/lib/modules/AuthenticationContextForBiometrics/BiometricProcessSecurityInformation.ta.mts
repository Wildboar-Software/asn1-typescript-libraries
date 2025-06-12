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
    BiometricProcessSecurity,
    _decode_BiometricProcessSecurity,
    _encode_BiometricProcessSecurity,
} from '../AuthenticationContextForBiometrics/BiometricProcessSecurity.ta.mjs';
export {
    BiometricProcessSecurity,
    _decode_BiometricProcessSecurity,
    _encode_BiometricProcessSecurity,
} from '../AuthenticationContextForBiometrics/BiometricProcessSecurity.ta.mjs';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';
export {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BiometricProcessSecurityInformation */
/**
 * @summary BiometricProcessSecurityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcessSecurityInformation  ::=  CHOICE {
 *     biometricProcessSecurity            BiometricProcessSecurity,
 *     biometricProcessSecurityReferrer    URI }
 * ```
 */
export type BiometricProcessSecurityInformation =
    | {
          biometricProcessSecurity: BiometricProcessSecurity;
      } /* CHOICE_ALT_ROOT */
    | { biometricProcessSecurityReferrer: URI } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BiometricProcessSecurityInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessSecurityInformation */
let _cached_decoder_for_BiometricProcessSecurityInformation: $.ASN1Decoder<BiometricProcessSecurityInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessSecurityInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricProcessSecurityInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) BiometricProcessSecurityInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricProcessSecurityInformation} The decoded data structure.
 */
export function _decode_BiometricProcessSecurityInformation(el: _Element) {
    if (!_cached_decoder_for_BiometricProcessSecurityInformation) {
        _cached_decoder_for_BiometricProcessSecurityInformation = $._decode_inextensible_choice<BiometricProcessSecurityInformation>(
            {
                'CONTEXT 0': [
                    'biometricProcessSecurity',
                    _decode_BiometricProcessSecurity,
                ],
                'CONTEXT 1': ['biometricProcessSecurityReferrer', _decode_URI],
            }
        );
    }
    return _cached_decoder_for_BiometricProcessSecurityInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BiometricProcessSecurityInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessSecurityInformation */
let _cached_encoder_for_BiometricProcessSecurityInformation: $.ASN1Encoder<BiometricProcessSecurityInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessSecurityInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricProcessSecurityInformation */
/**
 * @summary Encodes a(n) BiometricProcessSecurityInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricProcessSecurityInformation, encoded as an ASN.1 Element.
 */
export function _encode_BiometricProcessSecurityInformation(
    value: BiometricProcessSecurityInformation,
    elGetter: $.ASN1Encoder<BiometricProcessSecurityInformation>
) {
    if (!_cached_encoder_for_BiometricProcessSecurityInformation) {
        _cached_encoder_for_BiometricProcessSecurityInformation = $._encode_choice<BiometricProcessSecurityInformation>(
            {
                biometricProcessSecurity: _encode_BiometricProcessSecurity,
                biometricProcessSecurityReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BiometricProcessSecurityInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_BiometricProcessSecurityInformation */

/* eslint-enable */
