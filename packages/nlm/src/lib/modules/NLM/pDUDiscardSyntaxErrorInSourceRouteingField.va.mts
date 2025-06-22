/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { pDUDiscard } from '../NLM/pDUDiscard.va.mjs';

/**
 * @summary pDUDiscardSyntaxErrorInSourceRouteingField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardSyntaxErrorInSourceRouteingField OBJECT IDENTIFIER ::= {pDUDiscard syntaxErrorInSourceRouteingField(145)}
 * ```
 *
 * @constant
 */
export const pDUDiscardSyntaxErrorInSourceRouteingField: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* syntaxErrorInSourceRouteingField */ 145],
    pDUDiscard
);

/* eslint-enable */
