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
import { id_x1080_0 } from '../Pbact-access/id-x1080-0.va.mjs';

/**
 * @summary id_x1080_0_Cont
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-x1080-0-Cont      OBJECT IDENTIFIER ::= { id-x1080-0 cmsCont(1) }
 * ```
 *
 * @constant
 */
export const id_x1080_0_Cont: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* cmsCont */ 1],
    id_x1080_0
);

/* eslint-enable */
