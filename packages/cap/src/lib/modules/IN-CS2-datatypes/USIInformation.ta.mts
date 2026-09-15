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
 * @summary USIInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USIInformation{PARAMETERS-BOUND:bound}  ::= 
 *   OCTET STRING
 *     (SIZE (bound.&minUSIInformationLength..
 *              bound.&maxUSIInformationLength))
 * ```
 */
export
type USIInformation = OCTET_STRING; // OctetStringType
export const _decode_USIInformation = $._decodeOctetString;
export const _encode_USIInformation = $._encodeOctetString;


/* eslint-enable */
