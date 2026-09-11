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
 * @summary Quality
 * @description
 *
 * Captured-sample or reference quality, `0..100`, as used in BioAPI
 * ([ISO/IEC 19784-1]). Verifier policy states the acceptable quality
 * (X.1084 §9). ITU-T Rec. X.1084 (05/2008) §10.1.3, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Quality  ::=  INTEGER(0..100)
 * ```
 */
export
type Quality = INTEGER;
export const _decode_Quality = $._decodeInteger;
export const _encode_Quality = $._encodeInteger;


/* eslint-enable */
