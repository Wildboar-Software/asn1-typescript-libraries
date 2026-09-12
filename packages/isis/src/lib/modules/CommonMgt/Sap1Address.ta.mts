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
 * @summary Sap1Address
 * @description
 *
 * Address of a layer-1-style SAP (`sap1Address` attribute).
 *
 * (ISO/IEC 10589:2002 Annex E.1.9 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sap1Address  ::=  INTEGER
 * ```
 */
export type Sap1Address = INTEGER;


export const _decode_Sap1Address = $._decodeInteger;


export const _encode_Sap1Address = $._encodeInteger;


/* eslint-enable */
