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
} from "@wildboar/asn1";
import { type ECDOMAIN } from "../SEC1-v1-9/ECDOMAIN.oca.mjs";
/**
 * @summary SECGCurveNames
 * @description
 * 
 * Named elliptic curves allowed in `ECDomainParameters.named`. Empty here;
 * populate from SEC 2 (e.g. `sect163k1`) or ANSI X9.62. Syntax is `ID <oid>`.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SECGCurveNames ECDOMAIN ::= {
 *     ... -- named curves
 * }
 * ```
 * 
 * @constant
 * @type {ECDOMAIN[]}
 * 
 */
export
const SECGCurveNames: (ECDOMAIN)[] = [];

/* eslint-enable */
