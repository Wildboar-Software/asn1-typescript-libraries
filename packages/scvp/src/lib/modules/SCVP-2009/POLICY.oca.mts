/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import type { ATTRIBUTE } from '@wildboar/x500/InformationFramework';

/**
 * @summary POLICY
 * @description
 *
 * Alias of `ATTRIBUTE` used for SCVP validation-policy and
 * validation-algorithm information objects ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POLICY ::= ATTRIBUTE
 * ```
 *
 * @interface
 */
export type POLICY = ATTRIBUTE;

/* eslint-enable */
