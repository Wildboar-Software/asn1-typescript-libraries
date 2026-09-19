/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
// export { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";


/**
 * @summary TerminationIDList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationIDList  ::=  SEQUENCE OF TerminationID
 * ```
 */
export
type TerminationIDList = TerminationID[]; // SequenceOfType

let _cached_decoder_for_TerminationIDList: $.ASN1Decoder<TerminationIDList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationIDList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminationIDList (el: _Element): TerminationIDList {
    if (!_cached_decoder_for_TerminationIDList) { _cached_decoder_for_TerminationIDList = $._decodeSequenceOf<TerminationID>(() => _decode_TerminationID); }
    return _cached_decoder_for_TerminationIDList(el);
}

let _cached_encoder_for_TerminationIDList: $.ASN1Encoder<TerminationIDList> | null = null;

/**
 * @summary Encodes a(n) TerminationIDList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationIDList, encoded as an ASN.1 Element.
 */
export
function _encode_TerminationIDList (value: TerminationIDList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminationIDList) { _cached_encoder_for_TerminationIDList = $._encodeSequenceOf<TerminationID>(() => _encode_TerminationID, $.BER); }
    return _cached_encoder_for_TerminationIDList(value, elGetter);
}


/* eslint-enable */
