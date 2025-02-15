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
    OptionalIdentifier,
    _decode_OptionalIdentifier,
    _encode_OptionalIdentifier,
} from '../GrmAttributeDefinitionModule/OptionalIdentifier.ta';
export {
    OptionalIdentifier,
    _decode_OptionalIdentifier,
    _encode_OptionalIdentifier,
} from '../GrmAttributeDefinitionModule/OptionalIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION SupportedChoice */
/**
 * @summary SupportedChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedChoice  ::=  CHOICE {
 *   establish    [0] EXPLICIT OptionalIdentifier,
 *   terminate    [1] EXPLICIT OptionalIdentifier,
 *   query        [2] EXPLICIT OptionalIdentifier,
 *   notify       [3] EXPLICIT OptionalIdentifier,
 *   userDefined  [4] EXPLICIT OptionalIdentifier
 * }
 * ```
 */
export type SupportedChoice =
    | { establish: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { terminate: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { query: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { notify: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { userDefined: OptionalIdentifier } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SupportedChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedChoice */
let _cached_decoder_for_SupportedChoice: $.ASN1Decoder<SupportedChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedChoice */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedChoice} The decoded data structure.
 */
export function _decode_SupportedChoice(el: _Element) {
    if (!_cached_decoder_for_SupportedChoice) {
        _cached_decoder_for_SupportedChoice = $._decode_inextensible_choice<SupportedChoice>(
            {
                'CONTEXT 0': [
                    'establish',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'terminate',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 2': [
                    'query',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 3': [
                    'notify',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 4': [
                    'userDefined',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SupportedChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedChoice */
let _cached_encoder_for_SupportedChoice: $.ASN1Encoder<SupportedChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedChoice */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedChoice */
/**
 * @summary Encodes a(n) SupportedChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedChoice, encoded as an ASN.1 Element.
 */
export function _encode_SupportedChoice(
    value: SupportedChoice,
    elGetter: $.ASN1Encoder<SupportedChoice>
) {
    if (!_cached_encoder_for_SupportedChoice) {
        _cached_encoder_for_SupportedChoice = $._encode_choice<SupportedChoice>(
            {
                establish: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                terminate: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                query: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                notify: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                userDefined: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SupportedChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedChoice */

/* eslint-enable */
