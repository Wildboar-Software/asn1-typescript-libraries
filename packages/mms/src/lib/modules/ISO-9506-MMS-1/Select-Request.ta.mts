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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary Select_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Select-Request ::= SEQUENCE {
 *    controlling         [0] IMPLICIT Identifier OPTIONAL,
 *    controlled          [1] IMPLICIT SEQUENCE OF Identifier OPTIONAL
 *        -- this field shall appear if and only if the controlling field is included
 *    }
 * ```
 * 
 * @class
 */
export
class Select_Request {
    constructor (
        /**
         * @summary `controlling`.
         * @public
         * @readonly
         */
        readonly controlling: OPTIONAL<Identifier>,
        /**
         * @summary `controlled`.
         * @public
         * @readonly
         */
        readonly controlled: OPTIONAL<Identifier[]>
    ) {}

    /**
     * @summary Restructures an object into a Select_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Select_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Select_Request`.
     * @returns {Select_Request}
     */
    public static _from_object (_o: { [_K in keyof (Select_Request)]: (Select_Request)[_K] }): Select_Request {
        return new Select_Request(_o.controlling, _o.controlled);
    }


}

/**
 * @summary The Leading Root Component Types of Select_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Select_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("controlling", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("controlled", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Select_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Select_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Select_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Select_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Select_Request: $.ASN1Decoder<Select_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Select_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Select_Request (el: _Element): Select_Request {
    if (!_cached_decoder_for_Select_Request) { _cached_decoder_for_Select_Request = function (el: _Element): Select_Request {
    let controlling: OPTIONAL<Identifier>;
    let controlled: OPTIONAL<Identifier[]>;
    const callbacks: $.DecodingMap = {
        "controlling": (_el: _Element): void => { controlling = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "controlled": (_el: _Element): void => { controlled = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Select_Request,
        _extension_additions_list_spec_for_Select_Request,
        _root_component_type_list_2_spec_for_Select_Request,
        undefined,
    );
    return new Select_Request(
        controlling,
        controlled
    );
}; }
    return _cached_decoder_for_Select_Request(el);
}

let _cached_encoder_for_Select_Request: $.ASN1Encoder<Select_Request> | null = null;

/**
 * @summary Encodes a(n) Select_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Select_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Select_Request (value: Select_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Select_Request) { _cached_encoder_for_Select_Request = function (value: Select_Request, elGetter: $.ASN1Encoder<Select_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.controlling === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.controlling, $.BER)),
            /* IF_ABSENT  */ ((value.controlled === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.controlled, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Select_Request(value, elGetter);
}


/* eslint-enable */
