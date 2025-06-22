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
 * @summary MaxLogSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxLogSize  ::=  INTEGER {unlimited(0)}
 * ```
 */
export
type MaxLogSize = INTEGER;

/**
 * @summary MaxLogSize_unlimited
 * @constant
 * @type {number}
 */
export
const MaxLogSize_unlimited: MaxLogSize = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MaxLogSize_unlimited
 * @constant
 * @type {number}
 */
export
const unlimited: MaxLogSize = MaxLogSize_unlimited; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_MaxLogSize = $._decodeInteger;


export const _encode_MaxLogSize = $._encodeInteger;


/* eslint-enable */
