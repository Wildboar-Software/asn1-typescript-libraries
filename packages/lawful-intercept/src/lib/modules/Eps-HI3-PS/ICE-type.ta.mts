/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_ICE_type {
    sgsn = 1,
    ggsn = 2,
    s_GW = 3,
    pDN_GW = 4,
    colocated_SAE_GWs = 5,
    ePDG = 6,
}

/**
 * @summary ICE_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ICE-type  ::=  ENUMERATED
 * {
 *     sgsn            (1),
 *     ggsn            (2),
 *     ...,
 *     s-GW            (3),
 *     pDN-GW          (4),
 *     colocated-SAE-GWs (5) ,
 *     ePDG            (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ICE_type = _enum_for_ICE_type | ENUMERATED;

/**
 * @summary ICE_type_sgsn
 * @constant
 * @type {number}
 */
export
const ICE_type_sgsn: ICE_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn
 * @constant
 * @type {number}
 */
export
const sgsn: ICE_type = ICE_type_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_ggsn
 * @constant
 * @type {number}
 */
export
const ICE_type_ggsn: ICE_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ggsn
 * @constant
 * @type {number}
 */
export
const ggsn: ICE_type = ICE_type_ggsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_s_GW
 * @constant
 * @type {number}
 */
export
const ICE_type_s_GW: ICE_type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary s_GW
 * @constant
 * @type {number}
 */
export
const s_GW: ICE_type = ICE_type_s_GW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_pDN_GW
 * @constant
 * @type {number}
 */
export
const ICE_type_pDN_GW: ICE_type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDN_GW
 * @constant
 * @type {number}
 */
export
const pDN_GW: ICE_type = ICE_type_pDN_GW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_colocated_SAE_GWs
 * @constant
 * @type {number}
 */
export
const ICE_type_colocated_SAE_GWs: ICE_type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary colocated_SAE_GWs
 * @constant
 * @type {number}
 */
export
const colocated_SAE_GWs: ICE_type = ICE_type_colocated_SAE_GWs; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_ePDG
 * @constant
 * @type {number}
 */
export
const ICE_type_ePDG: ICE_type = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePDG
 * @constant
 * @type {number}
 */
export
const ePDG: ICE_type = ICE_type_ePDG; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_ICE_type: $.ASN1Decoder<ICE_type> = $._decodeEnumerated;

export const _encode_ICE_type: $.ASN1Encoder<ICE_type> = $._encodeEnumerated;

/* eslint-enable */
