/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRIType
 * @description
 * 
 * Whether an IRI is a BEGIN, END, CONTINUE, or REPORT message, as those
 * messages are defined in ETSI TS 101 671. This specification does not restate
 * those definitions. The field is mandatory on every IRI, including when the
 * IRI contents already say which message it is. That requirement holds in all
 * conditions from V3.25.1 of this specification.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIType  ::=  ENUMERATED
 * {
 *     iRI-Begin(1),
 *     iRI-End(2),
 *     iRI-Continue(3),
 *     iRI-Report(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IRIType {
    /**
     * IRI-BEGIN, as defined in ETSI TS 101 671. As a guide for sequence-number
     * contexts, a session starts at the time an IRI-BEGIN would be sent. Each
     * service-specific standard says when that message is sent.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    iRI_Begin = 1,
    /**
     * IRI-END, as defined in ETSI TS 101 671. As a guide for sequence-number
     * contexts, a session ends at the time an IRI-END would be sent.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    iRI_End = 2,
    /**
     * IRI-CONTINUE, as defined in ETSI TS 101 671. This specification adds no
     * further condition.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    iRI_Continue = 3,
    /**
     * IRI-REPORT, as defined in ETSI TS 101 671. CC associated with a single
     * IRI-REPORT typically forms its own sequence-number context.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    iRI_Report = 4,
}

/**
 * @summary IRIType
 * @description
 * 
 * Whether an IRI is a BEGIN, END, CONTINUE, or REPORT message, as those
 * messages are defined in ETSI TS 101 671. This specification does not restate
 * those definitions. The field is mandatory on every IRI, including when the
 * IRI contents already say which message it is. That requirement holds in all
 * conditions from V3.25.1 of this specification.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIType  ::=  ENUMERATED
 * {
 *     iRI-Begin(1),
 *     iRI-End(2),
 *     iRI-Continue(3),
 *     iRI-Report(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRIType = _enum_for_IRIType;

/**
 * @summary IRIType
 * @description
 * 
 * Whether an IRI is a BEGIN, END, CONTINUE, or REPORT message, as those
 * messages are defined in ETSI TS 101 671. This specification does not restate
 * those definitions. The field is mandatory on every IRI, including when the
 * IRI contents already say which message it is. That requirement holds in all
 * conditions from V3.25.1 of this specification.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIType  ::=  ENUMERATED
 * {
 *     iRI-Begin(1),
 *     iRI-End(2),
 *     iRI-Continue(3),
 *     iRI-Report(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IRIType: typeof _enum_for_IRIType = _enum_for_IRIType;

/**
 * @summary IRIType_iRI_Begin
 * @description
 *
 * IRI-BEGIN, as defined in ETSI TS 101 671. As a guide for sequence-number
 * contexts, a session starts at the time an IRI-BEGIN would be sent. Each
 * service-specific standard says when that message is sent.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRIType_iRI_Begin: _enum_for_IRIType.iRI_Begin = IRIType.iRI_Begin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI_Begin
 * @description
 *
 * IRI-BEGIN, as defined in ETSI TS 101 671. As a guide for sequence-number
 * contexts, a session starts at the time an IRI-BEGIN would be sent. Each
 * service-specific standard says when that message is sent.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRI_Begin: _enum_for_IRIType.iRI_Begin = IRIType.iRI_Begin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRIType_iRI_End
 * @description
 *
 * IRI-END, as defined in ETSI TS 101 671. As a guide for sequence-number
 * contexts, a session ends at the time an IRI-END would be sent.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRIType_iRI_End: _enum_for_IRIType.iRI_End = IRIType.iRI_End; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI_End
 * @description
 *
 * IRI-END, as defined in ETSI TS 101 671. As a guide for sequence-number
 * contexts, a session ends at the time an IRI-END would be sent.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRI_End: _enum_for_IRIType.iRI_End = IRIType.iRI_End; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRIType_iRI_Continue
 * @description
 *
 * IRI-CONTINUE, as defined in ETSI TS 101 671. This specification adds no
 * further condition.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRIType_iRI_Continue: _enum_for_IRIType.iRI_Continue = IRIType.iRI_Continue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI_Continue
 * @description
 *
 * IRI-CONTINUE, as defined in ETSI TS 101 671. This specification adds no
 * further condition.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRI_Continue: _enum_for_IRIType.iRI_Continue = IRIType.iRI_Continue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRIType_iRI_Report
 * @description
 *
 * IRI-REPORT, as defined in ETSI TS 101 671. CC associated with a single
 * IRI-REPORT typically forms its own sequence-number context.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRIType_iRI_Report: _enum_for_IRIType.iRI_Report = IRIType.iRI_Report; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI_Report
 * @description
 *
 * IRI-REPORT, as defined in ETSI TS 101 671. CC associated with a single
 * IRI-REPORT typically forms its own sequence-number context.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.10, clause 5.2.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRI_Report: _enum_for_IRIType.iRI_Report = IRIType.iRI_Report; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRIType: $.ASN1Decoder<IRIType> = $._decodeEnumerated;
export const _encode_IRIType: $.ASN1Encoder<IRIType> = $._encodeEnumerated;


/* eslint-enable */
