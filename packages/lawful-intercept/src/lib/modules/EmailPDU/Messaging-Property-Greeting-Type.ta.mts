/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Which greeting a unified-messaging box operation refers to.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Property_Greeting_Type {
    /**
     * The general greeting. Clause 8.7 does not describe this value beyond the
     * name.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    general = 1,
    /**
     * A greeting in which the user only gives their name.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    name = 2,
    /**
     * A greeting recorded by the user.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    personal = 3,
    /**
     * A greeting that says the user is absent. Some systems play only an
     * absence greeting and then refuse further message deposits.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    absence = 4,
    /**
     * A greeting in which the messaging system reads the number of the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    number_ = 5,
}

/**
 * @summary Messaging_Property_Greeting_Type
 * @description
 *
 * Which greeting a unified-messaging box operation refers to.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property-Greeting-Type  ::=  ENUMERATED
 * {
 *     general(1),
 *     name(2),
 *     personal(3),
 *     absence(4),
 *     number(5),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Property_Greeting_Type = _enum_for_Messaging_Property_Greeting_Type | ENUMERATED;

/**
 * @summary Messaging_Property_Greeting_Type_general
 * @description
 *
 * The general greeting. Clause 8.7 does not describe this value beyond the
 * name.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_general: Messaging_Property_Greeting_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary general
 * @description
 *
 * The general greeting. Clause 8.7 does not describe this value beyond the
 * name.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const general: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_general; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Greeting_Type_name
 * @description
 *
 * A greeting in which the user only gives their name.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_name: Messaging_Property_Greeting_Type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary name
 * @description
 *
 * A greeting in which the user only gives their name.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const name: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Greeting_Type_personal
 * @description
 *
 * A greeting recorded by the user.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_personal: Messaging_Property_Greeting_Type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @description
 *
 * A greeting recorded by the user.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const personal: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Greeting_Type_absence
 * @description
 *
 * A greeting that says the user is absent. Some systems play only an absence
 * greeting and then refuse further message deposits.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_absence: Messaging_Property_Greeting_Type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absence
 * @description
 *
 * A greeting that says the user is absent. Some systems play only an absence
 * greeting and then refuse further message deposits.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const absence: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_absence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Greeting_Type_number_
 * @description
 *
 * A greeting in which the messaging system reads the number of the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_number_: Messaging_Property_Greeting_Type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary number_
 * @description
 *
 * A greeting in which the messaging system reads the number of the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const number_: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_number_; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Property_Greeting_Type: $.ASN1Decoder<Messaging_Property_Greeting_Type> = $._decodeEnumerated;
export const _encode_Messaging_Property_Greeting_Type: $.ASN1Encoder<Messaging_Property_Greeting_Type> = $._encodeEnumerated;


/* eslint-enable */
