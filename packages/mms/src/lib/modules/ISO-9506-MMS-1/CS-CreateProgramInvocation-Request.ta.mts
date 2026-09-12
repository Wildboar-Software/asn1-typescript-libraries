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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CS_CreateProgramInvocation_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-CreateProgramInvocation-Request  ::=  INTEGER {
 *    normal                        (0),
 *    controlling                   (1),
 *    controlled                    (2)
 *    } (0..2)
 * ```
 */
export
type CS_CreateProgramInvocation_Request = INTEGER;

/**
 * @summary CS_CreateProgramInvocation_Request_normal
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_normal: CS_CreateProgramInvocation_Request = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_normal
 * @constant
 * @type {number}
 */
export
const normal: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlling
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_controlling: CS_CreateProgramInvocation_Request = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlling
 * @constant
 * @type {number}
 */
export
const controlling: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_controlling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlled
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_controlled: CS_CreateProgramInvocation_Request = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlled
 * @constant
 * @type {number}
 */
export
const controlled: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_controlled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CS_CreateProgramInvocation_Request = (el: _Element): CS_CreateProgramInvocation_Request => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 2) {
        throw new ASN1OverflowError("CS_CreateProgramInvocation_Request violates INTEGER range constraint");
    }
    return value;
};
export const _encode_CS_CreateProgramInvocation_Request = $._encodeInteger;


/* eslint-enable */
