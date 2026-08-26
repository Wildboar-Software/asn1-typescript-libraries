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
import { type KEY_DERIVATION } from '../AlgorithmInformation-2009/KEY-DERIVATION.oca.mjs';

/**
 * @summary SupportedKeyDerivationFunctions
 * @description
 *
 * Object set of supported key-derivation algorithms for
 * `KeyAgreePublicKey` ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedKeyDerivationFunctions KEY-DERIVATION ::= {...}
 * ```
 *
 * @constant
 * @type {KEY_DERIVATION[]}
 *
 */
export const SupportedKeyDerivationFunctions: KEY_DERIVATION[] = [];

/* eslint-enable */
