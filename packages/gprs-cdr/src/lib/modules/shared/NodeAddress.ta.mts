/* eslint-disable */
import {
    type GraphicString,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IPAddress, _decode_IPAddress, _encode_IPAddress } from "./IPAddress.ta.mjs";


/**
 * @summary NodeAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NodeAddress  ::=  CHOICE {
 *    iPAddress      [0] IPAddress,
 *    domainName     [1] IMPLICIT GraphicString}
 * ```
 */
export
type NodeAddress =
    { iPAddress: IPAddress } /* CHOICE_ALT_ROOT */
    | { domainName: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NodeAddress: $.ASN1Decoder<NodeAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NodeAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NodeAddress (el: _Element): NodeAddress {
    if (!_cached_decoder_for_NodeAddress) { _cached_decoder_for_NodeAddress = $._decode_inextensible_choice<NodeAddress>({
    "CONTEXT 0": [ "iPAddress", $._decode_explicit<IPAddress>(() => _decode_IPAddress) ],
    "CONTEXT 1": [ "domainName", $._decode_implicit<GraphicString>(() => $._decodeGraphicString) ]
}); }
    return _cached_decoder_for_NodeAddress(el);
}

let _cached_encoder_for_NodeAddress: $.ASN1Encoder<NodeAddress> | null = null;

/**
 * @summary Encodes a(n) NodeAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NodeAddress, encoded as an ASN.1 Element.
 */
export
function _encode_NodeAddress (value: NodeAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NodeAddress) { _cached_encoder_for_NodeAddress = $._encode_choice<NodeAddress>({
    "iPAddress": $._encode_explicit(_TagClass.context, 0, () => _encode_IPAddress, $.BER),
    "domainName": $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER),
}, $.BER); }
    return _cached_encoder_for_NodeAddress(value, elGetter);
}


/* eslint-enable */
