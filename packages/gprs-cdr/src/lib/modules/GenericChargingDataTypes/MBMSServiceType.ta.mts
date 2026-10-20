/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSServiceType  ::=  ENUMERATED {
 *    mULTICAST    ( 0 ),
 *    bROADCAST    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MBMSServiceType {
    mULTICAST = 0,
    bROADCAST = 1,
}

/**
 * @summary MBMSServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSServiceType  ::=  ENUMERATED {
 *    mULTICAST    ( 0 ),
 *    bROADCAST    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSServiceType = _enum_for_MBMSServiceType;

/**
 * @summary MBMSServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSServiceType  ::=  ENUMERATED {
 *    mULTICAST    ( 0 ),
 *    bROADCAST    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MBMSServiceType = _enum_for_MBMSServiceType;

/**
 * @summary MBMSServiceType_mULTICAST
 * @constant
 * @type {number}
 */
export
const MBMSServiceType_mULTICAST: MBMSServiceType = MBMSServiceType.mULTICAST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mULTICAST
 * @constant
 * @type {number}
 */
export
const mULTICAST: MBMSServiceType = MBMSServiceType.mULTICAST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSServiceType_bROADCAST
 * @constant
 * @type {number}
 */
export
const MBMSServiceType_bROADCAST: MBMSServiceType = MBMSServiceType.bROADCAST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bROADCAST
 * @constant
 * @type {number}
 */
export
const bROADCAST: MBMSServiceType = MBMSServiceType.bROADCAST; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MBMSServiceType: $.ASN1Decoder<MBMSServiceType> = $._decodeEnumerated;

export
const _encode_MBMSServiceType: $.ASN1Encoder<MBMSServiceType> = $._encodeEnumerated;

/* eslint-enable */
