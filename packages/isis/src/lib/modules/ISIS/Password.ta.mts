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
 * @summary Password
 * @description
 *
 * Authentication password (0–254 octets). Used as a transmit password in Level
 * 1 or Level 2 LSP/SNP PDUs (`areaTransmitPassword`, `domainTransmitPassword`)
 * or in IIH PDUs (`circuitTransmitPassword`). Empty default means no password.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.3, 11.2.5.8 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Password  ::=  OCTET STRING(SIZE (0..254))
 * ```
 */
export type Password = OCTET_STRING; // OctetStringType


export const _decode_Password = $._decodeOctetString;


export const _encode_Password = $._encodeOctetString;


/* eslint-enable */
