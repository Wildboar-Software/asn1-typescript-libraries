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
 * @summary ServerHelloDone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerHelloDone     ::=     NULL
 * ```
 */
export
type ServerHelloDone = NULL; // NullType
export const _decode_ServerHelloDone = $._decodeNull;
export const _encode_ServerHelloDone = $._encodeNull;


/* eslint-enable */
