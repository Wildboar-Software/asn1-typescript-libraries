/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * What caused a unified-messaging event. If user and user-agent cannot be told
 * apart, use user.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Trigger {
    /**
     * It is not known where the event originated.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    unknown = 0,
    /**
     * A person acted: the target, or someone depositing a message. Prefer this
     * when user and user-agent cannot be distinguished.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    user = 1,
    /**
     * A web application or mobile application acted for the user. The
     * application name, when known, is the `user_agent` alternative of
     * `Messaging_Property`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.6 and 8.7.
     */
    user_agent = 2,
    /**
     * An automated process, for example cleanup of a mailbox after inactivity.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    system = 3,
    /**
     * Manual intervention by the CSP's personnel.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    system_operator = 4,
}

/**
 * @summary Messaging_Trigger
 * @description
 *
 * What caused a unified-messaging event. If user and user-agent cannot be told
 * apart, use user.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Trigger  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     user(1),
 *     user-agent(2),
 *     system(3),
 *     system-operator(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Trigger = _enum_for_Messaging_Trigger | ENUMERATED;

/**
 * @summary Messaging_Trigger_unknown
 * @description
 *
 * It is not known where the event originated.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_unknown: Messaging_Trigger = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * It is not known where the event originated.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const unknown: Messaging_Trigger = Messaging_Trigger_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Trigger_user
 * @description
 *
 * A person acted: the target, or someone depositing a message. Prefer this when
 * user and user-agent cannot be distinguished.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_user: Messaging_Trigger = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user
 * @description
 *
 * A person acted: the target, or someone depositing a message. Prefer this when
 * user and user-agent cannot be distinguished.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const user: Messaging_Trigger = Messaging_Trigger_user; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Trigger_user_agent
 * @description
 *
 * A web application or mobile application acted for the user. The application
 * name, when known, is the `user_agent` alternative of `Messaging_Property`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.6 and 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_user_agent: Messaging_Trigger = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user_agent
 * @description
 *
 * A web application or mobile application acted for the user. The application
 * name, when known, is the `user_agent` alternative of `Messaging_Property`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.6 and 8.7.
 *
 * @constant
 * @type {number}
 */
export
const user_agent: Messaging_Trigger = Messaging_Trigger_user_agent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Trigger_system
 * @description
 *
 * An automated process, for example cleanup of a mailbox after inactivity.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_system: Messaging_Trigger = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary system
 * @description
 *
 * An automated process, for example cleanup of a mailbox after inactivity.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const system: Messaging_Trigger = Messaging_Trigger_system; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Trigger_system_operator
 * @description
 *
 * Manual intervention by the CSP's personnel.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_system_operator: Messaging_Trigger = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary system_operator
 * @description
 *
 * Manual intervention by the CSP's personnel.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const system_operator: Messaging_Trigger = Messaging_Trigger_system_operator; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Trigger: $.ASN1Decoder<Messaging_Trigger> = $._decodeEnumerated;
export const _encode_Messaging_Trigger: $.ASN1Encoder<Messaging_Trigger> = $._encodeEnumerated;


/* eslint-enable */
