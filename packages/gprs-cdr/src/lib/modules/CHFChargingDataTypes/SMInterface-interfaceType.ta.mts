/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMInterface_interfaceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMInterface-interfaceType ::= ENUMERATED {
 *    unkown                    ( 0 ),
 *    mobileOriginating         ( 1 ),
 *    mobileTerminating         ( 2 ),
 *    applicationOriginating    ( 3 ),
 *    applicationTerminating    ( 4 ),
 *    deviceTrigger             ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMInterface_interfaceType {
    unkown = 0,
    mobileOriginating = 1,
    mobileTerminating = 2,
    applicationOriginating = 3,
    applicationTerminating = 4,
    deviceTrigger = 5,
}

/**
 * @summary SMInterface_interfaceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMInterface-interfaceType ::= ENUMERATED {
 *    unkown                    ( 0 ),
 *    mobileOriginating         ( 1 ),
 *    mobileTerminating         ( 2 ),
 *    applicationOriginating    ( 3 ),
 *    applicationTerminating    ( 4 ),
 *    deviceTrigger             ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMInterface_interfaceType = _enum_for_SMInterface_interfaceType;

/**
 * @summary SMInterface_interfaceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMInterface-interfaceType ::= ENUMERATED {
 *    unkown                    ( 0 ),
 *    mobileOriginating         ( 1 ),
 *    mobileTerminating         ( 2 ),
 *    applicationOriginating    ( 3 ),
 *    applicationTerminating    ( 4 ),
 *    deviceTrigger             ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMInterface_interfaceType = _enum_for_SMInterface_interfaceType;

/**
 * @summary SMInterface_interfaceType_unkown
 * @constant
 * @type {number}
 */
export
const SMInterface_interfaceType_unkown: SMInterface_interfaceType = SMInterface_interfaceType.unkown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unkown
 * @constant
 * @type {number}
 */
export
const unkown: SMInterface_interfaceType = SMInterface_interfaceType.unkown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterface_interfaceType_mobileOriginating
 * @constant
 * @type {number}
 */
export
const SMInterface_interfaceType_mobileOriginating: SMInterface_interfaceType = SMInterface_interfaceType.mobileOriginating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobileOriginating
 * @constant
 * @type {number}
 */
export
const mobileOriginating: SMInterface_interfaceType = SMInterface_interfaceType.mobileOriginating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterface_interfaceType_mobileTerminating
 * @constant
 * @type {number}
 */
export
const SMInterface_interfaceType_mobileTerminating: SMInterface_interfaceType = SMInterface_interfaceType.mobileTerminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobileTerminating
 * @constant
 * @type {number}
 */
export
const mobileTerminating: SMInterface_interfaceType = SMInterface_interfaceType.mobileTerminating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterface_interfaceType_applicationOriginating
 * @constant
 * @type {number}
 */
export
const SMInterface_interfaceType_applicationOriginating: SMInterface_interfaceType = SMInterface_interfaceType.applicationOriginating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationOriginating
 * @constant
 * @type {number}
 */
export
const applicationOriginating: SMInterface_interfaceType = SMInterface_interfaceType.applicationOriginating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterface_interfaceType_applicationTerminating
 * @constant
 * @type {number}
 */
export
const SMInterface_interfaceType_applicationTerminating: SMInterface_interfaceType = SMInterface_interfaceType.applicationTerminating; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationTerminating
 * @constant
 * @type {number}
 */
export
const applicationTerminating: SMInterface_interfaceType = SMInterface_interfaceType.applicationTerminating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMInterface_interfaceType_deviceTrigger
 * @constant
 * @type {number}
 */
export
const SMInterface_interfaceType_deviceTrigger: SMInterface_interfaceType = SMInterface_interfaceType.deviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceTrigger
 * @constant
 * @type {number}
 */
export
const deviceTrigger: SMInterface_interfaceType = SMInterface_interfaceType.deviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMInterface_interfaceType: $.ASN1Decoder<SMInterface_interfaceType> = $._decodeEnumerated;

export
const _encode_SMInterface_interfaceType: $.ASN1Encoder<SMInterface_interfaceType> = $._encodeEnumerated;

/* eslint-enable */
