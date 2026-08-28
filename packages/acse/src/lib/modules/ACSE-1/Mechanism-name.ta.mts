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
 * @summary Mechanism_name
 * @description
 *
 * OBJECT IDENTIFIER of the authentication-mechanism (or of a more
 * general security ASE). If absent, the mechanism is known by prior
 * agreement. Registration: ITU-T Rec. X.227 bis (1998) §12. Annex B
 * password: `{ joint-iso-ccitt association-control(2) authentication-mechanism(3) password-1(1) }`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mechanism-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Mechanism_name = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_Mechanism_name = $._decodeObjectIdentifier;


export const _encode_Mechanism_name = $._encodeObjectIdentifier;


/* eslint-enable */
