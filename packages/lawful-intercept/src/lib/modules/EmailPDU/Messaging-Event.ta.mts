/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Event {
    deposit = 1,
    retrieve = 2,
    delete_ = 3,
    save = 4,
    slamdown = 5,
    calendar = 6,
    contact = 7,
}

/**
 * @summary Messaging_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Event  ::=  ENUMERATED
 * {
 *     deposit(1),
 *     retrieve(2),
 *     delete(3),
 *     save(4),
 *     slamdown(5),
 *     ...,
 *     calendar(6),
 *     contact(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Event = _enum_for_Messaging_Event | ENUMERATED;

/**
 * @summary Messaging_Event_deposit
 * @constant
 * @type {number}
 */
export
const Messaging_Event_deposit: Messaging_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deposit
 * @constant
 * @type {number}
 */
export
const deposit: Messaging_Event = Messaging_Event_deposit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_retrieve
 * @constant
 * @type {number}
 */
export
const Messaging_Event_retrieve: Messaging_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve: Messaging_Event = Messaging_Event_retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_delete_
 * @constant
 * @type {number}
 */
export
const Messaging_Event_delete_: Messaging_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export
const delete_: Messaging_Event = Messaging_Event_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_save
 * @constant
 * @type {number}
 */
export
const Messaging_Event_save: Messaging_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary save
 * @constant
 * @type {number}
 */
export
const save: Messaging_Event = Messaging_Event_save; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_slamdown
 * @constant
 * @type {number}
 */
export
const Messaging_Event_slamdown: Messaging_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary slamdown
 * @constant
 * @type {number}
 */
export
const slamdown: Messaging_Event = Messaging_Event_slamdown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_calendar
 * @constant
 * @type {number}
 */
export
const Messaging_Event_calendar: Messaging_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calendar
 * @constant
 * @type {number}
 */
export
const calendar: Messaging_Event = Messaging_Event_calendar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_contact
 * @constant
 * @type {number}
 */
export
const Messaging_Event_contact: Messaging_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contact
 * @constant
 * @type {number}
 */
export
const contact: Messaging_Event = Messaging_Event_contact; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Event: $.ASN1Decoder<Messaging_Event> = $._decodeEnumerated;
export const _encode_Messaging_Event: $.ASN1Encoder<Messaging_Event> = $._encodeEnumerated;


/* eslint-enable */
