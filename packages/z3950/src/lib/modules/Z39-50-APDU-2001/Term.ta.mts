/* eslint-disable */
import {
    EXTERNAL,
    GeneralizedTime,
    INTEGER,
    NULL,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
// export { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";


/**
 * @summary Term
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Term  ::=  CHOICE {
 *     general         [45] IMPLICIT OCTET STRING,
 *     -- Values below may be used only if version 3 is in force
 *     numeric         [215] IMPLICIT INTEGER,
 *     characterString [216] IMPLICIT InternationalString,
 *     oid             [217] IMPLICIT OBJECT IDENTIFIER,
 *     dateTime        [218] IMPLICIT GeneralizedTime,
 *     external        [219] IMPLICIT EXTERNAL,
 *     integerAndUnit  [220] IMPLICIT IntUnit,
 *     null            [221] IMPLICIT NULL
 * }
 * ```
 */
export
type Term =
    { general: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { numeric: INTEGER } /* CHOICE_ALT_ROOT */
    | { characterString: InternationalString } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { dateTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { external: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { integerAndUnit: IntUnit } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Term: $.ASN1Decoder<Term> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Term
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Term (el: _Element): Term {
    if (!_cached_decoder_for_Term) { _cached_decoder_for_Term = $._decode_inextensible_choice<Term>({
    "CONTEXT 45": [ "general", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 215": [ "numeric", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 216": [ "characterString", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 217": [ "oid", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 218": [ "dateTime", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 219": [ "external", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 220": [ "integerAndUnit", $._decode_implicit<IntUnit>(() => _decode_IntUnit) ],
    "CONTEXT 221": [ "null_", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Term(el);
}

let _cached_encoder_for_Term: $.ASN1Encoder<Term> | null = null;

/**
 * @summary Encodes a(n) Term into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Term, encoded as an ASN.1 Element.
 */
export
function _encode_Term (value: Term, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Term) { _cached_encoder_for_Term = $._encode_choice<Term>({
    "general": $._encode_implicit(_TagClass.context, 45, () => $._encodeOctetString, $.BER),
    "numeric": $._encode_implicit(_TagClass.context, 215, () => $._encodeInteger, $.BER),
    "characterString": $._encode_implicit(_TagClass.context, 216, () => _encode_InternationalString, $.BER),
    "oid": $._encode_implicit(_TagClass.context, 217, () => $._encodeObjectIdentifier, $.BER),
    "dateTime": $._encode_implicit(_TagClass.context, 218, () => $._encodeGeneralizedTime, $.BER),
    "external": $._encode_implicit(_TagClass.context, 219, () => $._encodeExternal, $.BER),
    "integerAndUnit": $._encode_implicit(_TagClass.context, 220, () => _encode_IntUnit, $.BER),
    "null_": $._encode_implicit(_TagClass.context, 221, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Term(value, elGetter);
}


/* eslint-enable */
