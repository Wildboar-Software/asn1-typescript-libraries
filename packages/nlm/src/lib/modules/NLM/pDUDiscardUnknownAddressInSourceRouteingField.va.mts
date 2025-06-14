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
import { pDUDiscard } from '../NLM/pDUDiscard.va.mjs';
/* START_OF_SYMBOL_DEFINITION pDUDiscardUnknownAddressInSourceRouteingField */
/**
 * @summary pDUDiscardUnknownAddressInSourceRouteingField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardUnknownAddressInSourceRouteingField OBJECT IDENTIFIER ::= {pDUDiscard unknownAddressInSourceRouteingField(146)}
 * ```
 *
 * @constant
 */
export const pDUDiscardUnknownAddressInSourceRouteingField: OBJECT_IDENTIFIER = new _OID(
    [/* unknownAddressInSourceRouteingField */ 146],
    pDUDiscard
);
/* END_OF_SYMBOL_DEFINITION pDUDiscardUnknownAddressInSourceRouteingField */

/* eslint-enable */
