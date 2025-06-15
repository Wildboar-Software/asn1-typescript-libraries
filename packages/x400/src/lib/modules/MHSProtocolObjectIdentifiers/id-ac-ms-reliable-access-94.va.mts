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
 * @summary id_ac_ms_reliable_access_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-ms-reliable-access-94 ID ::= {id-ac  12}
 * ```
 *
 * @constant
 */
export const id_ac_ms_reliable_access_94: ID = new _OID([12], id_ac);

/* eslint-enable */
