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
 * @summary MM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM ::= SEQUENCE {mmheading  Heading,
 *                  mmbody     Body}
 * ```
 * 
 * @class
 */
export
class MM {
    constructor (
        /**
         * @summary `mmheading`.
         * @public
         * @readonly
         */
        readonly mmheading: Heading,
        /**
         * @summary `mmbody`.
         * @public
         * @readonly
         */
        readonly mmbody: Body
    ) {}

    /**
     * @summary Restructures an object into a MM
     * @description
     * 
     * This takes an `object` and converts it to a `MM`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM`.
     * @returns {MM}
     */
    public static _from_object (_o: { [_K in keyof (MM)]: (MM)[_K] }): MM {
        return new MM(_o.mmheading, _o.mmbody);
    }


}

/**
 * @summary The Leading Root Component Types of MM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM: $.ComponentSpec[] = [
    /* FIXME: mmheading COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: mmbody COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of MM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM: $.ASN1Decoder<MM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM (el: _Element): MM {
    if (!_cached_decoder_for_MM) { _cached_decoder_for_MM = function (el: _Element): MM {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MM contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mmheading";
    sequence[1].name = "mmbody";
    let mmheading!: Heading;
    let mmbody!: Body;
    mmheading = _decode_Heading(sequence[0]);
    mmbody = _decode_Body(sequence[1]);
    return new MM(
        mmheading,
        mmbody,

    );
}; }
    return _cached_decoder_for_MM(el);
}

let _cached_encoder_for_MM: $.ASN1Encoder<MM> | null = null;

/**
 * @summary Encodes a(n) MM into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM, encoded as an ASN.1 Element.
 */
export
function _encode_MM (value: MM, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM) { _cached_encoder_for_MM = function (value: MM, elGetter: $.ASN1Encoder<MM>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Heading(value.mmheading, $.BER),
            /* REQUIRED   */ _encode_Body(value.mmbody, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MM(value, elGetter);
}


/* eslint-enable */
