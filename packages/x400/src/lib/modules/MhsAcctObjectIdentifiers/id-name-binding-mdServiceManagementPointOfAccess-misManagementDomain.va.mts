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
import { id_name_binding } from '../MhsAcctObjectIdentifiers/id-name-binding.va.mjs';
/**
 * @summary id_name_binding_mdServiceManagementPointOfAccess_misManagementDomain
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-name-binding-mdServiceManagementPointOfAccess-misManagementDomain ID ::= {id-name-binding  9}
 * ```
 *
 * @constant
 */
export const id_name_binding_mdServiceManagementPointOfAccess_misManagementDomain: ID = _OID.fromParts(
    [9],
    id_name_binding
);

/* eslint-enable */
