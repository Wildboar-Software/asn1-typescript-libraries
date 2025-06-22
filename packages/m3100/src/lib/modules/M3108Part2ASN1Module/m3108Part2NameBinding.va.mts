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
} from 'asn1-ts';
import { m3108Part2Identifier } from '../M3108Part2ASN1Module/m3108Part2Identifier.va.mjs';

/**
 * @summary m3108Part2NameBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108Part2NameBinding OBJECT IDENTIFIER ::= {m3108Part2Identifier nameBinding(5)}
 * ```
 *
 * @constant
 */
export const m3108Part2NameBinding: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* nameBinding */ 5],
    m3108Part2Identifier
);

/* eslint-enable */
