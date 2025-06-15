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
import { id_act } from '../EDIMSObjectIdentifiers/id-act.va.mjs';
/**
 * @summary id_act_edi_auto_acknowledgement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-act-edi-auto-acknowledgement ID ::= {id-act  2}
 * ```
 *
 * @constant
 */
export const id_act_edi_auto_acknowledgement: ID = new _OID([2], id_act);

/* eslint-enable */
