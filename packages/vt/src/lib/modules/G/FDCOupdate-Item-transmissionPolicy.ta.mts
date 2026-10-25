/* eslint-disable */
import {
    type INTEGER,
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
 * @summary FDCOupdate_Item_transmissionPolicy
 * @description
 *
 * How field contents are transmitted after controlled data entry.
 * `refTPCO` defers to a Transmission Policy Control Object. ISO/IEC
 * 9040:1997 §3.3.68; ISO/IEC 9041-1:1997 §12.2.2.
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
 * @description
 *
 * Transmit all field content. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_all = 0 satisfies FDCOupdate_Item_transmissionPolicy; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_all
 * @description
 *
 * Transmit all field content. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const all = FDCOupdate_Item_transmissionPolicy_all satisfies FDCOupdate_Item_transmissionPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedAllContent
 * @description
 *
 * Transmit all content of modified fields. ISO/IEC 9041-1:1997
 * §12.2.2.
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_modifiedAllContent = 1 satisfies FDCOupdate_Item_transmissionPolicy; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedAllContent
 * @description
 *
 * Transmit all content of modified fields. ISO/IEC 9041-1:1997
 * §12.2.2.
 * @constant
 * @type {number}
 */
export
const modifiedAllContent = FDCOupdate_Item_transmissionPolicy_modifiedAllContent satisfies FDCOupdate_Item_transmissionPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedPart
 * @description
 *
 * Transmit only the modified part. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_modifiedPart = 2 satisfies FDCOupdate_Item_transmissionPolicy; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedPart
 * @description
 *
 * Transmit only the modified part. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const modifiedPart = FDCOupdate_Item_transmissionPolicy_modifiedPart satisfies FDCOupdate_Item_transmissionPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_none
 * @description
 *
 * Transmit none of the field content. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_none = 3 satisfies FDCOupdate_Item_transmissionPolicy; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_none
 * @description
 *
 * Transmit none of the field content. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const none = FDCOupdate_Item_transmissionPolicy_none satisfies FDCOupdate_Item_transmissionPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_refTPCO
 * @description
 *
 * Use the Transmission Policy Control Object. ISO/IEC 9040:1997
 * §3.3.68; ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_refTPCO = 4 satisfies FDCOupdate_Item_transmissionPolicy; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_refTPCO
 * @description
 *
 * Use the Transmission Policy Control Object. ISO/IEC 9040:1997
 * §3.3.68; ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const refTPCO = FDCOupdate_Item_transmissionPolicy_refTPCO satisfies FDCOupdate_Item_transmissionPolicy; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FDCOupdate_Item_transmissionPolicy = $._decodeInteger;
export const _encode_FDCOupdate_Item_transmissionPolicy = $._encodeInteger;


/* eslint-enable */
