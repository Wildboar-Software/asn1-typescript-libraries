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
import { SEC_EXCHG_ITEM } from '../Notation/SEC-EXCHG-ITEM.oca.mjs';
import {
  Identifier,
  _decode_Identifier,
  _encode_Identifier,
} from '../Notation/Identifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SECURITY_EXCHANGE */
/**
 * @summary SECURITY_EXCHANGE
 * @description
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
   */
  readonly '&SE-Items'?: SEC_EXCHG_ITEM[];
  /**
   * @summary &sE-Identifier
   */
  readonly '&sE-Identifier'?: Identifier;
}
/* END_OF_SYMBOL_DEFINITION SECURITY_EXCHANGE */

/* eslint-enable */
