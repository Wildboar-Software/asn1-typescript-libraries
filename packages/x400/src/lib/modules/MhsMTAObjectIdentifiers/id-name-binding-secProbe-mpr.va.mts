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
import { id_name_binding } from '../MhsMTAObjectIdentifiers/id-name-binding.va.mjs';
/**
 * @summary id_name_binding_secProbe_mpr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-name-binding-secProbe-mpr ID ::= {id-name-binding  26}
 * ```
 *
 * @constant
 */
export const id_name_binding_secProbe_mpr: ID = _OID.fromParts([26], id_name_binding);

/* eslint-enable */
