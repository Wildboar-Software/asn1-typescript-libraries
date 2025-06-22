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
import { id_ot } from '../EDIMSObjectIdentifiers/id-ot.va.mjs';
/**
 * @summary id_ot_edi_ms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ot-edi-ms ID ::= {id-ot  4}
 * ```
 *
 * @constant
 */
export const id_ot_edi_ms: ID = _OID.fromParts([4], id_ot);

/* eslint-enable */
