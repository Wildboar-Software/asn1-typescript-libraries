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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_mta } from '../MhsMTAObjectIdentifiers/id-mta.va.mjs';
/**
 * @summary id_package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package ID ::= {id-mta  1}
 * ```
 *
 * @constant
 */
export const id_package: ID = _OID.fromParts([1], id_mta);

/* eslint-enable */
