/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Direction_Indication {
    mono_mode = 0,
    cc_from_target = 1,
    cc_from_other_party = 2,
    direction_unknown = 3,
}

/**
 * @summary Direction_Indication
 * @description
 * 
 * Direction on the CC link. Table J.2.7 codes the subaddress direction; this
 * enumeration is the UUS1 form (annex J.1). `direction-unknown` is an extension
 * and has no code in that table.
 * 
 * 3GPP TS 33.108, clause 5.3.2 and annex J.2.4.1.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction-Indication     ::=  ENUMERATED
 * {
 *     mono-mode(0),
 *     cc-from-target(1),
 *     cc-from-other-party(2),
 *     ...,
 *     direction-unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Direction_Indication = _enum_for_Direction_Indication | ENUMERATED;

/**
 * @summary Direction_Indication_mono_mode
 * @description
 * 
 * Combined (mono) signal. Table J.2.7 marks value 0 historic. 3GPP TS 33.108,
 * clause 5.3.2 and annex J.2.4.1.
 * @constant
 * @type {number}
 */
export
const Direction_Indication_mono_mode: Direction_Indication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mono_mode
 * @description
 * 
 * Combined mono signal (historic code 0). Annex J.2.4.1.
 * @constant
 * @type {number}
 */
export
const mono_mode: Direction_Indication = Direction_Indication_mono_mode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_cc_from_target
 * @description
 * 
 * CC from the target (Tx). Table J.2.7 value 1. 3GPP TS 33.108, clause 5.3.2
 * and annex J.2.4.1.
 * @constant
 * @type {number}
 */
export
const Direction_Indication_cc_from_target: Direction_Indication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc_from_target
 * @description
 * 
 * CC from the target. Annex J.2.4.1.
 * @constant
 * @type {number}
 */
export
const cc_from_target: Direction_Indication = Direction_Indication_cc_from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_cc_from_other_party
 * @description
 * 
 * CC to the target, from the other party (Rx). Table J.2.7 value 2. 3GPP TS
 * 33.108, clause 5.3.2 and annex J.2.4.1.
 * @constant
 * @type {number}
 */
export
const Direction_Indication_cc_from_other_party: Direction_Indication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc_from_other_party
 * @description
 * 
 * CC to the target (from the other party). Annex J.2.4.1.
 * @constant
 * @type {number}
 */
export
const cc_from_other_party: Direction_Indication = Direction_Indication_cc_from_other_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_direction_unknown
 * @description
 * 
 * Direction unknown. Extension value. Annex J.2.4.1 does not assign it a
 * subaddress code. 3GPP TS 33.108, annex J.1.
 * @constant
 * @type {number}
 */
export
const Direction_Indication_direction_unknown: Direction_Indication = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary direction_unknown
 * @description
 * 
 * Direction unknown. Not in table J.2.7. Annex J.1.
 * @constant
 * @type {number}
 */
export
const direction_unknown: Direction_Indication = Direction_Indication_direction_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Direction_Indication: $.ASN1Decoder<Direction_Indication> = $._decodeEnumerated;
export const _encode_Direction_Indication: $.ASN1Encoder<Direction_Indication> = $._encodeEnumerated;


/* eslint-enable */
