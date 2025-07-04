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
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';

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

/* eslint-enable */
