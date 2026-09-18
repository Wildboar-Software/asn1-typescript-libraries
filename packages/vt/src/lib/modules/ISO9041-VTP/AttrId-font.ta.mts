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
 * @summary AttrId_font
 * @description
 *
 * Font attribute-value. 0 = `"null"`. Other values are a 1-based
 * index into the font assignment VTE-parameter list; integer ≥ 1
 * and must be valid for the element's repertoire.
 * ISO/IEC 9040:1997 §13.2, §19.4.1.3; ISO/IEC 9041-1:1997 §12.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttrId-font ::= INTEGER { null (0) }
 * ```
 */
export
type AttrId_font = INTEGER;

/**
 * @summary AttrId_font_null_
 * @description
 *
 * `"null"`(0). ISO/IEC 9040:1997 §13.2, §19.4.1.3.
 *
 * @constant
 * @type {number}
 */
export
const AttrId_font_null_: AttrId_font = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttrId_font_null_
 * @description
 *
 * `"null"`(0). ISO/IEC 9040:1997 §13.2, §19.4.1.3.
 *
 * @constant
 * @type {number}
 */
export
const null_: AttrId_font = AttrId_font_null_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AttrId_font = $._decodeInteger;
export const _encode_AttrId_font = $._encodeInteger;


/* eslint-enable */
