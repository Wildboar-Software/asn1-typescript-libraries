/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DeliveryMode, _encode_DeliveryMode, DeliveryMode,
    DeliveryMode_fwdOnline
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/DeliveryMode.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspDeliveryMode
 * @description
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
    if (!integerIsOneOf(_decoded, [BigInt(DeliveryMode_fwdOnline)])) {
        throw new ASN1Error("FspDeliveryMode violates DeliveryMode (fwdOnline)");
    }
    return _decoded;
}

let _cached_encoder_for_FspDeliveryMode: $.ASN1Encoder<FspDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) FspDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_FspDeliveryMode (value: FspDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspDeliveryMode) { _cached_encoder_for_FspDeliveryMode = _encode_DeliveryMode; }
    return _cached_encoder_for_FspDeliveryMode(value, elGetter);
}


/* eslint-enable */
