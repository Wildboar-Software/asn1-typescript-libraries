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
 * @summary pDUDiscardProtocolProcedureError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardProtocolProcedureError OBJECT IDENTIFIER ::= {pDUDiscard protocolProcedureError(1)}
 * ```
 *
 * @constant
 */
export const pDUDiscardProtocolProcedureError: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* protocolProcedureError */ 1],
    pDUDiscard
);

/* eslint-enable */
