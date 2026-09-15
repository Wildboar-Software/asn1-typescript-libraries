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
 * @summary CIAInfo_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIAInfo-version ::= INTEGER { v1(0), v2(1) } (v1 | v2, ...)
 * ```
 */
export
type CIAInfo_version = INTEGER;

/**
 * @summary CIAInfo_version_v1
 * @constant
 * @type {number}
 */
export
const CIAInfo_version_v1: CIAInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CIAInfo_version_v1
 * @constant
 * @type {number}
 */
export
const v1: CIAInfo_version = CIAInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CIAInfo_version_v2
 * @constant
 * @type {number}
 */
export
const CIAInfo_version_v2: CIAInfo_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CIAInfo_version_v2
 * @constant
 * @type {number}
 */
export
const v2: CIAInfo_version = CIAInfo_version_v2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CIAInfo_version = $._decodeInteger;
export const _encode_CIAInfo_version = $._encodeInteger;


/* eslint-enable */
