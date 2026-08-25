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
 * @summary id_attribute_thisRecipientName
 * @description
 *
 * This argument contains the OR-name of a recipient of the message. It shall be generated
 * by the originator of the message. See ITU-T X.411 (1999), §8.2.1.1.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-thisRecipientName ID ::= {id-attribute  129}
 * ```
 *
 * @constant
 */
export const id_attribute_thisRecipientName: ID = _OID.fromParts([129], id_attribute);

/* eslint-enable */
