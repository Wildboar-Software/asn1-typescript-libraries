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
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_summarizeResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-summarizeResult ID ::= {id-attribute  126}
 * ```
 *
 * @constant
 */
export const id_attribute_summarizeResult: ID = _OID.fromParts([126], id_attribute);

/* eslint-enable */
