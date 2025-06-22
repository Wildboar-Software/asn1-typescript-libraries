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
import { id_mta } from '../MhsMTAObjectIdentifiers/id-mta.va.mjs';
/**
 * @summary id_attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute ID ::= {id-mta  2}
 * ```
 *
 * @constant
 */
export const id_attribute: ID = _OID.fromParts([2], id_mta);

/* eslint-enable */
