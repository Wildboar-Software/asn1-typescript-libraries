/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * @summary Compression_Item_v44CompressionActive
 * @description
 *
 * V.44 P0 (Table 22/V.59): `none`(0), `txOnly`(1), `rxOnly`(2), `both`(3).
 * ITU-T Rec. V.59 (11/2000) §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v44CompressionActive ::= ENUMERATED {none(0), txOnly(1), rxOnly(2), both(3)}
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_Compression_Item_v44CompressionActive = {
    none: 0,
    txOnly: 1,
    rxOnly: 2,
    both: 3,
} as const;

export
type _enum_for_Compression_Item_v44CompressionActive = (typeof _enum_for_Compression_Item_v44CompressionActive)[keyof typeof _enum_for_Compression_Item_v44CompressionActive];

/**
 * @summary Compression_Item_v44CompressionActive
 * @description
 *
 * V.44 P0 (Table 22/V.59): `none`(0), `txOnly`(1), `rxOnly`(2), `both`(3).
 * ITU-T Rec. V.59 (11/2000) §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v44CompressionActive ::= ENUMERATED {none(0), txOnly(1), rxOnly(2), both(3)}
 * ```
 * 
 * @enum {number}
 */
export
type Compression_Item_v44CompressionActive = _enum_for_Compression_Item_v44CompressionActive;

/**
 * @summary Compression_Item_v44CompressionActive
 * @description
 *
 * V.44 P0 (Table 22/V.59): `none`(0), `txOnly`(1), `rxOnly`(2), `both`(3).
 * ITU-T Rec. V.59 (11/2000) §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v44CompressionActive ::= ENUMERATED {none(0), txOnly(1), rxOnly(2), both(3)}
 * ```
 * 
 * @enum {number}
 */
export
const Compression_Item_v44CompressionActive = _enum_for_Compression_Item_v44CompressionActive;

/**
 * @summary Compression_Item_v44CompressionActive_none
 * @description
 *
 * V.44 not selected. Table 22/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_none = Compression_Item_v44CompressionActive.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none = Compression_Item_v44CompressionActive.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_txOnly
 * @description
 *
 * V.44 transmit direction only. Table 22/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_txOnly = Compression_Item_v44CompressionActive.txOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary txOnly
 * @constant
 * @type {number}
 */
export
const txOnly = Compression_Item_v44CompressionActive.txOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_rxOnly
 * @description
 *
 * V.44 receive direction only. Table 22/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_rxOnly = Compression_Item_v44CompressionActive.rxOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rxOnly
 * @constant
 * @type {number}
 */
export
const rxOnly = Compression_Item_v44CompressionActive.rxOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_both
 * @description
 *
 * V.44 both directions. Table 22/V.59. ITU-T Rec. V.59 (11/2000) §6.12.
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_both = Compression_Item_v44CompressionActive.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both = Compression_Item_v44CompressionActive.both; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_Compression_Item_v44CompressionActive(el: _Element): Compression_Item_v44CompressionActive {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Compression_Item_v44CompressionActive.none: return Compression_Item_v44CompressionActive.none;
        case Compression_Item_v44CompressionActive.txOnly: return Compression_Item_v44CompressionActive.txOnly;
        case Compression_Item_v44CompressionActive.rxOnly: return Compression_Item_v44CompressionActive.rxOnly;
        case Compression_Item_v44CompressionActive.both: return Compression_Item_v44CompressionActive.both;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Compression_Item_v44CompressionActive.",
                el,
            );
    }
}
export const _encode_Compression_Item_v44CompressionActive: $.ASN1Encoder<Compression_Item_v44CompressionActive> = $._encodeEnumerated as $.ASN1Encoder<Compression_Item_v44CompressionActive>;

/* eslint-enable */
