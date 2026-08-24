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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_at } from '../MHSRoutingObjectIdentifiers/id-at.va.mjs';
/**
 * @summary id_at_mhs_expression_matches
 * @description
 *
 * OBJECT IDENTIFIER `id_at_mhs_expression_matches`. The Expression Matches attribute
 * type, which is single-valued, contains information which enables a routing-MTA to
 * relate routing-advice to an OR-address that satisfies an OR-address pattern match
 * expression. expressionMatches ATTRIBUTE ::= { WITH SYNTAX ExpressionMatches SINGLE
 * VALUE TRUE ID id-at-mhs-expression-match } ExpressionMatches ::= SEQUENCE OF
 * ExpressionMatch Each expression-match is ordered in… See ITU-T X.412 (1999), §8.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-mhs-expression-matches ID ::= {id-at  12}
 * ```
 *
 * @constant
 */
export const id_at_mhs_expression_matches: ID = _OID.fromParts([12], id_at);

/* eslint-enable */
