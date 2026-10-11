/* eslint-disable */
import {
    INTEGER
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
const ACPLegacyFormat_janap128: ACPLegacyFormat = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_janap128}.
 * @summary ACPLegacyFormat_janap128
 * @constant
 * @type {number}
 */
export
const janap128: ACPLegacyFormat = ACPLegacyFormat_janap128; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 126.
 * @summary ACPLegacyFormat_acp126
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp126: ACPLegacyFormat = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp126}.
 * @summary ACPLegacyFormat_acp126
 * @constant
 * @type {number}
 */
export
const acp126: ACPLegacyFormat = ACPLegacyFormat_acp126; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * DOI 103.
 * @summary ACPLegacyFormat_doi103
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_doi103: ACPLegacyFormat = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_doi103}.
 * @summary ACPLegacyFormat_doi103
 * @constant
 * @type {number}
 */
export
const doi103: ACPLegacyFormat = ACPLegacyFormat_doi103; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * DOI 103 special.
 * @summary ACPLegacyFormat_doi103_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_doi103_special: ACPLegacyFormat = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_doi103_special}.
 * @summary ACPLegacyFormat_doi103_special
 * @constant
 * @type {number}
 */
export
const doi103_special: ACPLegacyFormat = ACPLegacyFormat_doi103_special; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 127.
 * @summary ACPLegacyFormat_acp127
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127: ACPLegacyFormat = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp127}.
 * @summary ACPLegacyFormat_acp127
 * @constant
 * @type {number}
 */
export
const acp127: ACPLegacyFormat = ACPLegacyFormat_acp127; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 127, converted.
 * @summary ACPLegacyFormat_acp127_converted
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_converted: ACPLegacyFormat = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp127_converted}.
 * @summary ACPLegacyFormat_acp127_converted
 * @constant
 * @type {number}
 */
export
const acp127_converted: ACPLegacyFormat = ACPLegacyFormat_acp127_converted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * Held for ACP 127 Standard, if that value is needed.
 * @summary ACPLegacyFormat_reserved_1
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_reserved_1: ACPLegacyFormat = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_reserved_1}.
 * @summary ACPLegacyFormat_reserved_1
 * @constant
 * @type {number}
 */
export
const reserved_1: ACPLegacyFormat = ACPLegacyFormat_reserved_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 127 state.
 * @summary ACPLegacyFormat_acp127_state
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_state: ACPLegacyFormat = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp127_state}.
 * @summary ACPLegacyFormat_acp127_state
 * @constant
 * @type {number}
 */
export
const acp127_state: ACPLegacyFormat = ACPLegacyFormat_acp127_state; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 127 modified.
 * @summary ACPLegacyFormat_acp127_modified
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_modified: ACPLegacyFormat = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp127_modified}.
 * @summary ACPLegacyFormat_acp127_modified
 * @constant
 * @type {number}
 */
export
const acp127_modified: ACPLegacyFormat = ACPLegacyFormat_acp127_modified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM special.
 * @summary ACPLegacyFormat_socomm_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_special: ACPLegacyFormat = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_special}.
 * @summary ACPLegacyFormat_socomm_special
 * @constant
 * @type {number}
 */
export
const socomm_special: ACPLegacyFormat = ACPLegacyFormat_socomm_special; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM narrative.
 * @summary ACPLegacyFormat_socomm_narrative
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_narrative: ACPLegacyFormat = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_narrative}.
 * @summary ACPLegacyFormat_socomm_narrative
 * @constant
 * @type {number}
 */
export
const socomm_narrative: ACPLegacyFormat = ACPLegacyFormat_socomm_narrative; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * Held for SOCOMM narrative TTY, if that value is needed.
 * @summary ACPLegacyFormat_reserved_2
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_reserved_2: ACPLegacyFormat = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_reserved_2}.
 * @summary ACPLegacyFormat_reserved_2
 * @constant
 * @type {number}
 */
export
const reserved_2: ACPLegacyFormat = ACPLegacyFormat_reserved_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM narrative special.
 * @summary ACPLegacyFormat_socomm_narrative_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_narrative_special: ACPLegacyFormat = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_narrative_special}.
 * @summary ACPLegacyFormat_socomm_narrative_special
 * @constant
 * @type {number}
 */
export
const socomm_narrative_special: ACPLegacyFormat = ACPLegacyFormat_socomm_narrative_special; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM data.
 * @summary ACPLegacyFormat_socomm_data
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_data: ACPLegacyFormat = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_data}.
 * @summary ACPLegacyFormat_socomm_data
 * @constant
 * @type {number}
 */
export
const socomm_data: ACPLegacyFormat = ACPLegacyFormat_socomm_data; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM internal.
 * @summary ACPLegacyFormat_socomm_internal
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_internal: ACPLegacyFormat = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_internal}.
 * @summary ACPLegacyFormat_socomm_internal
 * @constant
 * @type {number}
 */
export
const socomm_internal: ACPLegacyFormat = ACPLegacyFormat_socomm_internal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SOCOMM external.
 * @summary ACPLegacyFormat_socomm_external
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_external: ACPLegacyFormat = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_socomm_external}.
 * @summary ACPLegacyFormat_socomm_external
 * @constant
 * @type {number}
 */
export
const socomm_external: ACPLegacyFormat = ACPLegacyFormat_socomm_external; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * MFI default. Named in ACP 133 SUPP-1(A).
 * @summary ACPLegacyFormat_mfi_default
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_mfi_default: ACPLegacyFormat = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_mfi_default}.
 * @summary ACPLegacyFormat_mfi_default
 * @constant
 * @type {number}
 */
export
const mfi_default: ACPLegacyFormat = ACPLegacyFormat_mfi_default; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * SMTP. Named in ACP 133 SUPP-1(A).
 * @summary ACPLegacyFormat_acp_legacy_format_smtp
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp_legacy_format_smtp: ACPLegacyFormat = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp_legacy_format_smtp}.
 * @summary ACPLegacyFormat_acp_legacy_format_smtp
 * @constant
 * @type {number}
 */
export
const acp_legacy_format_smtp: ACPLegacyFormat = ACPLegacyFormat_acp_legacy_format_smtp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * P22. Named in ACP 133 SUPP-1(A).
 * @summary ACPLegacyFormat_p22
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_p22: ACPLegacyFormat = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_p22}.
 * @summary ACPLegacyFormat_p22
 * @constant
 * @type {number}
 */
export
const p22: ACPLegacyFormat = ACPLegacyFormat_p22; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of the United States.
 * @summary ACPLegacyFormat_acp145_united_states
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_united_states: ACPLegacyFormat = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_united_states}.
 * @summary ACPLegacyFormat_acp145_united_states
 * @constant
 * @type {number}
 */
export
const acp145_united_states: ACPLegacyFormat = ACPLegacyFormat_acp145_united_states; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of Australia.
 * @summary ACPLegacyFormat_acp145_australia
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_australia: ACPLegacyFormat = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_australia}.
 * @summary ACPLegacyFormat_acp145_australia
 * @constant
 * @type {number}
 */
export
const acp145_australia: ACPLegacyFormat = ACPLegacyFormat_acp145_australia; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of Canada.
 * @summary ACPLegacyFormat_acp145_canada
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_canada: ACPLegacyFormat = 34; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_canada}.
 * @summary ACPLegacyFormat_acp145_canada
 * @constant
 * @type {number}
 */
export
const acp145_canada: ACPLegacyFormat = ACPLegacyFormat_acp145_canada; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of the United Kingdom.
 * @summary ACPLegacyFormat_acp145_united_kingdom
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_united_kingdom: ACPLegacyFormat = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_united_kingdom}.
 * @summary ACPLegacyFormat_acp145_united_kingdom
 * @constant
 * @type {number}
 */
export
const acp145_united_kingdom: ACPLegacyFormat = ACPLegacyFormat_acp145_united_kingdom; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * ACP 145 format of New Zealand.
 * @summary ACPLegacyFormat_acp145_new_zealand
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_new_zealand: ACPLegacyFormat = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link ACPLegacyFormat_acp145_new_zealand}.
 * @summary ACPLegacyFormat_acp145_new_zealand
 * @constant
 * @type {number}
 */
export
const acp145_new_zealand: ACPLegacyFormat = ACPLegacyFormat_acp145_new_zealand; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ACPLegacyFormat = $._decodeInteger;
export const _encode_ACPLegacyFormat = $._encodeInteger;


/* eslint-enable */
