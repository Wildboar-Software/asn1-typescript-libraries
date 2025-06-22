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
import { CONNECTION_PACKAGE } from '../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs';
import { OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs';


/**
 * @summary CONTRACT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONTRACT ::= CLASS {
 *   &connection           CONNECTION-PACKAGE OPTIONAL,
 *   &OperationsOf         OPERATION-PACKAGE OPTIONAL,
 *   &InitiatorConsumerOf  OPERATION-PACKAGE OPTIONAL,
 *   &InitiatorSupplierOf  OPERATION-PACKAGE OPTIONAL,
 *   &id                   OBJECT IDENTIFIER UNIQUE OPTIONAL
 * }
 * WITH SYNTAX {
 *   [CONNECTION &connection]
 *   [OPERATIONS OF &OperationsOf]
 *   [INITIATOR CONSUMER OF &InitiatorConsumerOf]
 *   [RESPONDER CONSUMER OF &InitiatorSupplierOf]
 *   [ID &id]
 * }
 * ```
 *
 * @interface
 */
export interface CONTRACT {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'CONTRACT';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof CONTRACT]: $.ASN1Decoder<CONTRACT[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof CONTRACT]: $.ASN1Encoder<CONTRACT[_K]>;
    }
  >;
  /**
   * @summary &connection
   */
  readonly '&connection'?: CONNECTION_PACKAGE;
  /**
   * @summary &OperationsOf
   */
  readonly '&OperationsOf'?: OPERATION_PACKAGE[];
  /**
   * @summary &InitiatorConsumerOf
   */
  readonly '&InitiatorConsumerOf'?: OPERATION_PACKAGE[];
  /**
   * @summary &InitiatorSupplierOf
   */
  readonly '&InitiatorSupplierOf'?: OPERATION_PACKAGE[];
  /**
   * @summary &id
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
