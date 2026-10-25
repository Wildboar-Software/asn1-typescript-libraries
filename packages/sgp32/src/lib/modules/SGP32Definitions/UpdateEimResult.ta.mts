/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UpdateEimResult
 * @description
 * 
 * Result of the updateEim eCO. eimId selects the Associated eIM; updating
 * eimId is forbidden. associationToken is forbidden. At least one of
 * counterValue, eimPublicKeyData, eimIdType, eimFqdn, eimSupportedProtocol,
 * trustedPublicKeyDataTls, euiccCiPKId, or indirectProfileDownload is
 * supplied. A lower counterValue is accompanied by a new eimPublicKeyData.
 * SGP.32 v1.2, sections 2.11.1, 2.11.2.1, and 3.5.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateEimResult  ::=  INTEGER {
 *     ok(0),
 *     eimNotFound (1),
 *     ciPKUnknown(3),
 *     counterValueOutOfRange(6),
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type UpdateEimResult = INTEGER;

/**
 * @summary UpdateEimResult_ok
 * @description
 * The eIM Configuration Data of the Associated eIM named by eimId was updated.
 * SGP.32 v1.2, section 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_ok = 0 satisfies UpdateEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_ok
 * @description
 * updateEim updated the addressed eIM Configuration Data. SGP.32 v1.2, section
 * 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const ok = UpdateEimResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_eimNotFound
 * @description
 * eimId matches no Associated eIM, or the eUICC Package provides no eimId.
 * SGP.32 v1.2, section 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_eimNotFound = 1 satisfies UpdateEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_eimNotFound
 * @description
 * The addressed eIM is missing, or eimId was omitted. SGP.32 v1.2, section
 * 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const eimNotFound = UpdateEimResult_eimNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_ciPKUnknown
 * @description
 * euiccCiPKId is not an entry of euiccCiPKIdListForSigning in eUICCInfo2.
 * SGP.32 v1.2, section 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_ciPKUnknown = 3 satisfies UpdateEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_ciPKUnknown
 * @description
 * euiccCiPKId is not in euiccCiPKIdListForSigning. SGP.32 v1.2, section
 * 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const ciPKUnknown = UpdateEimResult_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_counterValueOutOfRange
 * @description
 * counterValue exceeds the maximum the eUICC supports. The eUICC handles
 * values through 8388607 (0x7FFFFF) inclusive. SGP.32 v1.2, section 2.11.1.
 * Section 3.5.1.3 does not separately name this code for updateEim.
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_counterValueOutOfRange = 6 satisfies UpdateEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_counterValueOutOfRange
 * @description
 * counterValue exceeds the maximum the eUICC supports. SGP.32 v1.2, section
 * 2.11.1.
 * @constant
 * @type {number}
 */
export
const counterValueOutOfRange = UpdateEimResult_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_commandError
 * @description
 * associationToken was included, or none of counterValue, eimPublicKeyData,
 * eimIdType, eimFqdn, eimSupportedProtocol, trustedPublicKeyDataTls, or
 * euiccCiPKId was included, or counterValue was lowered while eimPublicKeyData
 * was left unchanged. Section 2.11.1 allows indirectProfileDownload alone;
 * section 3.5.1.3 omits it from this check. SGP.32 v1.2, sections 2.11.1 and
 * 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_commandError = 7 satisfies UpdateEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_commandError
 * @description
 * associationToken is present, no updatable eIM field from section 3.5.1.3 is
 * present, or counterValue is lowered while eimPublicKeyData is unchanged.
 * SGP.32 v1.2, section 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const commandError = UpdateEimResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_undefinedError
 * @description
 * Any other error during updateEim. SGP.32 v1.2, section 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_undefinedError = 127 satisfies UpdateEimResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_undefinedError
 * @description
 * Any other error during updateEim. SGP.32 v1.2, section 3.5.1.3.
 * @constant
 * @type {number}
 */
export
const undefinedError = UpdateEimResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_UpdateEimResult: $.ASN1Decoder<UpdateEimResult> = $._decodeInteger;
export const _encode_UpdateEimResult: $.ASN1Encoder<UpdateEimResult> = $._encodeInteger;


/* eslint-enable */
