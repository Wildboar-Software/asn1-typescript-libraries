/* eslint-disable */
import {
  GeneralizedTime,
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
 * @summary KerberosTime
 * @description
 *
 * Timestamp as `GeneralizedTime` with no fractional seconds
 * ([RFC 4120 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.3)). DER requires no separators and UTC (`Z`).
 * Example: 19851106210627Z.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KerberosTime     ::=  GeneralizedTime
 * ```
 */
export type KerberosTime = GeneralizedTime; // GeneralizedTime




export const _decode_KerberosTime = $._decodeGeneralizedTime;




export const _encode_KerberosTime = $._encodeGeneralizedTime;


/* eslint-enable */
