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
 * @summary Creds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Creds  ::=  OCTET STRING
 * ```
 */
export
type Creds = OCTET_STRING; // OctetStringType
export const _decode_Creds = $._decodeOctetString;
export const _encode_Creds = $._encodeOctetString;


/* eslint-enable */
