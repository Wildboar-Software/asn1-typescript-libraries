/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_ms } from '../MHSObjectIdentifiers/id-ms.va.mjs';
/**
 * @summary id_alg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-alg -- algorithms -- ID ::= {id-ms  10}
 * ```
 *
 * @constant
 */
export const id_alg: ID = _OID.fromParts([10], id_ms);

/* eslint-enable */
