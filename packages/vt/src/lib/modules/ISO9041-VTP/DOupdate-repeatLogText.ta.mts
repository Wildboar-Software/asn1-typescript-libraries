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
import { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";
// export { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";


/**
 * @summary DOupdate_repeatLogText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-repeatLogText ::= SEQUENCE {
 *     finishAddress LogPointer,
 *     fdrAttr      [8] IMPLICIT BOOLEAN,
 *     prAttrValStr [9] IMPLICIT OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_repeatLogText {
    constructor (
        /**
         * @summary `finishAddress`.
         * @public
         * @readonly
         */
        readonly finishAddress: LogPointer,
        /**
         * @summary `fdrAttr`.
         * @public
         * @readonly
         */
        readonly fdrAttr: BOOLEAN,
        /**
         * @summary `prAttrValStr`.
         * @public
         * @readonly
         */
        readonly prAttrValStr: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_repeatLogText
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_repeatLogText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_repeatLogText`.
     * @returns {DOupdate_repeatLogText}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_repeatLogText)]: (DOupdate_repeatLogText)[_K] }): DOupdate_repeatLogText {
        return new DOupdate_repeatLogText(_o.finishAddress, _o.fdrAttr, _o.prAttrValStr);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_repeatLogText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_repeatLogText: $.ComponentSpec[] = [
    new $.ComponentSpec("finishAddress", false, $.hasAnyTag),
    new $.ComponentSpec("fdrAttr", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("prAttrValStr", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_repeatLogText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_repeatLogText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_repeatLogText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_repeatLogText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_repeatLogText: $.ASN1Decoder<DOupdate_repeatLogText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_repeatLogText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_repeatLogText (el: _Element): DOupdate_repeatLogText {
    if (!_cached_decoder_for_DOupdate_repeatLogText) { _cached_decoder_for_DOupdate_repeatLogText = function (el: _Element): DOupdate_repeatLogText {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("DOupdate-repeatLogText contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "finishAddress";
    sequence[1].name = "fdrAttr";
    sequence[2].name = "prAttrValStr";
    let finishAddress!: LogPointer;
    let fdrAttr!: BOOLEAN;
    let prAttrValStr!: OCTET_STRING;
    finishAddress = _decode_LogPointer(sequence[0]);
    fdrAttr = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    prAttrValStr = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new DOupdate_repeatLogText(
        finishAddress,
        fdrAttr,
        prAttrValStr,

    );
}; }
    return _cached_decoder_for_DOupdate_repeatLogText(el);
}

let _cached_encoder_for_DOupdate_repeatLogText: $.ASN1Encoder<DOupdate_repeatLogText> | null = null;

/**
 * @summary Encodes a(n) DOupdate_repeatLogText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_repeatLogText, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_repeatLogText (value: DOupdate_repeatLogText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_repeatLogText) { _cached_encoder_for_DOupdate_repeatLogText = function (value: DOupdate_repeatLogText, elGetter: $.ASN1Encoder<DOupdate_repeatLogText>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LogPointer(value.finishAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.fdrAttr, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.prAttrValStr, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_repeatLogText(value, elGetter);
}


/* eslint-enable */
