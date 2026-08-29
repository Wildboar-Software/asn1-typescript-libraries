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
import { sseoi } from '../NLM/sseoi.va.mjs';

/**
 * @summary successfulConnectionEstablishment
 * @description
 *
 * `informationType` of GMI `communicationsInformation` when a connection is
 * successfully established. Timing vs protocol/service interactions is not
 * defined here. Used from `networkConnection` and virtual-call MOs.
 * ITU-T Rec. X.283 (12/97)
 * [§5.2](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * successfulConnectionEstablishment OBJECT IDENTIFIER ::= {sseoi informationtype(4) successfulConnectionEstablishment(3)}
 * ```
 *
 * @constant
 */
export const successfulConnectionEstablishment: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* informationtype */ 4, /* successfulConnectionEstablishment */ 3],
    sseoi
);

/* eslint-enable */
