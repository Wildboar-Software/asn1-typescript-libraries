/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceAreaInfo, _decode_ServiceAreaInfo, _encode_ServiceAreaInfo } from "../TS33128Payloads/ServiceAreaInfo.ta.mjs";
// export { ServiceAreaInfo, _decode_ServiceAreaInfo, _encode_ServiceAreaInfo } from "../TS33128Payloads/ServiceAreaInfo.ta.mjs";


/**
 * @summary ServiceAreaInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAreaInformation  ::=  SEQUENCE (SIZE(1..MAX)) OF ServiceAreaInfo
 * ```
 */
export
type ServiceAreaInformation = ServiceAreaInfo[]; // SequenceOfType

let _cached_decoder_for_ServiceAreaInformation: $.ASN1Decoder<ServiceAreaInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAreaInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAreaInformation (el: _Element): ServiceAreaInformation {
    if (!_cached_decoder_for_ServiceAreaInformation) { _cached_decoder_for_ServiceAreaInformation = $._decodeSequenceOf<ServiceAreaInfo>(() => _decode_ServiceAreaInfo); }
    return _cached_decoder_for_ServiceAreaInformation(el);
}

let _cached_encoder_for_ServiceAreaInformation: $.ASN1Encoder<ServiceAreaInformation> | null = null;

/**
 * @summary Encodes a(n) ServiceAreaInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAreaInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAreaInformation (value: ServiceAreaInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAreaInformation) { _cached_encoder_for_ServiceAreaInformation = $._encodeSequenceOf<ServiceAreaInfo>(() => _encode_ServiceAreaInfo, $.BER); }
    return _cached_encoder_for_ServiceAreaInformation(value, elGetter);
}


/* eslint-enable */
