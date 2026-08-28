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
import { type CONNECTION_PACKAGE } from '../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs';
import { type OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs';


/**
 * @summary CONTRACT
 * @description
 *
 * Association contract: roles of a pair of ROS-objects that may establish an association, in terms of a connection package and operation packages (ITU-T Rec. X.880 (07/94) §8.6). In `WITH SYNTAX`, `RESPONDER CONSUMER OF` fills `&InitiatorSupplierOf` (initiator plays supplier when the responder is consumer).
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
   * @description If present, associations are established and released dynamically using this connection package's bind and unbind operations (X.880 §8.6.2).
   */
  readonly '&connection'?: CONNECTION_PACKAGE;
  /**
   * @summary &OperationsOf
   * @description Packages applicable while the association exists that are symmetrical, or in which the initiator may play both consumer and supplier (X.880 §8.6.3). Syntax: `OPERATIONS OF`.
   */
  readonly '&OperationsOf'?: OPERATION_PACKAGE[];
  /**
   * @summary &InitiatorConsumerOf
   * @description Packages in which the association initiator plays consumer (X.880 §8.6.4). Syntax: `INITIATOR CONSUMER OF`.
   */
  readonly '&InitiatorConsumerOf'?: OPERATION_PACKAGE[];
  /**
   * @summary &InitiatorSupplierOf
   * @description Packages in which the association initiator plays supplier (X.880 §8.6.5). Syntax: `RESPONDER CONSUMER OF`.
   */
  readonly '&InitiatorSupplierOf'?: OPERATION_PACKAGE[];
  /**
   * @summary &id
   * @description Object identifier for announcing or negotiating the contract. Without `&id` it cannot be announced or negotiated (X.880 §8.6.6).
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
