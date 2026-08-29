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
 * @summary LoggingTime
 * @description
 * 
 * Time a log record was written. MATCHES FOR EQUALITY, ORDERING.
 * `{smi2AttributeID 59}`. ITU-T Rec. X.721 (02/92) §10.7.4.11; ITU-T Rec. X.735
 * | ISO/IEC 10164-6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingTime  ::=  GeneralizedTime
 * ```
 */
export
type LoggingTime = GeneralizedTime; // GeneralizedTime


export const _decode_LoggingTime = $._decodeGeneralizedTime;


export const _encode_LoggingTime = $._encodeGeneralizedTime;


/* eslint-enable */
