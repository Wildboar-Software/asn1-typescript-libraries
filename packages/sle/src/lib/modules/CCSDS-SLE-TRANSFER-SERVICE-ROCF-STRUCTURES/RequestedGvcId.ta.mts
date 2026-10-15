/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GvcId, _decode_GvcId, _encode_GvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/GvcId.ta.mjs";


/**
 * @summary RequestedGvcId
 * @description
 * 
 * requested-global-VCID as returned by ROCF-GET-PARAMETER. While the instance
 * is in state 3 (active), this is the global VCID from the most recent
 * ROCF-START. Otherwise it is the first element of the permitted global-VCID
 * set.
 *
 * CCSDS 911.5-B-4, table 3-11 and section 3.4.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedGvcId           ::=    GvcId
 * ```
 */
export
type RequestedGvcId = GvcId; // DefinedType

let _cached_decoder_for_RequestedGvcId: $.ASN1Decoder<RequestedGvcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedGvcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedGvcId (el: _Element): RequestedGvcId {
    if (!_cached_decoder_for_RequestedGvcId) { _cached_decoder_for_RequestedGvcId = _decode_GvcId; }
    return _cached_decoder_for_RequestedGvcId(el);
}

let _cached_encoder_for_RequestedGvcId: $.ASN1Encoder<RequestedGvcId> | null = null;

/**
 * @summary Encodes a(n) RequestedGvcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedGvcId, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedGvcId (value: RequestedGvcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedGvcId) { _cached_encoder_for_RequestedGvcId = _encode_GvcId; }
    return _cached_encoder_for_RequestedGvcId(value, elGetter);
}


/* eslint-enable */
