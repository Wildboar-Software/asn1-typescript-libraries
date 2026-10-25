/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Priority of a unified-messaging message. Systems often use other scales; low,
 * medium, high, and private are the common values this specification encodes.
 * The enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Property_Priority {
    /**
     * Low priority.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    low = 1,
    /**
     * Medium priority.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    medium = 2,
    /**
     * High priority.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    high = 3,
    /**
     * Private priority. The specification lists it with low, medium, and high
     * and does not define it further.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    private_ = 4,
}

/**
 * @summary Messaging_Property_Priority
 * @description
 *
 * Priority of a unified-messaging message. Systems often use other scales; low,
 * medium, high, and private are the common values this specification encodes.
 * The enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property-Priority  ::=  ENUMERATED
 * {
 *     low(1),
 *     medium(2),
 *     high(3),
 *     private(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Property_Priority = _enum_for_Messaging_Property_Priority | ENUMERATED;

/**
 * @summary Messaging_Property_Priority_low
 * @description
 *
 * Low priority.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Priority_low: _enum_for_Messaging_Property_Priority.low = _enum_for_Messaging_Property_Priority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @description
 *
 * Low priority.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const low: _enum_for_Messaging_Property_Priority.low = Messaging_Property_Priority_low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Priority_medium
 * @description
 *
 * Medium priority.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Priority_medium: _enum_for_Messaging_Property_Priority.medium = _enum_for_Messaging_Property_Priority.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @description
 *
 * Medium priority.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const medium: _enum_for_Messaging_Property_Priority.medium = Messaging_Property_Priority_medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Priority_high
 * @description
 *
 * High priority.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Priority_high: _enum_for_Messaging_Property_Priority.high = _enum_for_Messaging_Property_Priority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @description
 *
 * High priority.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const high: _enum_for_Messaging_Property_Priority.high = Messaging_Property_Priority_high; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Priority_private_
 * @description
 *
 * Private priority. The specification lists it with low, medium, and high and
 * does not define it further.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Priority_private_: _enum_for_Messaging_Property_Priority.private_ = _enum_for_Messaging_Property_Priority.private_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary private_
 * @description
 *
 * Private priority. The specification lists it with low, medium, and high and
 * does not define it further.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const private_: _enum_for_Messaging_Property_Priority.private_ = Messaging_Property_Priority_private_; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Property_Priority: $.ASN1Decoder<Messaging_Property_Priority> = $._decodeEnumerated;
export const _encode_Messaging_Property_Priority: $.ASN1Encoder<Messaging_Property_Priority> = $._encodeEnumerated;


/* eslint-enable */
