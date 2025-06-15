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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_accounting } from '../MhsAcctObjectIdentifiers/id-accounting.va.mjs';
/**
 * @summary id_action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-action ID ::= {id-accounting  5}
 * ```
 *
 * @constant
 */
export const id_action: ID = new _OID([5], id_accounting);

/* eslint-enable */
