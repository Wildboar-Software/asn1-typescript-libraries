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
 * @summary id_renameRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-renameRequest     OBJECT IDENTIFIER ::= { id-x1080-0-Cont renameRequest(13) }
 * ```
 *
 * @constant
 */
export const id_renameRequest: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* renameRequest */ 13],
    id_x1080_0_Cont
);

/* eslint-enable */
