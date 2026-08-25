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
 * @summary id_mr_content_identifier_match
 * @description
 *
 * The Content-identifier-match rule compares for equality the presented value with
 * attribute-values of type content- identifier. The rule returns true if, and only if, the
 * presented value matches at least one value of the attribute according to the MS-
 * string-case-sensitive-match rule. See ITU-T X.413 (1999), §12.4.15.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-content-identifier-match ID ::= {id-mr  2}
 * ```
 *
 * @constant
 */
export const id_mr_content_identifier_match: ID = _OID.fromParts([2], id_mr);

/* eslint-enable */
