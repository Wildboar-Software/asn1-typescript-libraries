/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APINetworkServiceNode
 * @description
 *
 * Network element that triggers an API notification toward the
 * SCEF, as defined in TS 23.682. Category Oc on the EA-SCE-CDR.
 * Table 6.1.3.2.1 gives SGSN and RCAF as examples.
 *
 * The values are `mME` (MME), `sGSN` (SGSN), `hSS` (HSS),
 * `pCRF` (PCRF), `pFDF` (PFDF), `bMSC` (BM-SC), `cCSCF` (CSCF)
 * and `rCAF` (RCAF). SGSN is the Serving GPRS Support Node and
 * RCAF is the RAN Congestion Awareness Function (clause 3.3).
 * TS 32.254 does not state which T8 procedure uses which value.
 *
 * 3GPP TS 32.254 V20.0.0 clause 3.3, table 6.1.3.2.1 and
 * clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.6.
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
 * Network element that triggers an API notification toward the
 * SCEF, as defined in TS 23.682. Category Oc on the EA-SCE-CDR.
 * Table 6.1.3.2.1 gives SGSN and RCAF as examples.
 *
 * The values are `mME` (MME), `sGSN` (SGSN), `hSS` (HSS),
 * `pCRF` (PCRF), `pFDF` (PFDF), `bMSC` (BM-SC), `cCSCF` (CSCF)
 * and `rCAF` (RCAF). SGSN is the Serving GPRS Support Node and
 * RCAF is the RAN Congestion Awareness Function (clause 3.3).
 * TS 32.254 does not state which T8 procedure uses which value.
 *
 * 3GPP TS 32.254 V20.0.0 clause 3.3, table 6.1.3.2.1 and
 * clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.6.
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
 * Network element that triggers an API notification toward the
 * SCEF, as defined in TS 23.682. Category Oc on the EA-SCE-CDR.
 * Table 6.1.3.2.1 gives SGSN and RCAF as examples.
 *
 * The values are `mME` (MME), `sGSN` (SGSN), `hSS` (HSS),
 * `pCRF` (PCRF), `pFDF` (PFDF), `bMSC` (BM-SC), `cCSCF` (CSCF)
 * and `rCAF` (RCAF). SGSN is the Serving GPRS Support Node and
 * RCAF is the RAN Congestion Awareness Function (clause 3.3).
 * TS 32.254 does not state which T8 procedure uses which value.
 *
 * 3GPP TS 32.254 V20.0.0 clause 3.3, table 6.1.3.2.1 and
 * clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.6.
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
 * @description
 *
 * MME. TS 32.254 does not state which T8 procedure this value
 * covers.
 *
 * 3GPP TS 32.254 V20.0.0 clause 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_mME = APINetworkServiceNode.mME; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @description
 *
 * MME. See {@link APINetworkServiceNode_mME}.
 *
 * @constant
 * @type {number}
 */
export
const mME = APINetworkServiceNode.mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_sGSN
 * @description
 *
 * SGSN (Serving GPRS Support Node). The CDR table gives the SGSN
 * as an example of a node that triggers an API notification.
 * TS 32.254 does not state which T8 procedure this value covers.
 *
 * 3GPP TS 32.254 V20.0.0 clause 3.3 and table 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_sGSN = APINetworkServiceNode.sGSN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @description
 *
 * SGSN. See {@link APINetworkServiceNode_sGSN}.
 *
 * @constant
 * @type {number}
 */
export
const sGSN = APINetworkServiceNode.sGSN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_hSS
 * @description
 *
 * HSS. TS 32.254 does not state which T8 procedure this value
 * covers.
 *
 * 3GPP TS 32.254 V20.0.0 clause 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_hSS = APINetworkServiceNode.hSS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS
 * @description
 *
 * HSS. See {@link APINetworkServiceNode_hSS}.
 *
 * @constant
 * @type {number}
 */
export
const hSS = APINetworkServiceNode.hSS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_pCRF
 * @description
 *
 * PCRF. TS 32.254 does not state which T8 procedure this value
 * covers.
 *
 * 3GPP TS 32.254 V20.0.0 clause 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_pCRF = APINetworkServiceNode.pCRF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pCRF
 * @description
 *
 * PCRF. See {@link APINetworkServiceNode_pCRF}.
 *
 * @constant
 * @type {number}
 */
export
const pCRF = APINetworkServiceNode.pCRF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_pFDF
 * @description
 *
 * PFDF. TS 32.254 does not state which T8 procedure this value
 * covers.
 *
 * 3GPP TS 32.254 V20.0.0 clause 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_pFDF = APINetworkServiceNode.pFDF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pFDF
 * @description
 *
 * PFDF. See {@link APINetworkServiceNode_pFDF}.
 *
 * @constant
 * @type {number}
 */
export
const pFDF = APINetworkServiceNode.pFDF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_bMSC
 * @description
 *
 * BM-SC. TS 32.254 does not state which T8 procedure this value
 * covers.
 *
 * 3GPP TS 32.254 V20.0.0 clause 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_bMSC = APINetworkServiceNode.bMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bMSC
 * @description
 *
 * BM-SC. See {@link APINetworkServiceNode_bMSC}.
 *
 * @constant
 * @type {number}
 */
export
const bMSC = APINetworkServiceNode.bMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_cCSCF
 * @description
 *
 * CSCF. TS 32.254 does not state which T8 procedure this value
 * covers.
 *
 * 3GPP TS 32.254 V20.0.0 clause 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_cCSCF = APINetworkServiceNode.cCSCF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cCSCF
 * @description
 *
 * CSCF. See {@link APINetworkServiceNode_cCSCF}.
 *
 * @constant
 * @type {number}
 */
export
const cCSCF = APINetworkServiceNode.cCSCF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary APINetworkServiceNode_rCAF
 * @description
 *
 * RCAF (RAN Congestion Awareness Function). The CDR table gives
 * the RCAF as an example of a node that triggers an API
 * notification. TS 32.254 does not state which T8 procedure this
 * value covers.
 *
 * 3GPP TS 32.254 V20.0.0 clause 3.3 and table 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const APINetworkServiceNode_rCAF = APINetworkServiceNode.rCAF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCAF
 * @description
 *
 * RCAF. See {@link APINetworkServiceNode_rCAF}.
 *
 * @constant
 * @type {number}
 */
export
const rCAF = APINetworkServiceNode.rCAF; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_APINetworkServiceNode: $.ASN1Decoder<APINetworkServiceNode> = $._decodeEnumerated;

export
const _encode_APINetworkServiceNode: $.ASN1Encoder<APINetworkServiceNode> = $._encodeEnumerated;

/* eslint-enable */
