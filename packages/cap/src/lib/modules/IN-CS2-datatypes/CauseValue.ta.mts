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
 * @summary CauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseValue  ::= 
 *   OCTET STRING(SIZE (1))
 * ```
 */
export
type CauseValue = OCTET_STRING; // OctetStringType
export const _decode_CauseValue = (el: _Element): CauseValue => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("CauseValue violates SIZE constraint");
    }
    return value;
};
export const _encode_CauseValue = $._encodeOctetString;


/* eslint-enable */
