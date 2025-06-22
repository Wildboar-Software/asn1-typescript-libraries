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
 * @summary pDUDiscardUnsupportedProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardUnsupportedProtocolVersion OBJECT IDENTIFIER ::= {pDUDiscard unsupportedProtocolVersion(177)}
 * ```
 *
 * @constant
 */
export const pDUDiscardUnsupportedProtocolVersion: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* unsupportedProtocolVersion */ 177],
    pDUDiscard
);

/* eslint-enable */
