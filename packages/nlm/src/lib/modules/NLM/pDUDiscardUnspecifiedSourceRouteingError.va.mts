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
 * @summary pDUDiscardUnspecifiedSourceRouteingError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardUnspecifiedSourceRouteingError OBJECT IDENTIFIER ::= {pDUDiscard unspecifiedSourceRouteingError(144)}
 * ```
 *
 * @constant
 */
export const pDUDiscardUnspecifiedSourceRouteingError: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* unspecifiedSourceRouteingError */ 144],
    pDUDiscard
);

/* eslint-enable */
