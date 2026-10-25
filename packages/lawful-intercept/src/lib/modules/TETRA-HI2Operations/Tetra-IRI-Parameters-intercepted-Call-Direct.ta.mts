/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct {
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    not_Available = 0,
    /**
     * The target is the originating party. For GPRS, the mobile station
     * requested the PDP context activation, modification, or deactivation.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    originating_Target = 1,
    /**
     * The target is the terminating party. For GPRS, the network initiated the
     * PDP context activation, modification, or deactivation.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    terminating_Target = 2,
}

/**
 * @summary Tetra_IRI_Parameters_intercepted_Call_Direct
 * @description
 * 
 * Direction of the intercepted call. Clause A.3.2.2 uses it to say whether the
 * target is the originating or the terminating party. For GPRS the same values
 * say whether the PDP context activation, modification, or deactivation was
 * requested by the mobile station or initiated by the network. An extension
 * marker follows the named values.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tetra-IRI-Parameters-intercepted-Call-Direct ::= ENUMERATED {
 *     not-Available(0),
 *     originating-Target(1),
 *     -- In case of GPRS, this indicates that the PDP context activation, modification
 *     -- or deactivation is MS requested
 *     terminating-Target(2),
 *     -- In case of GPRS, this indicates that the PDP context activation, modification
 *     -- or deactivation is network initiated
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Tetra_IRI_Parameters_intercepted_Call_Direct = _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct | ENUMERATED;

/**
 * @summary Tetra_IRI_Parameters_intercepted_Call_Direct_not_Available
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_intercepted_Call_Direct_not_Available = _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct.not_Available satisfies Tetra_IRI_Parameters_intercepted_Call_Direct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const not_Available = Tetra_IRI_Parameters_intercepted_Call_Direct_not_Available satisfies Tetra_IRI_Parameters_intercepted_Call_Direct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_intercepted_Call_Direct_originating_Target
 * @description
 *
 * The target is the originating party. For GPRS, the mobile station requested
 * the PDP context activation, modification, or deactivation.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_intercepted_Call_Direct_originating_Target = _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct.originating_Target satisfies Tetra_IRI_Parameters_intercepted_Call_Direct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @description
 *
 * The target is the originating party. For GPRS, the mobile station requested
 * the PDP context activation, modification, or deactivation.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const originating_Target = Tetra_IRI_Parameters_intercepted_Call_Direct_originating_Target satisfies Tetra_IRI_Parameters_intercepted_Call_Direct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_intercepted_Call_Direct_terminating_Target
 * @description
 *
 * The target is the terminating party. For GPRS, the network initiated the PDP
 * context activation, modification, or deactivation.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_intercepted_Call_Direct_terminating_Target = _enum_for_Tetra_IRI_Parameters_intercepted_Call_Direct.terminating_Target satisfies Tetra_IRI_Parameters_intercepted_Call_Direct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @description
 *
 * The target is the terminating party. For GPRS, the network initiated the PDP
 * context activation, modification, or deactivation.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const terminating_Target = Tetra_IRI_Parameters_intercepted_Call_Direct_terminating_Target satisfies Tetra_IRI_Parameters_intercepted_Call_Direct; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Tetra_IRI_Parameters_intercepted_Call_Direct: $.ASN1Decoder<Tetra_IRI_Parameters_intercepted_Call_Direct> = $._decodeEnumerated;
export const _encode_Tetra_IRI_Parameters_intercepted_Call_Direct: $.ASN1Encoder<Tetra_IRI_Parameters_intercepted_Call_Direct> = $._encodeEnumerated;


/* eslint-enable */
