/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSInformation_mBMSUserServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMSUserServiceType ::= ENUMERATED {
 *    dOWNLOAD     ( 0 ),
 *    sTREAMING    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MBMSInformation_mBMSUserServiceType {
    dOWNLOAD = 0,
    sTREAMING = 1,
}

/**
 * @summary MBMSInformation_mBMSUserServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMSUserServiceType ::= ENUMERATED {
 *    dOWNLOAD     ( 0 ),
 *    sTREAMING    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSInformation_mBMSUserServiceType = _enum_for_MBMSInformation_mBMSUserServiceType;

/**
 * @summary MBMSInformation_mBMSUserServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMSUserServiceType ::= ENUMERATED {
 *    dOWNLOAD     ( 0 ),
 *    sTREAMING    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MBMSInformation_mBMSUserServiceType: typeof _enum_for_MBMSInformation_mBMSUserServiceType = _enum_for_MBMSInformation_mBMSUserServiceType;

/**
 * @summary MBMSInformation_mBMSUserServiceType_dOWNLOAD
 * @constant
 * @type {number}
 */
export
const MBMSInformation_mBMSUserServiceType_dOWNLOAD: _enum_for_MBMSInformation_mBMSUserServiceType.dOWNLOAD = MBMSInformation_mBMSUserServiceType.dOWNLOAD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dOWNLOAD
 * @constant
 * @type {number}
 */
export
const dOWNLOAD: _enum_for_MBMSInformation_mBMSUserServiceType.dOWNLOAD = MBMSInformation_mBMSUserServiceType.dOWNLOAD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSInformation_mBMSUserServiceType_sTREAMING
 * @constant
 * @type {number}
 */
export
const MBMSInformation_mBMSUserServiceType_sTREAMING: _enum_for_MBMSInformation_mBMSUserServiceType.sTREAMING = MBMSInformation_mBMSUserServiceType.sTREAMING; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sTREAMING
 * @constant
 * @type {number}
 */
export
const sTREAMING: _enum_for_MBMSInformation_mBMSUserServiceType.sTREAMING = MBMSInformation_mBMSUserServiceType.sTREAMING; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MBMSInformation_mBMSUserServiceType: $.ASN1Decoder<MBMSInformation_mBMSUserServiceType> = $._decodeEnumerated;

export
const _encode_MBMSInformation_mBMSUserServiceType: $.ASN1Encoder<MBMSInformation_mBMSUserServiceType> = $._encodeEnumerated;

/* eslint-enable */
