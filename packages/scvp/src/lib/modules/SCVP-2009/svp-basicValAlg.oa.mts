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
import { id_svp_basicValAlg } from '../SCVP-2009/id-svp-basicValAlg.va.mjs';
import { type POLICY } from '../SCVP-2009/POLICY.oca.mjs';
/**
 * @summary svp_basicValAlg
 * @description
 *
 * Basic validation algorithm policy object
 * (`id-svp-basicValAlg`). Implements PKIX path validation
 * (RFC 5280 §6 for PKCs; RFC 5755 §5 for ACs). Parameters MUST be
 * absent ([RFC 5055 §3.2.4.2.1](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.4.2.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * svp-basicValAlg POLICY ::= {IDENTIFIED BY id-svp-basicValAlg }
 * ```
 *
 * @constant
 * @type {POLICY}
 * @implements {POLICY}
 */
export const svp_basicValAlg: POLICY = {
  class: 'ATTRIBUTE',
  decoderFor: {
    '&Type': undefined,
  },
  encoderFor: {
    '&Type': undefined,
  },
  '&id': id_svp_basicValAlg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
//   '&minCount': 1 /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
