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
import { id_edi } from '../EDIMSObjectIdentifiers/id-edi.va.mjs';
/**
 * @summary id_edi_compression
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-edi-compression ID ::= {id-edi  0}
 * ```
 *
 * @constant
 */
export const id_edi_compression: ID = _OID.fromParts([0], id_edi);

/* eslint-enable */
