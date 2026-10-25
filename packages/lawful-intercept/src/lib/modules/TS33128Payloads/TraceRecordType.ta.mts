/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TraceRecordType
 * @description
 * 
 * The TraceRecordType provides information on the type of Trace record being
 * reported.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceRecordType  ::=  ENUMERATED
 * {
 *     traceStart(1),
 *     cellTrafficTrace(2),
 *     traceDataDelivery(3),
 *     traceDeactivation(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TraceRecordType {
    /**
     * @description
     *
     * The message being reported is a Trace Start message.
     *
     * 3GPP TS 33.128, clause 8.5.9.
     */
    traceStart = 1,
    /**
     * @description
     *
     * The message being reported is a Cell Traffic Trace message.
     *
     * 3GPP TS 33.128, clause 8.5.9.
     */
    cellTrafficTrace = 2,
    /**
     * @description
     *
     * The message being reported is trace data being delivered to the trace
     * collection entity.
     *
     * 3GPP TS 33.128, clause 8.5.9.
     */
    traceDataDelivery = 3,
    /**
     * @description
     *
     * The message being reported is a Deactivate Trace message.
     *
     * 3GPP TS 33.128, clause 8.5.9.
     */
    traceDeactivation = 4,
}

/**
 * @summary TraceRecordType
 * @description
 * 
 * The TraceRecordType provides information on the type of Trace record being
 * reported.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceRecordType  ::=  ENUMERATED
 * {
 *     traceStart(1),
 *     cellTrafficTrace(2),
 *     traceDataDelivery(3),
 *     traceDeactivation(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TraceRecordType = _enum_for_TraceRecordType;

/**
 * @summary TraceRecordType
 * @description
 * 
 * The TraceRecordType provides information on the type of Trace record being
 * reported.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceRecordType  ::=  ENUMERATED
 * {
 *     traceStart(1),
 *     cellTrafficTrace(2),
 *     traceDataDelivery(3),
 *     traceDeactivation(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TraceRecordType = _enum_for_TraceRecordType;

/**
 * @summary TraceRecordType_traceStart
 * @description
 *
 * The message being reported is a Trace Start message.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 *
 * @constant
 * @type {number}
 */
export
const TraceRecordType_traceStart = TraceRecordType.traceStart; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary traceStart
 * @description
 *
 * The message being reported is a Trace Start message.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 *
 * @constant
 * @type {number}
 */
export
const traceStart = TraceRecordType.traceStart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceRecordType_cellTrafficTrace
 * @description
 *
 * The message being reported is a Cell Traffic Trace message.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 *
 * @constant
 * @type {number}
 */
export
const TraceRecordType_cellTrafficTrace = TraceRecordType.cellTrafficTrace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellTrafficTrace
 * @description
 *
 * The message being reported is a Cell Traffic Trace message.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 *
 * @constant
 * @type {number}
 */
export
const cellTrafficTrace = TraceRecordType.cellTrafficTrace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceRecordType_traceDataDelivery
 * @description
 *
 * The message being reported is trace data being delivered to the trace
 * collection entity.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 *
 * @constant
 * @type {number}
 */
export
const TraceRecordType_traceDataDelivery = TraceRecordType.traceDataDelivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary traceDataDelivery
 * @description
 *
 * The message being reported is trace data being delivered to the trace
 * collection entity.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 *
 * @constant
 * @type {number}
 */
export
const traceDataDelivery = TraceRecordType.traceDataDelivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceRecordType_traceDeactivation
 * @description
 *
 * The message being reported is a Deactivate Trace message.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 *
 * @constant
 * @type {number}
 */
export
const TraceRecordType_traceDeactivation = TraceRecordType.traceDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary traceDeactivation
 * @description
 *
 * The message being reported is a Deactivate Trace message.
 *
 * 3GPP TS 33.128, clause 8.5.9.
 *
 * @constant
 * @type {number}
 */
export
const traceDeactivation = TraceRecordType.traceDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TraceRecordType: $.ASN1Decoder<TraceRecordType> = $._decodeEnumerated;
export const _encode_TraceRecordType: $.ASN1Encoder<TraceRecordType> = $._encodeEnumerated;


/* eslint-enable */
