/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
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
 * CallResult      ::=  OCTET STRING (SIZE (minCallResultLength .. maxCallResultLength))
 * ```
 */
export
type CallResult = OCTET_STRING; // OctetStringType
export const _decode_CallResult: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;
export const _encode_CallResult: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
