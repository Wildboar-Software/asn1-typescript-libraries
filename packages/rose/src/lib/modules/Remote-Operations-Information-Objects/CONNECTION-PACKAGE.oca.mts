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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { emptyBind } from '../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs';
export { emptyBind } from '../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs';
import { emptyUnbind } from '../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs';
export { emptyUnbind } from '../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs';

/* START_OF_SYMBOL_DEFINITION CONNECTION_PACKAGE */
/**
 * @summary CONNECTION_PACKAGE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONNECTION-PACKAGE ::= CLASS {
 *   &bind                OPERATION DEFAULT emptyBind,
 *   &unbind              OPERATION DEFAULT emptyUnbind,
 *   &responderCanUnbind  BOOLEAN DEFAULT FALSE,
 *   &unbindCanFail       BOOLEAN DEFAULT FALSE,
 *   &id                  OBJECT IDENTIFIER UNIQUE OPTIONAL
 * }
 * WITH SYNTAX {
 *   [BIND &bind]
 *   [UNBIND &unbind]
 *   [RESPONDER UNBIND &responderCanUnbind]
 *   [FAILURE TO UNBIND &unbindCanFail]
 *   [ID &id]
 * }
 * ```
 *
 * @interface
 */
export interface CONNECTION_PACKAGE {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'CONNECTION-PACKAGE';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof CONNECTION_PACKAGE]: $.ASN1Decoder<CONNECTION_PACKAGE[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof CONNECTION_PACKAGE]: $.ASN1Encoder<CONNECTION_PACKAGE[_K]>;
    }
  >;
  /**
   * @summary &bind
   */
  readonly '&bind'?: OPERATION;
  /**
   * @summary &unbind
   */
  readonly '&unbind'?: OPERATION;
  /**
   * @summary &responderCanUnbind
   */
  readonly '&responderCanUnbind'?: BOOLEAN;
  /**
   * @summary &unbindCanFail
   */
  readonly '&unbindCanFail'?: BOOLEAN;
  /**
   * @summary &id
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION CONNECTION_PACKAGE */

/* eslint-enable */
