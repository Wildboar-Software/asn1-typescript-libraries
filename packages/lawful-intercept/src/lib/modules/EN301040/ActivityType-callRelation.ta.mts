/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityType_callRelation
 * @description
 * 
 * How this activity sits relative to the call: `begin`, `end`, `continue`, or
 * `report`. The component is mandatory on `ActivityType`. Clause 6.3 lists the
 * names and gives no further definition. The beginning, end, and duration of a
 * connection are carried by the activity-monitor timestamp (clause 6.5).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-callRelation ::= ENUMERATED {
 *     begin,
 *     end,
 *     continue,
 *     report
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityType_callRelation {
    /**
     * Named call relation on `ActivityType`. Clause 6.3 lists `begin` with
     * `end`, `continue`, and `report`, and gives no further definition.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    begin = 0,
    /**
     * Named call relation on `ActivityType`. Clause 6.3 lists `end` with
     * `begin`, `continue`, and `report`, and gives no further definition.
     * Connection end time is the activity-monitor timestamp (clause 6.5).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    end = 1,
    /**
     * Named call relation on `ActivityType`. The ASN.1 identifier is
     * `continue`. Clause 6.3 lists it with `begin`, `end`, and `report`, and
     * gives no further definition.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    continue_ = 2,
    /**
     * Named call relation on `ActivityType`. Clause 6.3 lists `report` with
     * `begin`, `end`, and `continue`, and gives no further definition.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    report = 3,
}

/**
 * @summary ActivityType_callRelation
 * @description
 * 
 * How this activity sits relative to the call: `begin`, `end`, `continue`, or
 * `report`. The component is mandatory on `ActivityType`. Clause 6.3 lists the
 * names and gives no further definition. The beginning, end, and duration of a
 * connection are carried by the activity-monitor timestamp (clause 6.5).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-callRelation ::= ENUMERATED {
 *     begin,
 *     end,
 *     continue,
 *     report
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityType_callRelation = _enum_for_ActivityType_callRelation;

/**
 * @summary ActivityType_callRelation
 * @description
 * 
 * How this activity sits relative to the call: `begin`, `end`, `continue`, or
 * `report`. The component is mandatory on `ActivityType`. Clause 6.3 lists the
 * names and gives no further definition. The beginning, end, and duration of a
 * connection are carried by the activity-monitor timestamp (clause 6.5).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-callRelation ::= ENUMERATED {
 *     begin,
 *     end,
 *     continue,
 *     report
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityType_callRelation = _enum_for_ActivityType_callRelation;

/**
 * @summary ActivityType_callRelation_begin
 * @description
 *
 * Named call relation on `ActivityType`. Clause 6.3 lists `begin` with `end`,
 * `continue`, and `report`, and gives no further definition.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_callRelation_begin = ActivityType_callRelation.begin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary begin
 * @description
 *
 * Named call relation on `ActivityType`. Clause 6.3 lists `begin` with `end`,
 * `continue`, and `report`, and gives no further definition.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const begin = ActivityType_callRelation.begin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_callRelation_end
 * @description
 *
 * Named call relation on `ActivityType`. Clause 6.3 lists `end` with `begin`,
 * `continue`, and `report`, and gives no further definition. Connection end
 * time is the activity-monitor timestamp (clause 6.5).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_callRelation_end = ActivityType_callRelation.end; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary end
 * @description
 *
 * Named call relation on `ActivityType`. Clause 6.3 lists `end` with `begin`,
 * `continue`, and `report`, and gives no further definition. Connection end
 * time is the activity-monitor timestamp (clause 6.5).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const end = ActivityType_callRelation.end; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_callRelation_continue_
 * @description
 *
 * Named call relation on `ActivityType`. The ASN.1 identifier is `continue`.
 * Clause 6.3 lists it with `begin`, `end`, and `report`, and gives no further
 * definition.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_callRelation_continue_ = ActivityType_callRelation.continue_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continue_
 * @description
 *
 * Named call relation on `ActivityType`. The ASN.1 identifier is `continue`.
 * Clause 6.3 lists it with `begin`, `end`, and `report`, and gives no further
 * definition.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const continue_ = ActivityType_callRelation.continue_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_callRelation_report
 * @description
 *
 * Named call relation on `ActivityType`. Clause 6.3 lists `report` with
 * `begin`, `end`, and `continue`, and gives no further definition.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_callRelation_report = ActivityType_callRelation.report; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary report
 * @description
 *
 * Named call relation on `ActivityType`. Clause 6.3 lists `report` with
 * `begin`, `end`, and `continue`, and gives no further definition.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const report = ActivityType_callRelation.report; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActivityType_callRelation: $.ASN1Decoder<ActivityType_callRelation> = $._decodeEnumerated;
export const _encode_ActivityType_callRelation: $.ASN1Encoder<ActivityType_callRelation> = $._encodeEnumerated;


/* eslint-enable */
