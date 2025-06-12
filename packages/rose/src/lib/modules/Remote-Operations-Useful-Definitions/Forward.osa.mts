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
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION Forward */
/**
 * @summary Forward
 * @description
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Forward{OPERATION:OperationSet} OPERATION ::= {OperationSet | OperationSet.&Linked.&Linked |
 *    OperationSet.&Linked.&Linked.&Linked.&Linked}
 * ```
 *
 * @type {OPERATION}
 */
export
function Forward (OperationSet: OPERATION[]): OPERATION[] {
    return [
        ...OperationSet,
        ...OperationSet
            .flatMap((op1: OPERATION) => op1["&Linked"]
                ?.flatMap((op2: OPERATION) => op2["&Linked"] ?? []) ?? []),
        ...OperationSet
            .flatMap((op1: OPERATION) => op1["&Linked"]
                ?.flatMap((op2: OPERATION) => op2["&Linked"]
                    ?.flatMap((op3: OPERATION) => op3["&Linked"]
                        ?.flatMap((op4: OPERATION) => op4["&Linked"]) ?? []) ?? []) ?? []),
    ];
}
/* END_OF_SYMBOL_DEFINITION Forward */

/* eslint-enable */
