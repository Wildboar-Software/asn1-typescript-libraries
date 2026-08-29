/* eslint-disable */
import {
    NULL,
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
 * @summary Null
 * @description
 *
 * Syntax of GRM specific-error parameters
 * `roleCardinalityViolation` (`{grm-Parameter 3}`) and
 * `relationshipCardinalityViolation` (`{grm-Parameter 4}`).
 * Signalled when a bind or unbind would violate a role or
 * relationship cardinality constraint; the parameter value
 * shall be null. ITU-T Rec. X.725 (11/95)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.725-199511-I),
 * §8.6.4, Annex B.5, B.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Null  ::=  NULL
 * ```
 */
export type Null = NULL; // NullType


export const _decode_Null = $._decodeNull;


export const _encode_Null = $._encodeNull;


/* eslint-enable */
