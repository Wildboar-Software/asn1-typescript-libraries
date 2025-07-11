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
  Identifier,
  _decode_Identifier,
  _encode_Identifier,
} from '../Notation/Identifier.ta.mjs';

/**
 * @summary SE_ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SE-ERROR ::= CLASS {
 *   &ParameterType  OPTIONAL,
 *   -- ASN.1 type of a parameter to accompany the signalling
 *   -- of the error condition back to the sender of the SEI
 *   &errorCode      Identifier UNIQUE
 *   -- An identifier used in signalling the error condition
 *   -- back to the sender of the SEI
 * }WITH SYNTAX {[PARAMETER &ParameterType]
 *               ERROR-CODE &errorCode
 * }
 * ```
 *
 * @interface
 */
export interface SE_ERROR<
  ParameterType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'SE-ERROR';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof SE_ERROR<ParameterType>]: $.ASN1Decoder<
        SE_ERROR<ParameterType>[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof SE_ERROR<ParameterType>]: $.ASN1Encoder<
        SE_ERROR<ParameterType>[_K]
      >;
    }
  >;
  /**
   * @summary &ParameterType
   */
  readonly '&ParameterType': ParameterType;
  /**
   * @summary &errorCode
   */
  readonly '&errorCode'?: Identifier;
}

/* eslint-enable */
