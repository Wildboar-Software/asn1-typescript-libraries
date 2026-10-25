/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Result
 * @description
 *
 * Outcome of a proposed presentation context (definition or addition)
 * or of default-context negotiation / `P-CONNECT` Result
 * (X.226 §6.2.3.5, §6.2.4.5; X.216 §10.2.1.16).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result  ::=  INTEGER {acceptance(0), user-rejection(1), provider-rejection(2)}
 * ```
 */
export type Result = INTEGER;


/**
 * @summary Result_acceptance
 * @description Context or connection accepted.
 * @constant
 * @type {number}
 */
export const Result_acceptance = 0 satisfies Result; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const acceptance = Result_acceptance; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Result_user_rejection
 * @description Rejected by the PS-user.
 * @constant
 * @type {number}
 */
export const Result_user_rejection = 1 satisfies Result; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const user_rejection = Result_user_rejection; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Result_provider_rejection
 * @description Rejected by the presentation-service-provider / PPM.
 * @constant
 * @type {number}
 */
export const Result_provider_rejection = 2 satisfies Result; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const provider_rejection = Result_provider_rejection; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Result = $._decodeInteger;




export const _encode_Result = $._encodeInteger;


/* eslint-enable */
