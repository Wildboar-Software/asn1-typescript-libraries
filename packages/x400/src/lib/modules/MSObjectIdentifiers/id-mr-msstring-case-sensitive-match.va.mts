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
 * @summary id_mr_msstring_case_sensitive_match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-msstring-case-sensitive-match ID ::= {id-mr  7}
 * ```
 *
 * @constant
 */
export const id_mr_msstring_case_sensitive_match: ID = _OID.fromParts([7], id_mr);

/* eslint-enable */
