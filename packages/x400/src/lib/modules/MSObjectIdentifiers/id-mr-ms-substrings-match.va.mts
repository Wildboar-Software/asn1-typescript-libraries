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
 * @summary id_mr_ms_substrings_match
 * @description
 *
 * OBJECT IDENTIFIER `id_mr_ms_substrings_match`. The MS-substrings-match determines
 * whether a presented value is a substring of some value of an attribute of type
 * MS-string without regard to the case (upper or lower) of the strings.
 *  See
 * ITU-T X.413 (1999), §12.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-ms-substrings-match ID ::= {id-mr  6}
 * ```
 *
 * @constant
 */
export const id_mr_ms_substrings_match: ID = _OID.fromParts([6], id_mr);

/* eslint-enable */
