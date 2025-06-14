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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { CONTRACT } from '../Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
/* START_OF_SYMBOL_DEFINITION ROS_OBJECT_CLASS */
/**
 * @summary ROS_OBJECT_CLASS
 * @description
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
   */
  readonly '&Is'?: ROS_OBJECT_CLASS[];
  /**
   * @summary &Initiates
   */
  readonly '&Initiates'?: CONTRACT[];
  /**
   * @summary &Responds
   */
  readonly '&Responds'?: CONTRACT[];
  /**
   * @summary &InitiatesAndResponds
   */
  readonly '&InitiatesAndResponds'?: CONTRACT[];
  /**
   * @summary &id
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION ROS_OBJECT_CLASS */

/* eslint-enable */
