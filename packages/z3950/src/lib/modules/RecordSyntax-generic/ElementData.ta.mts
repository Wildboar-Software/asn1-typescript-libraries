/* eslint-disable */
import {
    BOOLEAN,
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
import { TaggedElement, _decode_TaggedElement, _encode_TaggedElement } from "../RecordSyntax-generic/TaggedElement.ta.mjs";
// export { TaggedElement, _decode_TaggedElement, _encode_TaggedElement } from "../RecordSyntax-generic/TaggedElement.ta.mjs";


/**
 * @summary ElementData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementData  ::=  CHOICE{
 *    octets                    OCTET STRING,
 *    numeric                   INTEGER,
 *    date                      GeneralizedTime,
 *    ext                       EXTERNAL,
 *    string                    InternationalString,
 *    trueOrFalse               BOOLEAN,
 *    oid                       OBJECT IDENTIFIER,
 *    intUnit            [1]    IMPLICIT IntUnit,
 *     elementNotThere   [2]    IMPLICIT NULL,  -- element requested but not there
 *    elementEmpty       [3]    IMPLICIT NULL,  -- element there, but empty
 *    noDataRequested    [4]    IMPLICIT NULL,  -- variant request said 'no data'
 *    diagnostic         [5]    IMPLICIT EXTERNAL,
 *    subtree            [6]    SEQUENCE OF TaggedElement 
 *                                 -- recursive, for nested tags
 *                      }
 * ```
 */
export
type ElementData =
    { octets: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { numeric: INTEGER } /* CHOICE_ALT_ROOT */
    | { date: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { ext: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { string_: InternationalString } /* CHOICE_ALT_ROOT */
    | { trueOrFalse: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { intUnit: IntUnit } /* CHOICE_ALT_ROOT */
    | { elementNotThere: NULL } /* CHOICE_ALT_ROOT */
    | { elementEmpty: NULL } /* CHOICE_ALT_ROOT */
    | { noDataRequested: NULL } /* CHOICE_ALT_ROOT */
    | { diagnostic: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { subtree: TaggedElement[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ElementData: $.ASN1Decoder<ElementData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementData (el: _Element): ElementData {
    if (!_cached_decoder_for_ElementData) { _cached_decoder_for_ElementData = $._decode_inextensible_choice<ElementData>({
    "UNIVERSAL 4": [ "octets", $._decodeOctetString ],
    "UNIVERSAL 2": [ "numeric", $._decodeInteger ],
    "UNIVERSAL 24": [ "date", $._decodeGeneralizedTime ],
    "UNIVERSAL 8": [ "ext", $._decodeExternal ],
    "*": [ "string_", _decode_InternationalString ],
    "UNIVERSAL 1": [ "trueOrFalse", $._decodeBoolean ],
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "CONTEXT 1": [ "intUnit", $._decode_implicit<IntUnit>(() => _decode_IntUnit) ],
    "CONTEXT 2": [ "elementNotThere", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "elementEmpty", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "noDataRequested", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "diagnostic", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 6": [ "subtree", $._decode_implicit<TaggedElement[]>(() => $._decodeSequenceOf<TaggedElement>(() => _decode_TaggedElement)) ]
}); }
    return _cached_decoder_for_ElementData(el);
}

let _cached_encoder_for_ElementData: $.ASN1Encoder<ElementData> | null = null;

/**
 * @summary Encodes a(n) ElementData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementData, encoded as an ASN.1 Element.
 */
export
function _encode_ElementData (value: ElementData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementData) { _cached_encoder_for_ElementData = $._encode_choice<ElementData>({
    "octets": $._encodeOctetString,
    "numeric": $._encodeInteger,
    "date": $._encodeGeneralizedTime,
    "ext": $._encodeExternal,
    "string_": _encode_InternationalString,
    "trueOrFalse": $._encodeBoolean,
    "oid": $._encodeObjectIdentifier,
    "intUnit": $._encode_implicit(_TagClass.context, 1, () => _encode_IntUnit, $.BER),
    "elementNotThere": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "elementEmpty": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "noDataRequested": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "diagnostic": $._encode_implicit(_TagClass.context, 5, () => $._encodeExternal, $.BER),
    "subtree": $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<TaggedElement>(() => _encode_TaggedElement, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ElementData(value, elGetter);
}


/* eslint-enable */
