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
import {
    ChoiceInteger,
    _decode_ChoiceInteger,
    _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta.mjs';

/**
 * @summary nullChoiceInteger
 * @description
 *
 * `dontCare`. Default of `maxActiveCircuits`: no numeric cap; limited only by
 * resources.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
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

/* eslint-enable */
