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
 * @summary AttrId_backgroundColour
 * @description
 *
 * Background-colour attribute-value. 0 = `"null"`. Other values
 * are a 1-based index into the colour assignment VTE-parameter
 * list; valid range 1..capability.
 * ISO/IEC 9040:1997 §13.2, §19.4.1.3; ISO/IEC 9041-1:1997 §12.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttrId-backgroundColour ::= INTEGER { null (0) }
 * ```
 */
export
type AttrId_backgroundColour = INTEGER;

/**
 * @summary AttrId_backgroundColour_null_
 * @description
 *
 * `"null"`(0). ISO/IEC 9040:1997 §13.2, §19.4.1.3.
 *
 * @constant
 * @type {number}
 */
export
const AttrId_backgroundColour_null_: AttrId_backgroundColour = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttrId_backgroundColour_null_
 * @description
 *
 * `"null"`(0). ISO/IEC 9040:1997 §13.2, §19.4.1.3.
 *
 * @constant
 * @type {number}
 */
export
const null_: AttrId_backgroundColour = AttrId_backgroundColour_null_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AttrId_backgroundColour = $._decodeInteger;
export const _encode_AttrId_backgroundColour = $._encodeInteger;


/* eslint-enable */
