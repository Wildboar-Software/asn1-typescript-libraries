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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_dat } from '../EDIMUseOfDirectory/id-dat.va.mjs';
/**
 * @summary id_dat_edi_capabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dat-edi-capabilities ID ::= {id-dat  2}
 * ```
 *
 * @constant
 */
export const id_dat_edi_capabilities: ID = _OID.fromParts([2], id_dat);

/* eslint-enable */
