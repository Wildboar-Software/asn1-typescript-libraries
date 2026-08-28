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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { type SE_ERROR } from '../Notation/SE-ERROR.oca.mjs';

/**
 * @summary SEC_EXCHG_ITEM
 * @description
 *
 * One Security Exchange Item (SEI): the ASN.1 type transferred,
 * its item-id (1, 2, 3, …), and optional errors the receiver may
 * signal. An SEI may itself contain `PROTECTED` components.
 * ITU-T Rec. X.830 (04/95) [§6.2](https://www.itu.int/rec/T-REC-X.830-199504-I), Annex A.
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
   * @description
   *
   * Abstract syntax of this SEI. ITU-T Rec. X.830 (04/95)
   * §6.2, Annex A.
   */
  readonly '&ItemType': ItemType;
  /**
   * @summary &itemId
   * @description
   *
   * Integer identifying this item within the exchange
   * (typically 1, 2, 3, …). ITU-T Rec. X.830 (04/95) §6.2,
   * Annex A.
   */
  readonly '&itemId'?: INTEGER;
  /**
   * @summary &Errors
   * @description
   *
   * Errors that may result from transferring this SEI.
   * ITU-T Rec. X.830 (04/95) §6.2, Annex A.
   */
  readonly '&Errors'?: SE_ERROR[];
}

/* eslint-enable */
