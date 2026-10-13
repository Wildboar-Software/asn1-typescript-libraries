/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceInstanceAttribute_Item, _decode_ServiceInstanceAttribute_Item, _encode_ServiceInstanceAttribute_Item } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceInstanceAttribute-Item.ta.mjs";
// export { ServiceInstanceAttribute_Item, _decode_ServiceInstanceAttribute_Item, _encode_ServiceInstanceAttribute_Item } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceInstanceAttribute-Item.ta.mjs";


/**
 * @summary ServiceInstanceAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInstanceAttribute    ::=       SET SIZE(1) OF SEQUENCE
 * {  identifier                       ATTRIBUTE.&id
 *                                     ({ServiceInstanceAttributes})
 * ,  siAttributeValue                 VisibleString (SIZE (1 .. 256))
 * }
 * ```
 */
export
type ServiceInstanceAttribute = ServiceInstanceAttribute_Item[]; // SetOfType

let _cached_decoder_for_ServiceInstanceAttribute: $.ASN1Decoder<ServiceInstanceAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInstanceAttribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInstanceAttribute (el: _Element): ServiceInstanceAttribute {
    if (!_cached_decoder_for_ServiceInstanceAttribute) { _cached_decoder_for_ServiceInstanceAttribute = $._decodeSetOf<ServiceInstanceAttribute_Item>(() => _decode_ServiceInstanceAttribute_Item); }
    const _decoded = _cached_decoder_for_ServiceInstanceAttribute(el);
    if (_decoded.length < 1 || _decoded.length > 1) {
        throw new ASN1SizeError("ServiceInstanceAttribute violates SIZE (1)");
    }
    return _decoded;
}

let _cached_encoder_for_ServiceInstanceAttribute: $.ASN1Encoder<ServiceInstanceAttribute> | null = null;

/**
 * @summary Encodes a(n) ServiceInstanceAttribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInstanceAttribute, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInstanceAttribute (value: ServiceInstanceAttribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInstanceAttribute) { _cached_encoder_for_ServiceInstanceAttribute = $._encodeSetOf<ServiceInstanceAttribute_Item>(() => _encode_ServiceInstanceAttribute_Item, $.BER); }
    return _cached_encoder_for_ServiceInstanceAttribute(value, elGetter);
}


/* eslint-enable */
