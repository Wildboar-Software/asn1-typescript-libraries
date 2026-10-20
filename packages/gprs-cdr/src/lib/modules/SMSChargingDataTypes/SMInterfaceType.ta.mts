/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMInterfaceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMInterfaceType  ::=  ENUMERATED {
 *    unkown                    ( 0 ),
 *    mobileOriginating         ( 1 ),
 *    mobileTerminating         ( 2 ),
 *    applicationOriginating    ( 3 ),
 *    applicationTerminating    ( 4 ),
 *    deviceTrigger             ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMInterfaceType {
    unkown = 0,
    mobileOriginating = 1,
    mobileTerminating = 2,
    applicationOriginating = 3,
    applicationTerminating = 4,
    deviceTrigger = 5,
}

/**
 * @summary SMInterfaceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMInterfaceType  ::=  ENUMERATED {
 *    unkown                    ( 0 ),
 *    mobileOriginating         ( 1 ),
 *    mobileTerminating         ( 2 ),
 *    applicationOriginating    ( 3 ),
 *    applicationTerminating    ( 4 ),
 *    deviceTrigger             ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMInterfaceType = _enum_for_SMInterfaceType;

/**
 * @summary SMInterfaceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMInterfaceType  ::=  ENUMERATED {
 *    unkown                    ( 0 ),
 *    mobileOriginating         ( 1 ),
 *    mobileTerminating         ( 2 ),
 *    applicationOriginating    ( 3 ),
 *    applicationTerminating    ( 4 ),
 *    deviceTrigger             ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMInterfaceType = _enum_for_SMInterfaceType;

/**
 * @summary SMInterfaceType_unkown
 * @constant
 * @type {number}
 */
export
const SMInterfaceType_unkown: SMInterfaceType = SMInterfaceType.unkown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unkown
 * @constant
 * @type {number}
 */
export
const unkown: SMInterfaceType = SMInterfaceType.unkown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterfaceType_mobileOriginating
 * @constant
 * @type {number}
 */
export
const SMInterfaceType_mobileOriginating: SMInterfaceType = SMInterfaceType.mobileOriginating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobileOriginating
 * @constant
 * @type {number}
 */
export
const mobileOriginating: SMInterfaceType = SMInterfaceType.mobileOriginating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterfaceType_mobileTerminating
 * @constant
 * @type {number}
 */
export
const SMInterfaceType_mobileTerminating: SMInterfaceType = SMInterfaceType.mobileTerminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobileTerminating
 * @constant
 * @type {number}
 */
export
const mobileTerminating: SMInterfaceType = SMInterfaceType.mobileTerminating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterfaceType_applicationOriginating
 * @constant
 * @type {number}
 */
export
const SMInterfaceType_applicationOriginating: SMInterfaceType = SMInterfaceType.applicationOriginating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationOriginating
 * @constant
 * @type {number}
 */
export
const applicationOriginating: SMInterfaceType = SMInterfaceType.applicationOriginating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterfaceType_applicationTerminating
 * @constant
 * @type {number}
 */
export
const SMInterfaceType_applicationTerminating: SMInterfaceType = SMInterfaceType.applicationTerminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationTerminating
 * @constant
 * @type {number}
 */
export
const applicationTerminating: SMInterfaceType = SMInterfaceType.applicationTerminating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterfaceType_deviceTrigger
 * @constant
 * @type {number}
 */
export
const SMInterfaceType_deviceTrigger: SMInterfaceType = SMInterfaceType.deviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceTrigger
 * @constant
 * @type {number}
 */
export
const deviceTrigger: SMInterfaceType = SMInterfaceType.deviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMInterfaceType: $.ASN1Decoder<SMInterfaceType> = $._decodeEnumerated;

export
const _encode_SMInterfaceType: $.ASN1Encoder<SMInterfaceType> = $._encodeEnumerated;

/* eslint-enable */
