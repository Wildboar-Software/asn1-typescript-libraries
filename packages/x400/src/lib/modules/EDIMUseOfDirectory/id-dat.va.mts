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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_dir } from '../EDIMSObjectIdentifiers/id-dir.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_dat */
/**
 * @summary id_dat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dat ID ::= {id-dir  1}
 * ```
 *
 * @constant
 */
export const id_dat: ID = new _OID([1], id_dir);
/* END_OF_SYMBOL_DEFINITION id_dat */

/* eslint-enable */
