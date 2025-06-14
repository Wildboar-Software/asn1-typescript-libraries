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
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CMIP_ATTRIBUTE */
/**
 * @summary CMIP_ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIP-ATTRIBUTE ::= CLASS {&id     AttributeId UNIQUE,
 *                           &Value
 * }WITH SYNTAX {TYPE &Value
 *               ID &id
 * }
 * ```
 *
 * @interface
 */
export interface CMIP_ATTRIBUTE<
  Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'CMIP-ATTRIBUTE';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof CMIP_ATTRIBUTE<Value>]: $.ASN1Decoder<
        CMIP_ATTRIBUTE<Value>[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof CMIP_ATTRIBUTE<Value>]: $.ASN1Encoder<
        CMIP_ATTRIBUTE<Value>[_K]
      >;
    }
  >;
  /**
   * @summary &id
   */
  readonly '&id'?: AttributeId;
  /**
   * @summary &Value
   */
  readonly '&Value': Value;
}
/* END_OF_SYMBOL_DEFINITION CMIP_ATTRIBUTE */

/* eslint-enable */
