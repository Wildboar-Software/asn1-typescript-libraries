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
import { StopTime, _decode_StopTime, _encode_StopTime } from "../Attribute-ASN1Module/StopTime.ta.mjs";
/**
 * @summary defaultStopTime
 * @description
 * 
 * `continual:NULL` — no scheduled stop. DEFAULT VALUE of `stopTime` in the
 * duration package. ITU-T Rec. X.721 (02/92) §8.9, §14.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * defaultStopTime StopTime ::= continual:NULL
 * ```
 * 
 * @constant
 */
export
const defaultStopTime: StopTime = { continual: null };

/* eslint-enable */
