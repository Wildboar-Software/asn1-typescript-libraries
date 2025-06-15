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
import { authenticationFailure } from '../GulsSecurityExchanges/authenticationFailure.oa.mjs';
import { SEC_EXCHG_ITEM } from '../Notation/SEC-EXCHG-ITEM.oca.mjs';
import {
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/Credentials.ta.mjs";


/**
 * @summary initiatorCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * initiatorCredentials SEC-EXCHG-ITEM ::= {
 *   ITEM-TYPE  DirectoryAbstractService.Credentials
 *   ITEM-ID    1
 *   ERRORS     {authenticationFailure}
 * }
 * ```
 *
 * @constant
 * @type {SEC_EXCHG_ITEM<DirectoryAbstractService.Credentials>}
 * @implements {SEC_EXCHG_ITEM<DirectoryAbstractService.Credentials>}
 */
export const initiatorCredentials: SEC_EXCHG_ITEM<Credentials> = {
  class: 'SEC-EXCHG-ITEM',
  decoderFor: {
    '&ItemType': _decode_Credentials,
  },
  encoderFor: {
    '&ItemType': _encode_Credentials,
  },
  '&itemId': 1 /* OBJECT_FIELD_SETTING */,
  '&Errors': [authenticationFailure] /* OBJECT_FIELD_SETTING */,
  '&ItemType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
