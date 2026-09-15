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
 * @summary InformationType
 * @description
 *
 * Type of a `communicationsInformation` event (OBJECT IDENTIFIER). Also the
 * syntax of the `informationType` attribute on
 * `communicationsInformationRecord`.
 *
 * (ISO/IEC 10589:2002 Annex E.1.1, E.1.9 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type InformationType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_InformationType = $._decodeObjectIdentifier;


export const _encode_InformationType = $._encodeObjectIdentifier;


/* eslint-enable */
