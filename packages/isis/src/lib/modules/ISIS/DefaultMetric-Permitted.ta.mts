/* eslint-disable */
import {
  INTEGER,
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
 * @summary DefaultMetric_Permitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefaultMetric-Permitted  ::=  INTEGER(1..maxLinkMetric)
 * ```
 */
export type DefaultMetric_Permitted = INTEGER;


export const _decode_DefaultMetric_Permitted = $._decodeInteger;


export const _encode_DefaultMetric_Permitted = $._encodeInteger;


/* eslint-enable */
