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
import { id_mod } from '../MHSProtocolObjectIdentifiers/id-mod.va.mjs';
/**
 * @summary id_mod_ms_access_protocol
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-ms-access-protocol ID ::= {id-mod  2}
 * ```
 *
 * @constant
 */
export const id_mod_ms_access_protocol: ID = _OID.fromParts([2], id_mod);

/* eslint-enable */
