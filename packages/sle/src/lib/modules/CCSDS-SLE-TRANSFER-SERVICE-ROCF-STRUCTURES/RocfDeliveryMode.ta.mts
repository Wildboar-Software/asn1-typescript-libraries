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
 * @summary RocfDeliveryMode
 * @description
 * 
 * Delivery mode of this ROCF instance. Service management sets it, and one
 * instance supports one mode. The integer codes are the DeliveryMode values
 * rtnTimelyOnline (0), rtnCompleteOnline (1), and rtnOffline (2).
 *
 * Timely online stores OCFs and synchronous notifications only in the transfer
 * buffer and delivers during the space link session. If the communications
 * service will not accept a full buffer, the provider discards that buffer and
 * inserts one data-discarded notification.
 *
 * Complete online also fills an online OCF buffer and attempts to deliver
 * every acquired OCF in order, including across communications outages. The
 * online buffer survives an unbind unless unbind-reason is end. An abort
 * clears the transfer buffer and stops removal from the online buffer; OCFs
 * already removed are not extracted again. Overflow discards the oldest
 * records, in a count set by service management, and signals data discarded.
 * The online buffer is discarded at the end of the provision period.
 *
 * Offline delivery is after the space link session. There should be one
 * offline OCF buffer for the service instances of a service agreement. START
 * must give both a start and a stop time. The only synchronous notification
 * in offline delivery is end of data. ROCF-SCHEDULE-STATUS-REPORT is rejected.
 * The provider documents the delay before an acquired OCF can be retrieved and
 * the policy for deleting offline records.
 *
 * CCSDS 911.5-B-4, sections 2.3, 2.6.4.4, 3.1.9, 3.8.1.6, and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfDeliveryMode         ::=    DeliveryMode
 * (  rtnTimelyOnline
 * |  rtnCompleteOnline
 * |  rtnOffline
 * )
 * ```
 */
export
type RocfDeliveryMode = DeliveryMode; // DefinedType

let _cached_decoder_for_RocfDeliveryMode: $.ASN1Decoder<RocfDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfDeliveryMode (el: _Element): RocfDeliveryMode {
    if (!_cached_decoder_for_RocfDeliveryMode) { _cached_decoder_for_RocfDeliveryMode = _decode_DeliveryMode; }
    const _decoded = _cached_decoder_for_RocfDeliveryMode(el);
    if (!integerIsOneOf(_decoded, [BigInt(DeliveryMode_rtnTimelyOnline), BigInt(DeliveryMode_rtnCompleteOnline), BigInt(DeliveryMode_rtnOffline)])) {
        throw new ASN1Error("RocfDeliveryMode violates DeliveryMode (rtnTimelyOnline | rtnCompleteOnline | rtnOffline)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) RocfDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfDeliveryMode, encoded as an ASN.1 Element.
 */
export const _encode_RocfDeliveryMode: $.ASN1Encoder<RocfDeliveryMode> = _encode_DeliveryMode;


/* eslint-enable */
