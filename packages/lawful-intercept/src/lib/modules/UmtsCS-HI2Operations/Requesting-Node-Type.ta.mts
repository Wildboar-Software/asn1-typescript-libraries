/* eslint-disable */
import {
    ENUMERATED,
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
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_mSC: Requesting_Node_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSC
 * @constant
 * @type {number}
 */
export
const mSC: Requesting_Node_Type = Requesting_Node_Type_mSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_sMS_Centre
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_sMS_Centre: Requesting_Node_Type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS_Centre
 * @constant
 * @type {number}
 */
export
const sMS_Centre: Requesting_Node_Type = Requesting_Node_Type_sMS_Centre; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_gMLC
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_gMLC: Requesting_Node_Type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gMLC
 * @constant
 * @type {number}
 */
export
const gMLC: Requesting_Node_Type = Requesting_Node_Type_gMLC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_mME
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_mME: Requesting_Node_Type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @constant
 * @type {number}
 */
export
const mME: Requesting_Node_Type = Requesting_Node_Type_mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Requesting_Node_Type_sGSN
 * @constant
 * @type {number}
 */
export
const Requesting_Node_Type_sGSN: Requesting_Node_Type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGSN
 * @constant
 * @type {number}
 */
export
const sGSN: Requesting_Node_Type = Requesting_Node_Type_sGSN; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_Requesting_Node_Type: $.ASN1Decoder<Requesting_Node_Type> = $._decodeEnumerated;

export const _encode_Requesting_Node_Type: $.ASN1Encoder<Requesting_Node_Type> = $._encodeEnumerated;

/* eslint-enable */
