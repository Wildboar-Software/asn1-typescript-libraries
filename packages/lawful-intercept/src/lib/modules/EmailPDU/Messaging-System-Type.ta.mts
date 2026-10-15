/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Kind of system that produced a `MessagingIRI`. The only named value is
 * unified messaging. A voicemail-only system, with no fax or video, is still
 * unified messaging here. The enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 4.2 and 8.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_System_Type {
    /**
     * Unified messaging: email, SMS, fax, voicemail, video messaging, or a
     * combination, reached through one interface. Includes a voicemail-only
     * system.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 4.2.
     */
    unified_messaging = 1,
}

/**
 * @summary Messaging_System_Type
 * @description
 *
 * Kind of system that produced a `MessagingIRI`. The only named value is
 * unified messaging. A voicemail-only system, with no fax or video, is still
 * unified messaging here. The enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 4.2 and 8.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
 * @description
 *
 * Unified messaging: email, SMS, fax, voicemail, video messaging, or a
 * combination, reached through one interface. Includes a voicemail-only system.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 4.2.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_System_Type_unified_messaging: Messaging_System_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unified_messaging
 * @description
 *
 * Unified messaging: email, SMS, fax, voicemail, video messaging, or a
 * combination, reached through one interface. Includes a voicemail-only system.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 4.2.
 *
 * @constant
 * @type {number}
 */
export
const unified_messaging: Messaging_System_Type = Messaging_System_Type_unified_messaging; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_System_Type: $.ASN1Decoder<Messaging_System_Type> = $._decodeEnumerated;
export const _encode_Messaging_System_Type: $.ASN1Encoder<Messaging_System_Type> = $._encodeEnumerated;


/* eslint-enable */
