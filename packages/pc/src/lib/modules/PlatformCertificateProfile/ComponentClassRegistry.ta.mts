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
 * @summary ComponentClassRegistry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentClassRegistry  ::=  OBJECT IDENTIFIER (
 *     tcg-registry-componentClass-tcg
 *     | tcg-registry-componentClass-ietf
 *     | tcg-registry-componentClass-dmtf )
 * ```
 */
export
type ComponentClassRegistry = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ComponentClassRegistry = $._decodeObjectIdentifier;


export const _encode_ComponentClassRegistry = $._encodeObjectIdentifier;


/* eslint-enable */
