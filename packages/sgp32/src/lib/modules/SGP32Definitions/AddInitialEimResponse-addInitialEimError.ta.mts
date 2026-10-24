/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddInitialEimResponse_addInitialEimError
 * @description
 *
 * Error alternative of ES10b.AddInitialEim. Any of these codes stops the
 * command and leaves eIM Configuration Data as it was before the call.
 *
 * SGP.32 v1.2, sections 3.5.2.1 and 5.9.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddInitialEimResponse-addInitialEimError ::= INTEGER {
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
type AddInitialEimResponse_addInitialEimError = INTEGER;

/**
 * @summary AddInitialEimResponse_addInitialEimError_insufficientMemory
 * @description
 *
 * The eUICC lacks sufficient memory to store the provided list of eIM
 * Configuration Data.
 *
 * SGP.32 v1.2, sections 3.5.2.1 and 5.9.4.
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_insufficientMemory: AddInitialEimResponse_addInitialEimError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_insufficientMemory
 * @description
 *
 * Not enough memory for the eIM Configuration Data list (SGP.32 v1.2, section
 * 5.9.4).
 * @constant
 * @type {number}
 */
export
const insufficientMemory: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists
 * @description
 *
 * Any eIM Configuration Data is already present on the eUICC, so AddInitialEim
 * is refused.
 *
 * SGP.32 v1.2, sections 3.5.2.1 and 5.9.4.
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists: AddInitialEimResponse_addInitialEimError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists
 * @description
 *
 * The eUICC already stores eIM Configuration Data (SGP.32 v1.2, section
 * 5.9.4).
 * @constant
 * @type {number}
 */
export
const associatedEimAlreadyExists: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_ciPKUnknown
 * @description
 *
 * A provided euiccCiPKId is absent from euiccCiPKIdListForSigning in
 * eUICCInfo2.
 *
 * SGP.32 v1.2, sections 3.5.2.1 and 5.9.4.
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_ciPKUnknown: AddInitialEimResponse_addInitialEimError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_ciPKUnknown
 * @description
 *
 * A provided euiccCiPKId is absent from euiccCiPKIdListForSigning (SGP.32
 * v1.2, section 5.9.4).
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_invalidAssociationToken
 * @description
 *
 * The eUICC was asked to generate an associationToken and the provided value
 * differs from -1.
 *
 * SGP.32 v1.2, sections 3.5.2.1 and 5.9.4.
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_invalidAssociationToken: AddInitialEimResponse_addInitialEimError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_invalidAssociationToken
 * @description
 *
 * Association-token generation was requested with a value that differs from -1
 * (SGP.32 v1.2, section 5.9.4).
 * @constant
 * @type {number}
 */
export
const invalidAssociationToken: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_invalidAssociationToken; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_counterValueOutOfRange
 * @description
 *
 * counterValue exceeds the maximum the eUICC supports. The eUICC handles
 * counter values at least up to 8388607 (0x7FFFFF).
 *
 * SGP.32 v1.2, sections 2.11.1.1, 3.5.2.1, and 5.9.4.
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_counterValueOutOfRange: AddInitialEimResponse_addInitialEimError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_counterValueOutOfRange
 * @description
 *
 * counterValue exceeds the eUICC maximum, at least 8388607 (SGP.32 v1.2,
 * sections 2.11.1.1 and 5.9.4).
 * @constant
 * @type {number}
 */
export
const counterValueOutOfRange: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_commandError
 * @description
 *
 * An entry has no eimId, or an eimId exceeds its maximum length.
 *
 * SGP.32 v1.2, sections 3.5.2.1 and 5.9.4.
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_commandError: AddInitialEimResponse_addInitialEimError = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_commandError
 * @description
 *
 * An entry's eimId is missing or longer than its maximum (SGP.32 v1.2, section
 * 5.9.4).
 * @constant
 * @type {number}
 */
export
const commandError: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_undefinedError
 * @description
 *
 * Any other error during command execution.
 *
 * SGP.32 v1.2, sections 3.5.2.1 and 5.9.4.
 * @constant
 * @type {number}
 */
export
const AddInitialEimResponse_addInitialEimError_undefinedError: AddInitialEimResponse_addInitialEimError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddInitialEimResponse_addInitialEimError_undefinedError
 * @description
 *
 * Any other error during AddInitialEim (SGP.32 v1.2, section 5.9.4).
 * @constant
 * @type {number}
 */
export
const undefinedError: AddInitialEimResponse_addInitialEimError = AddInitialEimResponse_addInitialEimError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AddInitialEimResponse_addInitialEimError: $.ASN1Decoder<AddInitialEimResponse_addInitialEimError> = $._decodeInteger;
export const _encode_AddInitialEimResponse_addInitialEimError: $.ASN1Encoder<AddInitialEimResponse_addInitialEimError> = $._encodeInteger;


/* eslint-enable */
