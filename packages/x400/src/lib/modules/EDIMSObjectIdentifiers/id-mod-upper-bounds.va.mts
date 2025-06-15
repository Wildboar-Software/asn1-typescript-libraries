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
/**
 * @summary id_mod_upper_bounds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-upper-bounds ID ::= {id-mod  5}
 * ```
 *
 * @constant
 */
export const id_mod_upper_bounds: ID = new _OID([5], id_mod);

/* eslint-enable */
