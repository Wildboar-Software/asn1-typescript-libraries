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
 * @summary EventTime
 * @description
 * 
 * Time of the event, as in the CMIS Event Time parameter. MATCHES FOR EQUALITY,
 * ORDERING via `timeOrdering` (year, month, day, hour, minute, seconds compared
 * in that order). `{smi2AttributeID 13}`. ITU-T Rec. X.721 (02/92) §10.7.1.8;
 * ITU-T Rec. X.710 | ISO/IEC 9595.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTime  ::=  GeneralizedTime
 * ```
 */
export
type EventTime = GeneralizedTime; // GeneralizedTime


export const _decode_EventTime = $._decodeGeneralizedTime;


export const _encode_EventTime = $._encodeGeneralizedTime;


/* eslint-enable */
