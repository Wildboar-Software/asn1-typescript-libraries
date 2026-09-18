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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntegerOffer_Item, _decode_IntegerOffer_Item, _encode_IntegerOffer_Item } from "../G/IntegerOffer-Item.ta.mjs";
// export { IntegerOffer_Item, _decode_IntegerOffer_Item, _encode_IntegerOffer_Item } from "../G/IntegerOffer-Item.ta.mjs";


/**
 * @summary IntegerOffer
 * @description
 *
 * Negotiation offer of INTEGER values: each item is a single value
 * or an inclusive min/max range. Used throughout VTE-parameter
 * negotiation. ISO/IEC 9041-1:1997 §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntegerOffer  ::=  SEQUENCE OF CHOICE {
 *     individualValue [0] IMPLICIT INTEGER,
 *     range           [1] IMPLICIT SEQUENCE {
 *         minimum INTEGER,
 *         maximum INTEGER
 *     }
 * }
 * ```
 */
export
type IntegerOffer = IntegerOffer_Item[]; // SequenceOfType

let _cached_decoder_for_IntegerOffer: $.ASN1Decoder<IntegerOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntegerOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntegerOffer (el: _Element): IntegerOffer {
    if (!_cached_decoder_for_IntegerOffer) { _cached_decoder_for_IntegerOffer = $._decodeSequenceOf<IntegerOffer_Item>(() => _decode_IntegerOffer_Item); }
    return _cached_decoder_for_IntegerOffer(el);
}

let _cached_encoder_for_IntegerOffer: $.ASN1Encoder<IntegerOffer> | null = null;

/**
 * @summary Encodes a(n) IntegerOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntegerOffer, encoded as an ASN.1 Element.
 */
export
function _encode_IntegerOffer (value: IntegerOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntegerOffer) { _cached_encoder_for_IntegerOffer = $._encodeSequenceOf<IntegerOffer_Item>(() => _encode_IntegerOffer_Item, $.BER); }
    return _cached_encoder_for_IntegerOffer(value, elGetter);
}


/* eslint-enable */
