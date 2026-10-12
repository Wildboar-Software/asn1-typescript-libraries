/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Property_Requested_Reports {
    none = 0,
    delivery = 1,
    read = 2,
    delivery_and_read = 3,
}

/**
 * @summary Messaging_Property_Requested_Reports
 * @description
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
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_none: Messaging_Property_Requested_Reports = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Messaging_Property_Requested_Reports = Messaging_Property_Requested_Reports_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_delivery
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_delivery: Messaging_Property_Requested_Reports = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery
 * @constant
 * @type {number}
 */
export
const delivery: Messaging_Property_Requested_Reports = Messaging_Property_Requested_Reports_delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_read
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_read: Messaging_Property_Requested_Reports = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read: Messaging_Property_Requested_Reports = Messaging_Property_Requested_Reports_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Requested_Reports_delivery_and_read
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Requested_Reports_delivery_and_read: Messaging_Property_Requested_Reports = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_and_read
 * @constant
 * @type {number}
 */
export
const delivery_and_read: Messaging_Property_Requested_Reports = Messaging_Property_Requested_Reports_delivery_and_read; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Property_Requested_Reports: $.ASN1Decoder<Messaging_Property_Requested_Reports> = $._decodeEnumerated;
export const _encode_Messaging_Property_Requested_Reports: $.ASN1Encoder<Messaging_Property_Requested_Reports> = $._encodeEnumerated;


/* eslint-enable */
