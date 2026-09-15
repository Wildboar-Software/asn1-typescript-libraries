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
 * @summary OriginalCalledPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginalCalledPartyID      ::=  OCTET STRING (SIZE (minOriginalCalledPartyIDLength ..      maxOriginalCalledPartyIDLength))
 * ```
 */
export
type OriginalCalledPartyID = OCTET_STRING; // OctetStringType
export const _decode_OriginalCalledPartyID = $._decodeOctetString;
export const _encode_OriginalCalledPartyID = $._encodeOctetString;


/* eslint-enable */
