/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ICE_type {
    sgsn = 1,
    ggsn = 2,
}

/**
 * @summary ICE_type
 * @description
 * 
 * Where the version-1 T-PDU was intercepted. This module defines SGSN and GGSN
 * only. Needed only when those nodes share one delivery or mediation function.
 * Version 0 ICE coding differs: 0 is GGSN and 1 is SGSN (annex C.1.2).
 * 
 * 3GPP TS 33.108, annex C.1.3 and annex B.4.
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
 *     ...
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
 * T-PDU intercepted at the SGSN. ASN.1 value 1 on ULIC version 1. Not the
 * version-0 ICE bit (that bit uses 1 for SGSN and 0 for GGSN). 3GPP TS 33.108,
 * annex B.4 and annex C.1.2.
 * @constant
 * @type {number}
 */
export
const ICE_type_sgsn: ICE_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn
 * @description
 * 
 * Intercepted at the SGSN (version 1). Annex B.4.
 * @constant
 * @type {number}
 */
export
const sgsn: ICE_type = ICE_type_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_ggsn
 * @description
 * 
 * T-PDU intercepted at the GGSN. ASN.1 value 2 on ULIC version 1. Version 0
 * uses ICE bit 0 for GGSN. Clause 6.7: GGSN CC interception is a national
 * option, and is required with 3G direct tunnel. 3GPP TS 33.108, annex B.4.
 * @constant
 * @type {number}
 */
export
const ICE_type_ggsn: ICE_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ggsn
 * @description
 * 
 * Intercepted at the GGSN (version 1). Annex B.4.
 * @constant
 * @type {number}
 */
export
const ggsn: ICE_type = ICE_type_ggsn; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ICE_type: $.ASN1Decoder<ICE_type> = $._decodeEnumerated;
export const _encode_ICE_type: $.ASN1Encoder<ICE_type> = $._encodeEnumerated;


/* eslint-enable */
