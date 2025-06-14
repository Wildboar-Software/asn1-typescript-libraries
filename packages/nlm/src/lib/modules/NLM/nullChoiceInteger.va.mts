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
} from 'asn1-ts';
import {
    ChoiceInteger,
    _decode_ChoiceInteger,
    _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta.mjs';
/* START_OF_SYMBOL_DEFINITION nullChoiceInteger */
/**
 * @summary nullChoiceInteger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullChoiceInteger ChoiceInteger ::= dontCare:NULL
 * ```
 *
 * @constant
 */
export const nullChoiceInteger: ChoiceInteger = { dontCare: null };
/* END_OF_SYMBOL_DEFINITION nullChoiceInteger */

/* eslint-enable */
