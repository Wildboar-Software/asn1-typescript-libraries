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
 * @summary pDUDiscardSegmentationNeededButNotPermitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardSegmentationNeededButNotPermitted OBJECT IDENTIFIER ::= {pDUDiscard segmentationNeededButNotPermitted(5)}
 * ```
 *
 * @constant
 */
export const pDUDiscardSegmentationNeededButNotPermitted: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* segmentationNeededButNotPermitted */ 5],
    pDUDiscard
);

/* eslint-enable */
