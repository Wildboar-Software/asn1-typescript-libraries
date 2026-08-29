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
 * @summary ComponentClassRegistry
 * @description
 *
 * Component-class catalogue used in `ComponentClass`. Three OIDs
 * are defined: `tcg-registry-componentClass-tcg` (placeholder for a
 * future TCG registry), `tcg-registry-componentClass-ietf` (IETF
 * RFC 8348 IANA Hardware Class), and
 * `tcg-registry-componentClass-dmtf` (placeholder for a future
 * SMBIOS-based registry). TCG Platform Certificate Profile v1.1
 * r19 §3.1.6.
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
