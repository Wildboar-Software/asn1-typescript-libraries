/* eslint-disable */
import {
  type INTEGER,
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
 * @summary ASO_qualifier_form2
 * @description
 *
 * INTEGER form of ASO/AE-qualifier. Combined with AP-title-form2 as
 * in X.665 | ISO/IEC 9834-6. ITU-T Rec. X.227 bis (1998) §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-qualifier-form2  ::=  INTEGER
 * ```
 */
export type ASO_qualifier_form2 = INTEGER;


export const _decode_ASO_qualifier_form2: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ASO_qualifier_form2: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
