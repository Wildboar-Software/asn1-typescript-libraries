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
import { type CONTRACT } from '../Remote-Operations-Information-Objects/CONTRACT.oca.mjs';

/**
 * @summary ROS_OBJECT_CLASS
 * @description
 *
 * Capabilities of ROS-objects that interact under a particular set of association contracts (ITU-T Rec. X.880 (07/94) §8.7). `&id` is required (unlike most other ROS classes).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROS-OBJECT-CLASS ::= CLASS {
 *   &Is                    ROS-OBJECT-CLASS OPTIONAL,
 *   &Initiates             CONTRACT OPTIONAL,
 *   &Responds              CONTRACT OPTIONAL,
 *   &InitiatesAndResponds  CONTRACT OPTIONAL,
 *   &id                    OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX {
 *   [IS &Is]
 *   [BOTH &InitiatesAndResponds]
 *   [INITIATES &Initiates]
 *   [RESPONDS &Responds]
 *   ID &id
 * }
 * ```
 *
 * @interface
 */
export interface ROS_OBJECT_CLASS {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'ROS-OBJECT-CLASS';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof ROS_OBJECT_CLASS]: $.ASN1Decoder<ROS_OBJECT_CLASS[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof ROS_OBJECT_CLASS]: $.ASN1Encoder<ROS_OBJECT_CLASS[_K]>;
    }
  >;
  /**
   * @summary &Is
   * @description Superclasses; objects of this class support all contracts implied by those classes as well as those listed below (X.880 §8.7.2). Syntax: `IS`.
   */
  readonly '&Is'?: ROS_OBJECT_CLASS[];
  /**
   * @summary &Initiates
   * @description Contracts for which objects of the class shall be capable of playing initiator (X.880 §8.7.4). Syntax: `INITIATES`.
   */
  readonly '&Initiates'?: CONTRACT[];
  /**
   * @summary &Responds
   * @description Contracts for which objects of the class shall be capable of playing responder (X.880 §8.7.5). Syntax: `RESPONDS`.
   */
  readonly '&Responds'?: CONTRACT[];
  /**
   * @summary &InitiatesAndResponds
   * @description Contracts for which objects of the class shall be capable of acting as both initiator and responder (X.880 §8.7.3). Syntax: `BOTH`.
   */
  readonly '&InitiatesAndResponds'?: CONTRACT[];
  /**
   * @summary &id
   * @description Object identifier identifying this ROS-object class (required; X.880 §8.7.6).
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
