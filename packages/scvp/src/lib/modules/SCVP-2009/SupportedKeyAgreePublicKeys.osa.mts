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
import {
    KEY_AGREE,
} from '../AlgorithmInformation-2009/KEY-AGREE.oca.mjs';

/**
 * @summary SupportedKeyAgreePublicKeys
 * @description
 *
 * Object set of supported key-agreement public-key algorithms for
 * `KeyAgreePublicKey` ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedKeyAgreePublicKeys KEY-AGREE ::= {...}
 * ```
 *
 * @constant
 * @type {KEY_AGREE[]}
 *
 */
export const SupportedKeyAgreePublicKeys: KEY_AGREE[] = [];

/* eslint-enable */
