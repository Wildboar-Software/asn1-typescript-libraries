/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSReplyCharging
 * @description
 * 
 * If this field is present its value is set to "accepted" or "accepted text
 * only" and the MMS-version-value of the M-Notification.ind PDU is higher than
 * 1.0, this header field will indicate that a reply to this particular MM is
 * free of charge for the recipient. If the Reply-Charging service is offered
 * and the request for reply-charging has been accepted by the MMS service
 * provider the value of this header field SHALL be set to "accepted" or
 * "accepted text only". See OMA-TS-MMS_ENC [39] clause 7.3.43. Include if sent
 * to the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSReplyCharging {
    requested = 0,
    requestedTextOnly = 1,
    accepted = 2,
    acceptedTextOnly = 3,
}

/**
 * @summary MMSReplyCharging
 * @description
 * 
 * If this field is present its value is set to "accepted" or "accepted text
 * only" and the MMS-version-value of the M-Notification.ind PDU is higher than
 * 1.0, this header field will indicate that a reply to this particular MM is
 * free of charge for the recipient. If the Reply-Charging service is offered
 * and the request for reply-charging has been accepted by the MMS service
 * provider the value of this header field SHALL be set to "accepted" or
 * "accepted text only". See OMA-TS-MMS_ENC [39] clause 7.3.43. Include if sent
 * to the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSReplyCharging = _enum_for_MMSReplyCharging;

/**
 * @summary MMSReplyCharging
 * @description
 * 
 * If this field is present its value is set to "accepted" or "accepted text
 * only" and the MMS-version-value of the M-Notification.ind PDU is higher than
 * 1.0, this header field will indicate that a reply to this particular MM is
 * free of charge for the recipient. If the Reply-Charging service is offered
 * and the request for reply-charging has been accepted by the MMS service
 * provider the value of this header field SHALL be set to "accepted" or
 * "accepted text only". See OMA-TS-MMS_ENC [39] clause 7.3.43. Include if sent
 * to the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSReplyCharging: typeof _enum_for_MMSReplyCharging = _enum_for_MMSReplyCharging;

/**
 * @summary MMSReplyCharging_requested
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_requested: _enum_for_MMSReplyCharging.requested = MMSReplyCharging.requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requested
 * @constant
 * @type {number}
 */
export
const requested: _enum_for_MMSReplyCharging.requested = MMSReplyCharging.requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_requestedTextOnly
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_requestedTextOnly: _enum_for_MMSReplyCharging.requestedTextOnly = MMSReplyCharging.requestedTextOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedTextOnly
 * @constant
 * @type {number}
 */
export
const requestedTextOnly: _enum_for_MMSReplyCharging.requestedTextOnly = MMSReplyCharging.requestedTextOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_accepted
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_accepted: _enum_for_MMSReplyCharging.accepted = MMSReplyCharging.accepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accepted
 * @constant
 * @type {number}
 */
export
const accepted: _enum_for_MMSReplyCharging.accepted = MMSReplyCharging.accepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_acceptedTextOnly
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_acceptedTextOnly: _enum_for_MMSReplyCharging.acceptedTextOnly = MMSReplyCharging.acceptedTextOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acceptedTextOnly
 * @constant
 * @type {number}
 */
export
const acceptedTextOnly: _enum_for_MMSReplyCharging.acceptedTextOnly = MMSReplyCharging.acceptedTextOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSReplyCharging: $.ASN1Decoder<MMSReplyCharging> = $._decodeEnumerated;
export const _encode_MMSReplyCharging: $.ASN1Encoder<MMSReplyCharging> = $._encodeEnumerated;


/* eslint-enable */
