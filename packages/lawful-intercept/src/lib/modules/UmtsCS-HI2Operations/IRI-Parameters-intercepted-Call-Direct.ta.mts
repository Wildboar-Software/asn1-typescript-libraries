/* eslint-disable */
import {
    type ENUMERATED
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
 * Direction of the intercepted call: the target is the calling party, the
 * called party, or the direction is not available. 3GPP TS 33.108, clause
 * 5.2.2.2 and table 5.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-intercepted-Call-Direct ::= ENUMERATED {
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
 * @description
 * 
 * Call direction is not available. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_not_Available = _enum_for_IRI_Parameters_intercepted_Call_Direct.not_Available; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @description
 * 
 * Direction not available. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const not_Available = IRI_Parameters_intercepted_Call_Direct_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_intercepted_Call_Direct_originating_Target
 * @description
 * 
 * The target is the originating party. 3GPP TS 33.108, clause 5.2.2.2 and table
 * 5.5.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_originating_Target = _enum_for_IRI_Parameters_intercepted_Call_Direct.originating_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @description
 * 
 * Target originated the call. 3GPP TS 33.108, clause 5.2.2.2.
 * 
 * @constant
 * @type {number}
 */
export
const originating_Target = IRI_Parameters_intercepted_Call_Direct_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_intercepted_Call_Direct_terminating_Target
 * @description
 * 
 * The target is the terminating party. 3GPP TS 33.108, clause 5.2.2.2 and table
 * 5.5.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_terminating_Target = _enum_for_IRI_Parameters_intercepted_Call_Direct.terminating_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @description
 * 
 * Target terminated the call. 3GPP TS 33.108, clause 5.2.2.2.
 * 
 * @constant
 * @type {number}
 */
export
const terminating_Target = IRI_Parameters_intercepted_Call_Direct_terminating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_intercepted_Call_Direct: $.ASN1Decoder<IRI_Parameters_intercepted_Call_Direct> = $._decodeEnumerated;
export const _encode_IRI_Parameters_intercepted_Call_Direct: $.ASN1Encoder<IRI_Parameters_intercepted_Call_Direct> = $._encodeEnumerated;


/* eslint-enable */
