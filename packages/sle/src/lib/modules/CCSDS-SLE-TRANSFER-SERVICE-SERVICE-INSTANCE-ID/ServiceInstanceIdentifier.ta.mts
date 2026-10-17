/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceInstanceAttribute, _decode_ServiceInstanceAttribute, _encode_ServiceInstanceAttribute } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceInstanceAttribute.ta.mjs";


/**
 * @summary ServiceInstanceIdentifier
 * @description
 * 
 * Concatenation of the attributes that identify one service instance.
 * The string form joins `name=value` pairs with `.`. The module
 * comment lists them in this order: `sagr`, `spack`, then `fsl-fg`
 * or `rsl-fg`, then the service name.
 * Example: `sagr=xyz.spack=abcdef.rsl-fg=gfjdy.raf=onlc2`.
 * 
 * The identifier is unique within the service-providing SLE Complex.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.9 and A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInstanceIdentifier   ::=    SEQUENCE OF ServiceInstanceAttribute
 * ```
 */
export
type ServiceInstanceIdentifier = ServiceInstanceAttribute[]; // SequenceOfType

let _cached_decoder_for_ServiceInstanceIdentifier: $.ASN1Decoder<ServiceInstanceIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInstanceIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInstanceIdentifier (el: _Element): ServiceInstanceIdentifier {
    if (!_cached_decoder_for_ServiceInstanceIdentifier) { _cached_decoder_for_ServiceInstanceIdentifier = $._decodeSequenceOf<ServiceInstanceAttribute>(() => _decode_ServiceInstanceAttribute); }
    return _cached_decoder_for_ServiceInstanceIdentifier(el);
}

let _cached_encoder_for_ServiceInstanceIdentifier: $.ASN1Encoder<ServiceInstanceIdentifier> | null = null;

/**
 * @summary Encodes a(n) ServiceInstanceIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInstanceIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInstanceIdentifier (value: ServiceInstanceIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInstanceIdentifier) { _cached_encoder_for_ServiceInstanceIdentifier = $._encodeSequenceOf<ServiceInstanceAttribute>(() => _encode_ServiceInstanceAttribute, $.BER); }
    return _cached_encoder_for_ServiceInstanceIdentifier(value, elGetter);
}


/* eslint-enable */
