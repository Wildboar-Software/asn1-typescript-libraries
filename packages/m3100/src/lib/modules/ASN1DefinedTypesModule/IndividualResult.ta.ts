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
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.js';
export {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.js';
import {
    Connected,
    _decode_Connected,
    _encode_Connected,
} from '../ASN1DefinedTypesModule/Connected.ta.js';
export {
    Connected,
    _decode_Connected,
    _encode_Connected,
} from '../ASN1DefinedTypesModule/Connected.ta.js';

/* START_OF_SYMBOL_DEFINITION IndividualResult */
/**
 * @summary IndividualResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndividualResult  ::=  CHOICE {failed  [0]  Failed,
 *                              pass    [1]  Connected
 * }
 * ```
 */
export type IndividualResult =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { pass: Connected } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION IndividualResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IndividualResult */
let _cached_decoder_for_IndividualResult: $.ASN1Decoder<IndividualResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IndividualResult */

/* START_OF_SYMBOL_DEFINITION _decode_IndividualResult */
/**
 * @summary Decodes an ASN.1 element into a(n) IndividualResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndividualResult} The decoded data structure.
 */
export function _decode_IndividualResult(el: _Element) {
    if (!_cached_decoder_for_IndividualResult) {
        _cached_decoder_for_IndividualResult = $._decode_inextensible_choice<IndividualResult>(
            {
                'CONTEXT 0': [
                    'failed',
                    $._decode_explicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'pass',
                    $._decode_explicit<Connected>(() => _decode_Connected),
                ],
            }
        );
    }
    return _cached_decoder_for_IndividualResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IndividualResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IndividualResult */
let _cached_encoder_for_IndividualResult: $.ASN1Encoder<IndividualResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IndividualResult */

/* START_OF_SYMBOL_DEFINITION _encode_IndividualResult */
/**
 * @summary Encodes a(n) IndividualResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndividualResult, encoded as an ASN.1 Element.
 */
export function _encode_IndividualResult(
    value: IndividualResult,
    elGetter: $.ASN1Encoder<IndividualResult>
) {
    if (!_cached_encoder_for_IndividualResult) {
        _cached_encoder_for_IndividualResult = $._encode_choice<IndividualResult>(
            {
                failed: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                pass: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Connected,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IndividualResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IndividualResult */

/* eslint-enable */
