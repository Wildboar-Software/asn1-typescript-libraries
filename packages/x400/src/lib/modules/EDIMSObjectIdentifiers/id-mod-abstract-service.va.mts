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
import { id_mod } from '../EDIMSObjectIdentifiers/id-mod.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mod_abstract_service */
/**
 * @summary id_mod_abstract_service
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-abstract-service ID ::= {id-mod  3}
 * ```
 *
 * @constant
 */
export const id_mod_abstract_service: ID = new _OID([3], id_mod);
/* END_OF_SYMBOL_DEFINITION id_mod_abstract_service */

/* eslint-enable */
