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
 * @summary Generic64BitCounter
 * @description
 *
 * Counter with upper bound `2^64-1`
 * (`18446744073709551615`). Syntax of the
 * non-instantiable `nonWrapping64BitCounter` (GDMO
 * MATCHES FOR EQUALITY, ORDERING; behaviour
 * `genericNonWrappingCounterB`) and
 * `wrapping64BitCounter` (EQUALITY;
 * `genericWrappingCounterB`). Derived instantiable
 * attributes shall specify when the value is incremented.
 * `totalRemoteSAPs` is derived from
 * `wrapping64BitCounter` and counts remote (N)-SAPs a
 * `clProtocolMachine` has communicated with (increment
 * by 1 at each such communication). ITU-T Rec. X.723
 * (11/1993)
 * [§9.12](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §9.24, §9.21, §9.7, §9.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Generic64BitCounter  ::=  INTEGER(0..18446744073709551615)
 * ```
 */
export
type Generic64BitCounter = INTEGER;




export const _decode_Generic64BitCounter = $._decodeInteger;




export const _encode_Generic64BitCounter = $._encodeInteger;


/* eslint-enable */
