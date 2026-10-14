/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BindDiagnostic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BindDiagnostic                   ::=     INTEGER
 * { accessDenied                      (0)
 * , serviceTypeNotSupported           (1)
 * , versionNotSupported               (2)
 * , noSuchServiceInstance             (3)
 * , alreadyBound                      (4)
 * , siNotAccessibleToThisInitiator    (5)
 * , inconsistentServiceType           (6)
 * , invalidTime                       (7)
 * , outOfService                      (8)
 * , otherReason                       (127)
 * }
 * ```
 */
export
type BindDiagnostic = INTEGER;

/**
 * @summary BindDiagnostic_accessDenied
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_accessDenied: BindDiagnostic = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_accessDenied
 * @constant
 * @type {number}
 */
export
const accessDenied: BindDiagnostic = BindDiagnostic_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_serviceTypeNotSupported
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_serviceTypeNotSupported: BindDiagnostic = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_serviceTypeNotSupported
 * @constant
 * @type {number}
 */
export
const serviceTypeNotSupported: BindDiagnostic = BindDiagnostic_serviceTypeNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_versionNotSupported
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_versionNotSupported: BindDiagnostic = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_versionNotSupported
 * @constant
 * @type {number}
 */
export
const versionNotSupported: BindDiagnostic = BindDiagnostic_versionNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_noSuchServiceInstance
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_noSuchServiceInstance: BindDiagnostic = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_noSuchServiceInstance
 * @constant
 * @type {number}
 */
export
const noSuchServiceInstance: BindDiagnostic = BindDiagnostic_noSuchServiceInstance; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_alreadyBound
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_alreadyBound: BindDiagnostic = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_alreadyBound
 * @constant
 * @type {number}
 */
export
const alreadyBound: BindDiagnostic = BindDiagnostic_alreadyBound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_siNotAccessibleToThisInitiator
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_siNotAccessibleToThisInitiator: BindDiagnostic = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_siNotAccessibleToThisInitiator
 * @constant
 * @type {number}
 */
export
const siNotAccessibleToThisInitiator: BindDiagnostic = BindDiagnostic_siNotAccessibleToThisInitiator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_inconsistentServiceType
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_inconsistentServiceType: BindDiagnostic = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_inconsistentServiceType
 * @constant
 * @type {number}
 */
export
const inconsistentServiceType: BindDiagnostic = BindDiagnostic_inconsistentServiceType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_invalidTime
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_invalidTime: BindDiagnostic = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_invalidTime
 * @constant
 * @type {number}
 */
export
const invalidTime: BindDiagnostic = BindDiagnostic_invalidTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_outOfService
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_outOfService: BindDiagnostic = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: BindDiagnostic = BindDiagnostic_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_otherReason
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_otherReason: BindDiagnostic = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_otherReason
 * @constant
 * @type {number}
 */
export
const otherReason: BindDiagnostic = BindDiagnostic_otherReason; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_BindDiagnostic: $.ASN1Decoder<BindDiagnostic> = $._decodeInteger;
export const _encode_BindDiagnostic: $.ASN1Encoder<BindDiagnostic> = $._encodeInteger;


/* eslint-enable */
