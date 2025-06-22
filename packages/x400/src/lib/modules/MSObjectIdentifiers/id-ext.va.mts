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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_ms } from '../MHSObjectIdentifiers/id-ms.va.mjs';
/**
 * @summary id_ext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ext -- extensions -- ID ::= {id-ms  9}
 * ```
 *
 * @constant
 */
export const id_ext: ID = _OID.fromParts([9], id_ms);

/* eslint-enable */
