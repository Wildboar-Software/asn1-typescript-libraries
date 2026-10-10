/* eslint-disable */
import {
    INTEGER,
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
import { EXQcontent_exceptionType_stdException, _decode_EXQcontent_exceptionType_stdException, _encode_EXQcontent_exceptionType_stdException } from "../ISO9041-VTP/EXQcontent-exceptionType-stdException.ta.mjs";


/**
 * @summary EXQcontent_exceptionType
 * @description
 *
 * Exception kind. `stdException` is a standard code;
 * `proException` is a profile-defined INTEGER. ISO/IEC
 * 9041-1:1997 §6.26.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXQcontent-exceptionType ::= CHOICE {
 *     stdException [0] IMPLICIT INTEGER {
 *         rioFull (0),
 *         tooManyFields (1),
 *         tooManyFieldElements (2),
 *         tooManyFERs (3),
 *         tooManyFEIs (4)
 *     },
 *     proException [1] IMPLICIT INTEGER
 * }
 * ```
 */
export
type EXQcontent_exceptionType =
    { stdException: EXQcontent_exceptionType_stdException } /* CHOICE_ALT_ROOT */
    | { proException: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EXQcontent_exceptionType: $.ASN1Decoder<EXQcontent_exceptionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EXQcontent_exceptionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EXQcontent_exceptionType (el: _Element): EXQcontent_exceptionType {
    if (!_cached_decoder_for_EXQcontent_exceptionType) { _cached_decoder_for_EXQcontent_exceptionType = $._decode_inextensible_choice<EXQcontent_exceptionType>({
    "CONTEXT 0": [ "stdException", $._decode_implicit<EXQcontent_exceptionType_stdException>(() => _decode_EXQcontent_exceptionType_stdException) ],
    "CONTEXT 1": [ "proException", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_EXQcontent_exceptionType(el);
}

let _cached_encoder_for_EXQcontent_exceptionType: $.ASN1Encoder<EXQcontent_exceptionType> | null = null;

/**
 * @summary Encodes a(n) EXQcontent_exceptionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EXQcontent_exceptionType, encoded as an ASN.1 Element.
 */
export
function _encode_EXQcontent_exceptionType (value: EXQcontent_exceptionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EXQcontent_exceptionType) { _cached_encoder_for_EXQcontent_exceptionType = $._encode_choice<EXQcontent_exceptionType>({
    "stdException": $._encode_implicit(_TagClass.context, 0, () => _encode_EXQcontent_exceptionType_stdException, $.BER),
    "proException": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_EXQcontent_exceptionType(value, elGetter);
}


/* eslint-enable */
