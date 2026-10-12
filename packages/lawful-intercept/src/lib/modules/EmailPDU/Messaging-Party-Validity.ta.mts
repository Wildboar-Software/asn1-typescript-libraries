/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Party_Validity {
    unknown = 0,
    trusted = 1,
    untrusted = 2,
}

/**
 * @summary Messaging_Party_Validity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Party-Validity  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     trusted(1),
 *     untrusted(2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Party_Validity = _enum_for_Messaging_Party_Validity | ENUMERATED;

/**
 * @summary Messaging_Party_Validity_unknown
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_unknown: Messaging_Party_Validity = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Messaging_Party_Validity = Messaging_Party_Validity_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Validity_trusted
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_trusted: Messaging_Party_Validity = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trusted
 * @constant
 * @type {number}
 */
export
const trusted: Messaging_Party_Validity = Messaging_Party_Validity_trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Validity_untrusted
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_untrusted: Messaging_Party_Validity = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary untrusted
 * @constant
 * @type {number}
 */
export
const untrusted: Messaging_Party_Validity = Messaging_Party_Validity_untrusted; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Party_Validity: $.ASN1Decoder<Messaging_Party_Validity> = $._decodeEnumerated;
export const _encode_Messaging_Party_Validity: $.ASN1Encoder<Messaging_Party_Validity> = $._encodeEnumerated;


/* eslint-enable */
