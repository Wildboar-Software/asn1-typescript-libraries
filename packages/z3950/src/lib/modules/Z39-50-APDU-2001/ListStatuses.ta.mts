/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ListStatuses_Item, _decode_ListStatuses_Item, _encode_ListStatuses_Item } from "../Z39-50-APDU-2001/ListStatuses-Item.ta.mjs";


/**
 * @summary ListStatuses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListStatuses  ::=  SEQUENCE OF SEQUENCE {
 *     id      ResultSetId,
 *     status  DeleteSetStatus
 * }
 * ```
 */
export
type ListStatuses = ListStatuses_Item[]; // SequenceOfType

let _cached_decoder_for_ListStatuses: $.ASN1Decoder<ListStatuses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListStatuses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListStatuses (el: _Element): ListStatuses {
    if (!_cached_decoder_for_ListStatuses) { _cached_decoder_for_ListStatuses = $._decodeSequenceOf<ListStatuses_Item>(() => _decode_ListStatuses_Item); }
    return _cached_decoder_for_ListStatuses(el);
}

let _cached_encoder_for_ListStatuses: $.ASN1Encoder<ListStatuses> | null = null;

/**
 * @summary Encodes a(n) ListStatuses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListStatuses, encoded as an ASN.1 Element.
 */
export
function _encode_ListStatuses (value: ListStatuses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListStatuses) { _cached_encoder_for_ListStatuses = $._encodeSequenceOf<ListStatuses_Item>(() => _encode_ListStatuses_Item, $.BER); }
    return _cached_encoder_for_ListStatuses(value, elGetter);
}


/* eslint-enable */
