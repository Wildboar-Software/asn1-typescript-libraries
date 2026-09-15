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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UINT32
 * @description
 *
 * Unsigned 32-bit integer `0..4294967295`. Used for GMT Unix time in
 * `ClientRandom` / `ServerRandom` and for `SessionID`. ITU-T Rec.
 * X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UINT32     ::=     INTEGER(0..4294967295)
 * ```
 */
export
type UINT32 = INTEGER;
export const _decode_UINT32 = (el: _Element): UINT32 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("UINT32 violates INTEGER range");
    }
    return value;
};
export const _encode_UINT32 = $._encodeInteger;


/* eslint-enable */
