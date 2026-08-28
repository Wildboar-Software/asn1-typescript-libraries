/* eslint-disable */
import {
  INTEGER,
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
 * @summary KEY_INFORMATION
 * @description
 *
 * Key-information formats for a class of protection mechanism
 * (e.g. symmetric vs asymmetric). Used as a parameter of
 * `gulsSignedTransformation` and `gulsSignatureTransformation`.
 * `local` `&kiClass` values are defined only in this module;
 * `global` values are defined elsewhere. ITU-T Rec. X.830 (04/95)
 * [Annex D.6](https://www.itu.int/rec/T-REC-X.830-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEY-INFORMATION ::= CLASS
 *    -- This information object class definition is for use when
 *   -- specifying key information relating to particular classes
 *   -- of protection mechanisms (e.g. symmetric, asymmetric).
 *   -- It may be useful in defining various security transformations.
 *   {
 *   &kiClass  CHOICE {local   INTEGER,
 *                         -- local objects can only be defined within this
 *                         -- ASN.1 module.
 *                         global  OBJECT IDENTIFIER
 *                         -- global objects are defined elsewhere
 *   } UNIQUE,
 *   &KiType
 * }WITH SYNTAX {KEY-INFO-CLASS &kiClass
 *               KEY-INFO-TYPE &KiType
 * }
 * ```
 *
 * @interface
 */
export interface KEY_INFORMATION<
  KiType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'KEY-INFORMATION';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof KEY_INFORMATION<KiType>]: $.ASN1Decoder<
        KEY_INFORMATION<KiType>[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof KEY_INFORMATION<KiType>]: $.ASN1Encoder<
        KEY_INFORMATION<KiType>[_K]
      >;
    }
  >;
  /**
   * @summary &kiClass
   * @description
   *
   * `local` integer (this module only) or `global` OID.
   * UNIQUE. ITU-T Rec. X.830 (04/95) Annex D.6.
   */
  readonly '&kiClass'?: { local: INTEGER } | { global: OBJECT_IDENTIFIER };
  /**
   * @summary &KiType
   * @description
   *
   * Syntax of the key-information value for this class.
   * ITU-T Rec. X.830 (04/95) Annex D.6.
   */
  readonly '&KiType': KiType;
}

/* eslint-enable */
