/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_System_Type {
    unified_messaging = 1,
}

/**
 * @summary Messaging_System_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-System-Type  ::=  ENUMERATED
 * {
 *     unified-messaging(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_System_Type = _enum_for_Messaging_System_Type | ENUMERATED;

/**
 * @summary Messaging_System_Type_unified_messaging
 * @constant
 * @type {number}
 */
export
const Messaging_System_Type_unified_messaging: Messaging_System_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unified_messaging
 * @constant
 * @type {number}
 */
export
const unified_messaging: Messaging_System_Type = Messaging_System_Type_unified_messaging; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_System_Type: $.ASN1Decoder<Messaging_System_Type> = $._decodeEnumerated;
export const _encode_Messaging_System_Type: $.ASN1Encoder<Messaging_System_Type> = $._encodeEnumerated;


/* eslint-enable */
