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
import { type SEC_EXCHG_ITEM } from '../Notation/SEC-EXCHG-ITEM.oca.mjs';
import {
  Identifier,
  _decode_Identifier,
  _encode_Identifier,
} from '../Notation/Identifier.ta.mjs';

/**
 * @summary SECURITY_EXCHANGE
 * @description
 *
 * Information object class for one security exchange: a sequence
 * of Security Exchange Items (SEIs) identified by a local integer
 * or a global OID. Used by SESE so application ASEs stay
 * mechanism-independent. Exchanges are Alternating (one transfer
 * at a time, directions alternate) or Arbitrary (no direction
 * constraint; both directions may be active). ITU-T Rec. X.830
 * (04/95) [§6](https://www.itu.int/rec/T-REC-X.830-199504-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SECURITY-EXCHANGE ::= CLASS
 *    -- This information object class definition is for use when
 *   -- specifying a particular instance of a security exchange.
 *   {
 *   &SE-Items       SEC-EXCHG-ITEM,
 *   -- This is an ASN.1 information object set, comprising a set
 *   -- of security exchange items
 *   &sE-Identifier  Identifier UNIQUE
 *   -- A local or global identifier for the particular security
 *   -- exchange
 * }
 * WITH SYNTAX
 *  -- The following syntax is used to specify a particular security
 * -- exchange.
 * {SE-ITEMS &SE-Items
 *  IDENTIFIER &sE-Identifier
 * }
 * ```
 *
 * @interface
 */
export interface SECURITY_EXCHANGE {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'SECURITY-EXCHANGE';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof SECURITY_EXCHANGE]: $.ASN1Decoder<SECURITY_EXCHANGE[_K]>;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof SECURITY_EXCHANGE]: $.ASN1Encoder<SECURITY_EXCHANGE[_K]>;
    }
  >;
  /**
   * @summary &SE-Items
   * @description
   *
   * Object set of `SEC-EXCHG-ITEM`s that make up the
   * exchange. ITU-T Rec. X.830 (04/95) §6.2, Annex A.
   */
  readonly '&SE-Items'?: SEC_EXCHG_ITEM[];
  /**
   * @summary &sE-Identifier
   * @description
   *
   * Local integer or global OID naming this exchange in
   * protocol. UNIQUE. ITU-T Rec. X.830 (04/95) §6.2, Annex A.
   */
  readonly '&sE-Identifier'?: Identifier;
}

/* eslint-enable */
