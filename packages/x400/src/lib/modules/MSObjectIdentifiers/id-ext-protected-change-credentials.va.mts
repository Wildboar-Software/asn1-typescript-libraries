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
 * @summary id_ext_protected_change_credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ext-protected-change-credentials ID ::= {id-ext  4}
 * ```
 *
 * @constant
 */
export const id_ext_protected_change_credentials: ID = new _OID([4], id_ext);

/* eslint-enable */
