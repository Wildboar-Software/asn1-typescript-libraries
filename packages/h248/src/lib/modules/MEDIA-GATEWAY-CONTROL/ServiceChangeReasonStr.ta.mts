/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceChangeReasonStr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeReasonStr  ::=  IA5String
 * ```
 */
export
type ServiceChangeReasonStr = IA5String; // IA5String

let _cached_decoder_for_ServiceChangeReasonStr: $.ASN1Decoder<ServiceChangeReasonStr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeReasonStr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeReasonStr (el: _Element): ServiceChangeReasonStr {
    if (!_cached_decoder_for_ServiceChangeReasonStr) { _cached_decoder_for_ServiceChangeReasonStr = $._decodeIA5String; }
    return _cached_decoder_for_ServiceChangeReasonStr(el);
}

let _cached_encoder_for_ServiceChangeReasonStr: $.ASN1Encoder<ServiceChangeReasonStr> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeReasonStr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeReasonStr, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeReasonStr (value: ServiceChangeReasonStr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeReasonStr) { _cached_encoder_for_ServiceChangeReasonStr = $._encodeIA5String; }
    return _cached_encoder_for_ServiceChangeReasonStr(value, elGetter);
}


/* eslint-enable */
