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
 * Where the EPS T-PDU was intercepted. Defined values are SGSN, GGSN, S-GW,
 * PDN-GW, colocated SAE gateways, and ePDG. S-GW, PDN-GW, colocated SAE
 * gateways, and ePDG are extensions.
 * 
 * 3GPP TS 33.108, annex B.10 and annex C.1.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * @description
 * 
 * T-PDU intercepted at the SGSN. 3GPP TS 33.108, annex B.10.
 * @constant
 * @type {number}
 */
export
const ICE_type_sgsn: ICE_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn
 * @description
 * 
 * Intercepted at the SGSN. Annex B.10.
 * @constant
 * @type {number}
 */
export
const sgsn: ICE_type = ICE_type_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_ggsn
 * @description
 * 
 * T-PDU intercepted at the GGSN. 3GPP TS 33.108, annex B.10.
 * @constant
 * @type {number}
 */
export
const ICE_type_ggsn: ICE_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ggsn
 * @description
 * 
 * Intercepted at the GGSN. Annex B.10.
 * @constant
 * @type {number}
 */
export
const ggsn: ICE_type = ICE_type_ggsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_s_GW
 * @description
 * 
 * T-PDU intercepted at the S-GW. 3GPP TS 33.108, annex B.10.
 * @constant
 * @type {number}
 */
export
const ICE_type_s_GW: ICE_type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary s_GW
 * @description
 * 
 * Intercepted at the S-GW. Annex B.10.
 * @constant
 * @type {number}
 */
export
const s_GW: ICE_type = ICE_type_s_GW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_pDN_GW
 * @description
 * 
 * T-PDU intercepted at the PDN-GW. Clause 10.7: PDN-GW CC interception is a
 * national option, except where the PDN-GW is the only ICE. 3GPP TS 33.108,
 * annex B.10.
 * @constant
 * @type {number}
 */
export
const ICE_type_pDN_GW: ICE_type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDN_GW
 * @description
 * 
 * Intercepted at the PDN-GW. Annex B.10.
 * @constant
 * @type {number}
 */
export
const pDN_GW: ICE_type = ICE_type_pDN_GW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_colocated_SAE_GWs
 * @description
 * 
 * T-PDU intercepted at colocated SAE gateways. 3GPP TS 33.108, annex B.10.
 * @constant
 * @type {number}
 */
export
const ICE_type_colocated_SAE_GWs: ICE_type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary colocated_SAE_GWs
 * @description
 * 
 * Intercepted at colocated SAE gateways. Annex B.10.
 * @constant
 * @type {number}
 */
export
const colocated_SAE_GWs: ICE_type = ICE_type_colocated_SAE_GWs; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_ePDG
 * @description
 * 
 * T-PDU intercepted at the ePDG. 3GPP TS 33.108, annex B.10.
 * @constant
 * @type {number}
 */
export
const ICE_type_ePDG: ICE_type = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePDG
 * @description
 * 
 * Intercepted at the ePDG. Annex B.10.
 * @constant
 * @type {number}
 */
export
const ePDG: ICE_type = ICE_type_ePDG; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ICE_type: $.ASN1Decoder<ICE_type> = $._decodeEnumerated;
export const _encode_ICE_type: $.ASN1Encoder<ICE_type> = $._encodeEnumerated;


/* eslint-enable */
