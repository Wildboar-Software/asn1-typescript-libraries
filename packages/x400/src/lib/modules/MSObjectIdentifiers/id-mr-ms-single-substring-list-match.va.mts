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
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_mr } from '../MSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_ms_single_substring_list_match
 * @description
 *
 * OBJECT IDENTIFIER `id_mr_ms_single_substring_list_match`. The
 * MS-single-substring-list-match determines whether each string in a presented sequence
 * is a single substring of each corresponding string in a sequence that constitutes some
 * value of an attribute containing sequences of MS-string, without regard to the case
 * (upper or lower) of the strings. mSSingleSubstringListMatch MATCHING-RULE ::= { SYNTAX
 * SEQUENCE OF MSString {ub-msstring-match} ID… See ITU-T X.413 (1999), §12.2.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-ms-single-substring-list-match ID ::= {id-mr  4}
 * ```
 *
 * @constant
 */
export const id_mr_ms_single_substring_list_match: ID = _OID.fromParts([4], id_mr);

/* eslint-enable */
