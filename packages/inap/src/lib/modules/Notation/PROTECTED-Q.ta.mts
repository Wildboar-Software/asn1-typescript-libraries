/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
// export { PROTECTION_MAPPING } from "../Notation/PROTECTION-MAPPING.oca.mjs";
import { PROTECTED, _get_decoder_for_PROTECTED, _get_encoder_for_PROTECTED } from "../Notation/PROTECTED.ta.mjs";
// export { PROTECTED, _get_decoder_for_PROTECTED, _get_encoder_for_PROTECTED } from "../Notation/PROTECTED.ta.mjs";


/**
 * @summary PROTECTED_Q
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PROTECTED-Q{BaseType, PROTECTION-MAPPING:protectionReqd,
 *             PROTECTION-MAPPING.&SecurityTransformation.&QualifierType:qualifier}
 *    ::= 
 *   PROTECTED{BaseType, protectionReqd}
 *     (CONSTRAINED BY {
 *        protectionReqd.&SecurityTransformation.&QualifierType:qualifier
 *        -- The value of qualifier must be made available to
 *        -- the security transformation used
 *        })
 * ```
 */
export
type PROTECTED_Q <BaseType> = PROTECTED<BaseType>; // DefinedType

let _cached_decoder_for_PROTECTED_Q: $.ASN1Decoder<PROTECTED_Q<BaseType>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PROTECTED_Q
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_PROTECTED_Q<BaseType>(_decode_BaseType: $.ASN1Decoder<BaseType>): $.ASN1Decoder<PROTECTED_Q<BaseType>> {
    return _get_decoder_for_PROTECTED<BaseType>(_decode_BaseType);
}

let _cached_encoder_for_PROTECTED_Q: $.ASN1Encoder<PROTECTED_Q<BaseType>> | null = null;

/**
 * @summary Returns a function that will encode a(n) PROTECTED_Q into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PROTECTED_Q as an ASN.1 element.
 */
export
function _get_encoder_for_PROTECTED_Q<BaseType>(_encode_BaseType: $.ASN1Encoder<BaseType>): $.ASN1Encoder<PROTECTED_Q<BaseType>> {
    return _get_encoder_for_PROTECTED<BaseType>(_encode_BaseType);
}

/* eslint-enable */
