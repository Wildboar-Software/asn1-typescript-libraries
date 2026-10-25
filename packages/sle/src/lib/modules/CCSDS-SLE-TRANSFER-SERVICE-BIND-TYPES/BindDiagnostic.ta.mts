/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BindDiagnostic
 * @description
 * 
 * Negative-result diagnostic of BIND. A positive result carries no diagnostic.
 * Note 1 of 3.2.2.11 says the performer may be unable to return
 * `noSuchServiceInstance`, `invalidTime`, or `outOfService`. An incorrect
 * responder port can fail with no return.
 * 
 * CCSDS 911.1-B-5, section 3.2.2.11.
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
 * @description
 * 
 * The initiator-identifier is not recognized by the responder. For example, it
 * does not identify the authorized initiator of any service instance the
 * responder knows. The responder does not attempt authentication and sets
 * performer-credentials to `unused`.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.11 and 4.1.6.2.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_accessDenied = 0 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_accessDenied
 * @description
 * 
 * The initiator-identifier is not recognized (CCSDS 911.1-B-5, sections
 * 3.2.2.11 and 4.1.6.2).
 * @constant
 * @type {number}
 */
export
const accessDenied = BindDiagnostic_accessDenied satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_serviceTypeNotSupported
 * @description
 * 
 * The service-type does not identify a service type the responder supports.
 * 
 * CCSDS 911.1-B-5, section 3.2.2.11.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_serviceTypeNotSupported = 1 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_serviceTypeNotSupported
 * @description
 * 
 * The responder does not support this service-type (CCSDS 911.1-B-5, section
 * 3.2.2.11).
 * @constant
 * @type {number}
 */
export
const serviceTypeNotSupported = BindDiagnostic_serviceTypeNotSupported satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_versionNotSupported
 * @description
 * 
 * The responder does not support the requested version, and it does not permit
 * version negotiation or does not support any lower version.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.11 and 3.2.2.8.5.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_versionNotSupported = 2 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_versionNotSupported
 * @description
 * 
 * The requested version is unsupported and no lower version is offered (CCSDS
 * 911.1-B-5, section 3.2.2.8.5).
 * @constant
 * @type {number}
 */
export
const versionNotSupported = BindDiagnostic_versionNotSupported satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_noSuchServiceInstance
 * @description
 * 
 * The requested service instance is not defined in any agreed service package
 * known to the responder. The performer may be unable to return this
 * diagnostic.
 * 
 * CCSDS 911.1-B-5, section 3.2.2.11.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_noSuchServiceInstance = 3 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_noSuchServiceInstance
 * @description
 * 
 * The service instance is not in an agreed service package (CCSDS 911.1-B-5,
 * section 3.2.2.11).
 * @constant
 * @type {number}
 */
export
const noSuchServiceInstance = BindDiagnostic_noSuchServiceInstance satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_alreadyBound
 * @description
 * 
 * The service instance is already bound via a different association.
 * 
 * CCSDS 911.1-B-5, section 3.2.2.11.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_alreadyBound = 4 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_alreadyBound
 * @description
 * 
 * The service instance is already bound via another association (CCSDS
 * 911.1-B-5, section 3.2.2.11).
 * @constant
 * @type {number}
 */
export
const alreadyBound = BindDiagnostic_alreadyBound satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_siNotAccessibleToThisInitiator
 * @description
 * 
 * The authorized initiator for the service instance does not match the
 * initiator-identifier. Authentication succeeded, or was not required for this
 * initiator.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.11 and 4.1.6.3.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_siNotAccessibleToThisInitiator = 5 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_siNotAccessibleToThisInitiator
 * @description
 * 
 * This initiator is not authorized for the service instance (CCSDS 911.1-B-5,
 * section 4.1.6.3).
 * @constant
 * @type {number}
 */
export
const siNotAccessibleToThisInitiator = BindDiagnostic_siNotAccessibleToThisInitiator satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_inconsistentServiceType
 * @description
 * 
 * The service-type is not 'Rtn All Frames', or it does not match the service
 * type of the service instance identified by the service-instance-identifier.
 * 
 * CCSDS 911.1-B-5, section 3.2.2.11.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_inconsistentServiceType = 6 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_inconsistentServiceType
 * @description
 * 
 * service-type is not 'Rtn All Frames', or it disagrees with the service
 * instance (CCSDS 911.1-B-5, section 3.2.2.11).
 * @constant
 * @type {number}
 */
export
const inconsistentServiceType = BindDiagnostic_inconsistentServiceType satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_invalidTime
 * @description
 * 
 * BIND was invoked outside the service instance provision period of the
 * identified service instance. The performer may be unable to return this
 * diagnostic.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.11 and 1.6.1.8.13.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_invalidTime = 7 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_invalidTime
 * @description
 * 
 * BIND is outside the service instance provision period (CCSDS 911.1-B-5,
 * section 3.2.2.11).
 * @constant
 * @type {number}
 */
export
const invalidTime = BindDiagnostic_invalidTime satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_outOfService
 * @description
 * 
 * Management has taken the responder out of service for an indefinite period.
 * Production status is `halted`. The performer may be unable to return this
 * diagnostic.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.11 and 3.7.2.4.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_outOfService = 8 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_outOfService
 * @description
 * 
 * Production status is `halted` (CCSDS 911.1-B-5, section 3.2.2.11).
 * @constant
 * @type {number}
 */
export
const outOfService = BindDiagnostic_outOfService satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_otherReason
 * @description
 * 
 * No other diagnostic in this list describes the negative result. The reason
 * has to be found by other means.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.11 and 3.1.1.4.
 * @constant
 * @type {number}
 */
export
const BindDiagnostic_otherReason = 127 satisfies BindDiagnostic; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindDiagnostic_otherReason
 * @description
 * 
 * No listed BIND diagnostic fits (CCSDS 911.1-B-5, sections 3.2.2.11 and
 * 3.1.1.4).
 * @constant
 * @type {number}
 */
export
const otherReason = BindDiagnostic_otherReason satisfies BindDiagnostic; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_BindDiagnostic: $.ASN1Decoder<BindDiagnostic> = $._decodeInteger;
export const _encode_BindDiagnostic: $.ASN1Encoder<BindDiagnostic> = $._encodeInteger;


/* eslint-enable */
