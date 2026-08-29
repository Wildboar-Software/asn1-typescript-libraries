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


/**
 * @summary SECURITY_PROTOCOL
 * @description
 *
 * Information object class for a BIP security protocol: an
 * object identifier (`&id`) and an open parameter type
 * (`&Parameter`). Instances populate `SecurityProtocols`.
 * ITU-T Rec. X.1083 (11/2007)
 * [Annex B.12](https://www.itu.int/rec/T-REC-X.1083-200711-I).
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
   * @description
   *
   * Object identifier of the security protocol. X.1083 Annex
   * B.12.
   */
  readonly '&id'?: OBJECT_IDENTIFIER;
  /**
   * @summary &Parameter
   * @description
   *
   * Type of the protocol-specific parameter. X.1083 Annex B.12.
   */
  readonly '&Parameter': Parameter;
}

/* eslint-enable */
