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
 * @summary ObjectIdentifier
 * @description
 *
 * OID syntax for `specificProblemsIndicator`: identifies the
 * metric-monitoring type placed in the specific-problems
 * parameter of a quality-of-service alarm. X.739 registers
 * `resourceRequestRate`, `resourceUtilization`, and
 * `rejectionRate`. Specified at metric-object creation. ITU-T
 * Rec. X.739 (11/93)
 * [§8.1.9.7.2](https://www.itu.int/rec/T-REC-X.739-199311-I),
 * §8.2.1, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ObjectIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ObjectIdentifier = $._decodeObjectIdentifier;


export const _encode_ObjectIdentifier = $._encodeObjectIdentifier;


/* eslint-enable */
