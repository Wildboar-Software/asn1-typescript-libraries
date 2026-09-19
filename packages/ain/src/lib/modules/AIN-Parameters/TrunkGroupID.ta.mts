/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrunkGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrunkGroupID  ::=  INTEGER(0..9999)
 * ```
 */
export
type TrunkGroupID = INTEGER;

let _cached_decoder_for_TrunkGroupID: $.ASN1Decoder<TrunkGroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TrunkGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TrunkGroupID (el: _Element): TrunkGroupID {
    if (!_cached_decoder_for_TrunkGroupID) { _cached_decoder_for_TrunkGroupID = $._decodeInteger; }
    return _cached_decoder_for_TrunkGroupID(el);
}

let _cached_encoder_for_TrunkGroupID: $.ASN1Encoder<TrunkGroupID> | null = null;

/**
 * @summary Encodes a(n) TrunkGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrunkGroupID, encoded as an ASN.1 Element.
 */
export
function _encode_TrunkGroupID (value: TrunkGroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TrunkGroupID) { _cached_encoder_for_TrunkGroupID = $._encodeInteger; }
    return _cached_encoder_for_TrunkGroupID(value, elGetter);
}


/* eslint-enable */
