/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityType_direction
 * @description
 * 
 * Whether the activity is towards the target or from the target. Circuit-mode
 * services include it (clause 6.3.1). Data services set it to match the service
 * (clause 6.3.2). Supplementary services set it as appropriate (clause 6.4.7).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED {
 *     toTarget,
 *     fromTarget
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActivityType_direction {
    /**
     * The call or data is addressed to the target (clause 6.3.1).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    toTarget = 0,
    /**
     * The call or data is from the target (clause 6.3.1). Annex C uses this
     * value for a target-originated speech U-SETUP and for ITSI-attach
     * registration.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, annex C.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    fromTarget = 1,
}

/**
 * @summary ActivityType_direction
 * @description
 * 
 * Whether the activity is towards the target or from the target. Circuit-mode
 * services include it (clause 6.3.1). Data services set it to match the service
 * (clause 6.3.2). Supplementary services set it as appropriate (clause 6.4.7).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED {
 *     toTarget,
 *     fromTarget
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActivityType_direction = _enum_for_ActivityType_direction;

/**
 * @summary ActivityType_direction
 * @description
 * 
 * Whether the activity is towards the target or from the target. Circuit-mode
 * services include it (clause 6.3.1). Data services set it to match the service
 * (clause 6.3.2). Supplementary services set it as appropriate (clause 6.4.7).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType-direction ::= ENUMERATED {
 *     toTarget,
 *     fromTarget
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActivityType_direction: typeof _enum_for_ActivityType_direction = _enum_for_ActivityType_direction;

/**
 * @summary ActivityType_direction_toTarget
 * @description
 *
 * The call or data is addressed to the target (clause 6.3.1).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_direction_toTarget: _enum_for_ActivityType_direction.toTarget = ActivityType_direction.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @description
 *
 * The call or data is addressed to the target (clause 6.3.1).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const toTarget: _enum_for_ActivityType_direction.toTarget = ActivityType_direction.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActivityType_direction_fromTarget
 * @description
 *
 * The call or data is from the target (clause 6.3.1). Annex C uses this value
 * for a target-originated speech U-SETUP and for ITSI-attach registration.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, annex C.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ActivityType_direction_fromTarget: _enum_for_ActivityType_direction.fromTarget = ActivityType_direction.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @description
 *
 * The call or data is from the target (clause 6.3.1). Annex C uses this value
 * for a target-originated speech U-SETUP and for ITSI-attach registration.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, annex C.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const fromTarget: _enum_for_ActivityType_direction.fromTarget = ActivityType_direction.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActivityType_direction: $.ASN1Decoder<ActivityType_direction> = $._decodeEnumerated;
export const _encode_ActivityType_direction: $.ASN1Encoder<ActivityType_direction> = $._encodeEnumerated;


/* eslint-enable */
