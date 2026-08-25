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
 * @summary id_attribute_mtaName
 * @description
 *
 * An MTA-name is an identifier for an MTA that uniquely identifies the MTA within the MD
 * to which it belongs. See ITU-T X.411 (1999), §8.5.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-mtaName ID ::= {id-attribute  88}
 * ```
 *
 * @constant
 */
export const id_attribute_mtaName: ID = _OID.fromParts([88], id_attribute);

/* eslint-enable */
