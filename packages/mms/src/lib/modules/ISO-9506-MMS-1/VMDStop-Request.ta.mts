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
 * @summary VMDStop_Request
 * @description
 * 
 * Confirmed VMDStop request. No argument parameters. Conformance `csr`. Stops
 * all motion and associated control as soon as possible and requires manual
 * intervention. ISO 9506-1:2003 §10.9; ISO 9506-2:2003 §10.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMDStop-Request  ::=  NULL
 * ```
 */
export
type VMDStop_Request = NULL; // NullType
export const _decode_VMDStop_Request = $._decodeNull;
export const _encode_VMDStop_Request = $._encodeNull;


/* eslint-enable */
