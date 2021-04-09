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
import { CONTRACT } from '../Remote-Operations-Information-Objects/CONTRACT.oca';
export { CONTRACT } from '../Remote-Operations-Information-Objects/CONTRACT.oca';
import { REALIZATION } from '../Remote-Operations-Information-Objects-extensions/REALIZATION.oca';
export { REALIZATION } from '../Remote-Operations-Information-Objects-extensions/REALIZATION.oca';

/* START_OF_SYMBOL_DEFINITION APPLICATION_CONTEXT */
/**
 * @summary APPLICATION_CONTEXT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * APPLICATION-CONTEXT ::= CLASS {
 *   &probe                   BOOLEAN DEFAULT FALSE,
 *   &acknowledge             BOOLEAN DEFAULT FALSE,
 *   &associationContract     CONTRACT,
 *   &associationRealization  REALIZATION OPTIONAL,
 *   &transferRealization     REALIZATION,
 *   &AbstractSyntaxes        ABSTRACT-SYNTAX,
 *   &applicationContextName  OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX {
 *   [PROBE &probe]
 *   [ACKNOWLEDGE &acknowledge]
 *   CONTRACT &associationContract
 *   [ESTABLISHED BY &associationRealization]
 *   INFORMATION TRANSFER BY &transferRealization
 *   ABSTRACT SYNTAXES &AbstractSyntaxes
 *   APPLICATION CONTEXT NAME &applicationContextName
 * }
 * ```
 *
 * @interface
 */
export interface APPLICATION_CONTEXT {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'APPLICATION-CONTEXT';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof APPLICATION_CONTEXT]: $.ASN1Decoder<APPLICATION_CONTEXT[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof APPLICATION_CONTEXT]: $.ASN1Encoder<APPLICATION_CONTEXT[_K]>;
    }
  >;
  /**
   * @summary &probe
   */
  readonly '&probe'?: BOOLEAN;
  /**
   * @summary &acknowledge
   */
  readonly '&acknowledge'?: BOOLEAN;
  /**
   * @summary &associationContract
   */
  readonly '&associationContract'?: CONTRACT;
  /**
   * @summary &associationRealization
   */
  readonly '&associationRealization'?: REALIZATION;
  /**
   * @summary &transferRealization
   */
  readonly '&transferRealization'?: REALIZATION;
  /**
   * @summary &AbstractSyntaxes
   */
  readonly '&AbstractSyntaxes'?: ABSTRACT_SYNTAX[];
  /**
   * @summary &applicationContextName
   */
  readonly '&applicationContextName'?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION APPLICATION_CONTEXT */

/* eslint-enable */
