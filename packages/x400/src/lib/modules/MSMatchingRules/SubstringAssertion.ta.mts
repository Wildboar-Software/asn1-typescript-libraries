/* eslint-disable */
import {
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
    SubstringAssertion_Item,
    _decode_SubstringAssertion_Item,
    _encode_SubstringAssertion_Item,
} from '../MSMatchingRules/SubstringAssertion-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SubstringAssertion */
/**
 * @summary SubstringAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAssertion  ::=
 *   SEQUENCE OF
 *     CHOICE {initial  [0]  MSString{ub-msstring-match},
 *             any      [1]  MSString{ub-msstring-match},
 *             final    [2]  MSString{ub-msstring-match}}
 * ```
 */
export type SubstringAssertion = SubstringAssertion_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAssertion */
let _cached_decoder_for_SubstringAssertion: $.ASN1Decoder<SubstringAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringAssertion} The decoded data structure.
 */
export function _decode_SubstringAssertion(el: _Element) {
    if (!_cached_decoder_for_SubstringAssertion) {
        _cached_decoder_for_SubstringAssertion = $._decodeSequenceOf<SubstringAssertion_Item>(
            () => _decode_SubstringAssertion_Item
        );
    }
    return _cached_decoder_for_SubstringAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAssertion */
let _cached_encoder_for_SubstringAssertion: $.ASN1Encoder<SubstringAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringAssertion */
/**
 * @summary Encodes a(n) SubstringAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAssertion, encoded as an ASN.1 Element.
 */
export function _encode_SubstringAssertion(
    value: SubstringAssertion,
    elGetter: $.ASN1Encoder<SubstringAssertion>
) {
    if (!_cached_encoder_for_SubstringAssertion) {
        _cached_encoder_for_SubstringAssertion = $._encodeSequenceOf<SubstringAssertion_Item>(
            () => _encode_SubstringAssertion_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SubstringAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringAssertion */

/* eslint-enable */
