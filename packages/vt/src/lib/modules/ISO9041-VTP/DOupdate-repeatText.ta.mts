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
import { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";
// export { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";


/**
 * @summary DOupdate_repeatText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-repeatText ::= SEQUENCE {
 *     finishAddress   Pointer,
 *     text            OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_repeatText {
    constructor (
        /**
         * @summary `finishAddress`.
         * @public
         * @readonly
         */
        readonly finishAddress: Pointer,
        /**
         * @summary `text`.
         * @public
         * @readonly
         */
        readonly text: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_repeatText
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_repeatText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_repeatText`.
     * @returns {DOupdate_repeatText}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_repeatText)]: (DOupdate_repeatText)[_K] }): DOupdate_repeatText {
        return new DOupdate_repeatText(_o.finishAddress, _o.text);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_repeatText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_repeatText: $.ComponentSpec[] = [
    new $.ComponentSpec("finishAddress", false, $.hasAnyTag),
    new $.ComponentSpec("text", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_repeatText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_repeatText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_repeatText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_repeatText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_repeatText: $.ASN1Decoder<DOupdate_repeatText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_repeatText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_repeatText (el: _Element): DOupdate_repeatText {
    if (!_cached_decoder_for_DOupdate_repeatText) { _cached_decoder_for_DOupdate_repeatText = function (el: _Element): DOupdate_repeatText {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DOupdate-repeatText contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "finishAddress";
    sequence[1].name = "text";
    let finishAddress!: Pointer;
    let text!: OCTET_STRING;
    finishAddress = _decode_Pointer(sequence[0]);
    text = $._decodeOctetString(sequence[1]);
    return new DOupdate_repeatText(
        finishAddress,
        text,

    );
}; }
    return _cached_decoder_for_DOupdate_repeatText(el);
}

let _cached_encoder_for_DOupdate_repeatText: $.ASN1Encoder<DOupdate_repeatText> | null = null;

/**
 * @summary Encodes a(n) DOupdate_repeatText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_repeatText, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_repeatText (value: DOupdate_repeatText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_repeatText) { _cached_encoder_for_DOupdate_repeatText = function (value: DOupdate_repeatText, elGetter: $.ASN1Encoder<DOupdate_repeatText>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Pointer(value.finishAddress, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.text, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_repeatText(value, elGetter);
}


/* eslint-enable */
