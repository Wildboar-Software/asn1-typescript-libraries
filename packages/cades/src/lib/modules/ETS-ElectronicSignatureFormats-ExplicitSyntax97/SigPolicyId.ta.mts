/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary SigPolicyId
 * @description
 *
 * Object identifier uniquely identifying a specific version of
 * a signature policy. ETSI TS 101 733 V2.2.1 (2013-04)
 * §5.8.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type SigPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_SigPolicyId = $._decodeObjectIdentifier;


export const _encode_SigPolicyId = $._encodeObjectIdentifier;


/* eslint-enable */
