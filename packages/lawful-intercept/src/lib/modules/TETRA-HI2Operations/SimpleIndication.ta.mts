/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SimpleIndication {
    /**
     * The target has received a call-waiting indication for this call. Table
     * A.5.1 reports that indication when the target is the served user. The
     * other party is reported with the generic notification indicator.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.2, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    call_Waiting_Indication = 0,
    /**
     * This call has been added to a conference.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.11, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    add_conf_Indication = 1,
    /**
     * This call is on hold. Table A.5.1 reports the indication when the target
     * invokes hold.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.3, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    call_on_hold_Indication = 2,
    /**
     * This call has been retrieved. Table A.5.1 reports the indication when the
     * target invokes retrieve.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.3, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    retrieve_Indication = 3,
    /**
     * This call has been suspended. Table A.5.1 reports suspend when the target
     * invokes terminal portability.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.21, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    suspend_Indication = 4,
    /**
     * This call has been resumed. Table A.5.1 reports resume when the target
     * invokes terminal portability.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.21, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    resume_Indication = 5,
    /**
     * This call has been answered.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    answer_Indication = 6,
}

/**
 * @summary SimpleIndication
 * @description
 * 
 * LI-specific call event that has no equivalent parameter in the signalling
 * standards of table A.3.2. Clause A.3.3 includes it when the event is
 * detected. Table A.5.1 uses these indications when the target is the served
 * user for call waiting, hold, retrieve, and conference. An extension marker
 * follows the named indications.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.5.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleIndication  ::=  ENUMERATED
 * {
 *     call-Waiting-Indication(0),
 *         -- The target has received a call waiting indication for this call
 *     add-conf-Indication(1),
 *         -- this call has been added to a conference
 *     call-on-hold-Indication(2),
 *         -- indication that this call is on hold
 *     retrieve-Indication(3),
 *         -- indication that this call has been retrieved
 *     suspend-Indication(4),
 *         -- indication that this call has been suspended
 *     resume-Indication(5),
 *         -- indication that this call has been resumed
 *     answer-Indication(6),
 *         -- indication that this call has been answered
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SimpleIndication = _enum_for_SimpleIndication | ENUMERATED;

/**
 * @summary SimpleIndication_call_Waiting_Indication
 * @description
 *
 * The target has received a call-waiting indication for this call. Table A.5.1
 * reports that indication when the target is the served user. The other party
 * is reported with the generic notification indicator.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SimpleIndication_call_Waiting_Indication: SimpleIndication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call_Waiting_Indication
 * @description
 *
 * The target has received a call-waiting indication for this call. Table A.5.1
 * reports that indication when the target is the served user. The other party
 * is reported with the generic notification indicator.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const call_Waiting_Indication: SimpleIndication = SimpleIndication_call_Waiting_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_add_conf_Indication
 * @description
 *
 * This call has been added to a conference.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.11, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SimpleIndication_add_conf_Indication: SimpleIndication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary add_conf_Indication
 * @description
 *
 * This call has been added to a conference.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.11, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const add_conf_Indication: SimpleIndication = SimpleIndication_add_conf_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_call_on_hold_Indication
 * @description
 *
 * This call is on hold. Table A.5.1 reports the indication when the target
 * invokes hold.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SimpleIndication_call_on_hold_Indication: SimpleIndication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call_on_hold_Indication
 * @description
 *
 * This call is on hold. Table A.5.1 reports the indication when the target
 * invokes hold.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const call_on_hold_Indication: SimpleIndication = SimpleIndication_call_on_hold_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_retrieve_Indication
 * @description
 *
 * This call has been retrieved. Table A.5.1 reports the indication when the
 * target invokes retrieve.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SimpleIndication_retrieve_Indication: SimpleIndication = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve_Indication
 * @description
 *
 * This call has been retrieved. Table A.5.1 reports the indication when the
 * target invokes retrieve.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const retrieve_Indication: SimpleIndication = SimpleIndication_retrieve_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_suspend_Indication
 * @description
 *
 * This call has been suspended. Table A.5.1 reports suspend when the target
 * invokes terminal portability.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.21, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SimpleIndication_suspend_Indication: SimpleIndication = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend_Indication
 * @description
 *
 * This call has been suspended. Table A.5.1 reports suspend when the target
 * invokes terminal portability.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.21, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const suspend_Indication: SimpleIndication = SimpleIndication_suspend_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_resume_Indication
 * @description
 *
 * This call has been resumed. Table A.5.1 reports resume when the target
 * invokes terminal portability.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.21, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SimpleIndication_resume_Indication: SimpleIndication = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resume_Indication
 * @description
 *
 * This call has been resumed. Table A.5.1 reports resume when the target
 * invokes terminal portability.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.21, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const resume_Indication: SimpleIndication = SimpleIndication_resume_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_answer_Indication
 * @description
 *
 * This call has been answered.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SimpleIndication_answer_Indication: SimpleIndication = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answer_Indication
 * @description
 *
 * This call has been answered.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const answer_Indication: SimpleIndication = SimpleIndication_answer_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SimpleIndication: $.ASN1Decoder<SimpleIndication> = $._decodeEnumerated;
export const _encode_SimpleIndication: $.ASN1Encoder<SimpleIndication> = $._encodeEnumerated;


/* eslint-enable */
