/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary ProtocolVersion
 * @description
 *
 * CMIP versions this CMIPM supports. X.711 defines
 * version 2, which replaces version 1; it does not define
 * interworking between them. The agreed version is the
 * highest number both CMIPMs support. ITU-T Rec. X.711
 * (10/97)
 * [§5.4](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * §7.3.1, Annex A.2.3–A.2.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  BIT STRING {version1(0), version2(1)}
 * ```
 */
export type ProtocolVersion = BIT_STRING;


/**
 * @summary ProtocolVersion_version1
 * @description
 *
 * CMIP version 1. Default in `CMIPUserInfo` if the field
 * is omitted. X.711 §5.4, §7.3.1.
 *
 * @constant
 */
export const ProtocolVersion_version1: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary version1
 * @description
 *
 * Alias of {@link ProtocolVersion_version1}.
 *
 * @constant
 */
export const version1: number = ProtocolVersion_version1; /* SHORT_NAMED_BIT */


/**
 * @summary ProtocolVersion_version2
 * @description
 *
 * CMIP version 2 as specified by this Recommendation;
 * replaces version 1. X.711 §5.4.
 *
 * @constant
 */
export const ProtocolVersion_version2: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary version2
 * @description
 *
 * Alias of {@link ProtocolVersion_version2}.
 *
 * @constant
 */
export const version2: number = ProtocolVersion_version2; /* SHORT_NAMED_BIT */




export const _decode_ProtocolVersion = $._decodeBitString;




export const _encode_ProtocolVersion = $._encodeBitString;


/* eslint-enable */
