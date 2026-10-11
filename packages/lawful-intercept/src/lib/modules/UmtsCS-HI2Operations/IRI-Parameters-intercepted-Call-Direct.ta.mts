/* eslint-disable */
import {
    ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_IRI_Parameters_intercepted_Call_Direct {
    not_Available = 0,
    originating_Target = 1,
    terminating_Target = 2,
}

/**
 * @summary IRI_Parameters_intercepted_Call_Direct
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-intercepted-Call-Direct ::= ENUMERATED
 * {
 *     not-Available(0),
 *     originating-Target(1),
 *     terminating-Target(2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRI_Parameters_intercepted_Call_Direct = _enum_for_IRI_Parameters_intercepted_Call_Direct | ENUMERATED;

/**
 * @summary IRI_Parameters_intercepted_Call_Direct_not_Available
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_not_Available: IRI_Parameters_intercepted_Call_Direct = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @constant
 * @type {number}
 */
export
const not_Available: IRI_Parameters_intercepted_Call_Direct = IRI_Parameters_intercepted_Call_Direct_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_intercepted_Call_Direct_originating_Target
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_originating_Target: IRI_Parameters_intercepted_Call_Direct = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @constant
 * @type {number}
 */
export
const originating_Target: IRI_Parameters_intercepted_Call_Direct = IRI_Parameters_intercepted_Call_Direct_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_intercepted_Call_Direct_terminating_Target
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_terminating_Target: IRI_Parameters_intercepted_Call_Direct = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @constant
 * @type {number}
 */
export
const terminating_Target: IRI_Parameters_intercepted_Call_Direct = IRI_Parameters_intercepted_Call_Direct_terminating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_IRI_Parameters_intercepted_Call_Direct: $.ASN1Decoder<IRI_Parameters_intercepted_Call_Direct> = $._decodeEnumerated;

export const _encode_IRI_Parameters_intercepted_Call_Direct: $.ASN1Encoder<IRI_Parameters_intercepted_Call_Direct> = $._encodeEnumerated;

/* eslint-enable */
