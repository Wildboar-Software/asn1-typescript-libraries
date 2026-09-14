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
 * `csr` Request-Detail for CreateProgramInvocation: `&control` of the new PI.
 * ISO 9506-1:2003 §12.1.1.12, §12.2.1.1.6. ISO 9506-2:2003 §12.2.3.
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
 * @description
 *
 * `normal` (0): not coupled as controlling or controlled. ISO 9506-1:2003
 * §12.1.1.12, §12.2.2.2.4.
 *
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_normal: CS_CreateProgramInvocation_Request = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_normal
 * @description
 *
 * `normal` (0): not coupled as controlling or controlled. ISO 9506-1:2003
 * §12.1.1.12, §12.2.2.2.4.
 *
 * @constant
 * @type {number}
 */
export
const normal: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlling
 * @description
 *
 * `controlling` (1): may drive coupled controlled PIs on Start/Resume; empty
 * controlled list; `free-run`. ISO 9506-1:2003 §12.1.1.12, §12.2.2.2.4.
 *
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_controlling: CS_CreateProgramInvocation_Request = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlling
 * @description
 *
 * `controlling` (1): may drive coupled controlled PIs on Start/Resume; empty
 * controlled list; `free-run`. ISO 9506-1:2003 §12.1.1.12, §12.2.2.2.4.
 *
 * @constant
 * @type {number}
 */
export
const controlling: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_controlling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlled
 * @description
 *
 * `controlled` (2): after Select, receives control from a controlling PI;
 * controlling-PI initially null. ISO 9506-1:2003 §12.1.1.12, §12.2.2.2.4.
 *
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_controlled: CS_CreateProgramInvocation_Request = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlled
 * @description
 *
 * `controlled` (2): after Select, receives control from a controlling PI;
 * controlling-PI initially null. ISO 9506-1:2003 §12.1.1.12, §12.2.2.2.4.
 *
 * @constant
 * @type {number}
 */
export
const controlled: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_controlled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CS_CreateProgramInvocation_Request = $._decodeInteger;
export const _encode_CS_CreateProgramInvocation_Request = $._encodeInteger;


/* eslint-enable */
