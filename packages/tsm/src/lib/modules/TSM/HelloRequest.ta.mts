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
 * @summary HelloRequest
 * @description
 *
 * TLS `hello_request` body: `NULL`. Server may send to renegotiate.
 * ITU-T Rec. X.1084 (05/2008) Annex A; [IETF RFC 4346].
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HelloRequest     ::=  NULL
 * ```
 */
export
type HelloRequest = NULL; // NullType
export const _decode_HelloRequest = $._decodeNull;
export const _encode_HelloRequest = $._encodeNull;


/* eslint-enable */
