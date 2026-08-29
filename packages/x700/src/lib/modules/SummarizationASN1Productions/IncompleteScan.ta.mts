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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary IncompleteScan
 * @description
 *
 * Present in a summary report or action reply when the
 * scan could not be completed (`{summarizationAttribute
 * 30}`). `sizeExceeded`(0) — a pragmatic size limit on
 * the summarized data was exceeded; `timeExceeded`(1)
 * — a new scan began before this one finished;
 * `other`(2) — another reason. ITU-T Rec. X.738 (11/93)
 * [§8.2.2.1.4](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncompleteScan  ::=  INTEGER {sizeExceeded(0), timeExceeded(1), other(2)}
 * ```
 */
export type IncompleteScan = INTEGER;

/**
 * @summary IncompleteScan_sizeExceeded
 * @description
 *
 * A pragmatic limit on the size of the summarized data
 * was exceeded. X.738 §8.2.2.1.4.
 *
 * @constant
 * @type {number}
 */
export const IncompleteScan_sizeExceeded: IncompleteScan = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_sizeExceeded
 * @description
 *
 * A pragmatic limit on the size of the summarized data
 * was exceeded. X.738 §8.2.2.1.4.
 *
 * @constant
 * @type {number}
 */
export const sizeExceeded: IncompleteScan = IncompleteScan_sizeExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_timeExceeded
 * @description
 *
 * The beginning of a new scan occurred before this
 * scan could be completed. X.738 §8.2.2.1.4.
 *
 * @constant
 * @type {number}
 */
export const IncompleteScan_timeExceeded: IncompleteScan = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_timeExceeded
 * @description
 *
 * The beginning of a new scan occurred before this
 * scan could be completed. X.738 §8.2.2.1.4.
 *
 * @constant
 * @type {number}
 */
export const timeExceeded: IncompleteScan = IncompleteScan_timeExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_other
 * @description
 *
 * The scan could not be completed for a reason other
 * than size or time. X.738 §8.2.2.1.4.
 *
 * @constant
 * @type {number}
 */
export const IncompleteScan_other: IncompleteScan = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_other
 * @description
 *
 * The scan could not be completed for a reason other
 * than size or time. X.738 §8.2.2.1.4.
 *
 * @constant
 * @type {number}
 */
export const other: IncompleteScan = IncompleteScan_other; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_IncompleteScan = $._decodeInteger;


export const _encode_IncompleteScan = $._encodeInteger;


/* eslint-enable */
