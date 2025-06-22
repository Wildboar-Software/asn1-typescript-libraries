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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSProtocolObjectIdentifiers/ID.ta.mjs';
import { id_ase } from '../MHSProtocolObjectIdentifiers/id-ase.va.mjs';
/**
 * @summary id_ase_msse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ase-msse ID ::= {id-ase  0}
 * ```
 *
 * @constant
 */
export const id_ase_msse: ID = _OID.fromParts([0], id_ase);

/* eslint-enable */
