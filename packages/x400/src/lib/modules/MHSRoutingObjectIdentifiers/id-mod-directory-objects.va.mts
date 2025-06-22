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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_mod } from '../MHSRoutingObjectIdentifiers/id-mod.va.mjs';
/**
 * @summary id_mod_directory_objects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-directory-objects ID ::= {id-mod  1}
 * ```
 *
 * @constant
 */
export const id_mod_directory_objects: ID = _OID.fromParts([1], id_mod);

/* eslint-enable */
