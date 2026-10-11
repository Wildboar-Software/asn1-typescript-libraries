/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "@wildboar/pki-stub";
import { RIParametersDeprecated, _decode_RIParametersDeprecated, _encode_RIParametersDeprecated } from "../ACP133CommonContent/RIParametersDeprecated.ta.mjs";


/**
 * @summary RIParameters
 * @description
 *
 * Properties of a routing indicator (`rIInfo`).
 * ACP 127 users are named by a plain-language address
 * (PLA) and delivered to by the RI, the way an X.400
 * user is named by a directory name and delivered to
 * by an O/R address.
 * ACP 133 (June 1998), paragraph 308. Figure 3-2 shows
 * one value: RI `RUHPZFF`, type normal, minimize
 * `FALSE`, special-handling designator `A`,
 * classification unclassified.
 *
 * Edition D replaced the SET with a `DirectoryString`
 * of dollar-separated printable fields, in that same
 * order: routing indicator, RI type, minimize flag,
 * special-handling designator, classification. Empty
 * fields are successive `$` characters. ACP 133
 * SUPP-1(A) gives `RGABDFE$0$FALSE$RBFDSRF$3`. The
 * minimize flag is no longer used; the string form
 * writes it as `FALSE`. The MINIMIZE condition is the
 * separate `minimize` attribute: when it is set,
 * originators must not send unnecessary messages.
 *
 * `ri_parameters` is that string. In ASN.1 the
 * component is `DirectoryString`. This encoding uses
 * {@link UnboundedDirectoryString}, the same CHOICE
 * without a size constraint.
 * `ri_parameters_deprecated` is the earlier SET.
 * This module's CHOICE accepts both forms in one
 * decoder.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.107](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.107)
 * and
 * [section 6.16](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.16).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParameters  ::=  CHOICE {
 *     ri-parameters             DirectoryString,
 *     ri-parameters-deprecated  RIParametersDeprecated
 * }
 * ```
 */
export
type RIParameters =
    { ri_parameters: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { ri_parameters_deprecated: RIParametersDeprecated } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RIParameters: $.ASN1Decoder<RIParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIParameters (el: _Element): RIParameters {
    if (!_cached_decoder_for_RIParameters) { _cached_decoder_for_RIParameters = $._decode_inextensible_choice<RIParameters>({
    "UNIVERSAL 20": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 19": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 30": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 28": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 12": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 17": [ "ri_parameters_deprecated", _decode_RIParametersDeprecated ]
}); }
    return _cached_decoder_for_RIParameters(el);
}

let _cached_encoder_for_RIParameters: $.ASN1Encoder<RIParameters> | null = null;

/**
 * @summary Encodes a(n) RIParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIParameters, encoded as an ASN.1 Element.
 */
export
function _encode_RIParameters (value: RIParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIParameters) { _cached_encoder_for_RIParameters = $._encode_choice<RIParameters>({
    "ri_parameters": _encode_UnboundedDirectoryString,
    "ri_parameters_deprecated": _encode_RIParametersDeprecated,
}, $.BER); }
    return _cached_encoder_for_RIParameters(value, elGetter);
}


/* eslint-enable */
