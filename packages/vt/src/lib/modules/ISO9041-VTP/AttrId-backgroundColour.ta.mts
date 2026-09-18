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
 * @constant
 * @type {number}
 */
export
const AttrId_backgroundColour_null_: AttrId_backgroundColour = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttrId_backgroundColour_null_
 * @constant
 * @type {number}
 */
export
const null_: AttrId_backgroundColour = AttrId_backgroundColour_null_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AttrId_backgroundColour = $._decodeInteger;
export const _encode_AttrId_backgroundColour = $._encodeInteger;


/* eslint-enable */
