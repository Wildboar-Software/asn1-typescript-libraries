/* eslint-disable */
import {
  VisibleString,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary EndpointIRI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndpointIRI  ::=
 *   VisibleString
 *     (CONSTRAINED BY {
 *         --The string shall conform to the "absolute-IRI" grammar
 *         --defined in IETF RFC 3987--
 *        })
 * ```
 */
export type EndpointIRI = VisibleString; // VisibleString




export const _decode_EndpointIRI = $._decodeVisibleString;




export const _encode_EndpointIRI = $._encodeVisibleString;


/* eslint-enable */
