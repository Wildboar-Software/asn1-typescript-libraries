/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary TroubleReportState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportState  ::=  INTEGER {
 *   queued(0), openActive(1), deferred(2), cleared(3), closed(4), disabled(5)
 * }(0..255)
 * ```
 */
export type TroubleReportState = INTEGER;


/**
 * @summary TroubleReportState_queued
 * @constant
 * @type {number}
 */
export const TroubleReportState_queued: 0 = 0 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_queued
 * @constant
 * @type {number}
 */
export const queued: 0 = TroubleReportState_queued; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_openActive
 * @constant
 * @type {number}
 */
export const TroubleReportState_openActive: 1 = 1 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_openActive
 * @constant
 * @type {number}
 */
export const openActive: 1 = TroubleReportState_openActive; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_deferred
 * @constant
 * @type {number}
 */
export const TroubleReportState_deferred: 2 = 2 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_deferred
 * @constant
 * @type {number}
 */
export const deferred: 2 = TroubleReportState_deferred; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_cleared
 * @constant
 * @type {number}
 */
export const TroubleReportState_cleared: 3 = 3 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_cleared
 * @constant
 * @type {number}
 */
export const cleared: 3 = TroubleReportState_cleared; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_closed
 * @constant
 * @type {number}
 */
export const TroubleReportState_closed: 4 = 4 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_closed
 * @constant
 * @type {number}
 */
export const closed: 4 = TroubleReportState_closed; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_disabled
 * @constant
 * @type {number}
 */
export const TroubleReportState_disabled: 5 = 5 satisfies TroubleReportState; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportState_disabled
 * @constant
 * @type {number}
 */
export const disabled: 5 = TroubleReportState_disabled; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TroubleReportState: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_TroubleReportState: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
