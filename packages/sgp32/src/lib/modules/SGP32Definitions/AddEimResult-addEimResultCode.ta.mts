/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddEimResult_addEimResultCode
 * @description
 *
 * Codes for an addEim eCO after the signed eUICC Package has been verified. A
 * listed failure stops that eCO. ok is the success code in the ASN.1 of
 * section 2.11.2.1; section 3.5.1.1 names each failure.
 *
 * SGP.32 v1.2, sections 2.11.2.1 and 3.5.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddEimResult-addEimResultCode ::= INTEGER {
 *     ok(0),
 *     insufficientMemory(1),
 *     associatedEimAlreadyExists(2),
 *     ciPKUnknown(3),
 *     invalidAssociationToken(5),
 *     counterValueOutOfRange(6),
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type AddEimResult_addEimResultCode = INTEGER;

/**
 * @summary AddEimResult_addEimResultCode_ok
 * @description
 *
 * The new eIM Configuration Data was stored in the eUICC list of Associated
 * eIMs.
 *
 * SGP.32 v1.2, section 3.5.1.1.
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_ok: AddEimResult_addEimResultCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_ok
 * @description
 *
 * The new eIM Configuration Data was stored (SGP.32 v1.2, section 3.5.1.1).
 * @constant
 * @type {number}
 */
export
const ok: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_insufficientMemory
 * @description
 *
 * The eUICC lacks sufficient memory to store the new eIM.
 *
 * SGP.32 v1.2, section 3.5.1.1.
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_insufficientMemory: AddEimResult_addEimResultCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_insufficientMemory
 * @description
 *
 * The eUICC lacks memory to store the new eIM (SGP.32 v1.2, section 3.5.1.1).
 * @constant
 * @type {number}
 */
export
const insufficientMemory: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_associatedEimAlreadyExists
 * @description
 *
 * The provided eimId belongs to an eIM already associated with the eUICC.
 *
 * SGP.32 v1.2, section 3.5.1.1.
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_associatedEimAlreadyExists: AddEimResult_addEimResultCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_associatedEimAlreadyExists
 * @description
 *
 * The eimId is already an Associated eIM (SGP.32 v1.2, section 3.5.1.1).
 * @constant
 * @type {number}
 */
export
const associatedEimAlreadyExists: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_associatedEimAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_ciPKUnknown
 * @description
 *
 * The provided euiccCiPKId is absent from euiccCiPKIdListForSigning in
 * eUICCInfo2.
 *
 * SGP.32 v1.2, section 3.5.1.1.
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_ciPKUnknown: AddEimResult_addEimResultCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_ciPKUnknown
 * @description
 *
 * euiccCiPKId is absent from euiccCiPKIdListForSigning (SGP.32 v1.2, section
 * 3.5.1.1).
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_invalidAssociationToken
 * @description
 *
 * The eUICC was asked to generate an associationToken and the provided value
 * differs from -1.
 *
 * SGP.32 v1.2, section 3.5.1.1.
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_invalidAssociationToken: AddEimResult_addEimResultCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_invalidAssociationToken
 * @description
 *
 * Association-token generation was requested with a value that differs from -1
 * (SGP.32 v1.2, section 3.5.1.1).
 * @constant
 * @type {number}
 */
export
const invalidAssociationToken: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_invalidAssociationToken; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_counterValueOutOfRange
 * @description
 *
 * counterValue exceeds the maximum the eUICC supports. The eUICC handles
 * counter values at least up to 8388607 (0x7FFFFF).
 *
 * SGP.32 v1.2, sections 2.11.1.1 and 3.5.1.1.
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_counterValueOutOfRange: AddEimResult_addEimResultCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_counterValueOutOfRange
 * @description
 *
 * counterValue exceeds the eUICC maximum, at least 8388607 (SGP.32 v1.2,
 * sections 2.11.1.1 and 3.5.1.1).
 * @constant
 * @type {number}
 */
export
const counterValueOutOfRange: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_commandError
 * @description
 *
 * No eimId was provided, or eimId exceeds its maximum length.
 *
 * SGP.32 v1.2, section 3.5.1.1.
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_commandError: AddEimResult_addEimResultCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_commandError
 * @description
 *
 * eimId is missing or longer than its maximum (SGP.32 v1.2, section 3.5.1.1).
 * @constant
 * @type {number}
 */
export
const commandError: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_undefinedError
 * @description
 *
 * Any other error during command execution.
 *
 * SGP.32 v1.2, section 3.5.1.1.
 * @constant
 * @type {number}
 */
export
const AddEimResult_addEimResultCode_undefinedError: AddEimResult_addEimResultCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddEimResult_addEimResultCode_undefinedError
 * @description
 *
 * Any other error during addEim execution (SGP.32 v1.2, section 3.5.1.1).
 * @constant
 * @type {number}
 */
export
const undefinedError: AddEimResult_addEimResultCode = AddEimResult_addEimResultCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AddEimResult_addEimResultCode: $.ASN1Decoder<AddEimResult_addEimResultCode> = $._decodeInteger;
export const _encode_AddEimResult_addEimResultCode: $.ASN1Encoder<AddEimResult_addEimResultCode> = $._encodeInteger;


/* eslint-enable */
