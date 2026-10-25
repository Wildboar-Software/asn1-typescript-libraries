/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PriorityLevelQualifier
 * @description
 * 
 * Optional P1, P3, and P7 extension that splits each of the three civil
 * priorities into two military precedences. It is carried in the
 * message-submission per-message extensions, in `OtherMessageDeliveryFields`,
 * and may be added to the P1 transfer envelope. The default is `low`. It is not
 * conveyed between nations or into civilian domains.
 *
 * The extension identifier in the X.411 annex is
 * `id-nato-mmhs-mts-extension-priority-qualifier` under `{id-mmts 0}`. This
 * module defines the enumeration only. STANAG 4406 (Ed. 2), Annex A, X.411
 * extensions, clauses 8.2.1.1.1.8.1 and 9, and B.100.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PriorityLevelQualifier {
    low = 0,
    high = 1,
}

/**
 * @summary PriorityLevelQualifier
 * @description
 * 
 * Optional P1, P3, and P7 extension that splits each of the three civil
 * priorities into two military precedences. It is carried in the
 * message-submission per-message extensions, in `OtherMessageDeliveryFields`,
 * and may be added to the P1 transfer envelope. The default is `low`. It is not
 * conveyed between nations or into civilian domains.
 *
 * The extension identifier in the X.411 annex is
 * `id-nato-mmhs-mts-extension-priority-qualifier` under `{id-mmts 0}`. This
 * module defines the enumeration only. STANAG 4406 (Ed. 2), Annex A, X.411
 * extensions, clauses 8.2.1.1.1.8.1 and 9, and B.100.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
type PriorityLevelQualifier = _enum_for_PriorityLevelQualifier;

/**
 * @summary PriorityLevelQualifier
 * @description
 * 
 * Optional P1, P3, and P7 extension that splits each of the three civil
 * priorities into two military precedences. It is carried in the
 * message-submission per-message extensions, in `OtherMessageDeliveryFields`,
 * and may be added to the P1 transfer envelope. The default is `low`. It is not
 * conveyed between nations or into civilian domains.
 *
 * The extension identifier in the X.411 annex is
 * `id-nato-mmhs-mts-extension-priority-qualifier` under `{id-mmts 0}`. This
 * module defines the enumeration only. STANAG 4406 (Ed. 2), Annex A, X.411
 * extensions, clauses 8.2.1.1.1.8.1 and 9, and B.100.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityLevelQualifier  ::=  ENUMERATED {
 *   low(0),
 *   high(1) }
 * ```
 * 
 * @enum {number}
 */
export
const PriorityLevelQualifier = _enum_for_PriorityLevelQualifier;

/**
 * @summary PriorityLevelQualifier_low
 * @description
 *
 * Qualifier low (0). Distinguishes deferred from routine, priority from
 * immediate, and flash from override when the optional extended grade of
 * delivery is used. This is the default when the extension is absent. STANAG
 * 4406 (Ed. 2), Annex A, X.411 extensions, clause 8.2.1.1.1.8.1, and B.100.
 * @constant
 * @type {number}
 */
export
const PriorityLevelQualifier_low = PriorityLevelQualifier.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @description
 *
 * Qualifier low (0). Distinguishes deferred from routine, priority from
 * immediate, and flash from override when the optional extended grade of
 * delivery is used. This is the default when the extension is absent. STANAG
 * 4406 (Ed. 2), Annex A, X.411 extensions, clause 8.2.1.1.1.8.1, and B.100.
 * @constant
 * @type {number}
 */
export
const low = PriorityLevelQualifier.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityLevelQualifier_high
 * @description
 *
 * Qualifier high (1). With MTS non-urgent this is routine; with normal,
 * immediate; with urgent, override. STANAG 4406 (Ed. 2), Annex A, X.411
 * extensions, clause 8.2.1.1.1.8.1.
 * @constant
 * @type {number}
 */
export
const PriorityLevelQualifier_high = PriorityLevelQualifier.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @description
 *
 * Qualifier high (1). With MTS non-urgent this is routine; with normal,
 * immediate; with urgent, override. STANAG 4406 (Ed. 2), Annex A, X.411
 * extensions, clause 8.2.1.1.1.8.1.
 * @constant
 * @type {number}
 */
export
const high = PriorityLevelQualifier.high; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PriorityLevelQualifier: $.ASN1Decoder<PriorityLevelQualifier> = $._decodeEnumerated;
export const _encode_PriorityLevelQualifier: $.ASN1Encoder<PriorityLevelQualifier> = $._encodeEnumerated;


/* eslint-enable */
