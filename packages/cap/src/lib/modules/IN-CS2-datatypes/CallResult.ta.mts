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
 * @summary CallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallResult{PARAMETERS-BOUND:bound}  ::= 
 *   OCTET STRING
 *     (SIZE (bound.&minCallResultLength..bound.&maxCallResultLength))
 * ```
 */
export
type CallResult = OCTET_STRING; // OctetStringType
export const _decode_CallResult = $._decodeOctetString;
export const _encode_CallResult = $._encodeOctetString;


/* eslint-enable */
