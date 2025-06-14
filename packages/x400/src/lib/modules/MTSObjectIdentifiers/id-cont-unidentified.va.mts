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
import { ID, _decode_ID, _encode_ID } from '../MTSObjectIdentifiers/ID.ta.mjs';
import { id_cont } from '../MTSObjectIdentifiers/id-cont.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_cont_unidentified */
/**
 * @summary id_cont_unidentified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cont-unidentified ID ::= {id-cont  0}
 * ```
 *
 * @constant
 */
export const id_cont_unidentified: ID = new _OID([0], id_cont);
/* END_OF_SYMBOL_DEFINITION id_cont_unidentified */

/* eslint-enable */
