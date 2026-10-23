/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DeliveryMode, _encode_DeliveryMode, DeliveryMode,
    DeliveryMode_fwdOnline
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/DeliveryMode.ta.mjs";



/**
 * @summary FspDeliveryMode
 * @description
 * 
 * Delivery mode of the FSP service. This issue defines only forward online
 * delivery: provisioning occurs during the space link session, Packets are
 * buffered until they are processed, and the buffer exists only during
 * provisioning. Annex A fixes the value at `fwdOnline`. Forward offline
 * delivery is not defined in this issue.
 * 
 * CCSDS 912.3-B-3, sections 3.1.8 and 3.10.2.5 (table 3-11).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspDeliveryMode          ::=    DeliveryMode (fwdOnline)
 * ```
 */
export
type FspDeliveryMode = DeliveryMode; // DefinedType

let _cached_decoder_for_FspDeliveryMode: $.ASN1Decoder<FspDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspDeliveryMode (el: _Element): FspDeliveryMode {
    if (!_cached_decoder_for_FspDeliveryMode) { _cached_decoder_for_FspDeliveryMode = _decode_DeliveryMode; }
    const _decoded = _cached_decoder_for_FspDeliveryMode(el);
    if (_decoded !== DeliveryMode_fwdOnline) {
        throw new ASN1Error("FspDeliveryMode violates DeliveryMode (fwdOnline)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) FspDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspDeliveryMode, encoded as an ASN.1 Element.
 */
export const _encode_FspDeliveryMode: (value: FspDeliveryMode, elGetter: $.ASN1Encoder<any>) => _Element = _encode_DeliveryMode;


/* eslint-enable */
