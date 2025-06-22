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
export const id_con_dl_reset_originator: ID = _OID.fromParts([2], id_con);

/* eslint-enable */
