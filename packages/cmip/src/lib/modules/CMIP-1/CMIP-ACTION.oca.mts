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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  ActionTypeId,
  _decode_ActionTypeId,
  _encode_ActionTypeId,
} from '../CMIP-1/ActionTypeId.ta.mjs';

/**
 * @summary CMIP_ACTION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIP-ACTION ::= CLASS {&id     ActionTypeId UNIQUE,
 *                        &Value
 * }WITH SYNTAX {TYPE &Value
 *               ID &id
 * }
 * ```
 *
 * @interface
 */
export interface CMIP_ACTION<
  Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'CMIP-ACTION';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof CMIP_ACTION<Value>]: $.ASN1Decoder<CMIP_ACTION<Value>[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof CMIP_ACTION<Value>]: $.ASN1Encoder<CMIP_ACTION<Value>[_K]>;
    }
  >;
  /**
   * @summary &id
   */
  readonly '&id'?: ActionTypeId;
  /**
   * @summary &Value
   */
  readonly '&Value': Value;
}

/* eslint-enable */
