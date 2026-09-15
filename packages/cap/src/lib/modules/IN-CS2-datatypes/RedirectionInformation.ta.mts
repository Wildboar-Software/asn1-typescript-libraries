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
 * @summary RedirectionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectionInformation  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export
type RedirectionInformation = OCTET_STRING; // OctetStringType
export const _decode_RedirectionInformation = (el: _Element): RedirectionInformation => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("RedirectionInformation violates SIZE constraint");
    }
    return value;
};
export const _encode_RedirectionInformation = $._encodeOctetString;


/* eslint-enable */
