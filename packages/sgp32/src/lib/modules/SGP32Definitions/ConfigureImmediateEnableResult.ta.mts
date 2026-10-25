/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConfigureImmediateEnableResult
 * @description
 *
 * Result of the configureImmediateEnable PSMO inside a verified eUICC Package.
 * The command activates immediate Profile enabling when immediateEnableFlag is
 * present and it is currently inactive, and deactivates it when the flag is
 * absent and it is currently active. Any other combination leaves that state
 * unchanged. Supplied default SM-DP+ OID and address are stored for immediate
 * enabling. A stored defaultSmdpAddress is also the default SM-DP+ address
 * from GetEuiccConfiguredAddresses.
 *
 * SGP.32 v1.2, sections 2.11.1.1, 2.11.2.1, 3.4.4, and 5.13.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureImmediateEnableResult  ::=  INTEGER {
 *     ok(0),
 *     insufficientMemory(1),
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ConfigureImmediateEnableResult = INTEGER;

/**
 * @summary ConfigureImmediateEnableResult_ok
 * @description
 *
 * The PSMO finished: the immediate-enabling state was updated as required by
 * the flag, and any supplied default SM-DP+ data was stored.
 *
 * SGP.32 v1.2, section 3.4.4.
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_ok = 0 satisfies ConfigureImmediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_ok
 * @description
 *
 * configureImmediateEnable finished and applied the requested state and
 * default SM-DP+ data (SGP.32 v1.2, section 3.4.4).
 * @constant
 * @type {number}
 */
export
const ok = ConfigureImmediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_insufficientMemory
 * @description
 *
 * SGP.32 v1.2 lists this code on the configureImmediateEnable PSMO result and
 * does not further define it. Annex C.
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_insufficientMemory = 1 satisfies ConfigureImmediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_insufficientMemory
 * @description
 *
 * Listed on configureImmediateEnable; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const insufficientMemory = ConfigureImmediateEnableResult_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_commandError
 * @description
 *
 * SGP.32 v1.2 lists this code on the configureImmediateEnable PSMO result and
 * does not further define it. Annex C.
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_commandError = 7 satisfies ConfigureImmediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_commandError
 * @description
 *
 * Listed on configureImmediateEnable; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const commandError = ConfigureImmediateEnableResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code on the configureImmediateEnable PSMO result and
 * does not further define it. Annex C.
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_undefinedError = 127 satisfies ConfigureImmediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_undefinedError
 * @description
 *
 * Listed on configureImmediateEnable; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const undefinedError = ConfigureImmediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConfigureImmediateEnableResult: $.ASN1Decoder<ConfigureImmediateEnableResult> = $._decodeInteger;
export const _encode_ConfigureImmediateEnableResult: $.ASN1Encoder<ConfigureImmediateEnableResult> = $._encodeInteger;


/* eslint-enable */
