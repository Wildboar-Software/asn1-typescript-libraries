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
 * @summary BindSecurity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BindSecurity  ::=  EXTERNAL
 * ```
 */
export
type BindSecurity = EXTERNAL; // ExternalType
export const _decode_BindSecurity = $._decodeExternal;
export const _encode_BindSecurity = $._encodeExternal;


/* eslint-enable */
