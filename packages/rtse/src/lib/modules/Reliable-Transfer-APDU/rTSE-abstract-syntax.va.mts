/* eslint-disable */
import {
  joint_iso_itu_t,
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';


/**
 * @summary rTSE_abstract_syntax
 * @description
 *
 * Named abstract syntax of the RTSE APDUs:
 * `{joint-iso-itu-t reliable-transfer(3) abstract-syntax(2)}`
 * (`joint-iso-ccitt` in X.228 (11/88) Annex C). Used when no
 * RT-OPEN / RT-U-ABORT user-data types are defined; those user-data
 * types, when present, share this named abstract syntax with the
 * RTSE APDUs. ITU-T Rec. X.218 (03/93) §8.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rTSE-abstract-syntax OBJECT IDENTIFIER ::= {joint-iso-itu-t reliable-transfer(3) abstract-syntax(2)}
 * ```
 *
 * @constant
 */
export const rTSE_abstract_syntax: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* reliable-transfer */ 3, /* abstract-syntax */ 2],
  joint_iso_itu_t
);

/* eslint-enable */
