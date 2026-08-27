/* eslint-disable */
import {
  NULL,
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
 * @summary PKIConfirmContent
 * @description
 *
 * Final PKI confirmation: `NULL` content; required information is in
 * `PKIHeader` ([RFC 4210 §5.3.17](https://datatracker.ietf.org/doc/html/rfc4210#section-5.3.17)).
 *
 * Use for certificate confirmation is NOT RECOMMENDED; `certConf`
 * SHOULD be used instead. A recipient MAY treat a `PKIConfirm` for a
 * certificate response as a `certConf` accepting all certificates.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIConfirmContent  ::=  NULL
 * ```
 */
export type PKIConfirmContent = NULL; // NullType




export const _decode_PKIConfirmContent = $._decodeNull;




export const _encode_PKIConfirmContent = $._encodeNull;


/* eslint-enable */
