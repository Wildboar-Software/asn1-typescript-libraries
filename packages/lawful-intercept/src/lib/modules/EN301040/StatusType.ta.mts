/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StatusType
 * @description
 * 
 * SwMI condition reported in `LISTATUSind`. The indication exists so the
 * mediation function learns of status changes, for example a problem that
 * affects interception (clause 5.2.2.1.5). EN 301 040 gives each value its name
 * and no further behaviour.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusType  ::=  ENUMERATED {
 *     networkFullyAvailable,
 *     networkErrorsAffectingIntercept,
 *     reconfigurationInProgress,
 *     sessionExpired,
 *     gatewayServicesUnavailable
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_StatusType {
    /**
     * The SwMI reports that the network is fully available.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    networkFullyAvailable = 0,
    /**
     * The SwMI reports network errors that affect interception.
     * Clause 5.2.2.1.5 gives inability to provide interception as the example
     * of why status is reported.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    networkErrorsAffectingIntercept = 1,
    /**
     * The SwMI reports that reconfiguration is in progress. EN 301 040 does not
     * define the effect on an open interception.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    reconfigurationInProgress = 2,
    /**
     * The SwMI reports that a session has expired. EN 301 040 does not say
     * which session.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    sessionExpired = 3,
    /**
     * The SwMI reports that gateway services are unavailable. EN 301 040 does
     * not identify the gateways.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    gatewayServicesUnavailable = 4,
}

/**
 * @summary StatusType
 * @description
 * 
 * SwMI condition reported in `LISTATUSind`. The indication exists so the
 * mediation function learns of status changes, for example a problem that
 * affects interception (clause 5.2.2.1.5). EN 301 040 gives each value its name
 * and no further behaviour.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusType  ::=  ENUMERATED {
 *     networkFullyAvailable,
 *     networkErrorsAffectingIntercept,
 *     reconfigurationInProgress,
 *     sessionExpired,
 *     gatewayServicesUnavailable
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StatusType = _enum_for_StatusType;

/**
 * @summary StatusType
 * @description
 * 
 * SwMI condition reported in `LISTATUSind`. The indication exists so the
 * mediation function learns of status changes, for example a problem that
 * affects interception (clause 5.2.2.1.5). EN 301 040 gives each value its name
 * and no further behaviour.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusType  ::=  ENUMERATED {
 *     networkFullyAvailable,
 *     networkErrorsAffectingIntercept,
 *     reconfigurationInProgress,
 *     sessionExpired,
 *     gatewayServicesUnavailable
 * }
 * ```
 * 
 * @enum {number}
 */
export
const StatusType = _enum_for_StatusType;

/**
 * @summary StatusType_networkFullyAvailable
 * @description
 *
 * The SwMI reports that the network is fully available.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const StatusType_networkFullyAvailable = StatusType.networkFullyAvailable satisfies StatusType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkFullyAvailable
 * @description
 *
 * The SwMI reports that the network is fully available.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const networkFullyAvailable = StatusType.networkFullyAvailable satisfies StatusType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StatusType_networkErrorsAffectingIntercept
 * @description
 *
 * The SwMI reports network errors that affect interception. Clause 5.2.2.1.5
 * gives inability to provide interception as the example of why status is
 * reported.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const StatusType_networkErrorsAffectingIntercept = StatusType.networkErrorsAffectingIntercept satisfies StatusType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkErrorsAffectingIntercept
 * @description
 *
 * The SwMI reports network errors that affect interception. Clause 5.2.2.1.5
 * gives inability to provide interception as the example of why status is
 * reported.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const networkErrorsAffectingIntercept = StatusType.networkErrorsAffectingIntercept satisfies StatusType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StatusType_reconfigurationInProgress
 * @description
 *
 * The SwMI reports that reconfiguration is in progress. EN 301 040 does not
 * define the effect on an open interception.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const StatusType_reconfigurationInProgress = StatusType.reconfigurationInProgress satisfies StatusType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reconfigurationInProgress
 * @description
 *
 * The SwMI reports that reconfiguration is in progress. EN 301 040 does not
 * define the effect on an open interception.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const reconfigurationInProgress = StatusType.reconfigurationInProgress satisfies StatusType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StatusType_sessionExpired
 * @description
 *
 * The SwMI reports that a session has expired. EN 301 040 does not say which
 * session.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const StatusType_sessionExpired = StatusType.sessionExpired satisfies StatusType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionExpired
 * @description
 *
 * The SwMI reports that a session has expired. EN 301 040 does not say which
 * session.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sessionExpired = StatusType.sessionExpired satisfies StatusType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StatusType_gatewayServicesUnavailable
 * @description
 *
 * The SwMI reports that gateway services are unavailable. EN 301 040 does not
 * identify the gateways.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const StatusType_gatewayServicesUnavailable = StatusType.gatewayServicesUnavailable satisfies StatusType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gatewayServicesUnavailable
 * @description
 *
 * The SwMI reports that gateway services are unavailable. EN 301 040 does not
 * identify the gateways.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.5.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gatewayServicesUnavailable = StatusType.gatewayServicesUnavailable satisfies StatusType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_StatusType: $.ASN1Decoder<StatusType> = $._decodeEnumerated;
export const _encode_StatusType: $.ASN1Encoder<StatusType> = $._encodeEnumerated;


/* eslint-enable */
