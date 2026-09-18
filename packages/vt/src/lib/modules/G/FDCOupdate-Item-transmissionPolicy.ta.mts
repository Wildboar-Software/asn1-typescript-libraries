/* eslint-disable */
import {
    INTEGER,
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
 * @summary FDCOupdate_Item_transmissionPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate-Item-transmissionPolicy ::= INTEGER {
 *     all                (0),
 *     modifiedAllContent (1),
 *     modifiedPart       (2),
 *     none               (3),
 *     refTPCO            (4)
 * }
 * ```
 */
export
type FDCOupdate_Item_transmissionPolicy = INTEGER;

/**
 * @summary FDCOupdate_Item_transmissionPolicy_all
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_all: FDCOupdate_Item_transmissionPolicy = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_all
 * @constant
 * @type {number}
 */
export
const all: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_all; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedAllContent
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_modifiedAllContent: FDCOupdate_Item_transmissionPolicy = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedAllContent
 * @constant
 * @type {number}
 */
export
const modifiedAllContent: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_modifiedAllContent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedPart
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_modifiedPart: FDCOupdate_Item_transmissionPolicy = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedPart
 * @constant
 * @type {number}
 */
export
const modifiedPart: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_modifiedPart; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_none
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_none: FDCOupdate_Item_transmissionPolicy = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_none
 * @constant
 * @type {number}
 */
export
const none: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_refTPCO
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_refTPCO: FDCOupdate_Item_transmissionPolicy = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_refTPCO
 * @constant
 * @type {number}
 */
export
const refTPCO: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_refTPCO; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FDCOupdate_Item_transmissionPolicy = $._decodeInteger;
export const _encode_FDCOupdate_Item_transmissionPolicy = $._encodeInteger;


/* eslint-enable */
