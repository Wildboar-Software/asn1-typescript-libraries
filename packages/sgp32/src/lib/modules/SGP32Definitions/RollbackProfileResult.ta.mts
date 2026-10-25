/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RollbackProfileResult
 * @description
 * 
 * Extra PSMO result the eUICC appends when ES10b.ProfileRollback builds a
 * replacement eUICC Package Result. SGP.32 v1.2, sections 2.11.2.1 and 5.9.16.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RollbackProfileResult  ::=  INTEGER {
 *     ok(0),    
 *     undefinedError(127)
 * }
 * ```
 */
export
type RollbackProfileResult = INTEGER;

/**
 * @summary RollbackProfileResult_ok
 * @description
 * Rollback result appended to the new eUICC Package Result after
 * ES10b.ProfileRollback returns ok. That result keeps the previous eimId,
 * counterValue, and eimTransactionId, increments seqNumber, repeats the
 * previous PSMO results, and adds this value. SGP.32 v1.2, sections 2.11.2.1
 * and 5.9.16.
 * @constant
 * @type {number}
 */
export
const RollbackProfileResult_ok = 0 satisfies RollbackProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RollbackProfileResult_ok
 * @description
 * Rollback result recorded when ES10b.ProfileRollback returns ok. SGP.32 v1.2,
 * sections 2.11.2.1 and 5.9.16.
 * @constant
 * @type {number}
 */
export
const ok = RollbackProfileResult_ok satisfies RollbackProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RollbackProfileResult_undefinedError
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on RollbackProfileResult and does not
 * further define the condition. Section 2.11.2.1. Section 5.9.16 does not
 * state when it is produced.
 * @constant
 * @type {number}
 */
export
const RollbackProfileResult_undefinedError = 127 satisfies RollbackProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RollbackProfileResult_undefinedError
 * @description
 * SGP.32 v1.2 does not further define undefinedError(127). Section 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const undefinedError = RollbackProfileResult_undefinedError satisfies RollbackProfileResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RollbackProfileResult: $.ASN1Decoder<RollbackProfileResult> = $._decodeInteger;
export const _encode_RollbackProfileResult: $.ASN1Encoder<RollbackProfileResult> = $._encodeInteger;


/* eslint-enable */
