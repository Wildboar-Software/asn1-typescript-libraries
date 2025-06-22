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
import { id_x1080_0_Cont } from '../Pbact-access/id-x1080-0-Cont.va.mjs';

/**
 * @summary id_deleteRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-deleteRequest     OBJECT IDENTIFIER ::= { id-x1080-0-Cont deleteRequest(9) }
 * ```
 *
 * @constant
 */
export const id_deleteRequest: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* deleteRequest */ 9],
    id_x1080_0_Cont
);

/* eslint-enable */
