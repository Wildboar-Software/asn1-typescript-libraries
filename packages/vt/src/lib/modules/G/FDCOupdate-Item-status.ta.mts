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
 * @summary FDCOupdate_Item_status
 * @description
 *
 * Field Definition Record status. ISO/IEC 9041-1:1997 §12.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate-Item-status ::= INTEGER { active (0), inactive (1), void (2) }
 * ```
 */
export
type FDCOupdate_Item_status = INTEGER;

/**
 * @summary FDCOupdate_Item_status_active
 * @description
 *
 * FDR is active. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_status_active: FDCOupdate_Item_status = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_active
 * @description
 *
 * FDR is active. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const active: FDCOupdate_Item_status = FDCOupdate_Item_status_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_inactive
 * @description
 *
 * FDR is inactive. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_status_inactive: FDCOupdate_Item_status = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_inactive
 * @description
 *
 * FDR is inactive. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const inactive: FDCOupdate_Item_status = FDCOupdate_Item_status_inactive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_void_
 * @description
 *
 * FDR is void. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_status_void_: FDCOupdate_Item_status = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_status_void_
 * @description
 *
 * FDR is void. ISO/IEC 9041-1:1997 §12.2.2.
 * @constant
 * @type {number}
 */
export
const void_: FDCOupdate_Item_status = FDCOupdate_Item_status_void_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FDCOupdate_Item_status = $._decodeInteger;
export const _encode_FDCOupdate_Item_status = $._encodeInteger;


/* eslint-enable */
