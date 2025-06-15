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
 * @summary id_mod_edi_directory_cl_att
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-edi-directory-cl-att ID ::= {id-mod  6}
 * ```
 *
 * @constant
 */
export const id_mod_edi_directory_cl_att: ID = new _OID([6], id_mod);

/* eslint-enable */
