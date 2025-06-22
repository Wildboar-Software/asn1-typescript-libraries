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
} from '../MHSProtocolObjectIdentifiers/ID.ta.mjs';
import { id_ase } from '../MHSProtocolObjectIdentifiers/id-ase.va.mjs';
/**
 * @summary id_ase_mtse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ase-mtse ID ::= {id-ase  4}
 * ```
 *
 * @constant
 */
export const id_ase_mtse: ID = _OID.fromParts([4], id_ase);

/* eslint-enable */
