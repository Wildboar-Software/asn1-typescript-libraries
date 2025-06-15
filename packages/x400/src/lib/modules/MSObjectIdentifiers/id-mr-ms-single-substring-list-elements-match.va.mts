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
import { id_mr } from '../MSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_ms_single_substring_list_elements_match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-ms-single-substring-list-elements-match ID ::= {id-mr  3}
 * ```
 *
 * @constant
 */
export const id_mr_ms_single_substring_list_elements_match: ID = new _OID(
    [3],
    id_mr
);

/* eslint-enable */
