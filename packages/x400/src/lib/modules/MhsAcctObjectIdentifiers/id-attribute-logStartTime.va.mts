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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_logStartTime
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_logStartTime`. A Time parameter is specified in terms
 * of UTC (Coordinated Universal Time), and may optionally also contain an offset to UTC
 * to convey the local time. The precision of the time of day is to either one second or
 * one minute, determined by the generator of the parameter. See ITU-T X.411 (1999),
 * §8.5.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-logStartTime ID ::= {id-attribute  59}
 * ```
 *
 * @constant
 */
export const id_attribute_logStartTime: ID = _OID.fromParts([59], id_attribute);

/* eslint-enable */
