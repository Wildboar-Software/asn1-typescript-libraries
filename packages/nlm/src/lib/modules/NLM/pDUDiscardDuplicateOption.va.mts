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
} from 'asn1-ts';
import { pDUDiscard } from '../NLM/pDUDiscard.va.mjs';

/**
 * @summary pDUDiscardDuplicateOption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardDuplicateOption OBJECT IDENTIFIER ::= {pDUDiscard duplicateOption(7)}
 * ```
 *
 * @constant
 */
export const pDUDiscardDuplicateOption: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* duplicateOption */ 7],
    pDUDiscard
);

/* eslint-enable */
