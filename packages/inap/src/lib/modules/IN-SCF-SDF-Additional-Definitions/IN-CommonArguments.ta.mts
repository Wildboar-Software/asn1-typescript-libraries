/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";


/**
 * @summary IN_CommonArguments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-CommonArguments  ::= 
 *   CommonArguments
 *     (WITH COMPONENTS {
 *        ...,
 *        serviceControls  (IN-ServiceControls),
 *        aliasedRDNs      ABSENT
 *      })
 * ```
 */
export
type IN_CommonArguments = CommonArguments; // DefinedType

let _cached_decoder_for_IN_CommonArguments: $.ASN1Decoder<IN_CommonArguments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_CommonArguments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_CommonArguments (el: _Element): IN_CommonArguments {
    if (!_cached_decoder_for_IN_CommonArguments) { _cached_decoder_for_IN_CommonArguments = _decode_CommonArguments; }
    return _cached_decoder_for_IN_CommonArguments(el);
}

let _cached_encoder_for_IN_CommonArguments: $.ASN1Encoder<IN_CommonArguments> | null = null;

/**
 * @summary Encodes a(n) IN_CommonArguments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_CommonArguments, encoded as an ASN.1 Element.
 */
export
function _encode_IN_CommonArguments (value: IN_CommonArguments, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_CommonArguments) { _cached_encoder_for_IN_CommonArguments = _encode_CommonArguments; }
    return _cached_encoder_for_IN_CommonArguments(value, elGetter);
}


/* eslint-enable */
