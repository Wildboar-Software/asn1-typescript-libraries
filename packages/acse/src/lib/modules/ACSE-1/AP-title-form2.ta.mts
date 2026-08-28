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
 * @summary AP_title_form2
 * @description
 *
 * OBJECT IDENTIFIER form of an application-process title. Combined
 * with AE-qualifier-form2 as in X.665 | ISO/IEC 9834-6. ITU-T Rec.
 * X.227 bis (1998) §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-title-form2  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AP_title_form2 = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_AP_title_form2 = $._decodeObjectIdentifier;


export const _encode_AP_title_form2 = $._encodeObjectIdentifier;


/* eslint-enable */
