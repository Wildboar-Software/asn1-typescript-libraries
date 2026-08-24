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
 * @summary id_attribute_deliverableEncodedInformationTypes
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_deliverableEncodedInformationTypes`. The
 * encoded-information-types of a message are the kind(s) of information that appear in
 * its content. Both basic encoded-information-types and externally-defined
 * encoded-information-types may be specified, otherwise the encoded-information-types of
 * a message are unspecified. See ITU-T X.411 (1999), §8.5.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-deliverableEncodedInformationTypes ID ::= {id-attribute  32}
 * ```
 *
 * @constant
 */
export const id_attribute_deliverableEncodedInformationTypes: ID = _OID.fromParts(
    [32],
    id_attribute
);

/* eslint-enable */
