/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { id_x1080_0_Cont } from '../Pbact-access/id-x1080-0-Cont.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_renameRequest */
/**
 * @summary id_renameRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-renameRequest     OBJECT IDENTIFIER ::= { id-x1080-0-Cont renameRequest(13) }
 * ```
 *
 * @constant
 */
export const id_renameRequest: OBJECT_IDENTIFIER = new _OID(
    [/* renameRequest */ 13],
    id_x1080_0_Cont
);
/* END_OF_SYMBOL_DEFINITION id_renameRequest */

/* eslint-enable */
