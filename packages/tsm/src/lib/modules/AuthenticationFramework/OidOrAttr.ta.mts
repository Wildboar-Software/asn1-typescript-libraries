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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { ExtAttributes } from "../AuthenticationFramework/ExtAttributes.osa.mjs";
// export { ExtAttributes } from "../AuthenticationFramework/ExtAttributes.osa.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary OidOrAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OidOrAttr  ::=  CHOICE {
 *   oid       ATTRIBUTE.&id ({ ExtAttributes }),
 *   attribute Attribute {{ ExtAttributes }},
 *   ... }
 * ```
 */
export
type OidOrAttr =
    { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_OidOrAttr: $.ASN1Decoder<OidOrAttr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OidOrAttr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OidOrAttr (el: _Element): OidOrAttr {
    if (!_cached_decoder_for_OidOrAttr) { _cached_decoder_for_OidOrAttr = $._decode_extensible_choice<OidOrAttr>({
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "UNIVERSAL 16": [ "attribute", _decode_Attribute ]
}); }
    return _cached_decoder_for_OidOrAttr(el);
}

let _cached_encoder_for_OidOrAttr: $.ASN1Encoder<OidOrAttr> | null = null;

/**
 * @summary Encodes a(n) OidOrAttr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OidOrAttr, encoded as an ASN.1 Element.
 */
export
function _encode_OidOrAttr (value: OidOrAttr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OidOrAttr) { _cached_encoder_for_OidOrAttr = $._encode_choice<OidOrAttr>({
    "oid": $._encodeObjectIdentifier,
    "attribute": _encode_Attribute,
}, $.BER); }
    return _cached_encoder_for_OidOrAttr(value, elGetter);
}


/* eslint-enable */
