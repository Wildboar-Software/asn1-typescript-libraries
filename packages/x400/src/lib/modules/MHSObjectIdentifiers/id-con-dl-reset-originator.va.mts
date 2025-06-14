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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_con } from '../MHSObjectIdentifiers/id-con.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_con_dl_reset_originator */
/**
 * @summary id_con_dl_reset_originator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-con-dl-reset-originator ID ::= {id-con  2}
 * ```
 *
 * @constant
 */
export const id_con_dl_reset_originator: ID = new _OID([2], id_con);
/* END_OF_SYMBOL_DEFINITION id_con_dl_reset_originator */

/* eslint-enable */
