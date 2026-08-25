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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_userSecurityLabel
 * @description
 *
 * Security-labels may be used to associate security-relevant information with objects
 * within the MTS. Security-labels may be assigned to an object in line with the
 * security-policy in force for that object. See ITU-T X.411 (1999), §8.5.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-userSecurityLabel ID ::= {id-attribute  135}
 * ```
 *
 * @constant
 */
export const id_attribute_userSecurityLabel: ID = _OID.fromParts([135], id_attribute);

/* eslint-enable */
