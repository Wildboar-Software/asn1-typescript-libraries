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
import { type OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';

/**
 * @summary OPERATION_PACKAGE
 * @description
 *
 * Roles of a pair of ROS-objects in terms of which operations each may invoke of the other. Asymmetrical packages label the parties consumer and supplier (ITU-T Rec. X.880 (07/94) §8.4). In `WITH SYNTAX`, `CONSUMER INVOKES` fills `&Supplier` (operations the consumer invokes and the supplier performs) and `SUPPLIER INVOKES` fills `&Consumer`. All operations in the package must have distinct `&operationCode`s; all their errors, distinct `&errorCode`s (X.880 §8.4.6–8.4.7).
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
   * @description Operations both parties shall be capable of performing (X.880 §8.4.2). Syntax: `OPERATIONS`.
   */
  readonly '&Both'?: OPERATION[];
  /**
   * @summary &Consumer
   * @description Operations the **consumer** shall perform (i.e. the supplier invokes them). Syntax: `SUPPLIER INVOKES` (X.880 §8.4.3).
   */
  readonly '&Consumer'?: OPERATION[];
  /**
   * @summary &Supplier
   * @description Operations the **supplier** shall perform (i.e. the consumer invokes them). Syntax: `CONSUMER INVOKES` (X.880 §8.4.4).
   */
  readonly '&Supplier'?: OPERATION[];
  /**
   * @summary &id
   * @description Object identifier for announcing or negotiating the package. Without `&id` the package cannot be announced or negotiated (X.880 §8.4.5).
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
