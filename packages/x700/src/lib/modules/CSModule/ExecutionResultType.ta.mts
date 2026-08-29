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
 * @summary ExecutionResultType
 * @description
 *
 * Type of result a script is expected to produce, and the type
 * carried in an execution result. The two should correspond.
 * Rec does not enumerate result-type OIDs. ITU-T Rec. X.753
 * (10/97)
 * [§7.2](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §8.1.4.2.2, A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecutionResultType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ExecutionResultType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ExecutionResultType = $._decodeObjectIdentifier;


export const _encode_ExecutionResultType = $._encodeObjectIdentifier;


/* eslint-enable */
