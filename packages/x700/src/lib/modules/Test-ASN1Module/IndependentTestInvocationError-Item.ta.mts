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
    IndependentTestResponse,
    _decode_IndependentTestResponse,
    _encode_IndependentTestResponse,
} from '../Test-ASN1Module/IndependentTestResponse.ta.mjs';
export {
    IndependentTestResponse,
    _decode_IndependentTestResponse,
    _encode_IndependentTestResponse,
} from '../Test-ASN1Module/IndependentTestResponse.ta.mjs';
import {
    TONotCreated,
    _decode_TONotCreated,
    _encode_TONotCreated,
} from '../Test-ASN1Module/TONotCreated.ta.mjs';
export {
    TONotCreated,
    _decode_TONotCreated,
    _encode_TONotCreated,
} from '../Test-ASN1Module/TONotCreated.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IndependentTestInvocationError_Item */
/**
 * @summary IndependentTestInvocationError_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndependentTestInvocationError-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type IndependentTestInvocationError_Item =
    | { testInstanceCreated: IndependentTestResponse } /* CHOICE_ALT_ROOT */
    | { tONotCreated: TONotCreated } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION IndependentTestInvocationError_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IndependentTestInvocationError_Item */
let _cached_decoder_for_IndependentTestInvocationError_Item: $.ASN1Decoder<IndependentTestInvocationError_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IndependentTestInvocationError_Item */

/* START_OF_SYMBOL_DEFINITION _decode_IndependentTestInvocationError_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) IndependentTestInvocationError_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndependentTestInvocationError_Item} The decoded data structure.
 */
export function _decode_IndependentTestInvocationError_Item(el: _Element) {
    if (!_cached_decoder_for_IndependentTestInvocationError_Item) {
        _cached_decoder_for_IndependentTestInvocationError_Item = $._decode_inextensible_choice<IndependentTestInvocationError_Item>(
            {
                'CONTEXT 0': [
                    'testInstanceCreated',
                    $._decode_implicit<IndependentTestResponse>(
                        () => _decode_IndependentTestResponse
                    ),
                ],
                'UNIVERSAL 10': ['tONotCreated', _decode_TONotCreated],
                'UNIVERSAL 17': ['tONotCreated', _decode_TONotCreated],
            }
        );
    }
    return _cached_decoder_for_IndependentTestInvocationError_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IndependentTestInvocationError_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IndependentTestInvocationError_Item */
let _cached_encoder_for_IndependentTestInvocationError_Item: $.ASN1Encoder<IndependentTestInvocationError_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IndependentTestInvocationError_Item */

/* START_OF_SYMBOL_DEFINITION _encode_IndependentTestInvocationError_Item */
/**
 * @summary Encodes a(n) IndependentTestInvocationError_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndependentTestInvocationError_Item, encoded as an ASN.1 Element.
 */
export function _encode_IndependentTestInvocationError_Item(
    value: IndependentTestInvocationError_Item,
    elGetter: $.ASN1Encoder<IndependentTestInvocationError_Item>
) {
    if (!_cached_encoder_for_IndependentTestInvocationError_Item) {
        _cached_encoder_for_IndependentTestInvocationError_Item = $._encode_choice<IndependentTestInvocationError_Item>(
            {
                testInstanceCreated: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IndependentTestResponse,
                    $.BER
                ),
                tONotCreated: _encode_TONotCreated,
            },
            $.BER
        );
    }
    return _cached_encoder_for_IndependentTestInvocationError_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_IndependentTestInvocationError_Item */

/* eslint-enable */
