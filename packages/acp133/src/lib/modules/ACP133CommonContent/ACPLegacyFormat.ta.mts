/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACPLegacyFormat
 * @description
 *
 * Legacy message format used when
 * {@link ACPPreferredDelivery} is `acp127`.
 *
 * `0` JANAP 128 (Joint Army, Navy, Air Force Procedure
 * 128). `1` ACP 126. `2` DOI 103. `3` DOI 103 special.
 * `4` ACP 127. `5` ACP 127 converted. `6` is held for
 * ACP 127 Standard, if that value is needed. `7` ACP 127
 * state. `8` ACP 127 modified. `9` SOCOMM special.
 * `10` SOCOMM narrative. `11` is held for SOCOMM
 * narrative TTY, if that value is needed. `12` SOCOMM
 * narrative special. `13` SOCOMM data. `14` SOCOMM
 * internal. `15` SOCOMM external. `16` MFI default.
 * `17` SMTP. `18` P22.
 *
 * Integers 19 through 31 are for national or bilateral
 * use and are not named here. `32`–`36` are the ACP 145
 * formats of the United States, Australia, Canada, the
 * United Kingdom, and New Zealand.
 *
 * The September 2000 common-content draft named `0`–`15`
 * and left `32`–`48` for national or bilateral use.
 * ACP 133 SUPP-1(A) names `16`–`18` and `32`–`36`.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.3](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.3)
 * and
 * [section 6.1](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.1).
 * ACP 133 (June 1998), paragraph 101, introduces ACP 127
 * and JANAP 128 interworking.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPLegacyFormat  ::=  INTEGER {
 *     janap128(0),
 *     acp126(1),
 *     doi103(2),
 *     doi103-special(3),
 *     acp127(4),
 *     acp127-converted(5),
 *     reserved-1(6),  -- hold for ACP127Standard if needed
 *     acp127-state(7),
 *     acp127-modified(8),
 *     socomm-special(9),
 *     socomm-narrative(10),
 *     reserved-2(11), -- hold for SOCOMMNarrativeTTY if needed
 *     socomm-narrative-special(12),
 *     socomm-data(13),
 *     socomm-internal(14),
 *     socomm-external(15),
 *     mfi-default(16),
 *     acp-legacy-format-smtp(17),
 *     p22(18),
 *     -- 19 - 31 for national or bilateral use
 *     acp145-united-states(32),
 *     acp145-australia(33),
 *     acp145-canada(34),
 *     acp145-united-kingdom(35),
 *     acp145-new-zealand(36)
 * }
 * ```
 */
export
type ACPLegacyFormat = INTEGER;

/**
 * JANAP 128 (Joint Army, Navy, Air Force Procedure 128).
 * @summary ACPLegacyFormat_janap128
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_janap128 = 0 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_janap128}.
 * @summary ACPLegacyFormat_janap128
 * @constant
 * @type {number}
 */
export
const janap128 = ACPLegacyFormat_janap128 satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 126.
 * @summary ACPLegacyFormat_acp126
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp126 = 1 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp126}.
 * @summary ACPLegacyFormat_acp126
 * @constant
 * @type {number}
 */
export
const acp126 = ACPLegacyFormat_acp126 satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * DOI 103.
 * @summary ACPLegacyFormat_doi103
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_doi103 = 2 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_doi103}.
 * @summary ACPLegacyFormat_doi103
 * @constant
 * @type {number}
 */
export
const doi103 = ACPLegacyFormat_doi103 satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * DOI 103 special.
 * @summary ACPLegacyFormat_doi103_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_doi103_special = 3 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_doi103_special}.
 * @summary ACPLegacyFormat_doi103_special
 * @constant
 * @type {number}
 */
export
const doi103_special = ACPLegacyFormat_doi103_special satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 127.
 * @summary ACPLegacyFormat_acp127
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127 = 4 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp127}.
 * @summary ACPLegacyFormat_acp127
 * @constant
 * @type {number}
 */
export
const acp127 = ACPLegacyFormat_acp127 satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 127, converted.
 * @summary ACPLegacyFormat_acp127_converted
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_converted = 5 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp127_converted}.
 * @summary ACPLegacyFormat_acp127_converted
 * @constant
 * @type {number}
 */
export
const acp127_converted = ACPLegacyFormat_acp127_converted satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * Held for ACP 127 Standard, if that value is needed.
 * @summary ACPLegacyFormat_reserved_1
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_reserved_1 = 6 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_reserved_1}.
 * @summary ACPLegacyFormat_reserved_1
 * @constant
 * @type {number}
 */
export
const reserved_1 = ACPLegacyFormat_reserved_1 satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 127 state.
 * @summary ACPLegacyFormat_acp127_state
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_state = 7 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp127_state}.
 * @summary ACPLegacyFormat_acp127_state
 * @constant
 * @type {number}
 */
export
const acp127_state = ACPLegacyFormat_acp127_state satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 127 modified.
 * @summary ACPLegacyFormat_acp127_modified
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_modified = 8 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp127_modified}.
 * @summary ACPLegacyFormat_acp127_modified
 * @constant
 * @type {number}
 */
export
const acp127_modified = ACPLegacyFormat_acp127_modified satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM special.
 * @summary ACPLegacyFormat_socomm_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_special = 9 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_special}.
 * @summary ACPLegacyFormat_socomm_special
 * @constant
 * @type {number}
 */
export
const socomm_special = ACPLegacyFormat_socomm_special satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM narrative.
 * @summary ACPLegacyFormat_socomm_narrative
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_narrative = 10 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_narrative}.
 * @summary ACPLegacyFormat_socomm_narrative
 * @constant
 * @type {number}
 */
export
const socomm_narrative = ACPLegacyFormat_socomm_narrative satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * Held for SOCOMM narrative TTY, if that value is needed.
 * @summary ACPLegacyFormat_reserved_2
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_reserved_2 = 11 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_reserved_2}.
 * @summary ACPLegacyFormat_reserved_2
 * @constant
 * @type {number}
 */
export
const reserved_2 = ACPLegacyFormat_reserved_2 satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM narrative special.
 * @summary ACPLegacyFormat_socomm_narrative_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_narrative_special = 12 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_narrative_special}.
 * @summary ACPLegacyFormat_socomm_narrative_special
 * @constant
 * @type {number}
 */
export
const socomm_narrative_special = ACPLegacyFormat_socomm_narrative_special satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM data.
 * @summary ACPLegacyFormat_socomm_data
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_data = 13 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_data}.
 * @summary ACPLegacyFormat_socomm_data
 * @constant
 * @type {number}
 */
export
const socomm_data = ACPLegacyFormat_socomm_data satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM internal.
 * @summary ACPLegacyFormat_socomm_internal
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_internal = 14 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_internal}.
 * @summary ACPLegacyFormat_socomm_internal
 * @constant
 * @type {number}
 */
export
const socomm_internal = ACPLegacyFormat_socomm_internal satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM external.
 * @summary ACPLegacyFormat_socomm_external
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_external = 15 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_external}.
 * @summary ACPLegacyFormat_socomm_external
 * @constant
 * @type {number}
 */
export
const socomm_external = ACPLegacyFormat_socomm_external satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MFI default. Named in ACP 133 SUPP-1(A).
 * @summary ACPLegacyFormat_mfi_default
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_mfi_default = 16 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_mfi_default}.
 * @summary ACPLegacyFormat_mfi_default
 * @constant
 * @type {number}
 */
export
const mfi_default = ACPLegacyFormat_mfi_default satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SMTP. Named in ACP 133 SUPP-1(A).
 * @summary ACPLegacyFormat_acp_legacy_format_smtp
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp_legacy_format_smtp = 17 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp_legacy_format_smtp}.
 * @summary ACPLegacyFormat_acp_legacy_format_smtp
 * @constant
 * @type {number}
 */
export
const acp_legacy_format_smtp = ACPLegacyFormat_acp_legacy_format_smtp satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * P22. Named in ACP 133 SUPP-1(A).
 * @summary ACPLegacyFormat_p22
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_p22 = 18 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_p22}.
 * @summary ACPLegacyFormat_p22
 * @constant
 * @type {number}
 */
export
const p22 = ACPLegacyFormat_p22 satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of the United States.
 * @summary ACPLegacyFormat_acp145_united_states
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_united_states = 32 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_united_states}.
 * @summary ACPLegacyFormat_acp145_united_states
 * @constant
 * @type {number}
 */
export
const acp145_united_states = ACPLegacyFormat_acp145_united_states satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of Australia.
 * @summary ACPLegacyFormat_acp145_australia
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_australia = 33 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_australia}.
 * @summary ACPLegacyFormat_acp145_australia
 * @constant
 * @type {number}
 */
export
const acp145_australia = ACPLegacyFormat_acp145_australia satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of Canada.
 * @summary ACPLegacyFormat_acp145_canada
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_canada = 34 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_canada}.
 * @summary ACPLegacyFormat_acp145_canada
 * @constant
 * @type {number}
 */
export
const acp145_canada = ACPLegacyFormat_acp145_canada satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of the United Kingdom.
 * @summary ACPLegacyFormat_acp145_united_kingdom
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_united_kingdom = 35 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_united_kingdom}.
 * @summary ACPLegacyFormat_acp145_united_kingdom
 * @constant
 * @type {number}
 */
export
const acp145_united_kingdom = ACPLegacyFormat_acp145_united_kingdom satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of New Zealand.
 * @summary ACPLegacyFormat_acp145_new_zealand
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_new_zealand = 36 satisfies ACPLegacyFormat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_new_zealand}.
 * @summary ACPLegacyFormat_acp145_new_zealand
 * @constant
 * @type {number}
 */
export
const acp145_new_zealand = ACPLegacyFormat_acp145_new_zealand satisfies ACPLegacyFormat; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ACPLegacyFormat = $._decodeInteger;
export const _encode_ACPLegacyFormat = $._encodeInteger;


/* eslint-enable */
