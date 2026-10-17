/* eslint-disable */
import {
    ENUMERATED
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
 * Kind of node that requested location or subscriber data from the HSS or HLR.
 * Conditional on the location information request REPORT (table 10.5.1.1.20):
 * derive it when possible from the Diameter Origin-Host and Origin-Realm of the
 * requesting node or proxy. The table gives an MSC server, an SMS centre, a
 * GMLC, an MME, and an SGSN. Clause 6 table 6.2 lists the same kinds for the
 * HLR.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * The requesting node is an MSC or MSC server. Conditional on the location
 * information request, derived when possible from Diameter Origin-Host and
 * Origin-Realm (table 10.5.1.1.20). Clause 6 table 6.2 lists the same kind for
 * the HLR.
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_mSC: Requesting_Node_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSC
 * @description
 * 
 * Requesting node is an MSC (table 10.5.1.1.20).
 * @constant
 * @type {number}
 */
export
const mSC: Requesting_Node_Type = Requesting_Node_Type_mSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_sMS_Centre
 * @description
 * 
 * The requesting node is an SMS centre (table 10.5.1.1.20 and clause 6 table
 * 6.2).
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_sMS_Centre: Requesting_Node_Type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS_Centre
 * @description
 * 
 * Requesting node is an SMS centre (table 10.5.1.1.20).
 * @constant
 * @type {number}
 */
export
const sMS_Centre: Requesting_Node_Type = Requesting_Node_Type_sMS_Centre; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_gMLC
 * @description
 * 
 * The requesting node is a GMLC (table 10.5.1.1.20 and clause 6 table 6.2).
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_gMLC: Requesting_Node_Type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gMLC
 * @description
 * 
 * Requesting node is a GMLC (table 10.5.1.1.20).
 * @constant
 * @type {number}
 */
export
const gMLC: Requesting_Node_Type = Requesting_Node_Type_gMLC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_mME
 * @description
 * 
 * The requesting node is an MME (table 10.5.1.1.20 and clause 6 table 6.2).
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_mME: Requesting_Node_Type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @description
 * 
 * Requesting node is an MME (table 10.5.1.1.20).
 * @constant
 * @type {number}
 */
export
const mME: Requesting_Node_Type = Requesting_Node_Type_mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_sGSN
 * @description
 * 
 * The requesting node is an SGSN (table 10.5.1.1.20 and clause 6 table 6.2).
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_sGSN: Requesting_Node_Type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @description
 * 
 * Requesting node is an SGSN (table 10.5.1.1.20).
 * @constant
 * @type {number}
 */
export
const sGSN: Requesting_Node_Type = Requesting_Node_Type_sGSN; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Requesting_Node_Type: $.ASN1Decoder<Requesting_Node_Type> = $._decodeEnumerated;
export const _encode_Requesting_Node_Type: $.ASN1Encoder<Requesting_Node_Type> = $._encodeEnumerated;


/* eslint-enable */
