/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Manipulation of a message inside the unified-messaging system.
 *
 * Table 5 requires captured content for deposit, retrieve, delete, save,
 * calendar, and contact. Slamdown is not in that table.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Event {
    /**
     * A message is delivered to the target's UM box. Table 5 requires
     * captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
     */
    deposit = 1,
    /**
     * The target retrieves a message. Table 5 requires captured-content
     * delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
     */
    retrieve = 2,
    /**
     * The target deletes a message. Table 5 requires captured-content delivery
     * for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
     */
    delete_ = 3,
    /**
     * The target saves a message. Table 5 requires captured-content delivery
     * for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
     */
    save = 4,
    /**
     * Deposit of a message is aborted: the caller hangs up before speaking.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.2.
     */
    slamdown = 5,
    /**
     * A calendar event is sent to or from the target. Content is an iCalendar
     * object: MIME type from IETF RFC 5545, formatting from IETF RFC 4791.
     * Table 5 requires captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
     */
    calendar = 6,
    /**
     * A contact record is sent to or from the target. Content is a vCard: MIME
     * type from IETF RFC 6350, formatting from IETF RFC 6352. Table 5 requires
     * captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
     */
    contact = 7,
}

/**
 * @summary Messaging_Event
 * @description
 *
 * Manipulation of a message inside the unified-messaging system.
 *
 * Table 5 requires captured content for deposit, retrieve, delete, save,
 * calendar, and contact. Slamdown is not in that table.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
 * @description
 *
 * A message is delivered to the target's UM box. Table 5 requires
 * captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Event_deposit: Messaging_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deposit
 * @description
 *
 * A message is delivered to the target's UM box. Table 5 requires
 * captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const deposit: Messaging_Event = Messaging_Event_deposit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_retrieve
 * @description
 *
 * The target retrieves a message. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Event_retrieve: Messaging_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @description
 *
 * The target retrieves a message. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const retrieve: Messaging_Event = Messaging_Event_retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_delete_
 * @description
 *
 * The target deletes a message. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Event_delete_: Messaging_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @description
 *
 * The target deletes a message. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const delete_: Messaging_Event = Messaging_Event_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_save
 * @description
 *
 * The target saves a message. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Event_save: Messaging_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary save
 * @description
 *
 * The target saves a message. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const save: Messaging_Event = Messaging_Event_save; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_slamdown
 * @description
 *
 * Deposit of a message is aborted: the caller hangs up before speaking.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.2.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Event_slamdown: Messaging_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary slamdown
 * @description
 *
 * Deposit of a message is aborted: the caller hangs up before speaking.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.2.
 *
 * @constant
 * @type {number}
 */
export
const slamdown: Messaging_Event = Messaging_Event_slamdown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_calendar
 * @description
 *
 * A calendar event is sent to or from the target. Content is an iCalendar
 * object: MIME type from IETF RFC 5545, formatting from IETF RFC 4791. Table 5
 * requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Event_calendar: Messaging_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calendar
 * @description
 *
 * A calendar event is sent to or from the target. Content is an iCalendar
 * object: MIME type from IETF RFC 5545, formatting from IETF RFC 4791. Table 5
 * requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const calendar: Messaging_Event = Messaging_Event_calendar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Event_contact
 * @description
 *
 * A contact record is sent to or from the target. Content is a vCard: MIME type
 * from IETF RFC 6350, formatting from IETF RFC 6352. Table 5 requires
 * captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Event_contact: Messaging_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contact
 * @description
 *
 * A contact record is sent to or from the target. Content is a vCard: MIME type
 * from IETF RFC 6350, formatting from IETF RFC 6352. Table 5 requires
 * captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.2.
 *
 * @constant
 * @type {number}
 */
export
const contact: Messaging_Event = Messaging_Event_contact; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Event: $.ASN1Decoder<Messaging_Event> = $._decodeEnumerated;
export const _encode_Messaging_Event: $.ASN1Encoder<Messaging_Event> = $._encodeEnumerated;


/* eslint-enable */
