/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ICE_type {
    ggsn = 1,
    pDN_GW = 2,
    aGW = 3,
    trGW = 4,
    mGW = 5,
    other = 6,
    unknown = 7,
    mRF = 8,
    lmISF = 9,
    sGW = 10,
}

/**
 * @summary ICE_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ICE-type  ::=  ENUMERATED {
 *     ggsn            (1),
 *     pDN-GW          (2),
 *     aGW             (3),
 *     trGW            (4),
 *     mGW                (5),
 *     other            (6),
 *     unknown            (7),
 *     ... ,
 *     mRF                (8),
 *     lmISF            (9),
 *     sGW                (10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ICE_type = _enum_for_ICE_type | ENUMERATED;

/**
 * @summary ICE_type_ggsn
 * @constant
 * @type {number}
 */
export
const ICE_type_ggsn: ICE_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ggsn
 * @constant
 * @type {number}
 */
export
const ggsn: ICE_type = ICE_type_ggsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_pDN_GW
 * @constant
 * @type {number}
 */
export
const ICE_type_pDN_GW: ICE_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDN_GW
 * @constant
 * @type {number}
 */
export
const pDN_GW: ICE_type = ICE_type_pDN_GW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_aGW
 * @constant
 * @type {number}
 */
export
const ICE_type_aGW: ICE_type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aGW
 * @constant
 * @type {number}
 */
export
const aGW: ICE_type = ICE_type_aGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_trGW
 * @constant
 * @type {number}
 */
export
const ICE_type_trGW: ICE_type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trGW
 * @constant
 * @type {number}
 */
export
const trGW: ICE_type = ICE_type_trGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_mGW
 * @constant
 * @type {number}
 */
export
const ICE_type_mGW: ICE_type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mGW
 * @constant
 * @type {number}
 */
export
const mGW: ICE_type = ICE_type_mGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_other
 * @constant
 * @type {number}
 */
export
const ICE_type_other: ICE_type = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: ICE_type = ICE_type_other; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_unknown
 * @constant
 * @type {number}
 */
export
const ICE_type_unknown: ICE_type = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: ICE_type = ICE_type_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_mRF
 * @constant
 * @type {number}
 */
export
const ICE_type_mRF: ICE_type = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mRF
 * @constant
 * @type {number}
 */
export
const mRF: ICE_type = ICE_type_mRF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_lmISF
 * @constant
 * @type {number}
 */
export
const ICE_type_lmISF: ICE_type = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lmISF
 * @constant
 * @type {number}
 */
export
const lmISF: ICE_type = ICE_type_lmISF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_sGW
 * @constant
 * @type {number}
 */
export
const ICE_type_sGW: ICE_type = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGW
 * @constant
 * @type {number}
 */
export
const sGW: ICE_type = ICE_type_sGW; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ICE_type: $.ASN1Decoder<ICE_type> = $._decodeEnumerated;
export const _encode_ICE_type: $.ASN1Encoder<ICE_type> = $._encodeEnumerated;


/* eslint-enable */
