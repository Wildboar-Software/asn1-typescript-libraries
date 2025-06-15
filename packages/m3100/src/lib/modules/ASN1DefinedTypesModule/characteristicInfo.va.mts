/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { m3100standardSpecificExtension } from '../ASN1DefinedTypesModule/m3100standardSpecificExtension.va.mjs';

/**
 * @summary characteristicInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * characteristicInfo OBJECT IDENTIFIER ::= {m3100standardSpecificExtension 0}
 * ```
 *
 * @constant
 */
export const characteristicInfo: OBJECT_IDENTIFIER = new _OID(
    [0],
    m3100standardSpecificExtension
);

/* eslint-enable */
