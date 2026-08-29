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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary EndpointIRI
 * @description
 *
 * Identifies a BIP endpoint (and, since an endpoint has at
 * most one application, that application). Constrained to the
 * absolute-IRI grammar of IETF RFC 3987. A BIP endpoint has
 * exactly one IRI. When converting from C, a NULL pointer
 * becomes the local endpoint IRI; converting that IRI back
 * yields NULL. ITU-T Rec. X.1083 (11/2007) §7.3, §11, §15.3.
 * https://www.itu.int/rec/T-REC-X.1083-200711-I
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
