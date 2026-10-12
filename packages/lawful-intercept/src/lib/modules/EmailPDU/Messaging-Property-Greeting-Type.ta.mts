/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Property_Greeting_Type {
    general = 1,
    name = 2,
    personal = 3,
    absence = 4,
    number_ = 5,
}

/**
 * @summary Messaging_Property_Greeting_Type
 * @description
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
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_general: Messaging_Property_Greeting_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary general
 * @constant
 * @type {number}
 */
export
const general: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_general; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Greeting_Type_name
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_name: Messaging_Property_Greeting_Type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary name
 * @constant
 * @type {number}
 */
export
const name: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Greeting_Type_personal
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_personal: Messaging_Property_Greeting_Type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Greeting_Type_absence
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_absence: Messaging_Property_Greeting_Type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absence
 * @constant
 * @type {number}
 */
export
const absence: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_absence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Greeting_Type_number_
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Greeting_Type_number_: Messaging_Property_Greeting_Type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary number_
 * @constant
 * @type {number}
 */
export
const number_: Messaging_Property_Greeting_Type = Messaging_Property_Greeting_Type_number_; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Property_Greeting_Type: $.ASN1Decoder<Messaging_Property_Greeting_Type> = $._decodeEnumerated;
export const _encode_Messaging_Property_Greeting_Type: $.ASN1Encoder<Messaging_Property_Greeting_Type> = $._encodeEnumerated;


/* eslint-enable */
