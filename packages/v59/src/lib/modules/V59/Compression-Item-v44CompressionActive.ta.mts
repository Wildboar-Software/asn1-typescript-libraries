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
 * @summary Compression_Item_v44CompressionActive
 * @description
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
enum _enum_for_Compression_Item_v44CompressionActive {
    none = 0,
    txOnly = 1,
    rxOnly = 2,
    both = 3,
}

/**
 * @summary Compression_Item_v44CompressionActive
 * @description
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
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_none: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_txOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_txOnly: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.txOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary txOnly
 * @constant
 * @type {number}
 */
export
const txOnly: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.txOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_rxOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_rxOnly: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.rxOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rxOnly
 * @constant
 * @type {number}
 */
export
const rxOnly: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.rxOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_both
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_both: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.both; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Compression_Item_v44CompressionActive = $._decodeEnumerated;
export const _encode_Compression_Item_v44CompressionActive = $._encodeEnumerated;

/* eslint-enable */
