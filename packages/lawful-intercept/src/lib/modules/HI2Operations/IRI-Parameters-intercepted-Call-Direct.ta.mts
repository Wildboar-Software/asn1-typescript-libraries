/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRI_Parameters_intercepted_Call_Direct
 * @description
 * 
 * Direction of the intercepted call: whether the target is the originating or
 * the terminating party. LI-specific. Include it when the direction is
 * detected. GSM table A.8.2 maps MOC/MTC or originating/terminating here. For
 * GPRS the values distinguish an MS-requested PDP-context activation,
 * modification, or deactivation from a network-initiated one.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.3, clause
 * A.8.4, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-intercepted-Call-Direct ::= ENUMERATED {
 *     not-Available(0),
 *     originating-Target(1),
 *     -- In case of GPRS, this indicates that the PDP context activation, modification
 *     -- or deactivation is MS requested.
 *     terminating-Target(2),
 *     -- In case of GPRS, this indicates that the PDP context activation, modification
 *     -- or deactivation is network initiated.
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IRI_Parameters_intercepted_Call_Direct {
    /**
     * Direction is not available. TS 101 671 names this value and does not
     * define a further condition.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    not_Available = 0,
    /**
     * The target identity is the originating party. For GPRS, the PDP context
     * activation, modification, or deactivation is requested by the mobile
     * station.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    originating_Target = 1,
    /**
     * The target identity is the terminating party. For GPRS, the PDP context
     * activation, modification, or deactivation is initiated by the network.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    terminating_Target = 2,
}

/**
 * @summary IRI_Parameters_intercepted_Call_Direct
 * @description
 * 
 * Direction of the intercepted call: whether the target is the originating or
 * the terminating party. LI-specific. Include it when the direction is
 * detected. GSM table A.8.2 maps MOC/MTC or originating/terminating here. For
 * GPRS the values distinguish an MS-requested PDP-context activation,
 * modification, or deactivation from a network-initiated one.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.3, clause
 * A.8.4, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-intercepted-Call-Direct ::= ENUMERATED {
 *     not-Available(0),
 *     originating-Target(1),
 *     -- In case of GPRS, this indicates that the PDP context activation, modification
 *     -- or deactivation is MS requested.
 *     terminating-Target(2),
 *     -- In case of GPRS, this indicates that the PDP context activation, modification
 *     -- or deactivation is network initiated.
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
 * Direction is not available. TS 101 671 names this value and does not define a
 * further condition.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_not_Available: _enum_for_IRI_Parameters_intercepted_Call_Direct.not_Available = _enum_for_IRI_Parameters_intercepted_Call_Direct.not_Available; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @description
 *
 * Direction is not available. TS 101 671 names this value and does not define a
 * further condition.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const not_Available: _enum_for_IRI_Parameters_intercepted_Call_Direct.not_Available = IRI_Parameters_intercepted_Call_Direct_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_intercepted_Call_Direct_originating_Target
 * @description
 *
 * The target identity is the originating party. For GPRS, the PDP context
 * activation, modification, or deactivation is requested by the mobile station.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_originating_Target: _enum_for_IRI_Parameters_intercepted_Call_Direct.originating_Target = _enum_for_IRI_Parameters_intercepted_Call_Direct.originating_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @description
 *
 * The target identity is the originating party. For GPRS, the PDP context
 * activation, modification, or deactivation is requested by the mobile station.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const originating_Target: _enum_for_IRI_Parameters_intercepted_Call_Direct.originating_Target = IRI_Parameters_intercepted_Call_Direct_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_intercepted_Call_Direct_terminating_Target
 * @description
 *
 * The target identity is the terminating party. For GPRS, the PDP context
 * activation, modification, or deactivation is initiated by the network.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_intercepted_Call_Direct_terminating_Target: _enum_for_IRI_Parameters_intercepted_Call_Direct.terminating_Target = _enum_for_IRI_Parameters_intercepted_Call_Direct.terminating_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @description
 *
 * The target identity is the terminating party. For GPRS, the PDP context
 * activation, modification, or deactivation is initiated by the network.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const terminating_Target: _enum_for_IRI_Parameters_intercepted_Call_Direct.terminating_Target = IRI_Parameters_intercepted_Call_Direct_terminating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_intercepted_Call_Direct: $.ASN1Decoder<IRI_Parameters_intercepted_Call_Direct> = $._decodeEnumerated;
export const _encode_IRI_Parameters_intercepted_Call_Direct: $.ASN1Encoder<IRI_Parameters_intercepted_Call_Direct> = $._encodeEnumerated;


/* eslint-enable */
