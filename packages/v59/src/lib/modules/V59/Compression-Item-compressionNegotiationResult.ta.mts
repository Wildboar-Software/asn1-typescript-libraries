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
 * @summary Compression_Item_compressionNegotiationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-compressionNegotiationResult ::= ENUMERATED {none(0), v42bisOnly(1), v42bisBoth(2), v44Both(3),
 *                             v44Only(4), other(5)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Compression_Item_compressionNegotiationResult {
    none = 0,
    v42bisOnly = 1,
    v42bisBoth = 2,
    v44Both = 3,
    v44Only = 4,
    other = 5,
}

/**
 * @summary Compression_Item_compressionNegotiationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-compressionNegotiationResult ::= ENUMERATED {none(0), v42bisOnly(1), v42bisBoth(2), v44Both(3),
 *                             v44Only(4), other(5)}
 * ```
 * 
 * @enum {number}
 */
export
type Compression_Item_compressionNegotiationResult = _enum_for_Compression_Item_compressionNegotiationResult;

/**
 * @summary Compression_Item_compressionNegotiationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-compressionNegotiationResult ::= ENUMERATED {none(0), v42bisOnly(1), v42bisBoth(2), v44Both(3),
 *                             v44Only(4), other(5)}
 * ```
 * 
 * @enum {number}
 */
export
const Compression_Item_compressionNegotiationResult = _enum_for_Compression_Item_compressionNegotiationResult;

/**
 * @summary Compression_Item_compressionNegotiationResult_none
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_none: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_v42bisOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_v42bisOnly: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v42bisOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v42bisOnly
 * @constant
 * @type {number}
 */
export
const v42bisOnly: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v42bisOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_v42bisBoth
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_v42bisBoth: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v42bisBoth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v42bisBoth
 * @constant
 * @type {number}
 */
export
const v42bisBoth: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v42bisBoth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_v44Both
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_v44Both: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v44Both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v44Both
 * @constant
 * @type {number}
 */
export
const v44Both: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v44Both; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_v44Only
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_v44Only: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v44Only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v44Only
 * @constant
 * @type {number}
 */
export
const v44Only: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v44Only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_other
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_other: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.other; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Compression_Item_compressionNegotiationResult = $._decodeEnumerated;
export const _encode_Compression_Item_compressionNegotiationResult = $._encodeEnumerated;

/* eslint-enable */
