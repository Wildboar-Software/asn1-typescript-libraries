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
 * @summary LegType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegType      ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type LegType = OCTET_STRING; // OctetStringType
export const _decode_LegType = (el: _Element): LegType => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("LegType violates SIZE constraint");
    }
    return value;
};
export const _encode_LegType = $._encodeOctetString;


/* eslint-enable */
