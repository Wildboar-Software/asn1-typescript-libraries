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
 * @summary m3100Package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3100Package OBJECT IDENTIFIER ::= {m3100InformationModel package(4)}
 * ```
 *
 * @constant
 */
export const m3100Package: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* package */ 4],
    m3100InformationModel
);

/* eslint-enable */
