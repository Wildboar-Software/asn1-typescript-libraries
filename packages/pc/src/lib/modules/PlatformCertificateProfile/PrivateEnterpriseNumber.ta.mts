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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary PrivateEnterpriseNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateEnterpriseNumber  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type PrivateEnterpriseNumber = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_PrivateEnterpriseNumber = $._decodeObjectIdentifier;


export const _encode_PrivateEnterpriseNumber = $._encodeObjectIdentifier;


/* eslint-enable */
