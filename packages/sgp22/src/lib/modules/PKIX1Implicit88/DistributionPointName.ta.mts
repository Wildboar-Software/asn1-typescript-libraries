/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";
import { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../PKIX1Explicit88/RelativeDistinguishedName.ta.mjs";
// export { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../PKIX1Explicit88/RelativeDistinguishedName.ta.mjs";


/**
 * @summary DistributionPointName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionPointName  ::=  CHOICE {
 *      fullName                [0]     GeneralNames,
 *      nameRelativeToCRLIssuer [1]     RelativeDistinguishedName }
 * ```
 */
export
type DistributionPointName =
    { fullName: GeneralNames } /* CHOICE_ALT_ROOT */
    | { nameRelativeToCRLIssuer: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DistributionPointName: $.ASN1Decoder<DistributionPointName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionPointName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionPointName (el: _Element): DistributionPointName {
    if (!_cached_decoder_for_DistributionPointName) { _cached_decoder_for_DistributionPointName = $._decode_inextensible_choice<DistributionPointName>({
    "CONTEXT 0": [ "fullName", $._decode_implicit<GeneralNames>(() => _decode_GeneralNames) ],
    "CONTEXT 1": [ "nameRelativeToCRLIssuer", $._decode_implicit<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName) ]
}); }
    return _cached_decoder_for_DistributionPointName(el);
}

let _cached_encoder_for_DistributionPointName: $.ASN1Encoder<DistributionPointName> | null = null;

/**
 * @summary Encodes a(n) DistributionPointName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionPointName, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionPointName (value: DistributionPointName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionPointName) { _cached_encoder_for_DistributionPointName = $._encode_choice<DistributionPointName>({
    "fullName": $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralNames, $.BER),
    "nameRelativeToCRLIssuer": $._encode_implicit(_TagClass.context, 1, () => _encode_RelativeDistinguishedName, $.BER),
}, $.BER); }
    return _cached_encoder_for_DistributionPointName(value, elGetter);
}


/* eslint-enable */
