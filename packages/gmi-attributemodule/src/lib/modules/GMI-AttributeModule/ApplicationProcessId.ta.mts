/* eslint-disable */
import {
    GraphicString,
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
 * @summary ApplicationProcessId
 * @description
 *
 * Naming attribute of `applicationProcess`. That class is
 * an element of a system that performs information
 * processing for a particular application. Disabled if it
 * or a resource it depends on is inoperable; enabled if
 * operable. Name binding `applicationProcess-system`
 * names it under `system` with this attribute. GDMO
 * MATCHES FOR EQUALITY. Registered as
 * `{joint-iso-ccitt ms(9) smi(3) part5(5) attribute(7)
 * applicationProcessId(16)}`. ITU-T Rec. X.723 (11/1993)
 * [§9.1](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §7.1, §8.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationProcessId  ::=  GraphicString
 * ```
 */
export
type ApplicationProcessId = GraphicString; // GraphicString




export const _decode_ApplicationProcessId = $._decodeGraphicString;




export const _encode_ApplicationProcessId = $._encodeGraphicString;


/* eslint-enable */
