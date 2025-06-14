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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_mod } from '../IPMSObjectIdentifiers/id-mod.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mod_auto_actions */
/**
 * @summary id_mod_auto_actions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-auto-actions ID ::= {id-mod  13}
 * ```
 *
 * @constant
 */
export const id_mod_auto_actions: ID = new _OID([13], id_mod);
/* END_OF_SYMBOL_DEFINITION id_mod_auto_actions */

/* eslint-enable */
