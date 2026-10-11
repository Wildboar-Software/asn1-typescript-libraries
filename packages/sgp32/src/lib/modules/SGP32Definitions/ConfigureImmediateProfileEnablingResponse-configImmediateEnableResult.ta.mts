/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureImmediateProfileEnablingResponse-configImmediateEnableResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = INTEGER;

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory
 * @constant
 * @type {number}
 */
export
const insufficientMemory: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists
 * @constant
 * @type {number}
 */
export
const associatedEimAlreadyExists: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult = ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult: $.ASN1Decoder<ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult> = $._decodeInteger;
export const _encode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult: $.ASN1Encoder<ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult> = $._encodeInteger;


/* eslint-enable */
