/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Address  ::=  CHOICE {
 *     numericAddress                    [0] IMPLICIT Unsigned32,
 *     symbolicAddress                   [1] MMSString,
 *     unconstrainedAddress              [2] IMPLICIT OCTET STRING
 * }
 * ```
 */
export
type Address =
    { numericAddress: Unsigned32 } /* CHOICE_ALT_ROOT */
    | { symbolicAddress: MMSString } /* CHOICE_ALT_ROOT */
    | { unconstrainedAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Address: $.ASN1Decoder<Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Address (el: _Element): Address {
    if (!_cached_decoder_for_Address) { _cached_decoder_for_Address = $._decode_inextensible_choice<Address>({
    "CONTEXT 0": [ "numericAddress", $._decode_implicit<Unsigned32>(() => _decode_Unsigned32) ],
    "CONTEXT 1": [ "symbolicAddress", $._decode_explicit<MMSString>(() => _decode_MMSString) ],
    "CONTEXT 2": [ "unconstrainedAddress", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_Address(el);
}

let _cached_encoder_for_Address: $.ASN1Encoder<Address> | null = null;

/**
 * @summary Encodes a(n) Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Address, encoded as an ASN.1 Element.
 */
export
function _encode_Address (value: Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Address) { _cached_encoder_for_Address = $._encode_choice<Address>({
    "numericAddress": $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER),
    "symbolicAddress": $._encode_explicit(_TagClass.context, 1, () => _encode_MMSString, $.BER),
    "unconstrainedAddress": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Address(value, elGetter);
}


/* eslint-enable */
