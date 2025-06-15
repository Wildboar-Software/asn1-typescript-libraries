/* eslint-disable */
import {
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
import {
  EventTypeId,
  _decode_EventTypeId,
  _encode_EventTypeId,
} from '../CMIP-1/EventTypeId.ta.mjs';

/**
 * @summary CMIP_EVENT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIP-EVENT ::= CLASS {&id     EventTypeId UNIQUE,
 *                       &Value
 * }WITH SYNTAX {TYPE &Value
 *               ID &id
 * }
 * ```
 *
 * @interface
 */
export interface CMIP_EVENT<
  Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'CMIP-EVENT';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof CMIP_EVENT<Value>]: $.ASN1Decoder<CMIP_EVENT<Value>[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof CMIP_EVENT<Value>]: $.ASN1Encoder<CMIP_EVENT<Value>[_K]>;
    }
  >;
  /**
   * @summary &id
   */
  readonly '&id'?: EventTypeId;
  /**
   * @summary &Value
   */
  readonly '&Value': Value;
}

/* eslint-enable */
