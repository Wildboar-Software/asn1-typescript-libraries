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
 * @summary RafDeliveryMode
 * @description
 * 
 * Delivery mode of this service instance. Service management sets it, and one
 * instance supports one mode. Online provision is generally coincident with the
 * space link session. Offline provision delivers stored frames after the
 * session.
 * 
 * `rtnTimelyOnline` keeps only the transfer buffer. A buffer that cannot be
 * passed to the communications service because of backpressure is discarded as
 * a whole, and one `excessiveDataBacklog` notification is inserted.
 * 
 * `rtnCompleteOnline` keeps an online frame buffer in front of the transfer
 * buffer and delivers acquired frames in order, holding data across
 * communications delay. The online buffer is cleared when RAF-UNBIND is invoked
 * with reason `end`, and its contents are discarded at the end of the provision
 * period. Annex C requires room for at least 100,000 RAF-TRANSFER-DATA
 * invocations. Overflow discards the oldest records; service management sets
 * how many.
 * 
 * `rtnOffline` delivers from an offline frame buffer, possibly hours or days
 * after acquisition. There should be one such buffer for every service
 * instance under a service agreement. RAF-START
 * requires a start time and a stop time. The only synchronous notification is
 * end of data, and RAF-SCHEDULE-STATUS-REPORT is rejected. The provider
 * documents the delay before frames become available and the policy for
 * deleting stored frames. Annex C requires room for at least 1,000,000
 * RAF-TRANSFER-DATA invocations.
 * 
 * CCSDS 911.1-B-5, sections 2.3, 3.1.9, and 3.8.1.6, table 3-11, and annex C
 * table C-2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafDeliveryMode              ::=  DeliveryMode
 * (   rtnTimelyOnline
 * |   rtnCompleteOnline
 * |   rtnOffline
 * )
 * ```
 */
export
type RafDeliveryMode = DeliveryMode; // DefinedType

let _cached_decoder_for_RafDeliveryMode: $.ASN1Decoder<RafDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafDeliveryMode (el: _Element): RafDeliveryMode {
    if (!_cached_decoder_for_RafDeliveryMode) { _cached_decoder_for_RafDeliveryMode = _decode_DeliveryMode; }
    const _decoded = _cached_decoder_for_RafDeliveryMode(el);
    if (!integerIsOneOf(_decoded, [BigInt(DeliveryMode_rtnTimelyOnline), BigInt(DeliveryMode_rtnCompleteOnline), BigInt(DeliveryMode_rtnOffline)])) {
        throw new ASN1Error("RafDeliveryMode violates DeliveryMode (rtnTimelyOnline | rtnCompleteOnline | rtnOffline)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) RafDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafDeliveryMode, encoded as an ASN.1 Element.
 */
export const _encode_RafDeliveryMode: $.ASN1Encoder<RafDeliveryMode> = _encode_DeliveryMode;


/* eslint-enable */
