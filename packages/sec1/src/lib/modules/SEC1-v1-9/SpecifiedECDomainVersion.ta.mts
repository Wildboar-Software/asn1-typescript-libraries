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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary SpecifiedECDomainVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecifiedECDomainVersion  ::=  INTEGER {
 *     ecdpVer1(1),
 *     ecdpVer2(2),
 *     ecdpVer3(3)
 * }
 * ```
 */
export
type SpecifiedECDomainVersion = INTEGER;

/**
 * @summary SpecifiedECDomainVersion_ecdpVer1
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer1: SpecifiedECDomainVersion = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer1
 * @constant
 * @type {number}
 */
export
const ecdpVer1: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer2
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer2: SpecifiedECDomainVersion = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer2
 * @constant
 * @type {number}
 */
export
const ecdpVer2: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer3
 * @constant
 * @type {number}
 */
export
const SpecifiedECDomainVersion_ecdpVer3: SpecifiedECDomainVersion = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer3
 * @constant
 * @type {number}
 */
export
const ecdpVer3: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer3; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SpecifiedECDomainVersion = $._decodeInteger;


export const _encode_SpecifiedECDomainVersion = $._encodeInteger;


/* eslint-enable */
