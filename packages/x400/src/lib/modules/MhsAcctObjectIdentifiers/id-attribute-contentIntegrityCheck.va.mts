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
 * @summary id_attribute_contentIntegrityCheck
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_contentIntegrityCheck`. This argument provides the
 * recipient of the message with a means of validating that the message content has not
 * been modified (to provide the Content Integrity element-of-service as defined in
 * recipient of the message. If the value of this argument is specific to a recipient,
 * because either a specific algorithm or key has been used to generate this value (i.e.
 * See ITU-T X.411 (1999), §8.2.1.1.1.28.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-contentIntegrityCheck ID ::= {id-attribute  21}
 * ```
 *
 * @constant
 */
export const id_attribute_contentIntegrityCheck: ID = _OID.fromParts(
    [21],
    id_attribute
);

/* eslint-enable */
