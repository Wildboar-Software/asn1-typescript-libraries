/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityType_scope
 * @description
 * 
 * Point-to-point, point-to-multipoint, or broadcast. Circuit-mode services
 * state whether the call was initiated as point-to-point or point-to-multipoint
 * (clause 6.3.1). Data services set scope to match the service (clause 6.3.2).
 * Supplementary services omit scope (clause 6.4.7). Clause 4.3.4 requires
 * content of broadcast calls to a user population of which the operator
 * believes the target is a member.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, clause 4.3.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED {
 *     point2Point,
 *     point2MultiPoint,
 *     broadcast
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityType_scope {
    /**
     * Point-to-point. Clause 6.3.1 requires a circuit-mode call to record this
     * or point-to-multipoint. Annex C.1 uses it for an individual duplex speech
     * call.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    point2Point = 0,
    /**
     * Point-to-multipoint. Clause 6.3.1 requires a circuit-mode call to record
     * this or point-to-point.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    point2MultiPoint = 1,
    /**
     * Broadcast. Listed with `point2Point` and `point2MultiPoint`. Clause 4.3.4
     * requires the content of broadcast calls to a population of which the
     * operator believes the target is a member. Clause 6.3.1 requires
     * circuit-mode scope to distinguish point-to-point from
     * point-to-multipoint.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, clause 4.3.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    broadcast = 2,
}

/**
 * @summary ActivityType_scope
 * @description
 * 
 * Point-to-point, point-to-multipoint, or broadcast. Circuit-mode services
 * state whether the call was initiated as point-to-point or point-to-multipoint
 * (clause 6.3.1). Data services set scope to match the service (clause 6.3.2).
 * Supplementary services omit scope (clause 6.4.7). Clause 4.3.4 requires
 * content of broadcast calls to a user population of which the operator
 * believes the target is a member.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, clause 4.3.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED {
 *     point2Point,
 *     point2MultiPoint,
 *     broadcast
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityType_scope = _enum_for_ActivityType_scope;

/**
 * @summary ActivityType_scope
 * @description
 * 
 * Point-to-point, point-to-multipoint, or broadcast. Circuit-mode services
 * state whether the call was initiated as point-to-point or point-to-multipoint
 * (clause 6.3.1). Data services set scope to match the service (clause 6.3.2).
 * Supplementary services omit scope (clause 6.4.7). Clause 4.3.4 requires
 * content of broadcast calls to a user population of which the operator
 * believes the target is a member.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, clause 4.3.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-scope ::= ENUMERATED {
 *     point2Point,
 *     point2MultiPoint,
 *     broadcast
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityType_scope = _enum_for_ActivityType_scope;

/**
 * @summary ActivityType_scope_point2Point
 * @description
 *
 * Point-to-point. Clause 6.3.1 requires a circuit-mode call to record this or
 * point-to-multipoint. Annex C.1 uses it for an individual duplex speech call.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_point2Point: ActivityType_scope = ActivityType_scope.point2Point; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary point2Point
 * @description
 *
 * Point-to-point. Clause 6.3.1 requires a circuit-mode call to record this or
 * point-to-multipoint. Annex C.1 uses it for an individual duplex speech call.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const point2Point: ActivityType_scope = ActivityType_scope.point2Point; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_scope_point2MultiPoint
 * @description
 *
 * Point-to-multipoint. Clause 6.3.1 requires a circuit-mode call to record this
 * or point-to-point.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_point2MultiPoint: ActivityType_scope = ActivityType_scope.point2MultiPoint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary point2MultiPoint
 * @description
 *
 * Point-to-multipoint. Clause 6.3.1 requires a circuit-mode call to record this
 * or point-to-point.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const point2MultiPoint: ActivityType_scope = ActivityType_scope.point2MultiPoint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_scope_broadcast
 * @description
 *
 * Broadcast. Listed with `point2Point` and `point2MultiPoint`. Clause 4.3.4
 * requires the content of broadcast calls to a population of which the operator
 * believes the target is a member. Clause 6.3.1 requires circuit-mode scope to
 * distinguish point-to-point from point-to-multipoint.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, clause 4.3.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_scope_broadcast: ActivityType_scope = ActivityType_scope.broadcast; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcast
 * @description
 *
 * Broadcast. Listed with `point2Point` and `point2MultiPoint`. Clause 4.3.4
 * requires the content of broadcast calls to a population of which the operator
 * believes the target is a member. Clause 6.3.1 requires circuit-mode scope to
 * distinguish point-to-point from point-to-multipoint.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, clause 4.3.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const broadcast: ActivityType_scope = ActivityType_scope.broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActivityType_scope: $.ASN1Decoder<ActivityType_scope> = $._decodeEnumerated;
export const _encode_ActivityType_scope: $.ASN1Encoder<ActivityType_scope> = $._encodeEnumerated;


/* eslint-enable */
