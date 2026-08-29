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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StartTime
 * @description
 * 
 * Start of a duration window (duration package). MATCHES FOR EQUALITY, ORDERING
 * via `timeOrdering`. After Cor.2 this is a duration-package attribute, not
 * weekly scheduling. `{smi2AttributeID 68}`. ITU-T Rec. X.721 (02/92) §8.9,
 * §10.7.4.20 and Cor.2; ITU-T Rec. X.734 | ISO/IEC 10164-5; ITU-T Rec. X.735 |
 * ISO/IEC 10164-6.
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
