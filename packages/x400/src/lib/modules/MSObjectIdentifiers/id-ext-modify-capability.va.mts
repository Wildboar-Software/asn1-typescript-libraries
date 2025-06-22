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
import { id_ext } from '../MSObjectIdentifiers/id-ext.va.mjs';
/**
 * @summary id_ext_modify_capability
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ext-modify-capability ID ::= {id-ext  0}
 * ```
 *
 * @constant
 */
export const id_ext_modify_capability: ID = _OID.fromParts([0], id_ext);

/* eslint-enable */
