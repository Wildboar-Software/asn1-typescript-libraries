/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteEimResult
 * @description
 *
 * Result of the deleteEim eCO after the signed eUICC Package is verified. The
 * eUICC removes the Associated eIM identified by eimId. If that eIM is the
 * requester, the eUICC signs this result before deleting the configuration. If
 * it was the last Associated eIM, the eUICC again accepts Unsigned eCO and
 * ES10b.AddInitialEim.
 *
 * SGP.32 v1.2, sections 2.11.2.1, 3.5.1.2, and 5.13.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteEimResult  ::=  INTEGER {
 *     ok(0),
 *     eimNotFound(1),
 *     lastEimDeleted(2), -- no eIM Configuration Data available in eUICC,
 *     commandError(7),    
 *     undefinedError(127)
 * }
 * ```
 */
export
type DeleteEimResult = INTEGER;

/**
 * @summary DeleteEimResult_ok
 * @description
 *
 * The target eIM Configuration Data was removed. The case where it was the
 * last Associated eIM uses lastEimDeleted.
 *
 * SGP.32 v1.2, section 3.5.1.2.
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_ok: 0 = 0 satisfies DeleteEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_ok
 * @description
 *
 * The target eIM Configuration Data was removed; the last-eIM case uses
 * lastEimDeleted (SGP.32 v1.2, section 3.5.1.2).
 * @constant
 * @type {number}
 */
export
const ok: 0 = DeleteEimResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_eimNotFound
 * @description
 *
 * The eimId is absent from the eUICC list of Associated eIMs.
 *
 * SGP.32 v1.2, section 3.5.1.2.
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_eimNotFound: 1 = 1 satisfies DeleteEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_eimNotFound
 * @description
 *
 * The eimId is absent from the Associated eIM list (SGP.32 v1.2, section
 * 3.5.1.2).
 * @constant
 * @type {number}
 */
export
const eimNotFound: 1 = DeleteEimResult_eimNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_lastEimDeleted
 * @description
 *
 * The deleted eIM was the last Associated eIM, so no eIM Configuration Data
 * remains. The eUICC then allows Unsigned eCO and ES10b.AddInitialEim.
 *
 * SGP.32 v1.2, sections 2.11.2.1, 3.5.1.2, and 5.13.9.
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_lastEimDeleted: 2 = 2 satisfies DeleteEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_lastEimDeleted
 * @description
 *
 * The last Associated eIM was removed, so Unsigned eCO is allowed again
 * (SGP.32 v1.2, section 3.5.1.2).
 * @constant
 * @type {number}
 */
export
const lastEimDeleted: 2 = DeleteEimResult_lastEimDeleted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_commandError
 * @description
 *
 * No eimId was provided in the eUICC Package.
 *
 * SGP.32 v1.2, section 3.5.1.2.
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_commandError: 7 = 7 satisfies DeleteEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_commandError
 * @description
 *
 * The deleteEim eCO contained no eimId (SGP.32 v1.2, section 3.5.1.2).
 * @constant
 * @type {number}
 */
export
const commandError: 7 = DeleteEimResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_undefinedError
 * @description
 *
 * Any other error during command execution.
 *
 * SGP.32 v1.2, section 3.5.1.2.
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_undefinedError: 127 = 127 satisfies DeleteEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_undefinedError
 * @description
 *
 * Any other error during deleteEim (SGP.32 v1.2, section 3.5.1.2).
 * @constant
 * @type {number}
 */
export
const undefinedError: 127 = DeleteEimResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteEimResult: $.ASN1Decoder<DeleteEimResult> = $._decodeInteger;
export const _encode_DeleteEimResult: $.ASN1Encoder<DeleteEimResult> = $._encodeInteger;


/* eslint-enable */
