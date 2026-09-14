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
import { ReferencedValue, _decode_ReferencedValue, _encode_ReferencedValue } from "../CryptographicInformationFramework/ReferencedValue.ta.mjs";
// export { ReferencedValue, _decode_ReferencedValue, _encode_ReferencedValue } from "../CryptographicInformationFramework/ReferencedValue.ta.mjs";


/**
 * @summary LastUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LastUpdate  ::=  CHOICE {
 *     generalizedTime GeneralizedTime,
 *     referencedTime  ReferencedValue ,
 *     ... -- For future extensions
 * }(CONSTRAINED BY {-- The value for referencedTime shall be of type GeneralizedTime --})
 * ```
 */
export
type LastUpdate =
    { generalizedTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { referencedTime: ReferencedValue } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_LastUpdate: $.ASN1Decoder<LastUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LastUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LastUpdate (el: _Element): LastUpdate {
    if (!_cached_decoder_for_LastUpdate) { _cached_decoder_for_LastUpdate = $._decode_extensible_choice<LastUpdate>({
    "UNIVERSAL 24": [ "generalizedTime", $._decodeGeneralizedTime ],
    "UNIVERSAL 16": [ "referencedTime", _decode_ReferencedValue ],
    "UNIVERSAL 19": [ "referencedTime", _decode_ReferencedValue ],
    "UNIVERSAL 22": [ "referencedTime", _decode_ReferencedValue ],
    "CONTEXT 3": [ "referencedTime", _decode_ReferencedValue ]
}); }
    return _cached_decoder_for_LastUpdate(el);
}

let _cached_encoder_for_LastUpdate: $.ASN1Encoder<LastUpdate> | null = null;

/**
 * @summary Encodes a(n) LastUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_LastUpdate (value: LastUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LastUpdate) { _cached_encoder_for_LastUpdate = $._encode_choice<LastUpdate>({
    "generalizedTime": $._encodeGeneralizedTime,
    "referencedTime": _encode_ReferencedValue,
}, $.BER); }
    return _cached_encoder_for_LastUpdate(value, elGetter);
}


/* eslint-enable */
