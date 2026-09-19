/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddressListDesignator, _decode_AddressListDesignator, _encode_AddressListDesignator } from "../MMSHeadingExtensions/AddressListDesignator.ta.mjs";
// export { AddressListDesignator, _decode_AddressListDesignator, _encode_AddressListDesignator } from "../MMSHeadingExtensions/AddressListDesignator.ta.mjs";


/**
 * @summary AddressListDesignatorSeq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressListDesignatorSeq  ::=  SEQUENCE OF AddressListDesignator
 * ```
 */
export
type AddressListDesignatorSeq = AddressListDesignator[]; // SequenceOfType

let _cached_decoder_for_AddressListDesignatorSeq: $.ASN1Decoder<AddressListDesignatorSeq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressListDesignatorSeq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressListDesignatorSeq (el: _Element): AddressListDesignatorSeq {
    if (!_cached_decoder_for_AddressListDesignatorSeq) { _cached_decoder_for_AddressListDesignatorSeq = $._decodeSequenceOf<AddressListDesignator>(() => _decode_AddressListDesignator); }
    return _cached_decoder_for_AddressListDesignatorSeq(el);
}

let _cached_encoder_for_AddressListDesignatorSeq: $.ASN1Encoder<AddressListDesignatorSeq> | null = null;

/**
 * @summary Encodes a(n) AddressListDesignatorSeq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressListDesignatorSeq, encoded as an ASN.1 Element.
 */
export
function _encode_AddressListDesignatorSeq (value: AddressListDesignatorSeq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressListDesignatorSeq) { _cached_encoder_for_AddressListDesignatorSeq = $._encodeSequenceOf<AddressListDesignator>(() => _encode_AddressListDesignator, $.BER); }
    return _cached_encoder_for_AddressListDesignatorSeq(value, elGetter);
}


/* eslint-enable */
