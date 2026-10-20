/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";
// export { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";


/**
 * @summary IN_AccessPointInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-AccessPointInformation  ::= 
 *   AccessPointInformation(WITH COMPONENTS {
 *                            ...,
 *                            protocolInformation  ABSENT
 *                          })
 * ```
 */
export
type IN_AccessPointInformation = AccessPointInformation; // DefinedType

let _cached_decoder_for_IN_AccessPointInformation: $.ASN1Decoder<IN_AccessPointInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_AccessPointInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_AccessPointInformation (el: _Element): IN_AccessPointInformation {
    if (!_cached_decoder_for_IN_AccessPointInformation) { _cached_decoder_for_IN_AccessPointInformation = _decode_AccessPointInformation; }
    return _cached_decoder_for_IN_AccessPointInformation(el);
}

let _cached_encoder_for_IN_AccessPointInformation: $.ASN1Encoder<IN_AccessPointInformation> | null = null;

/**
 * @summary Encodes a(n) IN_AccessPointInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_AccessPointInformation, encoded as an ASN.1 Element.
 */
export
function _encode_IN_AccessPointInformation (value: IN_AccessPointInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_AccessPointInformation) { _cached_encoder_for_IN_AccessPointInformation = _encode_AccessPointInformation; }
    return _cached_encoder_for_IN_AccessPointInformation(value, elGetter);
}


/* eslint-enable */
