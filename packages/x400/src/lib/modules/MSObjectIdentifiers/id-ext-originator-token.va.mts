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
import { id_ext } from '../MSObjectIdentifiers/id-ext.va.mjs';
/**
 * @summary id_ext_originator_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ext-originator-token ID ::= {id-ext  3}
 * ```
 *
 * @constant
 */
export const id_ext_originator_token: ID = _OID.fromParts([3], id_ext);

/* eslint-enable */
