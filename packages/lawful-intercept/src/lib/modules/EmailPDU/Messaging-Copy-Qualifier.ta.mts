/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Copy_Qualifier {
    unknown = 0,
    none = 1,
    cc = 2,
    bcc = 3,
}

/**
 * @summary Messaging_Copy_Qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Copy-Qualifier  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     none(1),
 *     cc(2),
 *     bcc(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Copy_Qualifier = _enum_for_Messaging_Copy_Qualifier | ENUMERATED;

/**
 * @summary Messaging_Copy_Qualifier_unknown
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_unknown: Messaging_Copy_Qualifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Messaging_Copy_Qualifier = Messaging_Copy_Qualifier_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_none
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_none: Messaging_Copy_Qualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Messaging_Copy_Qualifier = Messaging_Copy_Qualifier_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_cc
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_cc: Messaging_Copy_Qualifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc
 * @constant
 * @type {number}
 */
export
const cc: Messaging_Copy_Qualifier = Messaging_Copy_Qualifier_cc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_bcc
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_bcc: Messaging_Copy_Qualifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bcc
 * @constant
 * @type {number}
 */
export
const bcc: Messaging_Copy_Qualifier = Messaging_Copy_Qualifier_bcc; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Copy_Qualifier: $.ASN1Decoder<Messaging_Copy_Qualifier> = $._decodeEnumerated;
export const _encode_Messaging_Copy_Qualifier: $.ASN1Encoder<Messaging_Copy_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
