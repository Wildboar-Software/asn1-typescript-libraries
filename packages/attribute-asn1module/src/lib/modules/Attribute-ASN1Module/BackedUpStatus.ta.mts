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
 * @summary BackedUpStatus
 * @description
 * 
 * Whether the object that emitted an alarm is backed up. TRUE = backed up;
 * FALSE = not backed up. MATCHES FOR EQUALITY. Semantics: ITU-T Rec. X.733 |
 * ISO/IEC 10164-4 Backed-up Status. `{smi2AttributeID 11}`. ITU-T Rec. X.721
 * (02/92) §10.7.1.6, §14.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BackedUpStatus  ::=  BOOLEAN
 * ```
 */
export
type BackedUpStatus = BOOLEAN; // BooleanType


export const _decode_BackedUpStatus = $._decodeBoolean;


export const _encode_BackedUpStatus = $._encodeBoolean;


/* eslint-enable */
