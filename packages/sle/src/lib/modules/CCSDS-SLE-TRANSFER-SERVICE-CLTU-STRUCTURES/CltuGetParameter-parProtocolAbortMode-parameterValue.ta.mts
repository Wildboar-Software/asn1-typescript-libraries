/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue
 * @description
 * 
 * What the provider does with buffered CLTUs after a protocol abort
 * (communications with the peer lost). abort is 0 and continue is 1. The
 * parameter is optional. CCSDS 912.1-B-5, table 3-11, section 4.1.5, and Annex
 * C.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parProtocolAbortMode-parameterValue ::= INTEGER
 *       {  abort                                  (0)
 *       ,  continue                               (1)
 *       }
 * ```
 */
export
type CltuGetParameter_parProtocolAbortMode_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_abort
 * @description
 *
 * Table 3-11: on a protocol abort, service production ceases. Section 4.1.5.3
 * discards buffered CLTUs when the parameter value is flush, and Annex C says
 * the default, when this parameter is not implemented, is that flush behavior.
 * Annex A names this value abort and does not define a value named flush. CCSDS
 * 912.1-B-5, table 3-11, section 4.1.5.3, and Annex C.
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parProtocolAbortMode_parameterValue_abort = 0 satisfies CltuGetParameter_parProtocolAbortMode_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_abort
 * @description
 *
 * Table 3-11: production ceases on a protocol abort. Section 4.1.5.3 uses the
 * name flush for discarding the buffer (Annex C).
 * @constant
 * @type {number}
 */
export
const abort = CltuGetParameter_parProtocolAbortMode_parameterValue_abort satisfies CltuGetParameter_parProtocolAbortMode_parameterValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_continue_
 * @description
 *
 * On a protocol abort the provider still returns to state 1 (unbound), and
 * buffered CLTUs are kept and radiated as if the association were still up.
 * Notifications generated while unbound are neither sent nor stored for a later
 * bind. The user, after rebinding, picks a first-cltu-identification greater
 * than any CLTU still in the buffer. CCSDS 912.1-B-5, table 3-11 and sections
 * 2.6.4.4 and 4.1.5.3.
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parProtocolAbortMode_parameterValue_continue_ = 1 satisfies CltuGetParameter_parProtocolAbortMode_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_continue_
 * @description
 *
 * Buffered CLTUs keep radiating after a protocol abort (CCSDS 912.1-B-5,
 * sections 2.6.4.4 and 4.1.5.3).
 * @constant
 * @type {number}
 */
export
const continue_ = CltuGetParameter_parProtocolAbortMode_parameterValue_continue_ satisfies CltuGetParameter_parProtocolAbortMode_parameterValue; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parProtocolAbortMode_parameterValue: $.ASN1Decoder<CltuGetParameter_parProtocolAbortMode_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parProtocolAbortMode_parameterValue: $.ASN1Encoder<CltuGetParameter_parProtocolAbortMode_parameterValue> = $._encodeInteger;


/* eslint-enable */
