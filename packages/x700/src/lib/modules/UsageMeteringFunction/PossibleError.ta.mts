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
 * @summary PossibleError
 * @description
 *
 * Identifies a suspected error in usage data. X.742 does not
 * assign any such OIDs; specializations (or other recs) must
 * register them. ITU-T Rec. X.742 (04/95)
 * [§8.2.3.8](https://www.itu.int/rec/T-REC-X.742-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PossibleError  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PossibleError = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_PossibleError = $._decodeObjectIdentifier;


export const _encode_PossibleError = $._encodeObjectIdentifier;


/* eslint-enable */
