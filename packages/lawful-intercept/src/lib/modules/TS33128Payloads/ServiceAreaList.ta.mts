/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAreaList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAreaList  ::=  OCTET STRING (SIZE(4..112))
 * ```
 */
export
type ServiceAreaList = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ServiceAreaList: $.ASN1Decoder<ServiceAreaList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAreaList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAreaList (el: _Element): ServiceAreaList {
    if (!_cached_decoder_for_ServiceAreaList) { _cached_decoder_for_ServiceAreaList = $._decodeOctetString; }
    return _cached_decoder_for_ServiceAreaList(el);
}

let _cached_encoder_for_ServiceAreaList: $.ASN1Encoder<ServiceAreaList> | null = null;

/**
 * @summary Encodes a(n) ServiceAreaList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAreaList, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAreaList (value: ServiceAreaList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAreaList) { _cached_encoder_for_ServiceAreaList = $._encodeOctetString; }
    return _cached_encoder_for_ServiceAreaList(value, elGetter);
}


/* eslint-enable */
