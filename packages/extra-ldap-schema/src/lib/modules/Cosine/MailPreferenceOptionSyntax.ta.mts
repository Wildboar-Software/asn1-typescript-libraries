/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_MailPreferenceOptionSyntax: {
    readonly no_list_inclusion: 0;
    readonly any_list_inclusion: 1;
    readonly professional_list_inclusion: 2;
} = {
    no_list_inclusion: 0,
    any_list_inclusion: 1,
    professional_list_inclusion: 2,
};

export
type _enum_for_MailPreferenceOptionSyntax = ENUMERATED;

/**
 * @summary MailPreferenceOptionSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MailPreferenceOptionSyntax  ::=  ENUMERATED {
 *     no-list-inclusion(0),
 * 
 *     -- may be added to any lists
 *     any-list-inclusion(1),
 * 
 *     -- may be added to lists
 *     -- which the list provider
 *     -- views as related to the
 *     -- users professional inter-
 *     -- ests, perhaps evaluated
 *     -- from the business of the
 *     -- organisation or keywords
 *     -- in the entry.
 *     professional-list-inclusion(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MailPreferenceOptionSyntax = _enum_for_MailPreferenceOptionSyntax | ENUMERATED;

/**
 * @summary MailPreferenceOptionSyntax_no_list_inclusion
 * @constant
 * @type {number}
 */
export
const MailPreferenceOptionSyntax_no_list_inclusion: number = 0 satisfies MailPreferenceOptionSyntax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_list_inclusion
 * @constant
 * @type {number}
 */
export
const no_list_inclusion: number = MailPreferenceOptionSyntax_no_list_inclusion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MailPreferenceOptionSyntax_any_list_inclusion
 * @constant
 * @type {number}
 */
export
const MailPreferenceOptionSyntax_any_list_inclusion: number = 1 satisfies MailPreferenceOptionSyntax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_list_inclusion
 * @constant
 * @type {number}
 */
export
const any_list_inclusion: number = MailPreferenceOptionSyntax_any_list_inclusion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MailPreferenceOptionSyntax_professional_list_inclusion
 * @constant
 * @type {number}
 */
export
const MailPreferenceOptionSyntax_professional_list_inclusion: number = 2 satisfies MailPreferenceOptionSyntax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary professional_list_inclusion
 * @constant
 * @type {number}
 */
export
const professional_list_inclusion: number = MailPreferenceOptionSyntax_professional_list_inclusion; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MailPreferenceOptionSyntax: $.ASN1Decoder<MailPreferenceOptionSyntax> = $._decodeEnumerated;

export
const _encode_MailPreferenceOptionSyntax: $.ASN1Encoder<MailPreferenceOptionSyntax> = $._encodeEnumerated;

/* eslint-enable */
