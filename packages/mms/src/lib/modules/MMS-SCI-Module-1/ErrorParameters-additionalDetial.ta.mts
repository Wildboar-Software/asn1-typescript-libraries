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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary ErrorParameters_additionalDetial
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorParameters-additionalDetial ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ErrorParameters_additionalDetial {
    constructor (
        /**
         * @summary `size`.
         * @public
         * @readonly
         */
        readonly size: INTEGER,
        /**
         * @summary `syntax`.
         * @public
         * @readonly
         */
        readonly syntax: MMSString
    ) {}

    /**
     * @summary Restructures an object into a ErrorParameters_additionalDetial
     * @description
     * 
     * This takes an `object` and converts it to a `ErrorParameters_additionalDetial`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorParameters_additionalDetial`.
     * @returns {ErrorParameters_additionalDetial}
     */
    public static _from_object (_o: { [_K in keyof (ErrorParameters_additionalDetial)]: (ErrorParameters_additionalDetial)[_K] }): ErrorParameters_additionalDetial {
        return new ErrorParameters_additionalDetial(_o.size, _o.syntax);
    }


}

/**
 * @summary The Leading Root Component Types of ErrorParameters_additionalDetial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ErrorParameters_additionalDetial: $.ComponentSpec[] = [
    new $.ComponentSpec("size", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("syntax", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ErrorParameters_additionalDetial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ErrorParameters_additionalDetial: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ErrorParameters_additionalDetial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ErrorParameters_additionalDetial: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ErrorParameters_additionalDetial: $.ASN1Decoder<ErrorParameters_additionalDetial> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorParameters_additionalDetial
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorParameters_additionalDetial (el: _Element): ErrorParameters_additionalDetial {
    if (!_cached_decoder_for_ErrorParameters_additionalDetial) { _cached_decoder_for_ErrorParameters_additionalDetial = function (el: _Element): ErrorParameters_additionalDetial {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ErrorParameters-additionalDetial contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "size";
    sequence[1].name = "syntax";
    let size!: INTEGER;
    let syntax!: MMSString;
    size = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    syntax = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[1]);
    return new ErrorParameters_additionalDetial(
        size,
        syntax,

    );
}; }
    return _cached_decoder_for_ErrorParameters_additionalDetial(el);
}

let _cached_encoder_for_ErrorParameters_additionalDetial: $.ASN1Encoder<ErrorParameters_additionalDetial> | null = null;

/**
 * @summary Encodes a(n) ErrorParameters_additionalDetial into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorParameters_additionalDetial, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorParameters_additionalDetial (value: ErrorParameters_additionalDetial, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorParameters_additionalDetial) { _cached_encoder_for_ErrorParameters_additionalDetial = function (value: ErrorParameters_additionalDetial, elGetter: $.ASN1Encoder<ErrorParameters_additionalDetial>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.size, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_MMSString, $.BER)(value.syntax, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ErrorParameters_additionalDetial(value, elGetter);
}


/* eslint-enable */
