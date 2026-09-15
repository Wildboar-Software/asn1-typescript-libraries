/* eslint-disable */
import {
    ENUMERATED,
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



export
enum _enum_for_ChangeCipherSpec {
    change_cipher_spec = 1,
}

/**
 * @summary ChangeCipherSpec
 * @description
 *
 * TLS ChangeCipherSpec: only `change-cipher-spec` (1), extensible.
 * ITU-T Rec. X.1084 (05/2008) §10.3.1, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCipherSpec     ::=     ENUMERATED {
 * change-cipher-spec(1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ChangeCipherSpec = _enum_for_ChangeCipherSpec | ENUMERATED;

/**
 * @summary ChangeCipherSpec_change_cipher_spec
 * @description Only defined CCS value (1). X.1084 §10.3.1.
 * @constant
 * @type {number}
 */
export
const ChangeCipherSpec_change_cipher_spec: ChangeCipherSpec = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary change_cipher_spec
 * @description Only defined CCS value (1). X.1084 §10.3.1.
 * @constant
 * @type {number}
 */
export
const change_cipher_spec: ChangeCipherSpec = ChangeCipherSpec_change_cipher_spec; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ChangeCipherSpec = $._decodeEnumerated;
export const _encode_ChangeCipherSpec = $._encodeEnumerated;


/* eslint-enable */
