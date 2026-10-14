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
 * @summary CltuDeliveryMode
 * @description
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

let _cached_encoder_for_CltuDeliveryMode: $.ASN1Encoder<CltuDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) CltuDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_CltuDeliveryMode (value: CltuDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuDeliveryMode) { _cached_encoder_for_CltuDeliveryMode = _encode_DeliveryMode; }
    return _cached_encoder_for_CltuDeliveryMode(value, elGetter);
}


/* eslint-enable */
