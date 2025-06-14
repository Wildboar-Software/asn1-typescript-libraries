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
} from 'asn1-ts';
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
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
