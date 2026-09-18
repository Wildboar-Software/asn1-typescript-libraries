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
import { ExplicitPointer, _decode_ExplicitPointer, _encode_ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
// export { ExplicitPointer, _decode_ExplicitPointer, _encode_ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
import { LogExpPointer, _decode_LogExpPointer, _encode_LogExpPointer } from "../G/LogExpPointer.ta.mjs";
// export { LogExpPointer, _decode_LogExpPointer, _encode_LogExpPointer } from "../G/LogExpPointer.ta.mjs";


/**
 * @summary BKQcontent_standard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BKQcontent-standard ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class BKQcontent_standard {
    constructor (
        /**
         * @summary `pointer`.
         * @public
         * @readonly
         */
        readonly pointer: OPTIONAL<G.ExplicitPointer>,
        /**
         * @summary `logPointer`.
         * @public
         * @readonly
         */
        readonly logPointer: OPTIONAL<G.LogExpPointer>
    ) {}

    /**
     * @summary Restructures an object into a BKQcontent_standard
     * @description
     * 
     * This takes an `object` and converts it to a `BKQcontent_standard`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BKQcontent_standard`.
     * @returns {BKQcontent_standard}
     */
    public static _from_object (_o: { [_K in keyof (BKQcontent_standard)]: (BKQcontent_standard)[_K] }): BKQcontent_standard {
        return new BKQcontent_standard(_o.pointer, _o.logPointer);
    }


}

/**
 * @summary The Leading Root Component Types of BKQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BKQcontent_standard: $.ComponentSpec[] = [
    new $.ComponentSpec("pointer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("logPointer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BKQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BKQcontent_standard: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BKQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BKQcontent_standard: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BKQcontent_standard: $.ASN1Decoder<BKQcontent_standard> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BKQcontent_standard
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BKQcontent_standard (el: _Element): BKQcontent_standard {
    if (!_cached_decoder_for_BKQcontent_standard) { _cached_decoder_for_BKQcontent_standard = function (el: _Element): BKQcontent_standard {
    let pointer: OPTIONAL<G.ExplicitPointer>;
    let logPointer: OPTIONAL<G.LogExpPointer>;
    const callbacks: $.DecodingMap = {
        "pointer": (_el: _Element): void => { pointer = $._decode_implicit<G.ExplicitPointer>(() => G._decode_ExplicitPointer)(_el); },
        "logPointer": (_el: _Element): void => { logPointer = $._decode_implicit<G.LogExpPointer>(() => G._decode_LogExpPointer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BKQcontent_standard,
        _extension_additions_list_spec_for_BKQcontent_standard,
        _root_component_type_list_2_spec_for_BKQcontent_standard,
        undefined,
    );
    return new BKQcontent_standard(
        pointer,
        logPointer
    );
}; }
    return _cached_decoder_for_BKQcontent_standard(el);
}

let _cached_encoder_for_BKQcontent_standard: $.ASN1Encoder<BKQcontent_standard> | null = null;

/**
 * @summary Encodes a(n) BKQcontent_standard into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BKQcontent_standard, encoded as an ASN.1 Element.
 */
export
function _encode_BKQcontent_standard (value: BKQcontent_standard, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BKQcontent_standard) { _cached_encoder_for_BKQcontent_standard = function (value: BKQcontent_standard, elGetter: $.ASN1Encoder<BKQcontent_standard>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pointer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => G._encode_ExplicitPointer, $.BER)(value.pointer, $.BER)),
            /* IF_ABSENT  */ ((value.logPointer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => G._encode_LogExpPointer, $.BER)(value.logPointer, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BKQcontent_standard(value, elGetter);
}


/* eslint-enable */
