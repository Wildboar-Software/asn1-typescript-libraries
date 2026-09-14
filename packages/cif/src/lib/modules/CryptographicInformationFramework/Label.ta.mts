/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { cia_ub_label } from "../CryptographicInformationFramework/cia-ub-label.va.mjs";



/**
 * @summary Label
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Label  ::=  UTF8String (SIZE(0..cia-ub-label))
 * ```
 */
export
type Label = UTF8String; // UTF8String
export const _decode_Label = (el: _Element): Label => {
    const value = $._decodeUTF8String(el);
    if (value.length > cia_ub_label) {
        throw new ASN1SizeError("Label violates SIZE constraint");
    }
    return value;
};
export const _encode_Label = $._encodeUTF8String;


/* eslint-enable */
