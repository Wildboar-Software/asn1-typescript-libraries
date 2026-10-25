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
 * Node that asked the HLR for location information. Table 5.5E lists GMSC, SMS
 * centre, GMLC, MME, and SGSN. There is no separate GMSC value; the
 * specification does not say whether a GMSC is reported as the MSC value. 3GPP
 * TS 33.108, table 5.5E and annex B.3a.
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
 * MSC. Table 5.5E names GMSC and does not name MSC. The specification does not
 * say that this value covers a GMSC. 3GPP TS 33.108, annex B.3a and table 5.5E.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_mSC = _enum_for_Requesting_Node_Type.mSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSC
 * @description
 * 
 * MSC. GMSC is not a separate value. 3GPP TS 33.108, table 5.5E.
 * 
 * @constant
 * @type {number}
 */
export
const mSC = Requesting_Node_Type_mSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_sMS_Centre
 * @description
 * 
 * SMS centre. 3GPP TS 33.108, table 5.5E and annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_sMS_Centre = _enum_for_Requesting_Node_Type.sMS_Centre; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS_Centre
 * @description
 * 
 * SMS centre. 3GPP TS 33.108, table 5.5E.
 * 
 * @constant
 * @type {number}
 */
export
const sMS_Centre = Requesting_Node_Type_sMS_Centre; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_gMLC
 * @description
 * 
 * Gateway mobile location centre. 3GPP TS 33.108, table 5.5E and annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_gMLC = _enum_for_Requesting_Node_Type.gMLC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gMLC
 * @description
 * 
 * GMLC. 3GPP TS 33.108, table 5.5E.
 * 
 * @constant
 * @type {number}
 */
export
const gMLC = Requesting_Node_Type_gMLC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_mME
 * @description
 * 
 * MME. 3GPP TS 33.108, table 5.5E and annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_mME = _enum_for_Requesting_Node_Type.mME; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @description
 * 
 * MME. 3GPP TS 33.108, table 5.5E.
 * 
 * @constant
 * @type {number}
 */
export
const mME = Requesting_Node_Type_mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_sGSN
 * @description
 * 
 * SGSN. 3GPP TS 33.108, table 5.5E and annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_sGSN = _enum_for_Requesting_Node_Type.sGSN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @description
 * 
 * SGSN. 3GPP TS 33.108, table 5.5E.
 * 
 * @constant
 * @type {number}
 */
export
const sGSN = Requesting_Node_Type_sGSN; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Requesting_Node_Type: $.ASN1Decoder<Requesting_Node_Type> = $._decodeEnumerated;
export const _encode_Requesting_Node_Type: $.ASN1Encoder<Requesting_Node_Type> = $._encodeEnumerated;


/* eslint-enable */
