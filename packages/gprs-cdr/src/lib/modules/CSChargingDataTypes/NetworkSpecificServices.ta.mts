/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkSpecificServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkSpecificServices  ::=  SET  OF
 *    INTEGER
 * ```
 */
export
type NetworkSpecificServices = INTEGER[]; // SetOfType

let _cached_decoder_for_NetworkSpecificServices: $.ASN1Decoder<NetworkSpecificServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkSpecificServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkSpecificServices (el: _Element): NetworkSpecificServices {
    if (!_cached_decoder_for_NetworkSpecificServices) { _cached_decoder_for_NetworkSpecificServices = $._decodeSetOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_NetworkSpecificServices(el);
}

let _cached_encoder_for_NetworkSpecificServices: $.ASN1Encoder<NetworkSpecificServices> | null = null;

/**
 * @summary Encodes a(n) NetworkSpecificServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkSpecificServices, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkSpecificServices (value: NetworkSpecificServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkSpecificServices) { _cached_encoder_for_NetworkSpecificServices = $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_NetworkSpecificServices(value, elGetter);
}


/* eslint-enable */
