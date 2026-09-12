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
    ASN1SizeError,
    ASN1CharactersError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxIdentifier } from "../ISO-9506-MMS-1/maxIdentifier.va.mjs";



/**
 * @summary Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Identifier  ::=  CHOICE {
 *        ifChar UTF8String (SIZE(1..maxIdentifier)),
 *        notChar VisibleString ( FROM
 *               ("A"|"a"|"B"|"b"|"C"|"c"|"D"|"d"|"E"|"e"|"F"|"f"|
 *               "G"|"g"|"H"|"h"|"I"|"i"|"J"|"j"|"K"|"k"|"L"|"l"|
 *               "M"|"m"|"N"|"n"|"O"|"o"|"P"|"p"|"Q"|"q"|"R"|"r"|
 *               "S"|"s"|"T"|"t"|"U"|"u"|"V"|"v"|"W"|"w"|"X"|"x"|
 *               "Y"|"y"|"Z"|"z"|"$"|"_"|"0"|"1"|"2"|"3"|"4"|"5"|
 *               "6"|"7"|"8"|"9") ) (SIZE(1..maxIdentifier))
 * }
 * ```
 */
export
type Identifier =
    { ifChar: UTF8String } /* CHOICE_ALT_ROOT */
    | { notChar: VisibleString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Identifier: $.ASN1Decoder<Identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Identifier (el: _Element): Identifier {
    if (!_cached_decoder_for_Identifier) { _cached_decoder_for_Identifier = $._decode_inextensible_choice<Identifier>({
    "UNIVERSAL 12": [ "ifChar", $._decodeUTF8String ],
    "UNIVERSAL 26": [ "notChar", $._decodeVisibleString ]
}); }
    const value = _cached_decoder_for_Identifier(el);
    if ("ifChar" in value) {
        if (value.ifChar.length < 1 || value.ifChar.length > maxIdentifier) {
            throw new ASN1SizeError("Identifier.ifChar violates SIZE constraint");
        }
    } else {
        if (value.notChar.length < 1 || value.notChar.length > maxIdentifier) {
            throw new ASN1SizeError("Identifier.notChar violates SIZE constraint");
        }
        if (/[^A-Za-z0-9$_]/.test(value.notChar)) {
            throw new ASN1CharactersError("Identifier.notChar contains a prohibited character");
        }
    }
    return value;
}

let _cached_encoder_for_Identifier: $.ASN1Encoder<Identifier> | null = null;

/**
 * @summary Encodes a(n) Identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identifier, encoded as an ASN.1 Element.
 */
export
function _encode_Identifier (value: Identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Identifier) { _cached_encoder_for_Identifier = $._encode_choice<Identifier>({
    "ifChar": $._encodeUTF8String,
    "notChar": $._encodeVisibleString,
}, $.BER); }
    return _cached_encoder_for_Identifier(value, elGetter);
}


/* eslint-enable */
