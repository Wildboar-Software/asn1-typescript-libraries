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
import { id_edims } from '../EDIMSObjectIdentifiers/id-edims.va.mjs';
/**
 * @summary id_syn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-syn ID ::= {id-edims  16}
 * ```
 *
 * @constant
 */
export const id_syn: ID = new _OID([16], id_edims);

/* eslint-enable */
