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
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';

/* START_OF_SYMBOL_DEFINITION OPERATION_PACKAGE */
/**
 * @summary OPERATION_PACKAGE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATION-PACKAGE ::= CLASS {
 *   &Both      OPERATION OPTIONAL,
 *   &Consumer  OPERATION OPTIONAL,
 *   &Supplier  OPERATION OPTIONAL,
 *   &id        OBJECT IDENTIFIER UNIQUE OPTIONAL
 * }
 * -- continued on the next page
 * WITH SYNTAX {
 *   [OPERATIONS &Both]
 *   [CONSUMER INVOKES &Supplier]
 *   [SUPPLIER INVOKES &Consumer]
 *   [ID &id]
 * }
 * ```
 *
 * @interface
 */
export interface OPERATION_PACKAGE {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'OPERATION-PACKAGE';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof OPERATION_PACKAGE]: $.ASN1Decoder<OPERATION_PACKAGE[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof OPERATION_PACKAGE]: $.ASN1Encoder<OPERATION_PACKAGE[_K]>;
    }
  >;
  /**
   * @summary &Both
   */
  readonly '&Both'?: OPERATION[];
  /**
   * @summary &Consumer
   */
  readonly '&Consumer'?: OPERATION[];
  /**
   * @summary &Supplier
   */
  readonly '&Supplier'?: OPERATION[];
  /**
   * @summary &id
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION OPERATION_PACKAGE */

/* eslint-enable */
