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
import { id_arch } from '../MHSObjectIdentifiers/id-arch.va.mjs';
/**
 * @summary id_con
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-con ID ::= {id-arch  5}
 * ```
 *
 * @constant
 */
export const id_con: ID = _OID.fromParts([5], id_arch);

/* eslint-enable */
