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
 * @summary Reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason{PARAMETERS-BOUND:bound}  ::= 
 *   OCTET STRING(SIZE (bound.&minReasonLength..bound.&maxReasonLength))
 * ```
 */
export
type Reason = OCTET_STRING; // OctetStringType
export const _decode_Reason = $._decodeOctetString;
export const _encode_Reason = $._encodeOctetString;


/* eslint-enable */
