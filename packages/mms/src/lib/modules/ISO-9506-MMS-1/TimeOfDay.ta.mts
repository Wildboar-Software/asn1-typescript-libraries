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
 * @summary TimeOfDay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeOfDay  ::=  OCTET STRING (SIZE(4|6))
 * ```
 */
export
type TimeOfDay = OCTET_STRING; // OctetStringType
export const _decode_TimeOfDay = (el: _Element): TimeOfDay => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4 && value.length !== 6) {
        throw new ASN1SizeError("TimeOfDay violates SIZE constraint");
    }
    return value;
};
export const _encode_TimeOfDay = $._encodeOctetString;


/* eslint-enable */
