/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSInformation_mBMSServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMSServiceType ::= ENUMERATED {
 *    mULTICAST    ( 0 ),
 *    bROADCAST    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MBMSInformation_mBMSServiceType {
    mULTICAST = 0,
    bROADCAST = 1,
}

/**
 * @summary MBMSInformation_mBMSServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMSServiceType ::= ENUMERATED {
 *    mULTICAST    ( 0 ),
 *    bROADCAST    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSInformation_mBMSServiceType = _enum_for_MBMSInformation_mBMSServiceType;

/**
 * @summary MBMSInformation_mBMSServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation-mBMSServiceType ::= ENUMERATED {
 *    mULTICAST    ( 0 ),
 *    bROADCAST    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MBMSInformation_mBMSServiceType = _enum_for_MBMSInformation_mBMSServiceType;

/**
 * @summary MBMSInformation_mBMSServiceType_mULTICAST
 * @constant
 * @type {number}
 */
export
const MBMSInformation_mBMSServiceType_mULTICAST: MBMSInformation_mBMSServiceType = MBMSInformation_mBMSServiceType.mULTICAST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mULTICAST
 * @constant
 * @type {number}
 */
export
const mULTICAST: MBMSInformation_mBMSServiceType = MBMSInformation_mBMSServiceType.mULTICAST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSInformation_mBMSServiceType_bROADCAST
 * @constant
 * @type {number}
 */
export
const MBMSInformation_mBMSServiceType_bROADCAST: MBMSInformation_mBMSServiceType = MBMSInformation_mBMSServiceType.bROADCAST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bROADCAST
 * @constant
 * @type {number}
 */
export
const bROADCAST: MBMSInformation_mBMSServiceType = MBMSInformation_mBMSServiceType.bROADCAST; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MBMSInformation_mBMSServiceType: $.ASN1Decoder<MBMSInformation_mBMSServiceType> = $._decodeEnumerated;

export
const _encode_MBMSInformation_mBMSServiceType: $.ASN1Encoder<MBMSInformation_mBMSServiceType> = $._encodeEnumerated;

/* eslint-enable */
