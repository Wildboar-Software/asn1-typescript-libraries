/* eslint-disable */
import {
  EXTERNAL,
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
 * @summary AccessControl
 * @description
 *
 * CMIS access-control parameter, carried as `EXTERNAL`.
 * On A-ASSOCIATE the responder verifies it if present.
 * Encoding of the contained value is not defined by
 * X.711. ITU-T Rec. X.711 (10/97)
 * [§7.3.1](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * §7.4, Annex A.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControl  ::=  EXTERNAL
 * ```
 */
export type AccessControl = EXTERNAL; // ExternalType




export const _decode_AccessControl = $._decodeExternal;




export const _encode_AccessControl = $._encodeExternal;


/* eslint-enable */
