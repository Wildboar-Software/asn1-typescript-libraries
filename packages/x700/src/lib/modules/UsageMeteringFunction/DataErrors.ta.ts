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
    PossibleError,
    _decode_PossibleError,
    _encode_PossibleError,
} from '../UsageMeteringFunction/PossibleError.ta.js';
export {
    PossibleError,
    _decode_PossibleError,
    _encode_PossibleError,
} from '../UsageMeteringFunction/PossibleError.ta.js';

/* START_OF_SYMBOL_DEFINITION DataErrors */
/**
 * @summary DataErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataErrors  ::=  CHOICE {
 *   possibleErrors  SET OF PossibleError,
 *   noProblem       NULL
 * }
 * ```
 */
export type DataErrors =
    | { possibleErrors: PossibleError[] } /* CHOICE_ALT_ROOT */
    | { noProblem: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DataErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataErrors */
let _cached_decoder_for_DataErrors: $.ASN1Decoder<DataErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataErrors */

/* START_OF_SYMBOL_DEFINITION _decode_DataErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) DataErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataErrors} The decoded data structure.
 */
export function _decode_DataErrors(el: _Element) {
    if (!_cached_decoder_for_DataErrors) {
        _cached_decoder_for_DataErrors = $._decode_inextensible_choice<DataErrors>(
            {
                'UNIVERSAL 17': [
                    'possibleErrors',
                    $._decodeSetOf<PossibleError>(() => _decode_PossibleError),
                ],
                'UNIVERSAL 5': ['noProblem', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_DataErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataErrors */
let _cached_encoder_for_DataErrors: $.ASN1Encoder<DataErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataErrors */

/* START_OF_SYMBOL_DEFINITION _encode_DataErrors */
/**
 * @summary Encodes a(n) DataErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataErrors, encoded as an ASN.1 Element.
 */
export function _encode_DataErrors(
    value: DataErrors,
    elGetter: $.ASN1Encoder<DataErrors>
) {
    if (!_cached_encoder_for_DataErrors) {
        _cached_encoder_for_DataErrors = $._encode_choice<DataErrors>(
            {
                possibleErrors: $._encodeSetOf<PossibleError>(
                    () => _encode_PossibleError,
                    $.BER
                ),
                noProblem: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataErrors */

/* eslint-enable */
