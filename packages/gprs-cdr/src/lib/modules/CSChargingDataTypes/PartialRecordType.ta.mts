/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartialRecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordType  ::=  ENUMERATED {
 *    timeLimit                   ( 0 ),
 *    serviceChange               ( 1 ),
 *    locationChange              ( 2 ),
 *    classmarkChange             ( 3 ),
 *    aocParmChange               ( 4 ),
 *    radioChannelChange          ( 5 ),
 *    hSCSDParmChange             ( 6 ),
 *    changeOfCAMELDestination    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PartialRecordType {
    timeLimit = 0,
    serviceChange = 1,
    locationChange = 2,
    classmarkChange = 3,
    aocParmChange = 4,
    radioChannelChange = 5,
    hSCSDParmChange = 6,
    changeOfCAMELDestination = 7,
}

/**
 * @summary PartialRecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordType  ::=  ENUMERATED {
 *    timeLimit                   ( 0 ),
 *    serviceChange               ( 1 ),
 *    locationChange              ( 2 ),
 *    classmarkChange             ( 3 ),
 *    aocParmChange               ( 4 ),
 *    radioChannelChange          ( 5 ),
 *    hSCSDParmChange             ( 6 ),
 *    changeOfCAMELDestination    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type PartialRecordType = _enum_for_PartialRecordType;

/**
 * @summary PartialRecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordType  ::=  ENUMERATED {
 *    timeLimit                   ( 0 ),
 *    serviceChange               ( 1 ),
 *    locationChange              ( 2 ),
 *    classmarkChange             ( 3 ),
 *    aocParmChange               ( 4 ),
 *    radioChannelChange          ( 5 ),
 *    hSCSDParmChange             ( 6 ),
 *    changeOfCAMELDestination    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PartialRecordType = _enum_for_PartialRecordType;

/**
 * @summary PartialRecordType_timeLimit
 * @constant
 * @type {number}
 */
export
const PartialRecordType_timeLimit: PartialRecordType = PartialRecordType.timeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: PartialRecordType = PartialRecordType.timeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_serviceChange
 * @constant
 * @type {number}
 */
export
const PartialRecordType_serviceChange: PartialRecordType = PartialRecordType.serviceChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceChange
 * @constant
 * @type {number}
 */
export
const serviceChange: PartialRecordType = PartialRecordType.serviceChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_locationChange
 * @constant
 * @type {number}
 */
export
const PartialRecordType_locationChange: PartialRecordType = PartialRecordType.locationChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationChange
 * @constant
 * @type {number}
 */
export
const locationChange: PartialRecordType = PartialRecordType.locationChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_classmarkChange
 * @constant
 * @type {number}
 */
export
const PartialRecordType_classmarkChange: PartialRecordType = PartialRecordType.classmarkChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary classmarkChange
 * @constant
 * @type {number}
 */
export
const classmarkChange: PartialRecordType = PartialRecordType.classmarkChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_aocParmChange
 * @constant
 * @type {number}
 */
export
const PartialRecordType_aocParmChange: PartialRecordType = PartialRecordType.aocParmChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aocParmChange
 * @constant
 * @type {number}
 */
export
const aocParmChange: PartialRecordType = PartialRecordType.aocParmChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_radioChannelChange
 * @constant
 * @type {number}
 */
export
const PartialRecordType_radioChannelChange: PartialRecordType = PartialRecordType.radioChannelChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioChannelChange
 * @constant
 * @type {number}
 */
export
const radioChannelChange: PartialRecordType = PartialRecordType.radioChannelChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_hSCSDParmChange
 * @constant
 * @type {number}
 */
export
const PartialRecordType_hSCSDParmChange: PartialRecordType = PartialRecordType.hSCSDParmChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSCSDParmChange
 * @constant
 * @type {number}
 */
export
const hSCSDParmChange: PartialRecordType = PartialRecordType.hSCSDParmChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordType_changeOfCAMELDestination
 * @constant
 * @type {number}
 */
export
const PartialRecordType_changeOfCAMELDestination: PartialRecordType = PartialRecordType.changeOfCAMELDestination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeOfCAMELDestination
 * @constant
 * @type {number}
 */
export
const changeOfCAMELDestination: PartialRecordType = PartialRecordType.changeOfCAMELDestination; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PartialRecordType: $.ASN1Decoder<PartialRecordType> = $._decodeEnumerated;

export
const _encode_PartialRecordType: $.ASN1Encoder<PartialRecordType> = $._encodeEnumerated;

/* eslint-enable */
