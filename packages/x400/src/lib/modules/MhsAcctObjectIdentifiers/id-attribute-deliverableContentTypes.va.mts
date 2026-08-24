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
 * @summary id_attribute_deliverableContentTypes
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_deliverableContentTypes`. This component indicates the
 * content-types that the MTS shall permit to appear in messages delivered to the MTS-
 * user, if they are to be constrained within a deliverable-class. If the content-length
 * of the message to be delivered exceeds that specified by the
 * deliverable-maximum-content- length, then the message does not satisfy the constraints
 * of this deliverable-class and no other criteria of the… See ITU-T X.411 (1999),
 * §8.4.1.1.1.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-deliverableContentTypes ID ::= {id-attribute  31}
 * ```
 *
 * @constant
 */
export const id_attribute_deliverableContentTypes: ID = _OID.fromParts(
    [31],
    id_attribute
);

/* eslint-enable */
