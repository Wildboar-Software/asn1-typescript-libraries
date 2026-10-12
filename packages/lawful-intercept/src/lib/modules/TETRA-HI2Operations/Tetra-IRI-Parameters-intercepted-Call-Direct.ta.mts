/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct {
    not_Available = 0,
    originating_Target = 1,
    terminating_Target = 2,
}

/**
 * @summary Tetra_IRI_Parameters_intercepted_Call_Direct
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tetra-IRI-Parameters-intercepted-Call-Direct ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type Tetra_IRI_Parameters_intercepted_Call_Direct = _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct | ENUMERATED;

/**
 * @summary Tetra_IRI_Parameters_intercepted_Call_Direct_not_Available
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_intercepted_Call_Direct_not_Available: Tetra_IRI_Parameters_intercepted_Call_Direct = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @constant
 * @type {number}
 */
export
const not_Available: Tetra_IRI_Parameters_intercepted_Call_Direct = Tetra_IRI_Parameters_intercepted_Call_Direct_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_intercepted_Call_Direct_originating_Target
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_intercepted_Call_Direct_originating_Target: Tetra_IRI_Parameters_intercepted_Call_Direct = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @constant
 * @type {number}
 */
export
const originating_Target: Tetra_IRI_Parameters_intercepted_Call_Direct = Tetra_IRI_Parameters_intercepted_Call_Direct_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_intercepted_Call_Direct_terminating_Target
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_intercepted_Call_Direct_terminating_Target: Tetra_IRI_Parameters_intercepted_Call_Direct = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @constant
 * @type {number}
 */
export
const terminating_Target: Tetra_IRI_Parameters_intercepted_Call_Direct = Tetra_IRI_Parameters_intercepted_Call_Direct_terminating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Tetra_IRI_Parameters_intercepted_Call_Direct: $.ASN1Decoder<Tetra_IRI_Parameters_intercepted_Call_Direct> = $._decodeEnumerated;
export const _encode_Tetra_IRI_Parameters_intercepted_Call_Direct: $.ASN1Encoder<Tetra_IRI_Parameters_intercepted_Call_Direct> = $._encodeEnumerated;


/* eslint-enable */
