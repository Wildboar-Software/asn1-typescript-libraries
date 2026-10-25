/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Which reports the originating party asked the unified-messaging system to
 * send.
 *
 * Clause 8.7 defines delivery, read, and both. It does not define `none`. The
 * enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Property_Requested_Reports {
    /**
     * Clause 8.7 does not define this item. The defined cases are a delivery
     * report, a read report, or both.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    none = 0,
    /**
     * The originating party requested a delivery report.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    delivery = 1,
    /**
     * The originating party requested a read report.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    read = 2,
    /**
     * The originating party requested both a delivery report and a read report.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    delivery_and_read = 3,
}

/**
 * @summary Messaging_Property_Requested_Reports
 * @description
 *
 * Which reports the originating party asked the unified-messaging system to
 * send.
 *
 * Clause 8.7 defines delivery, read, and both. It does not define `none`. The
 * enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property-Requested-Reports  ::=  ENUMERATED
 * {
 *     none(0),
 *     delivery(1),
 *     read(2),
 *     delivery-and-read(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Property_Requested_Reports = _enum_for_Messaging_Property_Requested_Reports | ENUMERATED;

/**
 * @summary Messaging_Property_Requested_Reports_none
 * @description
 *
 * Clause 8.7 does not define this item. The defined cases are a delivery
 * report, a read report, or both.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_none = _enum_for_Messaging_Property_Requested_Reports.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @description
 *
 * Clause 8.7 does not define this item. The defined cases are a delivery
 * report, a read report, or both.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const none = Messaging_Property_Requested_Reports_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_delivery
 * @description
 *
 * The originating party requested a delivery report.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_delivery = _enum_for_Messaging_Property_Requested_Reports.delivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery
 * @description
 *
 * The originating party requested a delivery report.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const delivery = Messaging_Property_Requested_Reports_delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_read
 * @description
 *
 * The originating party requested a read report.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_read = _enum_for_Messaging_Property_Requested_Reports.read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @description
 *
 * The originating party requested a read report.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const read = Messaging_Property_Requested_Reports_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_delivery_and_read
 * @description
 *
 * The originating party requested both a delivery report and a read report.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_delivery_and_read = _enum_for_Messaging_Property_Requested_Reports.delivery_and_read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_and_read
 * @description
 *
 * The originating party requested both a delivery report and a read report.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const delivery_and_read = Messaging_Property_Requested_Reports_delivery_and_read; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Property_Requested_Reports: $.ASN1Decoder<Messaging_Property_Requested_Reports> = $._decodeEnumerated;
export const _encode_Messaging_Property_Requested_Reports: $.ASN1Encoder<Messaging_Property_Requested_Reports> = $._encodeEnumerated;


/* eslint-enable */
