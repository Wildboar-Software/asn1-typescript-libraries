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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_name_binding } from '../MhsMTAObjectIdentifiers/id-name-binding.va.mjs';
/**
 * @summary id_name_binding_secAssociation_association
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-name-binding-secAssociation-association ID ::= {id-name-binding  20}
 * ```
 *
 * @constant
 */
export const id_name_binding_secAssociation_association: ID = _OID.fromParts(
    [20],
    id_name_binding
);

/* eslint-enable */
