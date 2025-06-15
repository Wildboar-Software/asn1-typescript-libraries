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
import { id_mod } from '../MTSObjectIdentifiers/id-mod.va.mjs';
/**
 * @summary id_mod_mta_abstract_service
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-mta-abstract-service ID ::= {id-mod  2}
 * ```
 *
 * @constant
 */
export const id_mod_mta_abstract_service: ID = new _OID([2], id_mod);

/* eslint-enable */
