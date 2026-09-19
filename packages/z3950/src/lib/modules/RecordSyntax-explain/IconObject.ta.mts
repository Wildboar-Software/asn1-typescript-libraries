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
import { IconObject_Item, _decode_IconObject_Item, _encode_IconObject_Item } from "../RecordSyntax-explain/IconObject-Item.ta.mjs";
// export { IconObject_Item, _decode_IconObject_Item, _encode_IconObject_Item } from "../RecordSyntax-explain/IconObject-Item.ta.mjs";


/**
 * @summary IconObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IconObject  ::=  SEQUENCE OF SEQUENCE{
 *          -- Note that the "SEQUENCE OF" is to allow alternative
 *          -- representations of the same Icon; it is not intended to allow
 *          -- multiple icons.
 *    bodyType  [1] CHOICE{
 *                    ianaType     [1] IMPLICIT InternationalString,
 *                    z3950type    [2] IMPLICIT InternationalString,
 *                    otherType    [3] IMPLICIT InternationalString},
 *    content   [2] IMPLICIT OCTET STRING}
 * ```
 */
export
type IconObject = IconObject_Item[]; // SequenceOfType

let _cached_decoder_for_IconObject: $.ASN1Decoder<IconObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IconObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IconObject (el: _Element): IconObject {
    if (!_cached_decoder_for_IconObject) { _cached_decoder_for_IconObject = $._decodeSequenceOf<IconObject_Item>(() => _decode_IconObject_Item); }
    return _cached_decoder_for_IconObject(el);
}

let _cached_encoder_for_IconObject: $.ASN1Encoder<IconObject> | null = null;

/**
 * @summary Encodes a(n) IconObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IconObject, encoded as an ASN.1 Element.
 */
export
function _encode_IconObject (value: IconObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IconObject) { _cached_encoder_for_IconObject = $._encodeSequenceOf<IconObject_Item>(() => _encode_IconObject_Item, $.BER); }
    return _cached_encoder_for_IconObject(value, elGetter);
}


/* eslint-enable */
