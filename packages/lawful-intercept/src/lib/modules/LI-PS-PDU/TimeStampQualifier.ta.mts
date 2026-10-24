/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_TimeStampQualifier
 * @description
 *
 * What instant a timestamp represents. Optional on the header and on an
 * aggregated IRI or CC payload, and used by national agreement. The module
 * names `unknown`, `timeOfInterception`, and `timeOfMediation` and does not
 * define them further than that role.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_TimeStampQualifier {
    /**
     * The timestamp's meaning is unknown. The specification gives the name and
     * does not add a condition.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    unknown = 0,
    /**
     * The timestamp is the time of interception. The specification gives the
     * name and does not add a condition.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    timeOfInterception = 1,
    /**
     * The timestamp is the time of mediation. The specification gives the name
     * and does not add a condition.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    timeOfMediation = 2,
    /**
     * Time at which the complete aggregated PDU was created. Use this on the
     * header timestamp when that header time is the aggregation time rather
     * than a payload time.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    timeOfAggregation = 3,
}

/**
 * @summary TimeStampQualifier
 * @description
 * 
 * What instant a timestamp represents. Optional on the header and on an
 * aggregated IRI or CC payload, and used by national agreement. The module
 * names `unknown`, `timeOfInterception`, and `timeOfMediation` and does not
 * define them further than that role.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStampQualifier  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     timeOfInterception(1),
 *     timeOfMediation(2),
 *     ...,
 *     timeOfAggregation(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TimeStampQualifier = _enum_for_TimeStampQualifier | ENUMERATED;

/**
 * @summary TimeStampQualifier_unknown
 * @description
 *
 * The timestamp's meaning is unknown. The specification gives the name and does
 * not add a condition.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TimeStampQualifier_unknown: TimeStampQualifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * The timestamp's meaning is unknown. The specification gives the name and does
 * not add a condition.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const unknown: TimeStampQualifier = TimeStampQualifier_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampQualifier_timeOfInterception
 * @description
 *
 * The timestamp is the time of interception. The specification gives the name
 * and does not add a condition.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TimeStampQualifier_timeOfInterception: TimeStampQualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOfInterception
 * @description
 *
 * The timestamp is the time of interception. The specification gives the name
 * and does not add a condition.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const timeOfInterception: TimeStampQualifier = TimeStampQualifier_timeOfInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampQualifier_timeOfMediation
 * @description
 *
 * The timestamp is the time of mediation. The specification gives the name and
 * does not add a condition.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TimeStampQualifier_timeOfMediation: TimeStampQualifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOfMediation
 * @description
 *
 * The timestamp is the time of mediation. The specification gives the name and
 * does not add a condition.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const timeOfMediation: TimeStampQualifier = TimeStampQualifier_timeOfMediation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampQualifier_timeOfAggregation
 * @description
 *
 * Time at which the complete aggregated PDU was created. Use this on the header
 * timestamp when that header time is the aggregation time rather than a payload
 * time.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TimeStampQualifier_timeOfAggregation: TimeStampQualifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOfAggregation
 * @description
 *
 * Time at which the complete aggregated PDU was created. Use this on the header
 * timestamp when that header time is the aggregation time rather than a payload
 * time.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6, clause 6.2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const timeOfAggregation: TimeStampQualifier = TimeStampQualifier_timeOfAggregation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TimeStampQualifier: $.ASN1Decoder<TimeStampQualifier> = $._decodeEnumerated;
export const _encode_TimeStampQualifier: $.ASN1Encoder<TimeStampQualifier> = $._encodeEnumerated;


/* eslint-enable */
