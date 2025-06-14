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

/* START_OF_SYMBOL_DEFINITION SECURITY_PROTOCOL */
/**
 * @summary SECURITY_PROTOCOL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SECURITY-PROTOCOL ::= CLASS {&id         OBJECT IDENTIFIER,
 *                              &Parameter
 * }
 * ```
 *
 * @interface
 */
export interface SECURITY_PROTOCOL<
  Parameter = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'SECURITY-PROTOCOL';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof SECURITY_PROTOCOL<Parameter>]: $.ASN1Decoder<
        SECURITY_PROTOCOL<Parameter>[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof SECURITY_PROTOCOL<Parameter>]: $.ASN1Encoder<
        SECURITY_PROTOCOL<Parameter>[_K]
      >;
    }
  >;
  /**
   * @summary &id
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
  /**
   * @summary &Parameter
   */
  readonly '&Parameter': Parameter;
}
/* END_OF_SYMBOL_DEFINITION SECURITY_PROTOCOL */

/* eslint-enable */
