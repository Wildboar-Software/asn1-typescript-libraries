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
import { id_ac } from '../MHSProtocolObjectIdentifiers/id-ac.va.mjs';
/**
 * @summary id_ac_mts_transfer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-mts-transfer ID ::= {id-ac  6}
 * ```
 *
 * @constant
 */
export const id_ac_mts_transfer: ID = new _OID([6], id_ac);

/* eslint-enable */
