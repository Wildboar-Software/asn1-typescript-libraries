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
 * @summary X509Certificate
 * @description
 *
 * X.509 `Certificate` encoded with DER (`der` OID). ITU-T Rec. X.1084
 * (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X509Certificate      ::=     OCTET STRING(CONTAINING Certificate ENCODED BY der)
 * ```
 */
export
type X509Certificate = OCTET_STRING; // OctetStringType
export const _decode_X509Certificate = $._decodeOctetString;
export const _encode_X509Certificate = $._encodeOctetString;


/* eslint-enable */
