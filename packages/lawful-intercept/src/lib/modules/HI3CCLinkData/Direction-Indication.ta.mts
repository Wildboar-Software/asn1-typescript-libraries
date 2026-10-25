/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_Direction_Indication
 * @description
 *
 * Which part of the target communication one CC link carries: from the target,
 * toward the target, or combined. In stereo the two links carry the same UUS1
 * values except this one. Annex E uses the same numbers in the calling-party
 * subaddress when UUS1 is not used. Stereo (1 and 2) is the default. Mono (0)
 * is historic.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3, clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
enum _enum_for_Direction_Indication {
    /**
     * Combined signal, one direction indication for both ways. Value 0. Annex E
     * calls value 0 mono mode, combined signal, and marks it historic. Stereo,
     * values 1 and 2, is the default. Mono mode is kept for compatibility with
     * previous versions and may be used where national requirements say so.
     * Table A.4.1 includes combined (mono) as a direction.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
     * clause E.4.1.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    mono_mode = 0,
    /**
     * Content from the target (transmit). Value 1. Table A.4.1: signal from the
     * target. Annex E codes value 1 as "CC from target" when the calling-party
     * subaddress carries direction instead of UUS1.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
     * clause E.4.1.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    cc_from_target = 1,
    /**
     * Content toward the target (receive), from the other party. Value 2. Table
     * A.4.1: signal toward the target. Annex E codes value 2 as "CC to target".
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
     * clause E.4.1.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    cc_from_other_party = 2,
    /**
     * Direction unknown. Value 3. Annex E table E.4.1 assigns the same value.
     * It is an extension addition in this module. Clause E.3.2 represents an
     * empty direction field in the subaddress by its field separator alone;
     * that clause does not say the empty field is this value.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
     * clause E.4.1.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    direction_unknown = 3,
}

/**
 * @summary Direction_Indication
 * @description
 *
 * Which part of the target communication one CC link carries: from the target,
 * toward the target, or combined. In stereo the two links carry the same UUS1
 * values except this one. Annex E uses the same numbers in the calling-party
 * subaddress when UUS1 is not used. Stereo (1 and 2) is the default. Mono (0)
 * is historic.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3, clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
 * Combined signal, one direction indication for both ways. Value 0. Annex E
 * calls value 0 mono mode, combined signal, and marks it historic. Stereo,
 * values 1 and 2, is the default. Mono mode is kept for compatibility with
 * previous versions and may be used where national requirements say so.
 * Table A.4.1 includes combined (mono) as a direction.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
 * clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Direction_Indication_mono_mode = _enum_for_Direction_Indication.mono_mode satisfies Direction_Indication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mono_mode
 * @description
 *
 * Combined signal, one direction indication for both ways. Value 0. Annex E
 * calls value 0 mono mode, combined signal, and marks it historic. Stereo,
 * values 1 and 2, is the default. Mono mode is kept for compatibility with
 * previous versions and may be used where national requirements say so.
 * Table A.4.1 includes combined (mono) as a direction.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
 * clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const mono_mode = Direction_Indication_mono_mode satisfies Direction_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_cc_from_target
 * @description
 *
 * Content from the target (transmit). Value 1. Table A.4.1: signal from the
 * target. Annex E codes value 1 as "CC from target" when the calling-party
 * subaddress carries direction instead of UUS1.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
 * clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Direction_Indication_cc_from_target = _enum_for_Direction_Indication.cc_from_target satisfies Direction_Indication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc_from_target
 * @description
 *
 * Content from the target (transmit). Value 1. Table A.4.1: signal from the
 * target. Annex E codes value 1 as "CC from target" when the calling-party
 * subaddress carries direction instead of UUS1.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
 * clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const cc_from_target = Direction_Indication_cc_from_target satisfies Direction_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_cc_from_other_party
 * @description
 *
 * Content toward the target (receive), from the other party. Value 2. Table
 * A.4.1: signal toward the target. Annex E codes value 2 as "CC to target".
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
 * clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Direction_Indication_cc_from_other_party = _enum_for_Direction_Indication.cc_from_other_party satisfies Direction_Indication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc_from_other_party
 * @description
 *
 * Content toward the target (receive), from the other party. Value 2. Table
 * A.4.1: signal toward the target. Annex E codes value 2 as "CC to target".
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
 * clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const cc_from_other_party = Direction_Indication_cc_from_other_party satisfies Direction_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_direction_unknown
 * @description
 *
 * Direction unknown. Value 3. Annex E table E.4.1 assigns the same value.
 * It is an extension addition in this module. Clause E.3.2 represents an
 * empty direction field in the subaddress by its field separator alone;
 * that clause does not say the empty field is this value.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
 * clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Direction_Indication_direction_unknown = _enum_for_Direction_Indication.direction_unknown satisfies Direction_Indication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary direction_unknown
 * @description
 *
 * Direction unknown. Value 3. Annex E table E.4.1 assigns the same value.
 * It is an extension addition in this module. Clause E.3.2 represents an
 * empty direction field in the subaddress by its field separator alone;
 * that clause does not say the empty field is this value.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
 * clause E.4.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const direction_unknown = Direction_Indication_direction_unknown satisfies Direction_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Direction_Indication: $.ASN1Decoder<Direction_Indication> = $._decodeEnumerated;
export const _encode_Direction_Indication: $.ASN1Encoder<Direction_Indication> = $._encodeEnumerated;


/* eslint-enable */
