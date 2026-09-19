/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NegoData_Item, _decode_NegoData_Item, _encode_NegoData_Item } from "../CredSSP/NegoData-Item.ta.mjs";
// export { NegoData_Item, _decode_NegoData_Item, _encode_NegoData_Item } from "../CredSSP/NegoData-Item.ta.mjs";


/**
 * @summary NegoData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegoData  ::=  SEQUENCE OF SEQUENCE {
 *      negoToken    [0] OCTET STRING
 * }
 * ```
 */
export
type NegoData = NegoData_Item[]; // SequenceOfType

let _cached_decoder_for_NegoData: $.ASN1Decoder<NegoData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NegoData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NegoData (el: _Element): NegoData {
    if (!_cached_decoder_for_NegoData) { _cached_decoder_for_NegoData = $._decodeSequenceOf<NegoData_Item>(() => _decode_NegoData_Item); }
    return _cached_decoder_for_NegoData(el);
}

let _cached_encoder_for_NegoData: $.ASN1Encoder<NegoData> | null = null;

/**
 * @summary Encodes a(n) NegoData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegoData, encoded as an ASN.1 Element.
 */
export
function _encode_NegoData (value: NegoData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NegoData) { _cached_encoder_for_NegoData = $._encodeSequenceOf<NegoData_Item>(() => _encode_NegoData_Item, $.BER); }
    return _cached_encoder_for_NegoData(value, elGetter);
}


/* eslint-enable */
