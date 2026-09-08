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
 * @summary Compression_Item_v42bisCompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v42bisCompressionActive ::= ENUMERATED {none(0), initOnly(1), respOnly(2), both(3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Compression_Item_v42bisCompressionActive {
    none = 0,
    initOnly = 1,
    respOnly = 2,
    both = 3,
}

/**
 * @summary Compression_Item_v42bisCompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v42bisCompressionActive ::= ENUMERATED {none(0), initOnly(1), respOnly(2), both(3)}
 * ```
 * 
 * @enum {number}
 */
export
type Compression_Item_v42bisCompressionActive = _enum_for_Compression_Item_v42bisCompressionActive;

/**
 * @summary Compression_Item_v42bisCompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v42bisCompressionActive ::= ENUMERATED {none(0), initOnly(1), respOnly(2), both(3)}
 * ```
 * 
 * @enum {number}
 */
export
const Compression_Item_v42bisCompressionActive = _enum_for_Compression_Item_v42bisCompressionActive;

/**
 * @summary Compression_Item_v42bisCompressionActive_none
 * @constant
 * @type {number}
 */
export
const Compression_Item_v42bisCompressionActive_none: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v42bisCompressionActive_initOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_v42bisCompressionActive_initOnly: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.initOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initOnly
 * @constant
 * @type {number}
 */
export
const initOnly: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.initOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v42bisCompressionActive_respOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_v42bisCompressionActive_respOnly: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.respOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary respOnly
 * @constant
 * @type {number}
 */
export
const respOnly: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.respOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v42bisCompressionActive_both
 * @constant
 * @type {number}
 */
export
const Compression_Item_v42bisCompressionActive_both: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.both; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Compression_Item_v42bisCompressionActive = $._decodeEnumerated;
export const _encode_Compression_Item_v42bisCompressionActive = $._encodeEnumerated;

/* eslint-enable */
