/* eslint-disable */
import {
  INTEGER,
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
import { SE_ERROR } from '../Notation/SE-ERROR.oca.mjs';
/* START_OF_SYMBOL_DEFINITION SEC_EXCHG_ITEM */
/**
 * @summary SEC_EXCHG_ITEM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEC-EXCHG-ITEM ::= CLASS {
 *   &ItemType  ,
 *   --  ASN.1 type for this exchange item
 *   &itemId    INTEGER,
 *   --  Identifier for this item, e.g. 1, 2, 3, ..
 *   &Errors    SE-ERROR OPTIONAL
 *   --  Optional list of errors which may result from
 *   --  transfer of this item
 * }WITH SYNTAX {ITEM-TYPE &ItemType
 *               ITEM-ID &itemId
 *               [ERRORS &Errors]
 * }
 * ```
 *
 * @interface
 */
export interface SEC_EXCHG_ITEM<
  ItemType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'SEC-EXCHG-ITEM';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof SEC_EXCHG_ITEM<ItemType>]: $.ASN1Decoder<
        SEC_EXCHG_ITEM<ItemType>[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof SEC_EXCHG_ITEM<ItemType>]: $.ASN1Encoder<
        SEC_EXCHG_ITEM<ItemType>[_K]
      >;
    }
  >;
  /**
   * @summary &ItemType
   */
  readonly '&ItemType': ItemType;
  /**
   * @summary &itemId
   */
  readonly '&itemId'?: INTEGER;
  /**
   * @summary &Errors
   */
  readonly '&Errors'?: SE_ERROR[];
}
/* END_OF_SYMBOL_DEFINITION SEC_EXCHG_ITEM */

/* eslint-enable */
