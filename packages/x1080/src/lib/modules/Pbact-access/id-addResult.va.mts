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
import { id_x1080_0_Cont } from '../Pbact-access/id-x1080-0-Cont.va.mjs';

/**
 * @summary id_addResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-addResult         OBJECT IDENTIFIER ::= { id-x1080-0-Cont addResult(8) }
 * ```
 *
 * @constant
 */
export const id_addResult: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* addResult */ 8],
    id_x1080_0_Cont
);

/* eslint-enable */
