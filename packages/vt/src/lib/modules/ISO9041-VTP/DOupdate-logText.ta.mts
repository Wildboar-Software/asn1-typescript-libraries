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



/**
 * @summary DOupdate_logText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-logText ::= SEQUENCE {
 *     fdrAttr   [0] IMPLICIT BOOLEAN,
 *     -- TRUE = "yes", FALSE = "no"
 *     prAttrVal [1] IMPLICIT OCTET STRING
 *     -- see comment under text in DOupdate
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_logText {
    constructor (
        /**
         * @summary `fdrAttr`.
         * @public
         * @readonly
         */
        readonly fdrAttr: BOOLEAN,
        /**
         * @summary `prAttrVal`.
         * @public
         * @readonly
         */
        readonly prAttrVal: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_logText
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_logText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_logText`.
     * @returns {DOupdate_logText}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_logText)]: (DOupdate_logText)[_K] }): DOupdate_logText {
        return new DOupdate_logText(_o.fdrAttr, _o.prAttrVal);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_logText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_logText: $.ComponentSpec[] = [
    new $.ComponentSpec("fdrAttr", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("prAttrVal", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_logText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_logText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_logText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_logText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_logText: $.ASN1Decoder<DOupdate_logText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_logText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_logText (el: _Element): DOupdate_logText {
    if (!_cached_decoder_for_DOupdate_logText) { _cached_decoder_for_DOupdate_logText = function (el: _Element): DOupdate_logText {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DOupdate-logText contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fdrAttr";
    sequence[1].name = "prAttrVal";
    let fdrAttr!: BOOLEAN;
    let prAttrVal!: OCTET_STRING;
    fdrAttr = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[0]);
    prAttrVal = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new DOupdate_logText(
        fdrAttr,
        prAttrVal,

    );
}; }
    return _cached_decoder_for_DOupdate_logText(el);
}

let _cached_encoder_for_DOupdate_logText: $.ASN1Encoder<DOupdate_logText> | null = null;

/**
 * @summary Encodes a(n) DOupdate_logText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_logText, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_logText (value: DOupdate_logText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_logText) { _cached_encoder_for_DOupdate_logText = function (value: DOupdate_logText, elGetter: $.ASN1Encoder<DOupdate_logText>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.fdrAttr, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.prAttrVal, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_logText(value, elGetter);
}


/* eslint-enable */
