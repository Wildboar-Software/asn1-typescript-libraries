/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAlarmSummary-Request-acknowledgementFilter ::= INTEGER {
 *     not-acked (0),
 *     acked (1),
 *     all (2)
 * } (0..2)
 * ```
 */
export
type GetAlarmSummary_Request_acknowledgementFilter = INTEGER;

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_not_acked
 * @constant
 * @type {number}
 */
export
const GetAlarmSummary_Request_acknowledgementFilter_not_acked: GetAlarmSummary_Request_acknowledgementFilter = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_not_acked
 * @constant
 * @type {number}
 */
export
const not_acked: GetAlarmSummary_Request_acknowledgementFilter = GetAlarmSummary_Request_acknowledgementFilter_not_acked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_acked
 * @constant
 * @type {number}
 */
export
const GetAlarmSummary_Request_acknowledgementFilter_acked: GetAlarmSummary_Request_acknowledgementFilter = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_acked
 * @constant
 * @type {number}
 */
export
const acked: GetAlarmSummary_Request_acknowledgementFilter = GetAlarmSummary_Request_acknowledgementFilter_acked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_all
 * @constant
 * @type {number}
 */
export
const GetAlarmSummary_Request_acknowledgementFilter_all: GetAlarmSummary_Request_acknowledgementFilter = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_all
 * @constant
 * @type {number}
 */
export
const all: GetAlarmSummary_Request_acknowledgementFilter = GetAlarmSummary_Request_acknowledgementFilter_all; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetAlarmSummary_Request_acknowledgementFilter = $._decodeInteger;
export const _encode_GetAlarmSummary_Request_acknowledgementFilter = $._encodeInteger;


/* eslint-enable */
