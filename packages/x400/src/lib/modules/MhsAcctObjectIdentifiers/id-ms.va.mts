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
import { mhs_management } from '../MhsAcctObjectIdentifiers/mhs-management.va.mjs';
/**
 * @summary id_ms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ms ID ::= {mhs-management  10}
 * ```
 *
 * @constant
 */
export const id_ms: ID = new _OID([10], mhs_management);

/* eslint-enable */
