/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMSubscriberRecordChangeMethod {
    pEIChange = 1,
    sUPIChange = 2,
    gPSIChange = 3,
    uEDeprovisioning = 4,
    unknown = 5,
    serviceIDChange = 6,
    multipleIDChanges = 7,
}

/**
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMSubscriberRecordChangeMethod = _enum_for_UDMSubscriberRecordChangeMethod;

/**
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMSubscriberRecordChangeMethod = _enum_for_UDMSubscriberRecordChangeMethod;

/**
 * @summary UDMSubscriberRecordChangeMethod_pEIChange
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_pEIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.pEIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pEIChange
 * @constant
 * @type {number}
 */
export
const pEIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.pEIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_sUPIChange
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_sUPIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.sUPIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sUPIChange
 * @constant
 * @type {number}
 */
export
const sUPIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.sUPIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_gPSIChange
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_gPSIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.gPSIChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPSIChange
 * @constant
 * @type {number}
 */
export
const gPSIChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.gPSIChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_uEDeprovisioning
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_uEDeprovisioning: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.uEDeprovisioning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEDeprovisioning
 * @constant
 * @type {number}
 */
export
const uEDeprovisioning: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.uEDeprovisioning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_unknown
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_unknown: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_serviceIDChange
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_serviceIDChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.serviceIDChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceIDChange
 * @constant
 * @type {number}
 */
export
const serviceIDChange: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.serviceIDChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_multipleIDChanges
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_multipleIDChanges: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.multipleIDChanges; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleIDChanges
 * @constant
 * @type {number}
 */
export
const multipleIDChanges: UDMSubscriberRecordChangeMethod = UDMSubscriberRecordChangeMethod.multipleIDChanges; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UDMSubscriberRecordChangeMethod: $.ASN1Decoder<UDMSubscriberRecordChangeMethod> = $._decodeEnumerated;
export const _encode_UDMSubscriberRecordChangeMethod: $.ASN1Encoder<UDMSubscriberRecordChangeMethod> = $._encodeEnumerated;


/* eslint-enable */
