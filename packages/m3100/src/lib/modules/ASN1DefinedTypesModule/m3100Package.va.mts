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
/* START_OF_SYMBOL_DEFINITION m3100Package */
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
export const m3100Package: OBJECT_IDENTIFIER = new _OID(
    [/* package */ 4],
    m3100InformationModel
);
/* END_OF_SYMBOL_DEFINITION m3100Package */

/* eslint-enable */
