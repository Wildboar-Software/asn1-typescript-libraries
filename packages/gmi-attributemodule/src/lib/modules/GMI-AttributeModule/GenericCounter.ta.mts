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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




/**
 * @summary GenericCounter
 * @description
 *
 * Syntax of the non-instantiable
 * `genericNonWrappingCounter` and
 * `genericWrappingCounter` attributes. Both start at
 * zero and have an upper bound. How much the value
 * increments is given by behaviour on the derived
 * attribute. The implementation need not store a counter
 * as wide as the bound if every achievable value is
 * smaller.
 *
 * Non-wrapping: holds at the upper bound; GDMO MATCHES
 * FOR EQUALITY, ORDERING. Wrapping: a further increment
 * past the bound wraps; MATCHES FOR EQUALITY only.
 * Neither template has a `REGISTERED AS` clause.
 * ITU-T Rec. X.723 (11/1993)
 * [§9.7](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §9.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericCounter  ::=  INTEGER
 * ```
 */
export
type GenericCounter = INTEGER;




export const _decode_GenericCounter = $._decodeInteger;




export const _encode_GenericCounter = $._encodeInteger;


/* eslint-enable */
