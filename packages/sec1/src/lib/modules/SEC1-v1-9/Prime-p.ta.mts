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
 * @summary Prime_p
 * @description
 * 
 * Prime modulus `p` of the field F_p. An odd prime; field elements are integers
 * in `[0, p-1]`. SEC 1 prefers `ceil(log2 p)` in {192, 224, 256, 384, 521}.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §2.1.1, §C.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Prime-p  ::=  INTEGER
 * ```
 */
export
type Prime_p = INTEGER;


export const _decode_Prime_p = $._decodeInteger;


export const _encode_Prime_p = $._encodeInteger;


/* eslint-enable */
