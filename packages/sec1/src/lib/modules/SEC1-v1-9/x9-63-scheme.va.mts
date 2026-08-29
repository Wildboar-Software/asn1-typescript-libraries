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
} from "@wildboar/asn1";



/**
 * @summary x9_63_scheme
 * @description
 * 
 * ANS X9.63 scheme arc `{iso(1) member-body(2) us(840) ansi-x9-63(63)
 * schemes(0)}`. Holds the SHA-1 1-pass ECDH and MQV scheme OIDs. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x9-63-scheme OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) ansi-x9-63(63) schemes(0) }
 * ```
 * 
 * @constant
 */
export
const x9_63_scheme: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-x9-63 */ 63,
    /* schemes */ 0,
]);

/* eslint-enable */
