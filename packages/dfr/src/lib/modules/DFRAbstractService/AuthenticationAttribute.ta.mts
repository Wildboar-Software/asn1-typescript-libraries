/* eslint-disable */
import {
    EXTERNAL,
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
 * @summary AuthenticationAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationAttribute  ::=  EXTERNAL
 * ```
 */
export
type AuthenticationAttribute = EXTERNAL; // ExternalType
export const _decode_AuthenticationAttribute = $._decodeExternal;
export const _encode_AuthenticationAttribute = $._encodeExternal;


/* eslint-enable */
