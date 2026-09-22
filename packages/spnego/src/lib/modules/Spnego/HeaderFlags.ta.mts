/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HeaderFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HeaderFlags  ::=  BIT STRING {
 *         unused0(0),
 *         return-dns-name(1),
 *         unused2(2),
 *         unused3(3),
 *         unused4(4),
 *         ds-12-required(5),
 *         ds-13-required(6),
 *         key-list-support-required(7),
 *         ds-10-required(8),
 *         ds-9-required(9),
 *         ds-8-required(10),
 *         web-service-required(11),
 *         ds-6-required(12),
 *         try-next-closest-site(13),
 *         is-dns-name(14),
 *         is-flat-name(15),
 *         only-ldap-needed(16),
 *         avoid-self(17),
 *         good-timeserv-pref(18),
 *         writable-required(19),
 *         timeserv-required(20),
 *         kdc-required(21),
 *         ip-required(22),
 *         background-only(23),
 *         pdc-required(24),
 *         gc-server-required(25),
 *         ds-preferred(26),
 *         ds-required(27),
 *         unused28(28),
 *         unused29(29),
 *         unused30(30),
 *         force-rediscovery(31)
 * }
 * ```
 */
export
type HeaderFlags = BIT_STRING;

/**
 * @summary HeaderFlags_unused0
 * @constant
 */
export
const HeaderFlags_unused0: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary unused0
 * @constant
 */
export
const unused0: number = HeaderFlags_unused0; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_return_dns_name
 * @constant
 */
export
const HeaderFlags_return_dns_name: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary return_dns_name
 * @constant
 */
export
const return_dns_name: number = HeaderFlags_return_dns_name; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_unused2
 * @constant
 */
export
const HeaderFlags_unused2: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary unused2
 * @constant
 */
export
const unused2: number = HeaderFlags_unused2; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_unused3
 * @constant
 */
export
const HeaderFlags_unused3: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary unused3
 * @constant
 */
export
const unused3: number = HeaderFlags_unused3; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_unused4
 * @constant
 */
export
const HeaderFlags_unused4: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary unused4
 * @constant
 */
export
const unused4: number = HeaderFlags_unused4; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ds_12_required
 * @constant
 */
export
const HeaderFlags_ds_12_required: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ds_12_required
 * @constant
 */
export
const ds_12_required: number = HeaderFlags_ds_12_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ds_13_required
 * @constant
 */
export
const HeaderFlags_ds_13_required: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ds_13_required
 * @constant
 */
export
const ds_13_required: number = HeaderFlags_ds_13_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_key_list_support_required
 * @constant
 */
export
const HeaderFlags_key_list_support_required: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary key_list_support_required
 * @constant
 */
export
const key_list_support_required: number = HeaderFlags_key_list_support_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ds_10_required
 * @constant
 */
export
const HeaderFlags_ds_10_required: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ds_10_required
 * @constant
 */
export
const ds_10_required: number = HeaderFlags_ds_10_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ds_9_required
 * @constant
 */
export
const HeaderFlags_ds_9_required: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary ds_9_required
 * @constant
 */
export
const ds_9_required: number = HeaderFlags_ds_9_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ds_8_required
 * @constant
 */
export
const HeaderFlags_ds_8_required: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ds_8_required
 * @constant
 */
export
const ds_8_required: number = HeaderFlags_ds_8_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_web_service_required
 * @constant
 */
export
const HeaderFlags_web_service_required: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary web_service_required
 * @constant
 */
export
const web_service_required: number = HeaderFlags_web_service_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ds_6_required
 * @constant
 */
export
const HeaderFlags_ds_6_required: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary ds_6_required
 * @constant
 */
export
const ds_6_required: number = HeaderFlags_ds_6_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_try_next_closest_site
 * @constant
 */
export
const HeaderFlags_try_next_closest_site: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary try_next_closest_site
 * @constant
 */
export
const try_next_closest_site: number = HeaderFlags_try_next_closest_site; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_is_dns_name
 * @constant
 */
export
const HeaderFlags_is_dns_name: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary is_dns_name
 * @constant
 */
export
const is_dns_name: number = HeaderFlags_is_dns_name; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_is_flat_name
 * @constant
 */
export
const HeaderFlags_is_flat_name: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary is_flat_name
 * @constant
 */
export
const is_flat_name: number = HeaderFlags_is_flat_name; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_only_ldap_needed
 * @constant
 */
export
const HeaderFlags_only_ldap_needed: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary only_ldap_needed
 * @constant
 */
export
const only_ldap_needed: number = HeaderFlags_only_ldap_needed; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_avoid_self
 * @constant
 */
export
const HeaderFlags_avoid_self: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary avoid_self
 * @constant
 */
export
const avoid_self: number = HeaderFlags_avoid_self; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_good_timeserv_pref
 * @constant
 */
export
const HeaderFlags_good_timeserv_pref: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary good_timeserv_pref
 * @constant
 */
export
const good_timeserv_pref: number = HeaderFlags_good_timeserv_pref; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_writable_required
 * @constant
 */
export
const HeaderFlags_writable_required: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary writable_required
 * @constant
 */
export
const writable_required: number = HeaderFlags_writable_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_timeserv_required
 * @constant
 */
export
const HeaderFlags_timeserv_required: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary timeserv_required
 * @constant
 */
export
const timeserv_required: number = HeaderFlags_timeserv_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_kdc_required
 * @constant
 */
export
const HeaderFlags_kdc_required: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary kdc_required
 * @constant
 */
export
const kdc_required: number = HeaderFlags_kdc_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ip_required
 * @constant
 */
export
const HeaderFlags_ip_required: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary ip_required
 * @constant
 */
export
const ip_required: number = HeaderFlags_ip_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_background_only
 * @constant
 */
export
const HeaderFlags_background_only: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary background_only
 * @constant
 */
export
const background_only: number = HeaderFlags_background_only; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_pdc_required
 * @constant
 */
export
const HeaderFlags_pdc_required: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary pdc_required
 * @constant
 */
export
const pdc_required: number = HeaderFlags_pdc_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_gc_server_required
 * @constant
 */
export
const HeaderFlags_gc_server_required: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary gc_server_required
 * @constant
 */
export
const gc_server_required: number = HeaderFlags_gc_server_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ds_preferred
 * @constant
 */
export
const HeaderFlags_ds_preferred: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary ds_preferred
 * @constant
 */
export
const ds_preferred: number = HeaderFlags_ds_preferred; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_ds_required
 * @constant
 */
export
const HeaderFlags_ds_required: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary ds_required
 * @constant
 */
export
const ds_required: number = HeaderFlags_ds_required; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_unused28
 * @constant
 */
export
const HeaderFlags_unused28: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary unused28
 * @constant
 */
export
const unused28: number = HeaderFlags_unused28; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_unused29
 * @constant
 */
export
const HeaderFlags_unused29: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary unused29
 * @constant
 */
export
const unused29: number = HeaderFlags_unused29; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_unused30
 * @constant
 */
export
const HeaderFlags_unused30: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary unused30
 * @constant
 */
export
const unused30: number = HeaderFlags_unused30; /* SHORT_NAMED_BIT */

/**
 * @summary HeaderFlags_force_rediscovery
 * @constant
 */
export
const HeaderFlags_force_rediscovery: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary force_rediscovery
 * @constant
 */
export
const force_rediscovery: number = HeaderFlags_force_rediscovery; /* SHORT_NAMED_BIT */

let _cached_decoder_for_HeaderFlags: $.ASN1Decoder<HeaderFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HeaderFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HeaderFlags (el: _Element): HeaderFlags {
    if (!_cached_decoder_for_HeaderFlags) { _cached_decoder_for_HeaderFlags = $._decodeBitString; }
    return _cached_decoder_for_HeaderFlags(el);
}

let _cached_encoder_for_HeaderFlags: $.ASN1Encoder<HeaderFlags> | null = null;

/**
 * @summary Encodes a(n) HeaderFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderFlags, encoded as an ASN.1 Element.
 */
export
function _encode_HeaderFlags (value: HeaderFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HeaderFlags) { _cached_encoder_for_HeaderFlags = $._encodeBitString; }
    return _cached_encoder_for_HeaderFlags(value, elGetter);
}


/* eslint-enable */
