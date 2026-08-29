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
 * @summary Trinomial
 * @description
 * 
 * Degree `k` of the middle term of the reduction polynomial `x^m + x^k + 1`,
 * with m > k >= 1. Prefer a trinomial when one exists, with smallest `k`.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §2.1.2, §C.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Trinomial  ::=  INTEGER
 * ```
 */
export
type Trinomial = INTEGER;


export const _decode_Trinomial = $._decodeInteger;


export const _encode_Trinomial = $._encodeInteger;


/* eslint-enable */
