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
import { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";


/**
 * @summary FieldParamOffer_maxFieldElements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamOffer-maxFieldElements ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class FieldParamOffer_maxFieldElements {
    constructor (
        /**
         * @summary `unbounded`.
         * @public
         * @readonly
         */
        readonly unbounded: OPTIONAL<NULL>,
        /**
         * @summary `limit`.
         * @public
         * @readonly
         */
        readonly limit: OPTIONAL<G.IntegerOffer>
    ) {}

    /**
     * @summary Restructures an object into a FieldParamOffer_maxFieldElements
     * @description
     * 
     * This takes an `object` and converts it to a `FieldParamOffer_maxFieldElements`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FieldParamOffer_maxFieldElements`.
     * @returns {FieldParamOffer_maxFieldElements}
     */
    public static _from_object (_o: { [_K in keyof (FieldParamOffer_maxFieldElements)]: (FieldParamOffer_maxFieldElements)[_K] }): FieldParamOffer_maxFieldElements {
        return new FieldParamOffer_maxFieldElements(_o.unbounded, _o.limit);
    }


}

/**
 * @summary The Leading Root Component Types of FieldParamOffer_maxFieldElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FieldParamOffer_maxFieldElements: $.ComponentSpec[] = [
    new $.ComponentSpec("unbounded", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("limit", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of FieldParamOffer_maxFieldElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FieldParamOffer_maxFieldElements: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FieldParamOffer_maxFieldElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FieldParamOffer_maxFieldElements: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FieldParamOffer_maxFieldElements: $.ASN1Decoder<FieldParamOffer_maxFieldElements> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamOffer_maxFieldElements
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamOffer_maxFieldElements (el: _Element): FieldParamOffer_maxFieldElements {
    if (!_cached_decoder_for_FieldParamOffer_maxFieldElements) { _cached_decoder_for_FieldParamOffer_maxFieldElements = function (el: _Element): FieldParamOffer_maxFieldElements {
    let unbounded: OPTIONAL<NULL>;
    let limit: OPTIONAL<G.IntegerOffer>;
    const callbacks: $.DecodingMap = {
        "unbounded": (_el: _Element): void => { unbounded = $._decodeNull(_el); },
        "limit": (_el: _Element): void => { limit = G._decode_IntegerOffer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FieldParamOffer_maxFieldElements,
        _extension_additions_list_spec_for_FieldParamOffer_maxFieldElements,
        _root_component_type_list_2_spec_for_FieldParamOffer_maxFieldElements,
        undefined,
    );
    return new FieldParamOffer_maxFieldElements(
        unbounded,
        limit
    );
}; }
    return _cached_decoder_for_FieldParamOffer_maxFieldElements(el);
}

let _cached_encoder_for_FieldParamOffer_maxFieldElements: $.ASN1Encoder<FieldParamOffer_maxFieldElements> | null = null;

/**
 * @summary Encodes a(n) FieldParamOffer_maxFieldElements into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamOffer_maxFieldElements, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamOffer_maxFieldElements (value: FieldParamOffer_maxFieldElements, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamOffer_maxFieldElements) { _cached_encoder_for_FieldParamOffer_maxFieldElements = function (value: FieldParamOffer_maxFieldElements, elGetter: $.ASN1Encoder<FieldParamOffer_maxFieldElements>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.unbounded === undefined) ? undefined : $._encodeNull(value.unbounded, $.BER)),
            /* IF_ABSENT  */ ((value.limit === undefined) ? undefined : G._encode_IntegerOffer(value.limit, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FieldParamOffer_maxFieldElements(value, elGetter);
}


/* eslint-enable */
