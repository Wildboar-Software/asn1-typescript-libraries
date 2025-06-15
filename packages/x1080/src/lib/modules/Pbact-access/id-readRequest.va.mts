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
/* START_OF_SYMBOL_DEFINITION id_readRequest */
/**
 * @summary id_readRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-readRequest       OBJECT IDENTIFIER ::= { id-x1080-0-Cont readRequest(3) }
 * ```
 *
 * @constant
 */
export const id_readRequest: OBJECT_IDENTIFIER = new _OID(
    [/* readRequest */ 3],
    id_x1080_0_Cont
);
/* END_OF_SYMBOL_DEFINITION id_readRequest */

/* eslint-enable */
