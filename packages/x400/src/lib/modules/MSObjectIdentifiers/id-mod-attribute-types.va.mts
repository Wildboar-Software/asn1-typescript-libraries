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
import { id_mod } from '../MSObjectIdentifiers/id-mod.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mod_attribute_types */
/**
 * @summary id_mod_attribute_types
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-attribute-types ID ::= {id-mod  2}
 * ```
 *
 * @constant
 */
export const id_mod_attribute_types: ID = new _OID([2], id_mod);
/* END_OF_SYMBOL_DEFINITION id_mod_attribute_types */

/* eslint-enable */
