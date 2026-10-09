/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary Specification_schema
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Specification-schema ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Specification_schema =
    { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { uri: InternationalString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Specification_schema: $.ASN1Decoder<Specification_schema> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Specification_schema
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Specification_schema (el: _Element): Specification_schema {
    if (!_cached_decoder_for_Specification_schema) { _cached_decoder_for_Specification_schema = $._decode_inextensible_choice<Specification_schema>({
    "CONTEXT 1": [ "oid", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 300": [ "uri", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ]
}); }
    return _cached_decoder_for_Specification_schema(el);
}

let _cached_encoder_for_Specification_schema: $.ASN1Encoder<Specification_schema> | null = null;

/**
 * @summary Encodes a(n) Specification_schema into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Specification_schema, encoded as an ASN.1 Element.
 */
export
function _encode_Specification_schema (value: Specification_schema, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Specification_schema) { _cached_encoder_for_Specification_schema = $._encode_choice<Specification_schema>({
    "oid": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
    "uri": $._encode_implicit(_TagClass.context, 300, () => _encode_InternationalString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Specification_schema(value, elGetter);
}


/* eslint-enable */
