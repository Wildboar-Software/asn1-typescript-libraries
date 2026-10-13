/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Trigger {
    unknown = 0,
    user = 1,
    user_agent = 2,
    system = 3,
    system_operator = 4,
}

/**
 * @summary Messaging_Trigger
 * @description
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
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_unknown: Messaging_Trigger = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Messaging_Trigger = Messaging_Trigger_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Trigger_user
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_user: Messaging_Trigger = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user
 * @constant
 * @type {number}
 */
export
const user: Messaging_Trigger = Messaging_Trigger_user; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Trigger_user_agent
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_user_agent: Messaging_Trigger = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user_agent
 * @constant
 * @type {number}
 */
export
const user_agent: Messaging_Trigger = Messaging_Trigger_user_agent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Trigger_system
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_system: Messaging_Trigger = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary system
 * @constant
 * @type {number}
 */
export
const system: Messaging_Trigger = Messaging_Trigger_system; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Trigger_system_operator
 * @constant
 * @type {number}
 */
export
const Messaging_Trigger_system_operator: Messaging_Trigger = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary system_operator
 * @constant
 * @type {number}
 */
export
const system_operator: Messaging_Trigger = Messaging_Trigger_system_operator; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Trigger: $.ASN1Decoder<Messaging_Trigger> = $._decodeEnumerated;
export const _encode_Messaging_Trigger: $.ASN1Encoder<Messaging_Trigger> = $._encodeEnumerated;


/* eslint-enable */
