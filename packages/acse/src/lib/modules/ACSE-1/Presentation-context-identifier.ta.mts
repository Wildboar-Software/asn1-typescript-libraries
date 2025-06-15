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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary Presentation_context_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier  ::=  INTEGER
 * ```
 */
export type Presentation_context_identifier = INTEGER;


export const _decode_Presentation_context_identifier = $._decodeInteger;


export const _encode_Presentation_context_identifier = $._encodeInteger;


/* eslint-enable */
