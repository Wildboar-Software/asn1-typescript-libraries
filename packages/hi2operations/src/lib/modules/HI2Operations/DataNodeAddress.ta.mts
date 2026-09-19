/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
import { X25Address, _decode_X25Address, _encode_X25Address } from "../HI2Operations/X25Address.ta.mjs";
// export { X25Address, _decode_X25Address, _encode_X25Address } from "../HI2Operations/X25Address.ta.mjs";


/**
 * @summary DataNodeAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataNodeAddress  ::=  CHOICE
 * {
 *     ipAddress    [1] IPAddress,
 *     x25Address    [2] X25Address,
 *     ...
 * }
 * ```
 */
export
type DataNodeAddress =
    { ipAddress: IPAddress } /* CHOICE_ALT_ROOT */
    | { x25Address: X25Address } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DataNodeAddress: $.ASN1Decoder<DataNodeAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataNodeAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataNodeAddress (el: _Element): DataNodeAddress {
    if (!_cached_decoder_for_DataNodeAddress) { _cached_decoder_for_DataNodeAddress = $._decode_extensible_choice<DataNodeAddress>({
    "CONTEXT 1": [ "ipAddress", $._decode_implicit<IPAddress>(() => _decode_IPAddress) ],
    "CONTEXT 2": [ "x25Address", $._decode_implicit<X25Address>(() => _decode_X25Address) ]
}); }
    return _cached_decoder_for_DataNodeAddress(el);
}

let _cached_encoder_for_DataNodeAddress: $.ASN1Encoder<DataNodeAddress> | null = null;

/**
 * @summary Encodes a(n) DataNodeAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataNodeAddress, encoded as an ASN.1 Element.
 */
export
function _encode_DataNodeAddress (value: DataNodeAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataNodeAddress) { _cached_encoder_for_DataNodeAddress = $._encode_choice<DataNodeAddress>({
    "ipAddress": $._encode_implicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER),
    "x25Address": $._encode_implicit(_TagClass.context, 2, () => _encode_X25Address, $.BER),
}, $.BER); }
    return _cached_encoder_for_DataNodeAddress(value, elGetter);
}


/* eslint-enable */
