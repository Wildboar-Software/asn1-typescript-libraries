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
 * @summary id_attribute_certificate
 * @description
 *
 * A certificate may be used to convey a verified copy of the
 * public-asymmetric-encryption-key of the subject of the certificate. A certificate
 * contains one or more items of certification information. See ITU-T X.411 (1999), §8.5.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-certificate ID ::= {id-attribute  10}
 * ```
 *
 * @constant
 */
export const id_attribute_certificate: ID = _OID.fromParts([10], id_attribute);

/* eslint-enable */
