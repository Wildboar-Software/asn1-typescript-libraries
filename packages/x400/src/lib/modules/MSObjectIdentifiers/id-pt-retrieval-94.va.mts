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
import { id_pt } from '../MSObjectIdentifiers/id-pt.va.mjs';
/**
 * @summary id_pt_retrieval_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pt-retrieval-94 ID ::= {id-pt  1}
 * ```
 *
 * @constant
 */
export const id_pt_retrieval_94: ID = _OID.fromParts([1], id_pt);

/* eslint-enable */
