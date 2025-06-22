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
 * @summary ECPrivateKey_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPrivateKey-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ECPrivateKey_version = INTEGER;


/**
 * @summary ECPrivateKey_version_ecPrivkeyVer1
 * @constant
 * @type {number}
 */
export
const ECPrivateKey_version_ecPrivkeyVer1: ECPrivateKey_version = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ECPrivateKey_version_ecPrivkeyVer1
 * @constant
 * @type {number}
 */
export
const ecPrivkeyVer1: ECPrivateKey_version = ECPrivateKey_version_ecPrivkeyVer1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ECPrivateKey_version = $._decodeInteger;




export const _encode_ECPrivateKey_version = $._encodeInteger;


/* eslint-enable */
