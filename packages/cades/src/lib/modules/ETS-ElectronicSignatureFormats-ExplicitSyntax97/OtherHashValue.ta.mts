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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OtherHashValue
 * @description
 *
 * Octet string holding a hash value (certificate, CRL, OCSP
 * response, or signature policy). ETSI TS 101 733 V2.2.1
 * (2013-04) §5.7.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherHashValue  ::=  OCTET STRING
 * ```
 */
export
type OtherHashValue = OCTET_STRING; // OctetStringType


export const _decode_OtherHashValue = $._decodeOctetString;


export const _encode_OtherHashValue = $._encodeOctetString;


/* eslint-enable */
