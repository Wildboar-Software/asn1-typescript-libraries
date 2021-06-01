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
    MSString,
    _decode_MSString,
    _encode_MSString,
} from '../MSMatchingRules/MSString.ta';
export {
    MSString,
    _decode_MSString,
    _encode_MSString,
} from '../MSMatchingRules/MSString.ta';
import { ub_msstring_match } from '../MSUpperBounds/ub-msstring-match.va';
export { ub_msstring_match } from '../MSUpperBounds/ub-msstring-match.va';

/* START_OF_SYMBOL_DEFINITION SubstringAssertion_Item */
/**
 * @summary SubstringAssertion_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAssertion-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SubstringAssertion_Item =
    | { initial: MSString } /* CHOICE_ALT_ROOT */
    | { any_: MSString } /* CHOICE_ALT_ROOT */
    | { final: MSString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAssertion_Item */
let _cached_decoder_for_SubstringAssertion_Item: $.ASN1Decoder<SubstringAssertion_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringAssertion_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAssertion_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringAssertion_Item} The decoded data structure.
 */
export function _decode_SubstringAssertion_Item(el: _Element) {
    if (!_cached_decoder_for_SubstringAssertion_Item) {
        _cached_decoder_for_SubstringAssertion_Item = $._decode_inextensible_choice<SubstringAssertion_Item>(
            {
                'CONTEXT 0': [
                    'initial',
                    $._decode_explicit<MSString>(() => _decode_MSString),
                ],
                'CONTEXT 1': [
                    'any_',
                    $._decode_explicit<MSString>(() => _decode_MSString),
                ],
                'CONTEXT 2': [
                    'final',
                    $._decode_explicit<MSString>(() => _decode_MSString),
                ],
            }
        );
    }
    return _cached_decoder_for_SubstringAssertion_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAssertion_Item */
let _cached_encoder_for_SubstringAssertion_Item: $.ASN1Encoder<SubstringAssertion_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringAssertion_Item */
/**
 * @summary Encodes a(n) SubstringAssertion_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAssertion_Item, encoded as an ASN.1 Element.
 */
export function _encode_SubstringAssertion_Item(
    value: SubstringAssertion_Item,
    elGetter: $.ASN1Encoder<SubstringAssertion_Item>
) {
    if (!_cached_encoder_for_SubstringAssertion_Item) {
        _cached_encoder_for_SubstringAssertion_Item = $._encode_choice<SubstringAssertion_Item>(
            {
                initial: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_MSString,
                    $.BER
                ),
                any_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_MSString,
                    $.BER
                ),
                final: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_MSString,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SubstringAssertion_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringAssertion_Item */

/* eslint-enable */
