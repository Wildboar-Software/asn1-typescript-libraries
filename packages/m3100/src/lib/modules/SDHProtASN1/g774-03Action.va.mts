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
import { sdhProt } from '../SDHProtASN1/sdhProt.va.mjs';
/* START_OF_SYMBOL_DEFINITION g774_03Action */
/**
 * @summary g774_03Action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g774-03Action OBJECT IDENTIFIER ::= {sdhProt action(9)}
 * ```
 *
 * @constant
 */
export const g774_03Action: OBJECT_IDENTIFIER = new _OID(
    [/* action */ 9],
    sdhProt
);
/* END_OF_SYMBOL_DEFINITION g774_03Action */

/* eslint-enable */
