/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddressListDesignator, _decode_AddressListDesignator, _encode_AddressListDesignator } from "../MMSHeadingExtensions/AddressListDesignator.ta.mjs";
// export { AddressListDesignator, _decode_AddressListDesignator, _encode_AddressListDesignator } from "../MMSHeadingExtensions/AddressListDesignator.ta.mjs";


/**
 * @summary AddressListIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressListIndicator  ::=  SEQUENCE OF AddressListDesignator
 * ```
 */
export
type AddressListIndicator = AddressListDesignator[]; // SequenceOfType

let _cached_decoder_for_AddressListIndicator: $.ASN1Decoder<AddressListIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressListIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressListIndicator (el: _Element): AddressListIndicator {
    if (!_cached_decoder_for_AddressListIndicator) { _cached_decoder_for_AddressListIndicator = $._decodeSequenceOf<AddressListDesignator>(() => _decode_AddressListDesignator); }
    return _cached_decoder_for_AddressListIndicator(el);
}

let _cached_encoder_for_AddressListIndicator: $.ASN1Encoder<AddressListIndicator> | null = null;

/**
 * @summary Encodes a(n) AddressListIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressListIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AddressListIndicator (value: AddressListIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressListIndicator) { _cached_encoder_for_AddressListIndicator = $._encodeSequenceOf<AddressListDesignator>(() => _encode_AddressListDesignator, $.BER); }
    return _cached_encoder_for_AddressListIndicator(value, elGetter);
}


/* eslint-enable */
