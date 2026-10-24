/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaMode
 * @description
 * 
 * Active IPA, carried in EUICCInfo2. Within SGP.32 the eUICC SHALL include
 * `ipaMode`. `ipad` means IPAd is active. `ipae` means IPAe is active. SGP.32
 * v1.2, section 5.9.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaMode  ::=  INTEGER {
 *     ipad (0), -- IPAd is active
 *     ipae (1) -- IPAe is active
 * }
 * ```
 */
export
type IpaMode = INTEGER;

/**
 * @summary IpaMode_ipad
 * @description
 * IPAd is the active IPA. SGP.32 v1.2, section 5.9.2.
 * @constant
 * @type {number}
 */
export
const IpaMode_ipad: IpaMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaMode_ipad
 * @description
 * IPAd is the active IPA. SGP.32 v1.2, section 5.9.2.
 * @constant
 * @type {number}
 */
export
const ipad: IpaMode = IpaMode_ipad; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaMode_ipae
 * @description
 * IPAe is the active IPA. SGP.32 v1.2, section 5.9.2.
 * @constant
 * @type {number}
 */
export
const IpaMode_ipae: IpaMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaMode_ipae
 * @description
 * IPAe is the active IPA. SGP.32 v1.2, section 5.9.2.
 * @constant
 * @type {number}
 */
export
const ipae: IpaMode = IpaMode_ipae; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_IpaMode: $.ASN1Decoder<IpaMode> = $._decodeInteger;
export const _encode_IpaMode: $.ASN1Encoder<IpaMode> = $._encodeInteger;


/* eslint-enable */
