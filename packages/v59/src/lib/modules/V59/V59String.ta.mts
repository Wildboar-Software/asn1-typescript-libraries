/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError, ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary V59String
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V59String  ::=  IA5String(SIZE (1..40))
 * ```
 */
export
type V59String = IA5String; // IA5String
export const _decode_V59String = (el: _Element): V59String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 40) {
        throw new ASN1SizeError("V59String violates SIZE constraint");
    }
    return value;
};
export const _encode_V59String = $._encodeIA5String;

/* eslint-enable */
