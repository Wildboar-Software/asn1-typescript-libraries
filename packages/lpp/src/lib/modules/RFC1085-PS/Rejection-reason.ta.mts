/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Rejection_reason
 * @description
 *
 * Reason on a rejected `ConnectResponse-PDU`. Omit the field
 * when the connection is accepted
 * ([RFC 1085 Appendix A](https://datatracker.ietf.org/doc/html/rfc1085)).
 *
 * `rejected-by-responder` (0) is user-rejection. The other
 * codes are provider rejections. The service also distinguishes
 * transient and permanent provider-rejection
 * ([§7.1](https://datatracker.ietf.org/doc/html/rfc1085#section-7.1)
 * item 16);
 * this memo does not assign the named provider codes to those
 * two categories. Integer 2 is unassigned.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Rejection-reason  ::=  INTEGER {
 *     rejected-by-responder               (0),
 *     called-presentation-address-unknown (1),
 *     local-limit-exceeded                (3),
 *     protocol-version-not-supported      (4)
 * }
 * ```
 */
export
type Rejection_reason = INTEGER;

/**
 * @summary Rejection_reason_rejected_by_responder
 * @description
 *
 * `rejected-by-responder` (0): the correspondent presentation
 * user rejected the connection. User data may still be present.
 * The responder returns to IDLE
 * ([§10.3](https://datatracker.ietf.org/doc/html/rfc1085#section-10.3)
 * WAIT2).
 *
 * @constant
 * @type {number}
 */
export
const Rejection_reason_rejected_by_responder: Rejection_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary rejected_by_responder
 * @description
 *
 * `rejected-by-responder` (0): the correspondent presentation
 * user rejected the connection. User data may still be present.
 * The responder returns to IDLE
 * ([§10.3](https://datatracker.ietf.org/doc/html/rfc1085#section-10.3)
 * WAIT2).
 *
 * @constant
 * @type {number}
 */
export
const rejected_by_responder: Rejection_reason = Rejection_reason_rejected_by_responder; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_called_presentation_address_unknown
 * @description
 *
 * `called-presentation-address-unknown` (1): provider rejection
 * because the called presentation address is unknown. The memo
 * does not define how the responder decides this. User data is
 * omitted with this code (Appendix A).
 *
 * @constant
 * @type {number}
 */
export
const Rejection_reason_called_presentation_address_unknown: Rejection_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary called_presentation_address_unknown
 * @description
 *
 * `called-presentation-address-unknown` (1): provider rejection
 * because the called presentation address is unknown. The memo
 * does not define how the responder decides this. User data is
 * omitted with this code (Appendix A).
 *
 * @constant
 * @type {number}
 */
export
const called_presentation_address_unknown: Rejection_reason = Rejection_reason_called_presentation_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_local_limit_exceeded
 * @description
 *
 * `local-limit-exceeded` (3): provider rejection because a
 * local limit was exceeded. The memo does not name the limit.
 * User data is omitted with this code (Appendix A). Integer 2
 * is unassigned.
 *
 * @constant
 * @type {number}
 */
export
const Rejection_reason_local_limit_exceeded: Rejection_reason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary local_limit_exceeded
 * @description
 *
 * `local-limit-exceeded` (3): provider rejection because a
 * local limit was exceeded. The memo does not name the limit.
 * User data is omitted with this code (Appendix A). Integer 2
 * is unassigned.
 *
 * @constant
 * @type {number}
 */
export
const local_limit_exceeded: Rejection_reason = Rejection_reason_local_limit_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Rejection_reason_protocol_version_not_supported
 * @description
 *
 * `protocol-version-not-supported` (4): provider rejection
 * because the `ConnectRequest-PDU` version is not supported.
 * The only version this memo defines is `version-1` (0). User
 * data is omitted with this code (Appendix A).
 *
 * @constant
 * @type {number}
 */
export
const Rejection_reason_protocol_version_not_supported: Rejection_reason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary protocol_version_not_supported
 * @description
 *
 * `protocol-version-not-supported` (4): provider rejection
 * because the `ConnectRequest-PDU` version is not supported.
 * The only version this memo defines is `version-1` (0). User
 * data is omitted with this code (Appendix A).
 *
 * @constant
 * @type {number}
 */
export
const protocol_version_not_supported: Rejection_reason = Rejection_reason_protocol_version_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Rejection_reason: $.ASN1Decoder<Rejection_reason> = $._decodeInteger;
export const _encode_Rejection_reason: $.ASN1Encoder<Rejection_reason> = $._encodeInteger;


/* eslint-enable */
