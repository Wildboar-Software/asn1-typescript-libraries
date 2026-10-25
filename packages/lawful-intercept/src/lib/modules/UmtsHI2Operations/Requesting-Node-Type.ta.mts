/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Requesting_Node_Type {
    mSC = 1,
    sMS_Centre = 2,
    gMLC = 3,
    mME = 4,
    sGSN = 5,
}

/**
 * @summary Requesting_Node_Type
 * @description
 * 
 * Kind of node that requested location information from the HLR or HSS.
 * Conditional on a location-information-request REPORT for an MSC, SMS Centre,
 * GMLC, MME, or SGSN. Table 6.9G writes "GMSC" in that sentence; the mapping in
 * table 6.2 and the named number say MSC.
 * 
 * Also listed for IMS HSS location-information requests (table 7.2). 3GPP TS
 * 33.108, clause 6.5.1.1, table 6.9G, and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Requesting-Node-Type  ::=  ENUMERATED
 * {
 *     mSC                (1),
 *     sMS-Centre        (2),
 *     gMLC            (3),
 *     mME                (4),
 *     sGSN            (5),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Requesting_Node_Type = _enum_for_Requesting_Node_Type | ENUMERATED;

/**
 * @summary Requesting_Node_Type_mSC
 * @description
 * 
 * The node that requested location information is an MSC. Conditional on a
 * location-information-request REPORT. Table 6.2 says MSC; table 6.9G writes
 * GMSC in the same condition. 3GPP TS 33.108, clause 6.5.1.1, table 6.9G.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_mSC: _enum_for_Requesting_Node_Type.mSC = _enum_for_Requesting_Node_Type.mSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSC
 * @description
 * 
 * Requesting node is an MSC (3GPP TS 33.108, table 6.9G).
 * 
 * @constant
 * @type {number}
 */
export
const mSC: _enum_for_Requesting_Node_Type.mSC = Requesting_Node_Type_mSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_sMS_Centre
 * @description
 * 
 * The node that requested location information is an SMS Centre. Conditional on
 * a location-information-request REPORT. 3GPP TS 33.108, clause 6.5.1.1, table
 * 6.9G.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_sMS_Centre: _enum_for_Requesting_Node_Type.sMS_Centre = _enum_for_Requesting_Node_Type.sMS_Centre; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS_Centre
 * @description
 * 
 * Requesting node is an SMS Centre (3GPP TS 33.108, table 6.9G).
 * 
 * @constant
 * @type {number}
 */
export
const sMS_Centre: _enum_for_Requesting_Node_Type.sMS_Centre = Requesting_Node_Type_sMS_Centre; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_gMLC
 * @description
 * 
 * The node that requested location information is a GMLC. Conditional on a
 * location-information-request REPORT. 3GPP TS 33.108, clause 6.5.1.1, table
 * 6.9G.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_gMLC: _enum_for_Requesting_Node_Type.gMLC = _enum_for_Requesting_Node_Type.gMLC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gMLC
 * @description
 * 
 * Requesting node is a GMLC (3GPP TS 33.108, table 6.9G).
 * 
 * @constant
 * @type {number}
 */
export
const gMLC: _enum_for_Requesting_Node_Type.gMLC = Requesting_Node_Type_gMLC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_mME
 * @description
 * 
 * The node that requested location information is an MME. Conditional on a
 * location-information-request REPORT. 3GPP TS 33.108, clause 6.5.1.1, table
 * 6.9G.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_mME: _enum_for_Requesting_Node_Type.mME = _enum_for_Requesting_Node_Type.mME; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @description
 * 
 * Requesting node is an MME (3GPP TS 33.108, table 6.9G).
 * 
 * @constant
 * @type {number}
 */
export
const mME: _enum_for_Requesting_Node_Type.mME = Requesting_Node_Type_mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_sGSN
 * @description
 * 
 * The node that requested location information is an SGSN. Conditional on a
 * location-information-request REPORT. 3GPP TS 33.108, clause 6.5.1.1, table
 * 6.9G.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_sGSN: _enum_for_Requesting_Node_Type.sGSN = _enum_for_Requesting_Node_Type.sGSN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @description
 * 
 * Requesting node is an SGSN (3GPP TS 33.108, table 6.9G).
 * 
 * @constant
 * @type {number}
 */
export
const sGSN: _enum_for_Requesting_Node_Type.sGSN = Requesting_Node_Type_sGSN; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Requesting_Node_Type: $.ASN1Decoder<Requesting_Node_Type> = $._decodeEnumerated;
export const _encode_Requesting_Node_Type: $.ASN1Encoder<Requesting_Node_Type> = $._encodeEnumerated;


/* eslint-enable */
