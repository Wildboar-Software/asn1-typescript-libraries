/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-SSF-SCF-datatypes/GenericNumber.ta.mjs";
// export { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-SSF-SCF-datatypes/GenericNumber.ta.mjs";


/**
 * @summary SubscriberID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberID  ::= 
 *   GenericNumber
 * ```
 */
export
type SubscriberID = GenericNumber; // DefinedType

let _cached_decoder_for_SubscriberID: $.ASN1Decoder<SubscriberID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberID (el: _Element): SubscriberID {
    if (!_cached_decoder_for_SubscriberID) { _cached_decoder_for_SubscriberID = _decode_GenericNumber; }
    return _cached_decoder_for_SubscriberID(el);
}

let _cached_encoder_for_SubscriberID: $.ASN1Encoder<SubscriberID> | null = null;

/**
 * @summary Encodes a(n) SubscriberID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberID, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberID (value: SubscriberID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberID) { _cached_encoder_for_SubscriberID = _encode_GenericNumber; }
    return _cached_encoder_for_SubscriberID(value, elGetter);
}


/* eslint-enable */
