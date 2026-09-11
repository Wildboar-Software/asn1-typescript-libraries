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
 * @summary V34HdxDiag_Item_cCrate
 * @description
 *
 * Table 14/V.59: `t12R12`(0) 1200/1200, `t24R24`(1) 2400/2400, `t12R24`(2) Tx
 * 1200 / Rx 2400, `t24R12`(3) Tx 2400 / Rx 1200 bit/s. ITU-T Rec. V.59
 * (11/2000) §6.8.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag-Item-cCrate ::= ENUMERATED {t12R12(0), t24R24(1), t12R24(2), t24R12(3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_V34HdxDiag_Item_cCrate {
    t12R12 = 0,
    t24R24 = 1,
    t12R24 = 2,
    t24R12 = 3,
}

/**
 * @summary V34HdxDiag_Item_cCrate
 * @description
 *
 * Table 14/V.59: `t12R12`(0) 1200/1200, `t24R24`(1) 2400/2400, `t12R24`(2) Tx
 * 1200 / Rx 2400, `t24R12`(3) Tx 2400 / Rx 1200 bit/s. ITU-T Rec. V.59
 * (11/2000) §6.8.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag-Item-cCrate ::= ENUMERATED {t12R12(0), t24R24(1), t12R24(2), t24R12(3)}
 * ```
 * 
 * @enum {number}
 */
export
type V34HdxDiag_Item_cCrate = _enum_for_V34HdxDiag_Item_cCrate;

/**
 * @summary V34HdxDiag_Item_cCrate
 * @description
 *
 * Table 14/V.59: `t12R12`(0) 1200/1200, `t24R24`(1) 2400/2400, `t12R24`(2) Tx
 * 1200 / Rx 2400, `t24R12`(3) Tx 2400 / Rx 1200 bit/s. ITU-T Rec. V.59
 * (11/2000) §6.8.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag-Item-cCrate ::= ENUMERATED {t12R12(0), t24R24(1), t12R24(2), t24R12(3)}
 * ```
 * 
 * @enum {number}
 */
export
const V34HdxDiag_Item_cCrate = _enum_for_V34HdxDiag_Item_cCrate;

/**
 * @summary V34HdxDiag_Item_cCrate_t12R12
 * @description
 *
 * Control channel 1200 bit/s both ways. Table 14/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.11.
 * @constant
 * @type {number}
 */
export
const V34HdxDiag_Item_cCrate_t12R12: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t12R12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t12R12
 * @constant
 * @type {number}
 */
export
const t12R12: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t12R12; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V34HdxDiag_Item_cCrate_t24R24
 * @description
 *
 * Control channel 2400 bit/s both ways. Table 14/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.11.
 * @constant
 * @type {number}
 */
export
const V34HdxDiag_Item_cCrate_t24R24: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t24R24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t24R24
 * @constant
 * @type {number}
 */
export
const t24R24: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t24R24; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V34HdxDiag_Item_cCrate_t12R24
 * @description
 *
 * Control channel Tx 1200 / Rx 2400 bit/s. Table 14/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.11.
 * @constant
 * @type {number}
 */
export
const V34HdxDiag_Item_cCrate_t12R24: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t12R24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t12R24
 * @constant
 * @type {number}
 */
export
const t12R24: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t12R24; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V34HdxDiag_Item_cCrate_t24R12
 * @description
 *
 * Control channel Tx 2400 / Rx 1200 bit/s. Table 14/V.59. ITU-T Rec. V.59
 * (11/2000) §6.8.11.
 * @constant
 * @type {number}
 */
export
const V34HdxDiag_Item_cCrate_t24R12: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t24R12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t24R12
 * @constant
 * @type {number}
 */
export
const t24R12: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t24R12; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_V34HdxDiag_Item_cCrate = $._decodeEnumerated;
export const _encode_V34HdxDiag_Item_cCrate = $._encodeEnumerated;

/* eslint-enable */
