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
import { id_mts } from '../MTSObjectIdentifiers/id-mts.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mod */
/**
 * @summary id_mod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod ID ::= {id-mts  0}
 * ```
 *
 * @constant
 */
export const id_mod: ID = new _OID([0], id_mts);
/* END_OF_SYMBOL_DEFINITION id_mod */

/* eslint-enable */
