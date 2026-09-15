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
 * @summary Status_Request
 * @description
 * 
 * Confirmed Status request: Extended Derivation. True selects the more
 * extensive derivation when the server supports two methods (e.g.
 * self-diagnostics); false selects the other. Ignored if the server has only
 * one method. Result(+) is a Status Response; Result(-) is Error Type.
 * ISO 9506-1:2003 §10.3; ISO 9506-2:2003 §10.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status-Request  ::=  BOOLEAN
 * ```
 */
export
type Status_Request = BOOLEAN; // BooleanType
export const _decode_Status_Request = $._decodeBoolean;
export const _encode_Status_Request = $._encodeBoolean;


/* eslint-enable */
