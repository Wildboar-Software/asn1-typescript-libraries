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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_act } from '../MSObjectIdentifiers/id-act.va.mjs';
/**
 * @summary id_act_ipm_auto_forward
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-act-ipm-auto-forward ID ::= {id-act  0}
 * ```
 *
 * @constant
 */
export const id_act_ipm_auto_forward: ID = new _OID([0], id_act);

/* eslint-enable */
