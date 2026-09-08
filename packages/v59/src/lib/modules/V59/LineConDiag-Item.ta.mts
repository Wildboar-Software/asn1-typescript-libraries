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
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary LineConDiag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LineConDiag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class LineConDiag_Item {
    constructor (
        /**
         * @summary `lineProbeValues`.
         * @public
         * @readonly
         */
        readonly lineProbeValues: OPTIONAL<V59String>,
        /**
         * @summary `phaseJitter`.
         * @public
         * @readonly
         */
        readonly phaseJitter: OPTIONAL<V59String>,
        /**
         * @summary `ampJitter`.
         * @public
         * @readonly
         */
        readonly ampJitter: OPTIONAL<V59String>,
        /**
         * @summary `nLD`.
         * @public
         * @readonly
         */
        readonly nLD: OPTIONAL<V59String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LineConDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `LineConDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LineConDiag_Item`.
     * @returns {LineConDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (LineConDiag_Item)]: (LineConDiag_Item)[_K] }): LineConDiag_Item {
        return new LineConDiag_Item(_o.lineProbeValues, _o.phaseJitter, _o.ampJitter, _o.nLD, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LineConDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LineConDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("lineProbeValues", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("phaseJitter", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ampJitter", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("nLD", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LineConDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LineConDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LineConDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LineConDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LineConDiag_Item: $.ASN1Decoder<LineConDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LineConDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LineConDiag_Item (el: _Element): LineConDiag_Item {
    if (!_cached_decoder_for_LineConDiag_Item) { _cached_decoder_for_LineConDiag_Item = function (el: _Element): LineConDiag_Item {
    let lineProbeValues: OPTIONAL<V59String>;
    let phaseJitter: OPTIONAL<V59String>;
    let ampJitter: OPTIONAL<V59String>;
    let nLD: OPTIONAL<V59String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lineProbeValues": (_el: _Element): void => { lineProbeValues = _decode_V59String(_el); },
        "phaseJitter": (_el: _Element): void => { phaseJitter = _decode_V59String(_el); },
        "ampJitter": (_el: _Element): void => { ampJitter = _decode_V59String(_el); },
        "nLD": (_el: _Element): void => { nLD = _decode_V59String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LineConDiag_Item,
        _extension_additions_list_spec_for_LineConDiag_Item,
        _root_component_type_list_2_spec_for_LineConDiag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LineConDiag_Item(
        lineProbeValues,
        phaseJitter,
        ampJitter,
        nLD,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LineConDiag_Item(el);
}

let _cached_encoder_for_LineConDiag_Item: $.ASN1Encoder<LineConDiag_Item> | null = null;

/**
 * @summary Encodes a(n) LineConDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LineConDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_LineConDiag_Item (value: LineConDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LineConDiag_Item) { _cached_encoder_for_LineConDiag_Item = function (value: LineConDiag_Item, elGetter: $.ASN1Encoder<LineConDiag_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.lineProbeValues === undefined) ? undefined : _encode_V59String(value.lineProbeValues, $.BER)),
            /* IF_ABSENT  */ ((value.phaseJitter === undefined) ? undefined : _encode_V59String(value.phaseJitter, $.BER)),
            /* IF_ABSENT  */ ((value.ampJitter === undefined) ? undefined : _encode_V59String(value.ampJitter, $.BER)),
            /* IF_ABSENT  */ ((value.nLD === undefined) ? undefined : _encode_V59String(value.nLD, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LineConDiag_Item(value, elGetter);
}


/* eslint-enable */
