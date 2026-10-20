/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ComponentClassRegistry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentClassRegistry  ::=  OBJECT IDENTIFIER (
 *     tcg-registry-componentClass-tcg
 *     | tcg-registry-componentClass-dmtf
 *     | tcg-registry-componentClass-pcie
 *     | tcg-registry-componentClass-storage
 * )
 * ```
 */
export
type ComponentClassRegistry = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_ComponentClassRegistry: $.ASN1Decoder<ComponentClassRegistry> = $._decodeObjectIdentifier;

export
const _encode_ComponentClassRegistry: $.ASN1Encoder<ComponentClassRegistry> = $._encodeObjectIdentifier;

/* eslint-enable */
