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
/**
 * @summary id_doc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doc ID ::= {id-dir  0}
 * ```
 *
 * @constant
 */
export const id_doc: ID = new _OID([0], id_dir);

/* eslint-enable */
