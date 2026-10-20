/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceOption  ::=  ENUMERATED {
 *     inCallRegistration(0),
 *     outCallRegistration(1),
 *     allCallRegistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ServiceOption {
    inCallRegistration = 0,
    outCallRegistration = 1,
    allCallRegistration = 2,
}

/**
 * @summary ServiceOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceOption  ::=  ENUMERATED {
 *     inCallRegistration(0),
 *     outCallRegistration(1),
 *     allCallRegistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ServiceOption = _enum_for_ServiceOption;

/**
 * @summary ServiceOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceOption  ::=  ENUMERATED {
 *     inCallRegistration(0),
 *     outCallRegistration(1),
 *     allCallRegistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ServiceOption = _enum_for_ServiceOption;

/**
 * @summary ServiceOption_inCallRegistration
 * @constant
 * @type {number}
 */
export
const ServiceOption_inCallRegistration: ServiceOption = ServiceOption.inCallRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inCallRegistration
 * @constant
 * @type {number}
 */
export
const inCallRegistration: ServiceOption = ServiceOption.inCallRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceOption_outCallRegistration
 * @constant
 * @type {number}
 */
export
const ServiceOption_outCallRegistration: ServiceOption = ServiceOption.outCallRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outCallRegistration
 * @constant
 * @type {number}
 */
export
const outCallRegistration: ServiceOption = ServiceOption.outCallRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceOption_allCallRegistration
 * @constant
 * @type {number}
 */
export
const ServiceOption_allCallRegistration: ServiceOption = ServiceOption.allCallRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allCallRegistration
 * @constant
 * @type {number}
 */
export
const allCallRegistration: ServiceOption = ServiceOption.allCallRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ServiceOption: $.ASN1Decoder<ServiceOption> = $._decodeEnumerated;

export
const _encode_ServiceOption: $.ASN1Encoder<ServiceOption> = $._encodeEnumerated;

/* eslint-enable */
