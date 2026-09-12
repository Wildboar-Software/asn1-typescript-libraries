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
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProblematicThereforeAnyType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProblematicThereforeAnyType  ::=  TYPE-IDENTIFIER.&Type
 * ```
 */
export
type ProblematicThereforeAnyType = _Element; // ObjectClassFieldType
export const _decode_ProblematicThereforeAnyType = $._decodeAny;
export const _encode_ProblematicThereforeAnyType = $._encodeAny;


/* eslint-enable */
