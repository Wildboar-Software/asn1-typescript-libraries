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
import { id_as } from '../MHSProtocolObjectIdentifiers/id-as.va.mjs';
/**
 * @summary id_as_mts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-mts ID ::= {id-as  11}
 * ```
 *
 * @constant
 */
export const id_as_mts: ID = _OID.fromParts([11], id_as);

/* eslint-enable */
