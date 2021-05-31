/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  SNPAAddress,
  _decode_SNPAAddress,
  _encode_SNPAAddress,
} from "@wildboar/nlm/src/lib/modules/NLM/SNPAAddress.ta";
import {
    sNPADTEAddress,
} from "@wildboar/nlm/src/lib/modules/NLM/sNPADTEAddress.va";

/* START_OF_SYMBOL_DEFINITION neighbourSNPAAddress_Default */
/**
 * @summary neighbourSNPAAddress_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * neighbourSNPAAddress-Default SNPAAddress ::= {type NLM.sNPADTEAddress, address ''H}
 * ```
 *
 * @constant
 */
export const neighbourSNPAAddress_Default: SNPAAddress = SNPAAddress._from_object(
  { type_: sNPADTEAddress, address: new Uint8Array(0) }
);
/* END_OF_SYMBOL_DEFINITION neighbourSNPAAddress_Default */

/* eslint-enable */
