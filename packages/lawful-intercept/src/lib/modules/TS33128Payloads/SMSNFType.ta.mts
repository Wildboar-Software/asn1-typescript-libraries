/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSNFType  ::=  ENUMERATED
 * {
 *     sMSGMSC(1),
 *     iWMSC(2),
 *     sMSRouter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSNFType {
    sMSGMSC = 1,
    iWMSC = 2,
    sMSRouter = 3,
}

/**
 * @summary SMSNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSNFType  ::=  ENUMERATED
 * {
 *     sMSGMSC(1),
 *     iWMSC(2),
 *     sMSRouter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSNFType = _enum_for_SMSNFType;

/**
 * @summary SMSNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSNFType  ::=  ENUMERATED
 * {
 *     sMSGMSC(1),
 *     iWMSC(2),
 *     sMSRouter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSNFType = _enum_for_SMSNFType;

/**
 * @summary SMSNFType_sMSGMSC
 * @constant
 * @type {number}
 */
export
const SMSNFType_sMSGMSC: SMSNFType = SMSNFType.sMSGMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSGMSC
 * @constant
 * @type {number}
 */
export
const sMSGMSC: SMSNFType = SMSNFType.sMSGMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSNFType_iWMSC
 * @constant
 * @type {number}
 */
export
const SMSNFType_iWMSC: SMSNFType = SMSNFType.iWMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iWMSC
 * @constant
 * @type {number}
 */
export
const iWMSC: SMSNFType = SMSNFType.iWMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSNFType_sMSRouter
 * @constant
 * @type {number}
 */
export
const SMSNFType_sMSRouter: SMSNFType = SMSNFType.sMSRouter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSRouter
 * @constant
 * @type {number}
 */
export
const sMSRouter: SMSNFType = SMSNFType.sMSRouter; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_SMSNFType: $.ASN1Decoder<SMSNFType> = $._decodeEnumerated;

export const _encode_SMSNFType: $.ASN1Encoder<SMSNFType> = $._encodeEnumerated;


/* eslint-enable */
