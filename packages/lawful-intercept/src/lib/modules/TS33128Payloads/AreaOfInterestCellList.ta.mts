/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";


/**
 * @summary AreaOfInterestCellList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaOfInterestCellList  ::=  SEQUENCE (SIZE(1..MAX)) OF NCGI
 * ```
 */
export
type AreaOfInterestCellList = NCGI[]; // SequenceOfType

let _cached_decoder_for_AreaOfInterestCellList: $.ASN1Decoder<AreaOfInterestCellList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaOfInterestCellList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaOfInterestCellList (el: _Element): AreaOfInterestCellList {
    if (!_cached_decoder_for_AreaOfInterestCellList) { _cached_decoder_for_AreaOfInterestCellList = $._decodeSequenceOf<NCGI>(() => _decode_NCGI); }
    return _cached_decoder_for_AreaOfInterestCellList(el);
}

let _cached_encoder_for_AreaOfInterestCellList: $.ASN1Encoder<AreaOfInterestCellList> | null = null;

/**
 * @summary Encodes a(n) AreaOfInterestCellList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaOfInterestCellList, encoded as an ASN.1 Element.
 */
export
function _encode_AreaOfInterestCellList (value: AreaOfInterestCellList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaOfInterestCellList) { _cached_encoder_for_AreaOfInterestCellList = $._encodeSequenceOf<NCGI>(() => _encode_NCGI, $.BER); }
    return _cached_encoder_for_AreaOfInterestCellList(value, elGetter);
}


/* eslint-enable */
