/* eslint-disable */
import {
    NULL,
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
 * @summary DefineAccessControlList_Response
 * @description
 * 
 * Confirmed Result(+) of DefineAccessControlList. Success returns no
 * service-specific parameters. ISO 9506-1:2003 §9.3.1.2; ISO 9506-2:2003
 * §9.3.2. Shall not appear in minor version 1 or 2 of the confirmed-service
 * PDUs (ISO 9506-2:2003 ConfirmedServiceRequest/Response).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineAccessControlList-Response  ::=  NULL
 * ```
 */
export
type DefineAccessControlList_Response = NULL; // NullType
export const _decode_DefineAccessControlList_Response = $._decodeNull;
export const _encode_DefineAccessControlList_Response = $._encodeNull;


/* eslint-enable */
