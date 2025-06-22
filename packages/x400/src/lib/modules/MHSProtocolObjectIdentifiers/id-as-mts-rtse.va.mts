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
 * @summary id_as_mts_rtse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-mts-rtse ID ::= {id-as  8}
 * ```
 *
 * @constant
 */
export const id_as_mts_rtse: ID = _OID.fromParts([8], id_as);

/* eslint-enable */
