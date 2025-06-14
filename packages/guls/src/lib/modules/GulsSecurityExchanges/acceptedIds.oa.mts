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
import {
  Negotiation_SEI,
  _decode_Negotiation_SEI,
  _encode_Negotiation_SEI,
} from '../GulsSecurityExchanges/Negotiation-SEI.ta.mjs';
import { SEC_EXCHG_ITEM } from '../Notation/SEC-EXCHG-ITEM.oca.mjs';
/* START_OF_SYMBOL_DEFINITION acceptedIds */
/**
 * @summary acceptedIds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptedIds SEC-EXCHG-ITEM ::= {ITEM-TYPE  Negotiation-SEI
 *                                 ITEM-ID    2
 * }
 * ```
 *
 * @constant
 * @type {SEC_EXCHG_ITEM<Negotiation_SEI>}
 * @implements {SEC_EXCHG_ITEM<Negotiation_SEI>}
 */
export const acceptedIds: SEC_EXCHG_ITEM<Negotiation_SEI> = {
  class: 'SEC-EXCHG-ITEM',
  decoderFor: {
    '&ItemType': _decode_Negotiation_SEI,
  },
  encoderFor: {
    '&ItemType': _encode_Negotiation_SEI,
  },
  '&itemId': 2 /* OBJECT_FIELD_SETTING */,
  '&ItemType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION acceptedIds */

/* eslint-enable */
