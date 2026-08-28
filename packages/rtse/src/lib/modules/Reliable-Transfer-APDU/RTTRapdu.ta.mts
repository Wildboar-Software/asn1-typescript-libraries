/* eslint-disable */
import {
  OCTET_STRING,
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
 * @summary RTTRapdu
 * @description
 *
 * RT-TRANSFER (RTTR). One segment (or the whole) of the encoded
 * RTSE-user APDU, carried as P-DATA user data inside a session
 * activity. Without checkpointing, a single RTTR is used; otherwise
 * a series whose maximum size is the negotiated checkpoint-size,
 * concatenated to form the encoded-APDU-value. ITU-T Rec. X.228
 * (11/88) §7.3.2; ITU-T Rec. X.218 (03/93) §9.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTTRapdu  ::=  OCTET STRING
 * ```
 */
export type RTTRapdu = OCTET_STRING; // OctetStringType




export const _decode_RTTRapdu = $._decodeOctetString;




export const _encode_RTTRapdu = $._encodeOctetString;


/* eslint-enable */
