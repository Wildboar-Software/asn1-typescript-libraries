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
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta.js';

/* START_OF_SYMBOL_DEFINITION SignalRate */
/**
 * @summary SignalRate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalRate  ::=  CHOICE {
 *   objectClass                [0]  OBJECT IDENTIFIER,
 *   characteristicInformation  [1]  CharacteristicInformation
 * }
 * ```
 */
export type SignalRate =
    | { objectClass: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | {
          characteristicInformation: CharacteristicInformation;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SignalRate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalRate */
let _cached_decoder_for_SignalRate: $.ASN1Decoder<SignalRate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalRate */

/* START_OF_SYMBOL_DEFINITION _decode_SignalRate */
/**
 * @summary Decodes an ASN.1 element into a(n) SignalRate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalRate} The decoded data structure.
 */
export function _decode_SignalRate(el: _Element) {
    if (!_cached_decoder_for_SignalRate) {
        _cached_decoder_for_SignalRate = $._decode_inextensible_choice<SignalRate>(
            {
                'CONTEXT 0': [
                    'objectClass',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'characteristicInformation',
                    $._decode_implicit<CharacteristicInformation>(
                        () => _decode_CharacteristicInformation
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SignalRate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignalRate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalRate */
let _cached_encoder_for_SignalRate: $.ASN1Encoder<SignalRate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalRate */

/* START_OF_SYMBOL_DEFINITION _encode_SignalRate */
/**
 * @summary Encodes a(n) SignalRate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalRate, encoded as an ASN.1 Element.
 */
export function _encode_SignalRate(
    value: SignalRate,
    elGetter: $.ASN1Encoder<SignalRate>
) {
    if (!_cached_encoder_for_SignalRate) {
        _cached_encoder_for_SignalRate = $._encode_choice<SignalRate>(
            {
                objectClass: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                characteristicInformation: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CharacteristicInformation,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SignalRate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignalRate */

/* eslint-enable */
