/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrelationReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationReason  ::=  INTEGER {
 *     unknown(0),
 *     mCACommunication(1),
 *     cTIApplication(2)
 * } (0..255)
 * ```
 */
export
type CorrelationReason = INTEGER;

/**
 * @summary CorrelationReason_unknown
 * @constant
 * @type {number}
 */
export
const CorrelationReason_unknown: CorrelationReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CorrelationReason_unknown
 * @constant
 * @type {number}
 */
export
const unknown: CorrelationReason = CorrelationReason_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CorrelationReason_mCACommunication
 * @constant
 * @type {number}
 */
export
const CorrelationReason_mCACommunication: CorrelationReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CorrelationReason_mCACommunication
 * @constant
 * @type {number}
 */
export
const mCACommunication: CorrelationReason = CorrelationReason_mCACommunication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CorrelationReason_cTIApplication
 * @constant
 * @type {number}
 */
export
const CorrelationReason_cTIApplication: CorrelationReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CorrelationReason_cTIApplication
 * @constant
 * @type {number}
 */
export
const cTIApplication: CorrelationReason = CorrelationReason_cTIApplication; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CorrelationReason: $.ASN1Decoder<CorrelationReason> = $._decodeInteger;

export
const _encode_CorrelationReason: $.ASN1Encoder<CorrelationReason> = $._encodeInteger;

/* eslint-enable */
