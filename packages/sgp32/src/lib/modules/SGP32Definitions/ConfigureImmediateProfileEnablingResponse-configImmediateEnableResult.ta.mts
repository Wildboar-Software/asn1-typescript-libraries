/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult
 * @description
 *
 * Result of ES10b.ConfigureImmediateProfileEnabling. The command is atomic.
 *
 * SGP.32 v1.2, sections 3.4.5 and 5.9.17.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureImmediateProfileEnablingResponse-configImmediateEnableResult ::= INTEGER {
 *     ok(0),
 *     insufficientMemory(1),
 *     associatedEimAlreadyExists(2),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = INTEGER;

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok
 * @description
 *
 * Immediate Profile enabling was activated or deactivated as required by the
 * flag, and any supplied default SM-DP+ data was stored.
 *
 * SGP.32 v1.2, sections 3.4.5 and 5.9.17.
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok
 * @description
 *
 * Immediate enabling state and any supplied default SM-DP+ data were applied
 * (SGP.32 v1.2, section 5.9.17).
 * @constant
 * @type {number}
 */
export
const ok: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory
 * @description
 *
 * defaultSmdpOid or defaultSmdpAddress was present and the eUICC lacks memory
 * to store it.
 *
 * SGP.32 v1.2, section 5.9.17.
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory
 * @description
 *
 * The eUICC lacks memory for the supplied default SM-DP+ data (SGP.32 v1.2,
 * section 5.9.17).
 * @constant
 * @type {number}
 */
export
const insufficientMemory: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists
 * @description
 *
 * eIM Configuration Data is already present, so the IPA cannot configure
 * immediate Profile enabling.
 *
 * SGP.32 v1.2, sections 3.4.5 and 5.9.17.
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists
 * @description
 *
 * eIM Configuration Data is already stored (SGP.32 v1.2, section 5.9.17).
 * @constant
 * @type {number}
 */
export
const associatedEimAlreadyExists: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code on ConfigureImmediateProfileEnabling and does
 * not further define it. Annex C.
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError
 * @description
 *
 * Listed on ConfigureImmediateProfileEnabling; SGP.32 v1.2 does not further
 * define it (Annex C).
 * @constant
 * @type {number}
 */
export
const undefinedError: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult: $.ASN1Decoder<ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult> = $._decodeInteger;
export const _encode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult: $.ASN1Encoder<ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult> = $._encodeInteger;


/* eslint-enable */
