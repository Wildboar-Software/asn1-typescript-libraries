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
import { type OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { Forward } from './Forward.osa.mjs';

/**
 * @summary Reverse
 * @description
 *
 * Operations directly or indirectly linked to `OperationSet` with **opposite** directionality: `Forward` of those operations' `&Linked` (ITU-T Rec. X.880 (07/94) §10.7). Assumes nothing appears only at the sixth or later linkage level.
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reverse{OPERATION:OperationSet} OPERATION ::= {Forward{{OperationSet.&Linked}}}
 * ```
 *
 * @type {OPERATION}
 */
export
function Reverse (OperationSet: OPERATION[]): OPERATION[] {
    return Forward(OperationSet.flatMap((op: OPERATION) => op["&Linked"] ?? []));
}

/* eslint-enable */
