/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary UnknownStatus
 * @description
 * 
 * TRUE means other status attributes of the object should not be relied upon.
 * MATCHES FOR EQUALITY. `{smi2AttributeID 38}`. ITU-T Rec. X.721 (02/92)
 * §10.7.2.8, §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnknownStatus  ::=  BOOLEAN
 * ```
 */
export
type UnknownStatus = BOOLEAN; // BooleanType


export const _decode_UnknownStatus = $._decodeBoolean;


export const _encode_UnknownStatus = $._encodeBoolean;


/* eslint-enable */
