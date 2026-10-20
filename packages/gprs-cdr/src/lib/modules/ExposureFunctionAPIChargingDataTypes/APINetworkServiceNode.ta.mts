/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APINetworkServiceNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APINetworkServiceNode  ::=  ENUMERATED {
 *    mME         ( 0 ),
 *    sGSN        ( 1 ),
 *    hSS         ( 2 ),
 *    pCRF        ( 3 ),
 *    pFDF        ( 4 ),
 *    bMSC        ( 5 ),
 *    cCSCF       ( 6 ),
 *    rCAF        ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_APINetworkServiceNode {
    mME = 0,
    sGSN = 1,
    hSS = 2,
    pCRF = 3,
    pFDF = 4,
    bMSC = 5,
    cCSCF = 6,
    rCAF = 7,
}

/**
 * @summary APINetworkServiceNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APINetworkServiceNode  ::=  ENUMERATED {
 *    mME         ( 0 ),
 *    sGSN        ( 1 ),
 *    hSS         ( 2 ),
 *    pCRF        ( 3 ),
 *    pFDF        ( 4 ),
 *    bMSC        ( 5 ),
 *    cCSCF       ( 6 ),
 *    rCAF        ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type APINetworkServiceNode = _enum_for_APINetworkServiceNode;

/**
 * @summary APINetworkServiceNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APINetworkServiceNode  ::=  ENUMERATED {
 *    mME         ( 0 ),
 *    sGSN        ( 1 ),
 *    hSS         ( 2 ),
 *    pCRF        ( 3 ),
 *    pFDF        ( 4 ),
 *    bMSC        ( 5 ),
 *    cCSCF       ( 6 ),
 *    rCAF        ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const APINetworkServiceNode = _enum_for_APINetworkServiceNode;

/**
 * @summary APINetworkServiceNode_mME
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_mME: APINetworkServiceNode = APINetworkServiceNode.mME; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @constant
 * @type {number}
 */
export
const mME: APINetworkServiceNode = APINetworkServiceNode.mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_sGSN
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_sGSN: APINetworkServiceNode = APINetworkServiceNode.sGSN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @constant
 * @type {number}
 */
export
const sGSN: APINetworkServiceNode = APINetworkServiceNode.sGSN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_hSS
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_hSS: APINetworkServiceNode = APINetworkServiceNode.hSS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS
 * @constant
 * @type {number}
 */
export
const hSS: APINetworkServiceNode = APINetworkServiceNode.hSS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_pCRF
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_pCRF: APINetworkServiceNode = APINetworkServiceNode.pCRF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pCRF
 * @constant
 * @type {number}
 */
export
const pCRF: APINetworkServiceNode = APINetworkServiceNode.pCRF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_pFDF
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_pFDF: APINetworkServiceNode = APINetworkServiceNode.pFDF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pFDF
 * @constant
 * @type {number}
 */
export
const pFDF: APINetworkServiceNode = APINetworkServiceNode.pFDF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_bMSC
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_bMSC: APINetworkServiceNode = APINetworkServiceNode.bMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bMSC
 * @constant
 * @type {number}
 */
export
const bMSC: APINetworkServiceNode = APINetworkServiceNode.bMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_cCSCF
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_cCSCF: APINetworkServiceNode = APINetworkServiceNode.cCSCF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cCSCF
 * @constant
 * @type {number}
 */
export
const cCSCF: APINetworkServiceNode = APINetworkServiceNode.cCSCF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_rCAF
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_rCAF: APINetworkServiceNode = APINetworkServiceNode.rCAF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCAF
 * @constant
 * @type {number}
 */
export
const rCAF: APINetworkServiceNode = APINetworkServiceNode.rCAF; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_APINetworkServiceNode: $.ASN1Decoder<APINetworkServiceNode> = $._decodeEnumerated;

export
const _encode_APINetworkServiceNode: $.ASN1Encoder<APINetworkServiceNode> = $._encodeEnumerated;

/* eslint-enable */
