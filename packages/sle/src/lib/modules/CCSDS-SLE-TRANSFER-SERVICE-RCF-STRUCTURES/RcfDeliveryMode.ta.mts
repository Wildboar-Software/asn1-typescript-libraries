/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DeliveryMode, _encode_DeliveryMode, DeliveryMode,
    DeliveryMode_rtnTimelyOnline,
    DeliveryMode_rtnCompleteOnline,
    DeliveryMode_rtnOffline
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/DeliveryMode.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RcfDeliveryMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfDeliveryMode               ::=  DeliveryMode
 * (   rtnTimelyOnline
 * |   rtnCompleteOnline
 * |   rtnOffline
 * )
 * ```
 */
export
type RcfDeliveryMode = DeliveryMode; // DefinedType

let _cached_decoder_for_RcfDeliveryMode: $.ASN1Decoder<RcfDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfDeliveryMode (el: _Element): RcfDeliveryMode {
    if (!_cached_decoder_for_RcfDeliveryMode) { _cached_decoder_for_RcfDeliveryMode = _decode_DeliveryMode; }
    const _decoded = _cached_decoder_for_RcfDeliveryMode(el);
    if (!integerIsOneOf(_decoded, [BigInt(DeliveryMode_rtnTimelyOnline), BigInt(DeliveryMode_rtnCompleteOnline), BigInt(DeliveryMode_rtnOffline)])) {
        throw new ASN1Error("RcfDeliveryMode violates DeliveryMode (rtnTimelyOnline | rtnCompleteOnline | rtnOffline)");
    }
    return _decoded;
}

let _cached_encoder_for_RcfDeliveryMode: $.ASN1Encoder<RcfDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) RcfDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_RcfDeliveryMode (value: RcfDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfDeliveryMode) { _cached_encoder_for_RcfDeliveryMode = _encode_DeliveryMode; }
    return _cached_encoder_for_RcfDeliveryMode(value, elGetter);
}


/* eslint-enable */
