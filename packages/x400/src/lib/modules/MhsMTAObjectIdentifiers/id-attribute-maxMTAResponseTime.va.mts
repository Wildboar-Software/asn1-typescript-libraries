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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsMTAObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_maxMTAResponseTime
 * @description
 *
 * OBJECT IDENTIFIER `id_attribute_maxMTAResponseTime`. A Time parameter is specified in
 * terms of UTC (Coordinated Universal Time), and may optionally also contain an offset
 * to UTC to convey the local time. The precision of the time of day is to either one
 * second or one minute, determined by the generator of the parameter. See ITU-T X.411
 * (1999), §8.5.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-maxMTAResponseTime ID ::= {id-attribute  53}
 * ```
 *
 * @constant
 */
export const id_attribute_maxMTAResponseTime: ID = _OID.fromParts([53], id_attribute);

/* eslint-enable */
