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
 * @summary Opaque
 * @description
 *
 * Uninterpreted octet string used for TLS-style randoms, MAC, padding,
 * and application data. ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Opaque     ::=     OCTET STRING
 * ```
 */
export
type Opaque = OCTET_STRING; // OctetStringType
export const _decode_Opaque = $._decodeOctetString;
export const _encode_Opaque = $._encodeOctetString;


/* eslint-enable */
