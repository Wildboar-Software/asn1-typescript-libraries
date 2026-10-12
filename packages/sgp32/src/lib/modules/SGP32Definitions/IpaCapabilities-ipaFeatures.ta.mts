/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaCapabilities_ipaFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaCapabilities-ipaFeatures ::= BIT STRING {
 *     directRspServerCommunication(0),
 *     indirectRspServerCommunication(1),
 *     eimDownloadDataHandling(2),
 *     eimCtxParams1Generation(3),
 *     eimProfileMetadataVerification(4),
 *     minimizeEsipaBytes(5)
 * }
 * ```
 */
export
type IpaCapabilities_ipaFeatures = BIT_STRING;

/**
 * @summary IpaCapabilities_ipaFeatures_directRspServerCommunication
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_directRspServerCommunication: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary directRspServerCommunication
 * @constant
 */
export
const directRspServerCommunication: number = IpaCapabilities_ipaFeatures_directRspServerCommunication; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_indirectRspServerCommunication
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_indirectRspServerCommunication: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary indirectRspServerCommunication
 * @constant
 */
export
const indirectRspServerCommunication: number = IpaCapabilities_ipaFeatures_indirectRspServerCommunication; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimDownloadDataHandling
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimDownloadDataHandling: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary eimDownloadDataHandling
 * @constant
 */
export
const eimDownloadDataHandling: number = IpaCapabilities_ipaFeatures_eimDownloadDataHandling; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimCtxParams1Generation
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimCtxParams1Generation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary eimCtxParams1Generation
 * @constant
 */
export
const eimCtxParams1Generation: number = IpaCapabilities_ipaFeatures_eimCtxParams1Generation; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimProfileMetadataVerification
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimProfileMetadataVerification: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary eimProfileMetadataVerification
 * @constant
 */
export
const eimProfileMetadataVerification: number = IpaCapabilities_ipaFeatures_eimProfileMetadataVerification; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_minimizeEsipaBytes
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_minimizeEsipaBytes: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary minimizeEsipaBytes
 * @constant
 */
export
const minimizeEsipaBytes: number = IpaCapabilities_ipaFeatures_minimizeEsipaBytes; /* SHORT_NAMED_BIT */
export const _decode_IpaCapabilities_ipaFeatures: $.ASN1Decoder<IpaCapabilities_ipaFeatures> = $._decodeBitString;
export const _encode_IpaCapabilities_ipaFeatures: $.ASN1Encoder<IpaCapabilities_ipaFeatures> = $._encodeBitString;


/* eslint-enable */
