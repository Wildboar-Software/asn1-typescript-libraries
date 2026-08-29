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
 * @summary CommunicationsEntityId
 * @description
 *
 * Naming attribute of `communicationsEntity`, an active
 * functional element that performs communication
 * processing (e.g. a Network or Transport entity).
 * Disabled if it or a resource it depends on is
 * inoperable; enabled if operable. Name binding
 * `communicationsEntity-subsystem` names it under
 * `subsystem`. GDMO MATCHES FOR EQUALITY. Registered as
 * `{joint-iso-ccitt ms(9) smi(3) part5(5) attribute(7)
 * communicationsEntityId(0)}`. ITU-T Rec. X.723 (11/1993)
 * [§9.3](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §7.2, §8.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsEntityId  ::=  GraphicString
 * ```
 */
export
type CommunicationsEntityId = GraphicString; // GraphicString




export const _decode_CommunicationsEntityId = $._decodeGraphicString;




export const _encode_CommunicationsEntityId = $._encodeGraphicString;


/* eslint-enable */
