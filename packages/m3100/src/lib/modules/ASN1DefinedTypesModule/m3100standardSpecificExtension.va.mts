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
import { m3100InformationModel } from '../ASN1DefinedTypesModule/m3100InformationModel.va.mjs';

/**
 * @summary m3100standardSpecificExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3100standardSpecificExtension OBJECT IDENTIFIER ::= {m3100InformationModel standardSpecificExtension(0)}
 * ```
 *
 * @constant
 */
export const m3100standardSpecificExtension: OBJECT_IDENTIFIER = new _OID(
    [/* standardSpecificExtension */ 0],
    m3100InformationModel
);

/* eslint-enable */
