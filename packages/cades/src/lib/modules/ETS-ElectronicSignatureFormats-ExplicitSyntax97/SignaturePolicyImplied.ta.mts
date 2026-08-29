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
 * @summary SignaturePolicyImplied
 * @description
 *
 * Alternative of `SignaturePolicyIdentifier` meaning the
 * policy is implied by the signed data (or other external
 * context). Marked "not used in this version" of TS 101 733.
 * ETSI TS 101 733 V2.2.1 (2013-04) §5.8.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignaturePolicyImplied  ::=  NULL
 * ```
 */
export
type SignaturePolicyImplied = NULL; // NullType


export const _decode_SignaturePolicyImplied = $._decodeNull;


export const _encode_SignaturePolicyImplied = $._encodeNull;


/* eslint-enable */
