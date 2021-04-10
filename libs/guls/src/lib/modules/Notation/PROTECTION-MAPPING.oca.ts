/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca';
export { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca';

/* START_OF_SYMBOL_DEFINITION PROTECTION_MAPPING */
/**
 * @summary PROTECTION_MAPPING
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PROTECTION-MAPPING ::= CLASS {
 *   &SecurityTransformation  SECURITY-TRANSFORMATION,
 *   -- &SecurityTransformation specifies an ASN.1 object set of the
 *   -- SECURITY-TRANSFORMATION class. Use of the particular
 *   -- protection mapping implies use of one of the specified
 *   -- transformations, with the choice being left to the
 *   -- encoding system. Rules for selecting between these security
 *   -- transformations may be specified in comments.
 *   &protTransferSyntax      OBJECT IDENTIFIER DEFAULT {joint-iso-itu-t
 *                                                           genericULS(20)
 *                                                           generalTransferSyntax(2)},
 *   -- Identifies the particular protecting transfer syntax to
 *   -- be used in an EMDEDDED PDV encoding for the embedded
 *   -- option.
 *   &bypassPermitted         BOOLEAN DEFAULT FALSE
 *   -- Indicates if bypassing of protection is permitted
 * }
 * WITH SYNTAX {
 *   SECURITY-TRANSFORMATION &SecurityTransformation
 *   [PROTECTING-TRANSFER-SYNTAX &protTransferSyntax]
 *   [BYPASS-PERMITTED &bypassPermitted]
 * }
 * ```
 *
 * @interface
 */
export interface PROTECTION_MAPPING {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'PROTECTION-MAPPING';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof PROTECTION_MAPPING]: $.ASN1Decoder<PROTECTION_MAPPING[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof PROTECTION_MAPPING]: $.ASN1Encoder<PROTECTION_MAPPING[_K]>;
    }
  >;
  /**
   * @summary &SecurityTransformation
   */
  readonly '&SecurityTransformation'?: SECURITY_TRANSFORMATION[];
  /**
   * @summary &protTransferSyntax
   */
  readonly '&protTransferSyntax'?: OBJECT_IDENTIFIER;
  /**
   * @summary &bypassPermitted
   */
  readonly '&bypassPermitted'?: BOOLEAN;
}
/* END_OF_SYMBOL_DEFINITION PROTECTION_MAPPING */

/* eslint-enable */
