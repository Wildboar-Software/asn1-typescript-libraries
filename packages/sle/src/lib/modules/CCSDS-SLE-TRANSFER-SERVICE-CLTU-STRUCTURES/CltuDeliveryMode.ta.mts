/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DeliveryMode, _encode_DeliveryMode, type DeliveryMode,
    DeliveryMode_fwdOnline
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/DeliveryMode.ta.mjs";



/**
 * @summary CltuDeliveryMode
 * @description
 * 
 * Delivery mode of this service instance, constrained to forward online.
 * Provision happens during the space link session. The provider buffers CLTUs
 * until they are processed, and that buffer exists only while the service is
 * being provided. Processing order is the buffer order plus the timing
 * annotation on each CLTU. Forward offline delivery is outside the scope of
 * this issue. Set by service management. CLTU-GET-PARAMETER reports fwd online.
 * CCSDS 912.1-B-5, section 3.1.8 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuDeliveryMode                        ::=    DeliveryMode (fwdOnline)
 * ```
 */
export
type CltuDeliveryMode = DeliveryMode; // DefinedType

let _cached_decoder_for_CltuDeliveryMode: $.ASN1Decoder<CltuDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuDeliveryMode (el: _Element): CltuDeliveryMode {
    if (!_cached_decoder_for_CltuDeliveryMode) { _cached_decoder_for_CltuDeliveryMode = _decode_DeliveryMode; }
    const _decoded = _cached_decoder_for_CltuDeliveryMode(el);
    if (_decoded !== DeliveryMode_fwdOnline) {
        throw new ASN1Error("CltuDeliveryMode violates DeliveryMode (fwdOnline)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) CltuDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuDeliveryMode, encoded as an ASN.1 Element.
 */
export const _encode_CltuDeliveryMode: $.ASN1Encoder<CltuDeliveryMode> = _encode_DeliveryMode;


/* eslint-enable */
