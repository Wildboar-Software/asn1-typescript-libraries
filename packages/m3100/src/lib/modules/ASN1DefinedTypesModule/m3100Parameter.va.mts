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
} from '@wildboar/asn1';
import { m3100InformationModel } from '../ASN1DefinedTypesModule/m3100InformationModel.va.mjs';

/**
 * @summary m3100Parameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3100Parameter OBJECT IDENTIFIER ::= {m3100InformationModel parameter(5)}
 * ```
 *
 * @constant
 */
export const m3100Parameter: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* parameter */ 5],
    m3100InformationModel
);

/* eslint-enable */
