/* eslint-disable */
import {
    type ENUMERATED
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
 * Intercepting control element that produced the VoIP CC, when known at the
 * delivery or mediation function. Clause 12.1.4 names the CC intercept
 * functions. `mRF`, `lmISF`, and `sGW` are extensions; annex K.2's explicit
 * list stops at `unknown`.
 * 
 * 3GPP TS 33.108, annex K.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * @description
 * 
 * VoIP CC intercepted at the GGSN. 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const ICE_type_ggsn = _enum_for_ICE_type.ggsn satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ggsn
 * @description
 * 
 * Intercepted at the GGSN. Annex K.2.
 * @constant
 * @type {number}
 */
export
const ggsn = ICE_type_ggsn satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_pDN_GW
 * @description
 * 
 * VoIP CC intercepted at the PDN-GW. 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const ICE_type_pDN_GW = _enum_for_ICE_type.pDN_GW satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDN_GW
 * @description
 * 
 * Intercepted at the PDN-GW. Annex K.2.
 * @constant
 * @type {number}
 */
export
const pDN_GW = ICE_type_pDN_GW satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_aGW
 * @description
 * 
 * VoIP CC intercepted at the IMS-AGW. 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const ICE_type_aGW = _enum_for_ICE_type.aGW satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aGW
 * @description
 * 
 * Intercepted at the IMS-AGW. Annex K.2.
 * @constant
 * @type {number}
 */
export
const aGW = ICE_type_aGW satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_trGW
 * @description
 * 
 * VoIP CC intercepted at the TrGW. 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const ICE_type_trGW = _enum_for_ICE_type.trGW satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trGW
 * @description
 * 
 * Intercepted at the TrGW. Annex K.2.
 * @constant
 * @type {number}
 */
export
const trGW = ICE_type_trGW satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_mGW
 * @description
 * 
 * VoIP CC intercepted at the IM-MGW. 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const ICE_type_mGW = _enum_for_ICE_type.mGW satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mGW
 * @description
 * 
 * Intercepted at the IM-MGW. Annex K.2.
 * @constant
 * @type {number}
 */
export
const mGW = ICE_type_mGW satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_other
 * @description
 * 
 * VoIP CC intercepted at a media node other than the nodes named in annex K.2.
 * 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const ICE_type_other = _enum_for_ICE_type.other satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @description
 * 
 * Intercepted at another media node. Annex K.2.
 * @constant
 * @type {number}
 */
export
const other = ICE_type_other satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_unknown
 * @description
 * 
 * The media node that intercepted the VoIP CC is not known. 3GPP TS 33.108,
 * annex K.2.
 * @constant
 * @type {number}
 */
export
const ICE_type_unknown = _enum_for_ICE_type.unknown satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Intercepting media node is not known. Annex K.2.
 * @constant
 * @type {number}
 */
export
const unknown = ICE_type_unknown satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_mRF
 * @description
 * 
 * VoIP CC intercepted at the MRF. Clause 12.1.4 lists the MRF as a CC intercept
 * function. Extension value; annex K.2's explicit list does not name it. 3GPP
 * TS 33.108, annex B.12.
 * @constant
 * @type {number}
 */
export
const ICE_type_mRF = _enum_for_ICE_type.mRF satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mRF
 * @description
 * 
 * Intercepted at the MRF. Clause 12.1.4.
 * @constant
 * @type {number}
 */
export
const mRF = ICE_type_mRF satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_lmISF
 * @description
 * 
 * VPLMN S8HR: CC intercepted at the LMISF. Clause 12.7.3 requires `lmISF` or
 * `sGW` on that CC. 3GPP TS 33.108.
 * @constant
 * @type {number}
 */
export
const ICE_type_lmISF = _enum_for_ICE_type.lmISF satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lmISF
 * @description
 * 
 * S8HR VPLMN intercept at the LMISF. Clause 12.7.3.
 * @constant
 * @type {number}
 */
export
const lmISF = ICE_type_lmISF satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_sGW
 * @description
 * 
 * VPLMN S8HR: CC intercepted at the serving gateway. Clause 12.7.3 requires
 * `lmISF` or `sGW` on that CC. 3GPP TS 33.108.
 * @constant
 * @type {number}
 */
export
const ICE_type_sGW = _enum_for_ICE_type.sGW satisfies ICE_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGW
 * @description
 * 
 * S8HR VPLMN intercept at the S-GW. Clause 12.7.3.
 * @constant
 * @type {number}
 */
export
const sGW = ICE_type_sGW satisfies ICE_type; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ICE_type: $.ASN1Decoder<ICE_type> = $._decodeEnumerated;
export const _encode_ICE_type: $.ASN1Encoder<ICE_type> = $._encodeEnumerated;


/* eslint-enable */
