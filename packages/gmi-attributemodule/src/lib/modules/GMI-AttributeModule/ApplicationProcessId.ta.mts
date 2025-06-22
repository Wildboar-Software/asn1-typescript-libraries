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
