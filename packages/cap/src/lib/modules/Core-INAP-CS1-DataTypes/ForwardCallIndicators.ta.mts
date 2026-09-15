/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardCallIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardCallIndicators      ::=  OCTET STRING (SIZE (2))
 * ```
 */
export
type ForwardCallIndicators = OCTET_STRING; // OctetStringType
export const _decode_ForwardCallIndicators = (el: _Element): ForwardCallIndicators => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("ForwardCallIndicators violates SIZE constraint");
    }
    return value;
};
export const _encode_ForwardCallIndicators = $._encodeOctetString;


/* eslint-enable */
