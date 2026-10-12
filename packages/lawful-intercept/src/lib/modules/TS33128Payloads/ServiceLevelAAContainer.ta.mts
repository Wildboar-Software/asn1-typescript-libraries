/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceLevelAAContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceLevelAAContainer  ::=  OCTET STRING (SIZE(4..65538))
 * ```
 */
export
type ServiceLevelAAContainer = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ServiceLevelAAContainer: $.ASN1Decoder<ServiceLevelAAContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceLevelAAContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceLevelAAContainer (el: _Element): ServiceLevelAAContainer {
    if (!_cached_decoder_for_ServiceLevelAAContainer) { _cached_decoder_for_ServiceLevelAAContainer = $._decodeOctetString; }
    return _cached_decoder_for_ServiceLevelAAContainer(el);
}

let _cached_encoder_for_ServiceLevelAAContainer: $.ASN1Encoder<ServiceLevelAAContainer> | null = null;

/**
 * @summary Encodes a(n) ServiceLevelAAContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceLevelAAContainer, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceLevelAAContainer (value: ServiceLevelAAContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceLevelAAContainer) { _cached_encoder_for_ServiceLevelAAContainer = $._encodeOctetString; }
    return _cached_encoder_for_ServiceLevelAAContainer(value, elGetter);
}


/* eslint-enable */
