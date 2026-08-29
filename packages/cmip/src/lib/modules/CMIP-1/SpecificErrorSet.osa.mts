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
} from '@wildboar/asn1';
import { type CMIP_SPECIFICERROR } from '../CMIP-1/CMIP-SPECIFICERROR.oca.mjs';

/**
 * @summary SpecificErrorSet
 * @description
 *
 * Extensible set of `CMIP-SPECIFICERROR` objects used to
 * constrain `SpecificErrorInfo`. Empty here; populated
 * by the application. ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I);
 * Cor.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecificErrorSet CMIP-SPECIFICERROR ::= {...}
 * ```
 *
 * @constant
 * @type {CMIP_SPECIFICERROR[]}
 *
 */
export const SpecificErrorSet: CMIP_SPECIFICERROR[] = [];

/* eslint-enable */
