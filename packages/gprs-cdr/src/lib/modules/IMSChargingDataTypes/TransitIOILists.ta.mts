/* eslint-disable */
import {
    type ASN1Element as _Element,
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransitIOILists
 * @description
 *
 * Transit-IOI values from the P-Charging-Vector, identifying transit
 * operators between the originating and terminating networks (clause
 * 5.1.2.4). A transit operator may insert a void value to hide its
 * identity. Addition and deletion are operator configurable. Each
 * occurrence is the list inbound to or outbound from the recording node.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.2.4.
 *
 * This parameter holds the Transit-IOI List of the P-Charging-Vector header,
 * as recorded in the Transit-IOI-List AVP as defined in TS 32.299 [50].
 * Multiple occurrences of this field, shall be in chronological order, i.e.
 * the value in the SIP request is listed first. If only a value for the SIP
 * response is available, the Transit IOI List for the SIP request shall be
 * included with the value "unknown". For further information on the Transit
 * IOI exchange via SIP signalling please refer to TS 24.229 [210].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.68B.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitIOILists  ::=  SEQUENCE  OF
 *    GraphicString
 * ```
 */
export
type TransitIOILists = GraphicString[]; // SequenceOfType

let _cached_decoder_for_TransitIOILists: $.ASN1Decoder<TransitIOILists> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransitIOILists
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransitIOILists (el: _Element): TransitIOILists {
    if (!_cached_decoder_for_TransitIOILists) { _cached_decoder_for_TransitIOILists = $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString); }
    return _cached_decoder_for_TransitIOILists(el);
}

let _cached_encoder_for_TransitIOILists: $.ASN1Encoder<TransitIOILists> | null = null;

/**
 * @summary Encodes a(n) TransitIOILists into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitIOILists, encoded as an ASN.1 Element.
 */
export
function _encode_TransitIOILists (value: TransitIOILists, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransitIOILists) { _cached_encoder_for_TransitIOILists = $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_TransitIOILists(value, elGetter);
}


/* eslint-enable */
