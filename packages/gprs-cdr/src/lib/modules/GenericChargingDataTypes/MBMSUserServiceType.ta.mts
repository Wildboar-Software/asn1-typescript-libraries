/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSUserServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSUserServiceType  ::=  ENUMERATED {
 *    dOWNLOAD     ( 0 ),
 *    sTREAMING    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MBMSUserServiceType {
    dOWNLOAD = 0,
    sTREAMING = 1,
}

/**
 * @summary MBMSUserServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSUserServiceType  ::=  ENUMERATED {
 *    dOWNLOAD     ( 0 ),
 *    sTREAMING    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSUserServiceType = _enum_for_MBMSUserServiceType;

/**
 * @summary MBMSUserServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSUserServiceType  ::=  ENUMERATED {
 *    dOWNLOAD     ( 0 ),
 *    sTREAMING    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MBMSUserServiceType: typeof _enum_for_MBMSUserServiceType = _enum_for_MBMSUserServiceType;

/**
 * @summary MBMSUserServiceType_dOWNLOAD
 * @constant
 * @type {number}
 */
export
const MBMSUserServiceType_dOWNLOAD: _enum_for_MBMSUserServiceType.dOWNLOAD = MBMSUserServiceType.dOWNLOAD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dOWNLOAD
 * @constant
 * @type {number}
 */
export
const dOWNLOAD: _enum_for_MBMSUserServiceType.dOWNLOAD = MBMSUserServiceType.dOWNLOAD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSUserServiceType_sTREAMING
 * @constant
 * @type {number}
 */
export
const MBMSUserServiceType_sTREAMING: _enum_for_MBMSUserServiceType.sTREAMING = MBMSUserServiceType.sTREAMING; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sTREAMING
 * @constant
 * @type {number}
 */
export
const sTREAMING: _enum_for_MBMSUserServiceType.sTREAMING = MBMSUserServiceType.sTREAMING; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MBMSUserServiceType: $.ASN1Decoder<MBMSUserServiceType> = $._decodeEnumerated;

export
const _encode_MBMSUserServiceType: $.ASN1Encoder<MBMSUserServiceType> = $._encodeEnumerated;

/* eslint-enable */
