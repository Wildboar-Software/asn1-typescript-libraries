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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SubstringAssertion_Item,
    _decode_SubstringAssertion_Item,
    _encode_SubstringAssertion_Item,
} from '../MSMatchingRules/SubstringAssertion-Item.ta.mjs';
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

let _cached_decoder_for_SubstringAssertion: $.ASN1Decoder<SubstringAssertion> | null = null;

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

let _cached_encoder_for_SubstringAssertion: $.ASN1Encoder<SubstringAssertion> | null = null;

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


/* eslint-enable */
