/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary V18Diag_Item_v18used
 * @description
 *
 * Table 15/V.59 mode achieved: `none`(0); native V.18 `v18-V21Hi`(1),
 * `v18-V21Lo`(2), `v18-V61C`(3) caller channel simultaneous text+voice,
 * `v18-V61A`(4) answerer channel simultaneous; legacy `v21Hi`(5)/`v21Lo`(6);
 * `dTMF`(7); `eDT`(8) European Deaf Telephone; `baudot45`(9) 45.45 bit/s,
 * `baudot47`(10) undetermined Baudot rate, `baudot50`(11) 50 bit/s;
 * V.23/Minitel `v23Hi`(12)/`v23Lo`(13); Bell 103 `bellHi`(14)/`bellLo`(15).
 * ITU-T Rec. V.59 (11/2000) §6.8.15.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V18Diag-Item-v18used ::= ENUMERATED {none(0), v18-V21Hi(1), v18-V21Lo(2), v18-V61C(3),
 *                             v18-V61A(4), v21Hi(5), v21Lo(6), dTMF(7),
 *                             eDT(8), baudot45(9), baudot47(10), baudot50(11),
 *                             v23Hi(12), v23Lo(13), bellHi(14), bellLo(15)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_V18Diag_Item_v18used {
    none = 0,
    v18_V21Hi = 1,
    v18_V21Lo = 2,
    v18_V61C = 3,
    v18_V61A = 4,
    v21Hi = 5,
    v21Lo = 6,
    dTMF = 7,
    eDT = 8,
    baudot45 = 9,
    baudot47 = 10,
    baudot50 = 11,
    v23Hi = 12,
    v23Lo = 13,
    bellHi = 14,
    bellLo = 15,
}

/**
 * @summary V18Diag_Item_v18used
 * @description
 *
 * Table 15/V.59 mode achieved: `none`(0); native V.18 `v18-V21Hi`(1),
 * `v18-V21Lo`(2), `v18-V61C`(3) caller channel simultaneous text+voice,
 * `v18-V61A`(4) answerer channel simultaneous; legacy `v21Hi`(5)/`v21Lo`(6);
 * `dTMF`(7); `eDT`(8) European Deaf Telephone; `baudot45`(9) 45.45 bit/s,
 * `baudot47`(10) undetermined Baudot rate, `baudot50`(11) 50 bit/s;
 * V.23/Minitel `v23Hi`(12)/`v23Lo`(13); Bell 103 `bellHi`(14)/`bellLo`(15).
 * ITU-T Rec. V.59 (11/2000) §6.8.15.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V18Diag-Item-v18used ::= ENUMERATED {none(0), v18-V21Hi(1), v18-V21Lo(2), v18-V61C(3),
 *                             v18-V61A(4), v21Hi(5), v21Lo(6), dTMF(7),
 *                             eDT(8), baudot45(9), baudot47(10), baudot50(11),
 *                             v23Hi(12), v23Lo(13), bellHi(14), bellLo(15)}
 * ```
 * 
 * @enum {number}
 */
export
type V18Diag_Item_v18used = _enum_for_V18Diag_Item_v18used;

/**
 * @summary V18Diag_Item_v18used
 * @description
 *
 * Table 15/V.59 mode achieved: `none`(0); native V.18 `v18-V21Hi`(1),
 * `v18-V21Lo`(2), `v18-V61C`(3) caller channel simultaneous text+voice,
 * `v18-V61A`(4) answerer channel simultaneous; legacy `v21Hi`(5)/`v21Lo`(6);
 * `dTMF`(7); `eDT`(8) European Deaf Telephone; `baudot45`(9) 45.45 bit/s,
 * `baudot47`(10) undetermined Baudot rate, `baudot50`(11) 50 bit/s;
 * V.23/Minitel `v23Hi`(12)/`v23Lo`(13); Bell 103 `bellHi`(14)/`bellLo`(15).
 * ITU-T Rec. V.59 (11/2000) §6.8.15.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V18Diag-Item-v18used ::= ENUMERATED {none(0), v18-V21Hi(1), v18-V21Lo(2), v18-V61C(3),
 *                             v18-V61A(4), v21Hi(5), v21Lo(6), dTMF(7),
 *                             eDT(8), baudot45(9), baudot47(10), baudot50(11),
 *                             v23Hi(12), v23Lo(13), bellHi(14), bellLo(15)}
 * ```
 * 
 * @enum {number}
 */
export
const V18Diag_Item_v18used = _enum_for_V18Diag_Item_v18used;

/**
 * @summary V18Diag_Item_v18used_none
 * @description
 *
 * No mode achieved. Table 15/V.59. ITU-T Rec. V.59 (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_none: V18Diag_Item_v18used = V18Diag_Item_v18used.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: V18Diag_Item_v18used = V18Diag_Item_v18used.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v18_V21Hi
 * @description
 *
 * Native V.18 using V.21 high (Table 15 code 1). Table 15/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v18_V21Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V21Hi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18_V21Hi
 * @constant
 * @type {number}
 */
export
const v18_V21Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V21Hi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v18_V21Lo
 * @description
 *
 * Native V.18 using V.21 low (Table 15 code 2). Table 15/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v18_V21Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V21Lo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18_V21Lo
 * @constant
 * @type {number}
 */
export
const v18_V21Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V21Lo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v18_V61C
 * @description
 *
 * Native V.18 simultaneous text+voice in the caller's channel. Table 15/V.59.
 * ITU-T Rec. V.59 (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v18_V61C: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V61C; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18_V61C
 * @constant
 * @type {number}
 */
export
const v18_V61C: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V61C; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v18_V61A
 * @description
 *
 * Native V.18 simultaneous text+voice in the answering channel. Table 15/V.59.
 * ITU-T Rec. V.59 (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v18_V61A: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V61A; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18_V61A
 * @constant
 * @type {number}
 */
export
const v18_V61A: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V61A; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v21Hi
 * @description
 *
 * Legacy V.21 transmitting on the high channel. Table 15/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v21Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v21Hi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v21Hi
 * @constant
 * @type {number}
 */
export
const v21Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v21Hi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v21Lo
 * @description
 *
 * Legacy V.21 transmitting on the low channel. Table 15/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v21Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v21Lo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v21Lo
 * @constant
 * @type {number}
 */
export
const v21Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v21Lo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_dTMF
 * @description
 *
 * DTMF text-telephone mode. Table 15/V.59. ITU-T Rec. V.59 (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_dTMF: V18Diag_Item_v18used = V18Diag_Item_v18used.dTMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dTMF
 * @constant
 * @type {number}
 */
export
const dTMF: V18Diag_Item_v18used = V18Diag_Item_v18used.dTMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_eDT
 * @description
 *
 * EDT ("European Deaf Telephone"). Table 15/V.59. ITU-T Rec. V.59 (11/2000)
 * §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_eDT: V18Diag_Item_v18used = V18Diag_Item_v18used.eDT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eDT
 * @constant
 * @type {number}
 */
export
const eDT: V18Diag_Item_v18used = V18Diag_Item_v18used.eDT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_baudot45
 * @description
 *
 * Baudot 45.45 bit/s. Table 15/V.59. ITU-T Rec. V.59 (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_baudot45: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot45; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baudot45
 * @constant
 * @type {number}
 */
export
const baudot45: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot45; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_baudot47
 * @description
 *
 * Baudot, undetermined bit rate. Table 15/V.59. ITU-T Rec. V.59 (11/2000)
 * §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_baudot47: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot47; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baudot47
 * @constant
 * @type {number}
 */
export
const baudot47: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot47; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_baudot50
 * @description
 *
 * Baudot 50 bit/s. Table 15/V.59. ITU-T Rec. V.59 (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_baudot50: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot50; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baudot50
 * @constant
 * @type {number}
 */
export
const baudot50: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot50; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v23Hi
 * @description
 *
 * V.23/Minitel transmitting on the high channel. Table 15/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v23Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v23Hi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v23Hi
 * @constant
 * @type {number}
 */
export
const v23Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v23Hi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v23Lo
 * @description
 *
 * V.23/Minitel transmitting on the low channel. Table 15/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v23Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v23Lo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v23Lo
 * @constant
 * @type {number}
 */
export
const v23Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v23Lo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_bellHi
 * @description
 *
 * Bell 103 transmitting on the high channel. Table 15/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_bellHi: V18Diag_Item_v18used = V18Diag_Item_v18used.bellHi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bellHi
 * @constant
 * @type {number}
 */
export
const bellHi: V18Diag_Item_v18used = V18Diag_Item_v18used.bellHi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_bellLo
 * @description
 *
 * Bell 103 transmitting on the low channel. Table 15/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.15.
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_bellLo: V18Diag_Item_v18used = V18Diag_Item_v18used.bellLo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bellLo
 * @constant
 * @type {number}
 */
export
const bellLo: V18Diag_Item_v18used = V18Diag_Item_v18used.bellLo; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_V18Diag_Item_v18used = $._decodeEnumerated;
export const _encode_V18Diag_Item_v18used = $._encodeEnumerated;

/* eslint-enable */
