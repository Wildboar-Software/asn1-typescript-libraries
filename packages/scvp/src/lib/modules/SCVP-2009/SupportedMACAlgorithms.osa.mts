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
import { type MAC_ALGORITHM } from '../AlgorithmInformation-2009/MAC-ALGORITHM.oca.mjs';

/**
 * @summary SupportedMACAlgorithms
 * @description
 *
 * Object set of supported MAC algorithms for `KeyAgreePublicKey`
 * ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedMACAlgorithms MAC-ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM[]}
 *
 */
export const SupportedMACAlgorithms: MAC_ALGORITHM[] = [];

/* eslint-enable */
