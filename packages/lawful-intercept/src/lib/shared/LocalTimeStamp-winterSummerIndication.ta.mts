/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocalTimeStamp_winterSummerIndication
 * @description
 * 
 * Winter or summer indication on a local IRI timestamp. Clause A.3.2.1 requires
 * the timestamp to show local time without a time zone, or UTC. This
 * enumeration is the local-time season. TS 101 671 gives the three names and no
 * offsets.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalTimeStamp-winterSummerIndication ::= ENUMERATED {
 *     notProvided(0),
 *     winterTime(1),
 *     summerTime(2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LocalTimeStamp_winterSummerIndication {
    /**
     * The local timestamp does not say whether winter time or summer time
     * applies. TS 101 671 defines no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    notProvided = 0,
    /**
     * The local timestamp is winter time. TS 101 671 does not define the offset
     * from UTC.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    winterTime = 1,
    /**
     * The local timestamp is summer time. TS 101 671 does not define the offset
     * from UTC.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    summerTime = 2,
}

/**
 * @summary LocalTimeStamp_winterSummerIndication
 * @description
 * 
 * Winter or summer indication on a local IRI timestamp. Clause A.3.2.1 requires
 * the timestamp to show local time without a time zone, or UTC. This
 * enumeration is the local-time season. TS 101 671 gives the three names and no
 * offsets.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalTimeStamp-winterSummerIndication ::= ENUMERATED {
 *     notProvided(0),
 *     winterTime(1),
 *     summerTime(2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LocalTimeStamp_winterSummerIndication = _enum_for_LocalTimeStamp_winterSummerIndication | ENUMERATED;

/**
 * @summary LocalTimeStamp_winterSummerIndication_notProvided
 * @description
 *
 * The local timestamp does not say whether winter time or summer time applies.
 * TS 101 671 defines no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const LocalTimeStamp_winterSummerIndication_notProvided: LocalTimeStamp_winterSummerIndication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notProvided
 * @description
 *
 * The local timestamp does not say whether winter time or summer time applies.
 * TS 101 671 defines no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const notProvided: LocalTimeStamp_winterSummerIndication = LocalTimeStamp_winterSummerIndication_notProvided; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocalTimeStamp_winterSummerIndication_winterTime
 * @description
 *
 * The local timestamp is winter time. TS 101 671 does not define the offset
 * from UTC.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const LocalTimeStamp_winterSummerIndication_winterTime: LocalTimeStamp_winterSummerIndication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary winterTime
 * @description
 *
 * The local timestamp is winter time. TS 101 671 does not define the offset
 * from UTC.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const winterTime: LocalTimeStamp_winterSummerIndication = LocalTimeStamp_winterSummerIndication_winterTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocalTimeStamp_winterSummerIndication_summerTime
 * @description
 *
 * The local timestamp is summer time. TS 101 671 does not define the offset
 * from UTC.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const LocalTimeStamp_winterSummerIndication_summerTime: LocalTimeStamp_winterSummerIndication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary summerTime
 * @description
 *
 * The local timestamp is summer time. TS 101 671 does not define the offset
 * from UTC.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const summerTime: LocalTimeStamp_winterSummerIndication = LocalTimeStamp_winterSummerIndication_summerTime; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LocalTimeStamp_winterSummerIndication: $.ASN1Decoder<LocalTimeStamp_winterSummerIndication> = $._decodeEnumerated;
export const _encode_LocalTimeStamp_winterSummerIndication: $.ASN1Encoder<LocalTimeStamp_winterSummerIndication> = $._encodeEnumerated;


/* eslint-enable */
