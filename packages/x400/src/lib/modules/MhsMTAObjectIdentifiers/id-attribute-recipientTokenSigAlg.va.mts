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
import { id_attribute } from '../MhsMTAObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_recipientTokenSigAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-recipientTokenSigAlg ID ::= {id-attribute  139}
 * ```
 *
 * @constant
 */
export const id_attribute_recipientTokenSigAlg: ID = _OID.fromParts(
    [139],
    id_attribute
);

/* eslint-enable */
