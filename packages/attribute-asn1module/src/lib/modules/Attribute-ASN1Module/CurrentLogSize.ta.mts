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
 * @summary CurrentLogSize
 * @description
 * 
 * Current size of the log in octets. MATCHES FOR EQUALITY, ORDERING.
 * `{smi2AttributeID 54}`. ITU-T Rec. X.721 (02/92) §10.7.4.6; ITU-T Rec. X.735
 * | ISO/IEC 10164-6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentLogSize  ::=  INTEGER
 * ```
 */
export
type CurrentLogSize = INTEGER;


export const _decode_CurrentLogSize = $._decodeInteger;


export const _encode_CurrentLogSize = $._encodeInteger;


/* eslint-enable */
