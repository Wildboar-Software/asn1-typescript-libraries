/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";


/**
 * @summary AreaOfInterestRANNodeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaOfInterestRANNodeList  ::=  SEQUENCE (SIZE(1..MAX)) OF GlobalRANNodeID
 * ```
 */
export
type AreaOfInterestRANNodeList = GlobalRANNodeID[]; // SequenceOfType

let _cached_decoder_for_AreaOfInterestRANNodeList: $.ASN1Decoder<AreaOfInterestRANNodeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaOfInterestRANNodeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaOfInterestRANNodeList (el: _Element): AreaOfInterestRANNodeList {
    if (!_cached_decoder_for_AreaOfInterestRANNodeList) { _cached_decoder_for_AreaOfInterestRANNodeList = $._decodeSequenceOf<GlobalRANNodeID>(() => _decode_GlobalRANNodeID); }
    return _cached_decoder_for_AreaOfInterestRANNodeList(el);
}

let _cached_encoder_for_AreaOfInterestRANNodeList: $.ASN1Encoder<AreaOfInterestRANNodeList> | null = null;

/**
 * @summary Encodes a(n) AreaOfInterestRANNodeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaOfInterestRANNodeList, encoded as an ASN.1 Element.
 */
export
function _encode_AreaOfInterestRANNodeList (value: AreaOfInterestRANNodeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaOfInterestRANNodeList) { _cached_encoder_for_AreaOfInterestRANNodeList = $._encodeSequenceOf<GlobalRANNodeID>(() => _encode_GlobalRANNodeID, $.BER); }
    return _cached_encoder_for_AreaOfInterestRANNodeList(value, elGetter);
}


/* eslint-enable */
