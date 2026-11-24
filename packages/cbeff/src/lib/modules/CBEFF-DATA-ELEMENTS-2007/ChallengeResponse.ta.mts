/* eslint-disable */
import {
  type OCTET_STRING,
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
 * @summary ChallengeResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChallengeResponse  ::=  OCTET STRING
 * ```
 */
export type ChallengeResponse = OCTET_STRING; // OctetStringType


export const _decode_ChallengeResponse: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;


export const _encode_ChallengeResponse: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
