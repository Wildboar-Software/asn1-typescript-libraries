/* eslint-disable */
import {
  TYPE_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * Information object class for authentication-mechanism names
 * (`TYPE-IDENTIFIER`: `&id` OBJECT IDENTIFIER, `&Type` the
 * authentication-value syntax). Names are registered per ITU-T Rec.
 * X.227 bis (1998) §12. Annex B assigns
 * `{ joint-iso-ccitt association-control(2) authentication-mechanism(3) password-1(1) }`.
 */
export type MECHANISM_NAME = TYPE_IDENTIFIER;

/* eslint-enable */
