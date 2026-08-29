/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary GenericCounter
 * @description
 *
 * Syntax of the non-instantiable generic wrapping and
 * non-wrapping counters (mandatory initial value 0, an
 * implementation-defined upper bound). Non-wrapping holds at
 * the bound; wrapping wraps on the next increment. ITU-T Rec.
 * X.723 (11/93)
 * [§9.7](https://www.itu.int/rec/T-REC-X.723-199311-I)–§9.8,
 * §13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericCounter  ::=  INTEGER
 * ```
 */
export type GenericCounter = INTEGER;




export const _decode_GenericCounter = $._decodeInteger;




export const _encode_GenericCounter = $._encodeInteger;


/* eslint-enable */
