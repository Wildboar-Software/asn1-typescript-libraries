/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GroupStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupStatus  ::=  BOOLEAN
 * ```
 */
export
type GroupStatus = BOOLEAN; // BooleanType

let _cached_decoder_for_GroupStatus: $.ASN1Decoder<GroupStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupStatus (el: _Element): GroupStatus {
    if (!_cached_decoder_for_GroupStatus) { _cached_decoder_for_GroupStatus = $._decodeBoolean; }
    return _cached_decoder_for_GroupStatus(el);
}

let _cached_encoder_for_GroupStatus: $.ASN1Encoder<GroupStatus> | null = null;

/**
 * @summary Encodes a(n) GroupStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupStatus, encoded as an ASN.1 Element.
 */
export
function _encode_GroupStatus (value: GroupStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupStatus) { _cached_encoder_for_GroupStatus = $._encodeBoolean; }
    return _cached_encoder_for_GroupStatus(value, elGetter);
}


/* eslint-enable */
