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



import { integerIsOneOf } from "../../constraints.mjs";

/**
 * @summary RcfDeliveryMode
 * @description
 *
 * Delivery mode of this RCF service instance. Service management sets it, and
 * the instance supports one mode.
 *
 * rtnTimelyOnline: online delivery during the space link session. The transfer
 * buffer is the only buffer. If that buffer cannot be passed because of
 * communications congestion, the provider discards it and notifies the user
 * that data were discarded.
 *
 * rtnCompleteOnline: online delivery that keeps frames and synchronous
 * notifications in the online frame buffer so they can still be delivered
 * through communications delays and outages. An association abort drops frames
 * already taken from that buffer for the transfer buffer. An RCF-UNBIND with
 * reason 'end' clears the online frame buffer. At the end of the service
 * instance provision period its contents are discarded.
 *
 * rtnOffline: frames already acquired are stored in an offline frame buffer
 * and delivered later. One offline buffer should serve every offline service
 * instance of a service agreement. Synchronous notifications other than
 * end-of-data are omitted. The provider documents how long after acquisition a
 * frame becomes available, and when offline records are deleted.
 *
 * CCSDS 911.2-B-4, sections 2.3 and 3.1.9.
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

/**
 * @summary Encodes a(n) RcfDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfDeliveryMode, encoded as an ASN.1 Element.
 */
export const _encode_RcfDeliveryMode: (value: RcfDeliveryMode, elGetter: $.ASN1Encoder<any>) => _Element = _encode_DeliveryMode;


/* eslint-enable */
