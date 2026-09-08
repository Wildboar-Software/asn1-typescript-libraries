/* eslint-disable */
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ServiceLocationList_Item,
    _decode_ServiceLocationList_Item,
    _encode_ServiceLocationList_Item,
} from "../X790ASN1Module/ServiceLocationList-Item.ta.mjs";



/**
 * @summary ServiceLocationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceLocationList  ::= 
 *   SET OF SEQUENCE {name     PremisesName,
 *                    address  PremisesAddress,
 *                    ...}
 * ```
 */
export
type ServiceLocationList = ServiceLocationList_Item[]; // SetOfType

let _cached_decoder_for_ServiceLocationList: $.ASN1Decoder<ServiceLocationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceLocationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceLocationList (el: _Element): ServiceLocationList {
    if (!_cached_decoder_for_ServiceLocationList) { _cached_decoder_for_ServiceLocationList = $._decodeSetOf<ServiceLocationList_Item>(() => _decode_ServiceLocationList_Item); }
    return _cached_decoder_for_ServiceLocationList(el);
}

let _cached_encoder_for_ServiceLocationList: $.ASN1Encoder<ServiceLocationList> | null = null;

/**
 * @summary Encodes a(n) ServiceLocationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceLocationList, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceLocationList (value: ServiceLocationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceLocationList) { _cached_encoder_for_ServiceLocationList = $._encodeSetOf<ServiceLocationList_Item>(() => _encode_ServiceLocationList_Item, $.BER); }
    return _cached_encoder_for_ServiceLocationList(value, elGetter);
}


/* eslint-enable */
