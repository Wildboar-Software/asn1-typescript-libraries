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
 * @summary AttrId_foregroundColour
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttrId-foregroundColour ::= INTEGER { null (0) }
 * ```
 */
export
type AttrId_foregroundColour = INTEGER;

/**
 * @summary AttrId_foregroundColour_null_
 * @constant
 * @type {number}
 */
export
const AttrId_foregroundColour_null_: AttrId_foregroundColour = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttrId_foregroundColour_null_
 * @constant
 * @type {number}
 */
export
const null_: AttrId_foregroundColour = AttrId_foregroundColour_null_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AttrId_foregroundColour = $._decodeInteger;
export const _encode_AttrId_foregroundColour = $._encodeInteger;


/* eslint-enable */
