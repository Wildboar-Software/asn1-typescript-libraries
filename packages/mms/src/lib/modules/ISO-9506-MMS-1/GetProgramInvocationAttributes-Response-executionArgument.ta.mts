/* eslint-disable */
import {
    EXTERNAL,
    EMBEDDED_PDV,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary GetProgramInvocationAttributes_Response_executionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetProgramInvocationAttributes-Response-executionArgument ::= CHOICE {
 *     simpleString [5] IMPLICIT MMSString,
 *     encodedString EXTERNAL,
 *     enmbeddedString EMBEDDED PDV
 * }
 * ```
 */
export
type GetProgramInvocationAttributes_Response_executionArgument =
    { simpleString: MMSString } /* CHOICE_ALT_ROOT */
    | { encodedString: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { enmbeddedString: EMBEDDED_PDV } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetProgramInvocationAttributes_Response_executionArgument: $.ASN1Decoder<GetProgramInvocationAttributes_Response_executionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetProgramInvocationAttributes_Response_executionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetProgramInvocationAttributes_Response_executionArgument (el: _Element): GetProgramInvocationAttributes_Response_executionArgument {
    if (!_cached_decoder_for_GetProgramInvocationAttributes_Response_executionArgument) { _cached_decoder_for_GetProgramInvocationAttributes_Response_executionArgument = $._decode_inextensible_choice<GetProgramInvocationAttributes_Response_executionArgument>({
    "CONTEXT 5": [ "simpleString", $._decode_explicit<MMSString>(() => _decode_MMSString) ],
    "UNIVERSAL 8": [ "encodedString", $._decodeExternal ],
    "UNIVERSAL 11": [ "enmbeddedString", $._decodeEmbeddedPDV ]
}); }
    return _cached_decoder_for_GetProgramInvocationAttributes_Response_executionArgument(el);
}

let _cached_encoder_for_GetProgramInvocationAttributes_Response_executionArgument: $.ASN1Encoder<GetProgramInvocationAttributes_Response_executionArgument> | null = null;

/**
 * @summary Encodes a(n) GetProgramInvocationAttributes_Response_executionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetProgramInvocationAttributes_Response_executionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetProgramInvocationAttributes_Response_executionArgument (value: GetProgramInvocationAttributes_Response_executionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetProgramInvocationAttributes_Response_executionArgument) { _cached_encoder_for_GetProgramInvocationAttributes_Response_executionArgument = $._encode_choice<GetProgramInvocationAttributes_Response_executionArgument>({
    "simpleString": $._encode_explicit(_TagClass.context, 5, () => _encode_MMSString, $.BER),
    "encodedString": $._encodeExternal,
    "enmbeddedString": $._encodeEmbeddedPDV,
}, $.BER); }
    return _cached_encoder_for_GetProgramInvocationAttributes_Response_executionArgument(value, elGetter);
}


/* eslint-enable */
