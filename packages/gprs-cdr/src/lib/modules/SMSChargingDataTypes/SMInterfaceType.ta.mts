/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMInterfaceType
 * @description
 *
 * Role of the interface in `SMInterface`. Clause 5.1.1 names the operational
 * scenarios (person to person, person to application, application to person,
 * application to application, device triggering, and MSISDN-less UE to
 * application via T4) but does not define these values. The ASN.1 spells
 * unknown as `unkown`.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.1.
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
 * Role of the interface in `SMInterface`. Clause 5.1.1 names the operational
 * scenarios (person to person, person to application, application to person,
 * application to application, device triggering, and MSISDN-less UE to
 * application via T4) but does not define these values. The ASN.1 spells
 * unknown as `unkown`.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.1.
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
 * Role of the interface in `SMInterface`. Clause 5.1.1 names the operational
 * scenarios (person to person, person to application, application to person,
 * application to application, device triggering, and MSISDN-less UE to
 * application via T4) but does not define these values. The ASN.1 spells
 * unknown as `unkown`.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.1.
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
 * @description
 *
 * Interface role not known. The ASN.1 identifier is spelled `unkown`. TS
 * 32.274 does not define this value.
 *
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
 * @description
 *
 * Mobile-originating interface. In clause 5.1.1 a person or a MSISDN-less UE
 * is the originator.
 *
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
 * @description
 *
 * Mobile-terminating interface. In clause 5.1.1 a UE is the destination.
 *
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
 * @description
 *
 * Application-originating interface. Clause 5.1.1 uses this for
 * application-to-person and application-to-application messaging. The
 * interface identifies the application, which is not the short number an end
 * user dials (note 3 of table 6.3.1.2.1).
 *
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
 * @description
 *
 * Application-terminating interface. Clause 5.1.1 uses this for
 * person-to-application and application-to-application messaging.
 *
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
 * @description
 *
 * Device-triggering interface (clauses 5.1.1 and 5.1.4). On an SC-SMT CDR the
 * originator and destination interfaces are absent for a device trigger, so
 * this value is not carried there (table 6.1.3.4.1).
 *
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
