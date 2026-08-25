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
 * @summary id_mr_ms_single_substring_match
 * @description
 *
 * OBJECT IDENTIFIER `id_mr_ms_single_substring_match`. The MS-single-substring-match
 * determines whether a presented string is a single substring of some value of an
 * attribute of type MS-string without regard to the case (upper or lower) of the
 * strings.  The rule is identical to the
 * MS-substrings-match rule, except that the presented value is treated as… See ITU-T
 * X.413 (1999), §12.2.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-ms-single-substring-match ID ::= {id-mr  5}
 * ```
 *
 * @constant
 */
export const id_mr_ms_single_substring_match: ID = _OID.fromParts([5], id_mr);

/* eslint-enable */
