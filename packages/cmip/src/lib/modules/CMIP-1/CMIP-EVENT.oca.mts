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
  EventTypeId,
  _decode_EventTypeId,
  _encode_EventTypeId,
} from '../CMIP-1/EventTypeId.ta.mjs';

/**
 * @summary CMIP_EVENT
 * @description
 *
 * Information object class for an event type and its
 * information ASN.1 type. GDMO templates (ITU-T Rec.
 * X.722) remain an alternative. ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I);
 * Cor.2.
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
   * @description Unique event type (`EventTypeId`).
   */
  readonly '&id'?: EventTypeId;
  /**
   * @summary &Value
   * @description Event-information ASN.1 type for `&id`.
   */
  readonly '&Value': Value;
}

/* eslint-enable */
