/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type ASN1Element as _Element,
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
 * @summary UnitsType
 * @description
 *
 * OID identifying a unit type (e.g. `ErrorUnitThreshold.unitType`).
 * The rec does not register values. ITU-T Rec. X.737 (11/95)
 * [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I). Cor.1 renamed `UnitType`
 * to `UnitsType`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitsType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type UnitsType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_UnitsType: $.ASN1Decoder<_OID> = $._decodeObjectIdentifier;


export const _encode_UnitsType: $.ASN1Encoder<_OID> = $._encodeObjectIdentifier;


/* eslint-enable */
