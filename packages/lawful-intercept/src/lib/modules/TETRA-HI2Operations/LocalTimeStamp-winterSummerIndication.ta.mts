/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LocalTimeStamp_winterSummerIndication {
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    notProvided = 0,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    winterTime = 1,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    summerTime = 2,
}

/**
 * @summary LocalTimeStamp_winterSummerIndication
 * @description
 * 
 * Winter or summer regime of a local timestamp. The specification gives each
 * name and no further behaviour. An extension marker follows the named values.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
