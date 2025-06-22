/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StartTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartTime  ::=  GeneralizedTime
 * ```
 */
export
type StartTime = GeneralizedTime; // GeneralizedTime


export const _decode_StartTime = $._decodeGeneralizedTime;


export const _encode_StartTime = $._encodeGeneralizedTime;


/* eslint-enable */
