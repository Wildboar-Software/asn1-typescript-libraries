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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ASO_context_name
 * @description
 *
 * OBJECT IDENTIFIER naming the application / ASO-context used for
 * this A-UNIT-DATA. Classic ACSE (ITU-T Rec. X.217 (1995)
 * §9.5.1.1; X.237 (1995) §7.1.4.2) called this Application
 * Context Name: the context nominated by the requestor. X.237 bis
 * (1998) §7.1.4.2 uses the ASO-context name.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-context-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ASO_context_name = OBJECT_IDENTIFIER; // ObjectIdentifierType

/**
 * @summary Decode an `ASO_context_name` value
 * @param el The ASN.1 element to decode
 * @returns The decoded `ASO_context_name` value
 * @function
 */
export const _decode_ASO_context_name = $._decodeObjectIdentifier;

/**
 * @summary Encode an `ASO_context_name` value
 * @param value The `ASO_context_name` value to encode
 * @param elGetter The function to get the ASN.1 element to encode
 * @returns The encoded ASN.1 element
 * @function
 */
export const _encode_ASO_context_name = $._encodeObjectIdentifier;

/* eslint-enable */
