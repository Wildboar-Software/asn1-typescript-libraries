/* eslint-disable */
import {
    itu_t,
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
 * @summary tc_Messages
 * @description
 *
 * OID of the ITU-T Q.773 TCAP messages module (`modules(2) messages(1)
 * version3(3)`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tc-Messages                    OBJECT IDENTIFIER ::= {itu-t recommendation q 773 modules(2) messages(1) version3(3)}
 * ```
 * 
 * @constant
 */
export
const tc_Messages: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    773,
    /* modules */ 2,
    /* messages */ 1,
    /* version3 */ 3,
], itu_t);

/* eslint-enable */
