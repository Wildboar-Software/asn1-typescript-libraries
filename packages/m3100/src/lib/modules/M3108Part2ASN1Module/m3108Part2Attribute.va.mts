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
import { m3108Part2Identifier } from '../M3108Part2ASN1Module/m3108Part2Identifier.va.mjs';

/**
 * @summary m3108Part2Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108Part2Attribute OBJECT IDENTIFIER ::= {m3108Part2Identifier attribute(6)}
 * ```
 *
 * @constant
 */
export const m3108Part2Attribute: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 6],
    m3108Part2Identifier
);

/* eslint-enable */
