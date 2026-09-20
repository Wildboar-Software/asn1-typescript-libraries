/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntegerOffer_Item_range, _decode_IntegerOffer_Item_range, _encode_IntegerOffer_Item_range } from "../G/IntegerOffer-Item-range.ta.mjs";


/**
 * @summary IntegerOffer_Item
 * @description
 *
 * One INTEGER offer: `individualValue` is a single INTEGER; `range`
 * is an inclusive `[minimum, maximum]`. ISO/IEC 9041-1:1997 §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntegerOffer-Item ::= CHOICE {
 *     individualValue [0] IMPLICIT INTEGER,
 *     range           [1] IMPLICIT SEQUENCE {
 *         minimum INTEGER,
 *         maximum INTEGER
 *     }
 * }
 * ```
 */
export
type IntegerOffer_Item =
    { individualValue: INTEGER } /* CHOICE_ALT_ROOT */
    | { range: IntegerOffer_Item_range } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IntegerOffer_Item: $.ASN1Decoder<IntegerOffer_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntegerOffer_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntegerOffer_Item (el: _Element): IntegerOffer_Item {
    if (!_cached_decoder_for_IntegerOffer_Item) { _cached_decoder_for_IntegerOffer_Item = $._decode_inextensible_choice<IntegerOffer_Item>({
    "CONTEXT 0": [ "individualValue", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "range", $._decode_implicit<IntegerOffer_Item_range>(() => _decode_IntegerOffer_Item_range) ]
}); }
    return _cached_decoder_for_IntegerOffer_Item(el);
}

let _cached_encoder_for_IntegerOffer_Item: $.ASN1Encoder<IntegerOffer_Item> | null = null;

/**
 * @summary Encodes a(n) IntegerOffer_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntegerOffer_Item, encoded as an ASN.1 Element.
 */
export
function _encode_IntegerOffer_Item (value: IntegerOffer_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntegerOffer_Item) { _cached_encoder_for_IntegerOffer_Item = $._encode_choice<IntegerOffer_Item>({
    "individualValue": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "range": $._encode_implicit(_TagClass.context, 1, () => _encode_IntegerOffer_Item_range, $.BER),
}, $.BER); }
    return _cached_encoder_for_IntegerOffer_Item(value, elGetter);
}


/* eslint-enable */
