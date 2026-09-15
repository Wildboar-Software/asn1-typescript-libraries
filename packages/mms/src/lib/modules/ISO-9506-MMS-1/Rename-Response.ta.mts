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
 * @summary Rename_Response
 * @description
 * 
 * Confirmed Result(+) of Rename. Success returns no service-specific
 * parameters. ISO 9506-1:2003 §10.7.1.2; ISO 9506-2:2003 §10.7.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Rename-Response  ::=  NULL
 * ```
 */
export
type Rename_Response = NULL; // NullType
export const _decode_Rename_Response = $._decodeNull;
export const _encode_Rename_Response = $._encodeNull;


/* eslint-enable */
