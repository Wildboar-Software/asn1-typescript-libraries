/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RIParametersDeprecated_rIType
 * @description
 *
 * RI type: `normal`, `off-line`, or a part-time
 * terminal.
 * ACP 133 (June 1998), Figure 3-2, uses `normal` in
 * an `rIInfo` example.
 *
 * [draft-dally-acp133-and-ldap-01, section 6.16](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.16).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED {
 *     normal(0),
 *     off-line(1),
 *     partTimeTerminal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_RIParametersDeprecated_rIType = {
    normal: 0,
    off_line: 1,
    partTimeTerminal: 2,
} as const;

export
type _enum_for_RIParametersDeprecated_rIType =
    (typeof _enum_for_RIParametersDeprecated_rIType)[keyof typeof _enum_for_RIParametersDeprecated_rIType];

/**
 * @summary RIParametersDeprecated_rIType
 * @description
 *
 * RI type: `normal`, `off-line`, or a part-time
 * terminal.
 * ACP 133 (June 1998), Figure 3-2, uses `normal` in
 * an `rIInfo` example.
 *
 * [draft-dally-acp133-and-ldap-01, section 6.16](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.16).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED {
 *     normal(0),
 *     off-line(1),
 *     partTimeTerminal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RIParametersDeprecated_rIType = _enum_for_RIParametersDeprecated_rIType;

/**
 * @summary RIParametersDeprecated_rIType
 * @description
 *
 * RI type: `normal`, `off-line`, or a part-time
 * terminal.
 * ACP 133 (June 1998), Figure 3-2, uses `normal` in
 * an `rIInfo` example.
 *
 * [draft-dally-acp133-and-ldap-01, section 6.16](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.16).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED {
 *     normal(0),
 *     off-line(1),
 *     partTimeTerminal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RIParametersDeprecated_rIType = _enum_for_RIParametersDeprecated_rIType;

/**
 * Normal routing indicator.
 * @summary RIParametersDeprecated_rIType_normal
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_normal = RIParametersDeprecated_rIType.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link RIParametersDeprecated_rIType_normal}.
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal = RIParametersDeprecated_rIType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Off-line routing indicator.
 * @summary RIParametersDeprecated_rIType_off_line
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_off_line = RIParametersDeprecated_rIType.off_line; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link RIParametersDeprecated_rIType_off_line}.
 * @summary off_line
 * @constant
 * @type {number}
 */
export
const off_line = RIParametersDeprecated_rIType.off_line; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Part-time terminal.
 * @summary RIParametersDeprecated_rIType_partTimeTerminal
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_partTimeTerminal = RIParametersDeprecated_rIType.partTimeTerminal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link RIParametersDeprecated_rIType_partTimeTerminal}.
 * @summary partTimeTerminal
 * @constant
 * @type {number}
 */
export
const partTimeTerminal = RIParametersDeprecated_rIType.partTimeTerminal; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RIParametersDeprecated_rIType: $.ASN1Decoder<RIParametersDeprecated_rIType> =
    $._decodeEnumerated as $.ASN1Decoder<RIParametersDeprecated_rIType>;
export const _encode_RIParametersDeprecated_rIType: $.ASN1Encoder<RIParametersDeprecated_rIType> =
    $._encodeEnumerated as $.ASN1Encoder<RIParametersDeprecated_rIType>;


/* eslint-enable */
