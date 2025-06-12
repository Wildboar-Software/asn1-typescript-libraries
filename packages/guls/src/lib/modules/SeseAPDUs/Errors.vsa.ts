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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { SE_ERROR } from '../Notation/SE-ERROR.oca.js';
import { SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca.js';
export { SE_ERROR } from '../Notation/SE-ERROR.oca.js';

/* START_OF_SYMBOL_DEFINITION Errors */
/**
 * @summary Errors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Errors{SECURITY-EXCHANGE:ValidSEs} SE-ERROR ::= {ValidSEs.&SE-Items.&Errors}
 * ```
 *
 * @type {SE_ERROR}
 */
export
function Errors (ValidSEs: SECURITY_EXCHANGE[]): SE_ERROR[] {
    return ValidSEs
        .flatMap((vse: SECURITY_EXCHANGE) => (vse["&SE-Items"] ?? [])
            .flatMap((sei) => sei["&Errors"] ?? []));
}
/* END_OF_SYMBOL_DEFINITION _encode_Errors */

/* eslint-enable */
