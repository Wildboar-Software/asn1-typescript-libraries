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
} from '@wildboar/asn1';
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSProtocolObjectIdentifiers/ID.ta.mjs';
import { id_mhs_protocols } from '../MHSProtocolObjectIdentifiers/id-mhs-protocols.va.mjs';
/**
 * @summary id_as
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as ID ::= {id-mhs-protocols  2}
 * ```
 *
 * @constant
 */
export const id_as: ID = _OID.fromParts([2], id_mhs_protocols);

/* eslint-enable */
