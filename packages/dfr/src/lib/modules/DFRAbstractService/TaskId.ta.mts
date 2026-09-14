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
 * @summary TaskId
 * @description
 *
 * OCTET STRING identifying an operation for Abandon or for continuing
 * List/Search after a limit. ISO/IEC 10166-1:1991 §8.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskId  ::=  OCTET STRING
 * ```
 */
export
type TaskId = OCTET_STRING; // OctetStringType
export const _decode_TaskId = $._decodeOctetString;
export const _encode_TaskId = $._encodeOctetString;


/* eslint-enable */
