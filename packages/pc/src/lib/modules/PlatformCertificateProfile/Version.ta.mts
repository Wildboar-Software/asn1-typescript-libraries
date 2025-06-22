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
 * @summary Version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Version  ::=  INTEGER { v1(0) }
 * ```
 */
export
type Version = INTEGER;

/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export
const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export
const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Version = $._decodeInteger;


export const _encode_Version = $._encodeInteger;


/* eslint-enable */
