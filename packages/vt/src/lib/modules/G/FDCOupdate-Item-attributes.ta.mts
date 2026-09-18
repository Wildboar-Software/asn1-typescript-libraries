/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    PrintableString,
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
 * @summary FDCOupdate_Item_attributes
 * @description
 *
 * FDR graphic attributes. INTEGER 0 for repertoire, colours, or font
 * means `"null"`. ISO/IEC 9041-1:1997 §12.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate-Item-attributes ::= SEQUENCE {
 *     graphicCharacterRepertoire [0] IMPLICIT INTEGER OPTIONAL,
 *     foregroundColour           [1] IMPLICIT INTEGER OPTIONAL,
 *     backgroundColour           [2] IMPLICIT INTEGER OPTIONAL,
 *     emphasis                   [3] IMPLICIT PrintableString OPTIONAL,
 *     font                       [4] IMPLICIT INTEGER OPTIONAL
 *     -- value of zero for any of the integer items in attributes implies the "null"value,
 * }
 * ```
 * 
 * @class
 */
export
class FDCOupdate_Item_attributes {
    constructor (
        /**
         * @summary `graphicCharacterRepertoire`.
         * @description
         * Repertoire assignment; 0 ⇒ `"null"`. ISO/IEC 9041-1:1997
         * §12.2.2.
         * @public
         * @readonly
         */
        readonly graphicCharacterRepertoire: OPTIONAL<INTEGER>,
        /**
         * @summary `foregroundColour`.
         * @description
         * Foreground colour assignment; 0 ⇒ `"null"`. ISO/IEC
         * 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly foregroundColour: OPTIONAL<INTEGER>,
        /**
         * @summary `backgroundColour`.
         * @description
         * Background colour assignment; 0 ⇒ `"null"`. ISO/IEC
         * 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly backgroundColour: OPTIONAL<INTEGER>,
        /**
         * @summary `emphasis`.
         * @description
         * Emphasis attribute string. ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly emphasis: OPTIONAL<PrintableString>,
        /**
         * @summary `font`.
         * @description
         * Font assignment; 0 ⇒ `"null"`. ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly font: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a FDCOupdate_Item_attributes
     * @description
     * 
     * This takes an `object` and converts it to a `FDCOupdate_Item_attributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FDCOupdate_Item_attributes`.
     * @returns {FDCOupdate_Item_attributes}
     */
    public static _from_object (_o: { [_K in keyof (FDCOupdate_Item_attributes)]: (FDCOupdate_Item_attributes)[_K] }): FDCOupdate_Item_attributes {
        return new FDCOupdate_Item_attributes(_o.graphicCharacterRepertoire, _o.foregroundColour, _o.backgroundColour, _o.emphasis, _o.font);
    }


}

/**
 * @summary The Leading Root Component Types of FDCOupdate_Item_attributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FDCOupdate_Item_attributes: $.ComponentSpec[] = [
    new $.ComponentSpec("graphicCharacterRepertoire", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("foregroundColour", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("backgroundColour", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("emphasis", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("font", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of FDCOupdate_Item_attributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FDCOupdate_Item_attributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FDCOupdate_Item_attributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FDCOupdate_Item_attributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FDCOupdate_Item_attributes: $.ASN1Decoder<FDCOupdate_Item_attributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FDCOupdate_Item_attributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FDCOupdate_Item_attributes (el: _Element): FDCOupdate_Item_attributes {
    if (!_cached_decoder_for_FDCOupdate_Item_attributes) { _cached_decoder_for_FDCOupdate_Item_attributes = function (el: _Element): FDCOupdate_Item_attributes {
    let graphicCharacterRepertoire: OPTIONAL<INTEGER>;
    let foregroundColour: OPTIONAL<INTEGER>;
    let backgroundColour: OPTIONAL<INTEGER>;
    let emphasis: OPTIONAL<PrintableString>;
    let font: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "graphicCharacterRepertoire": (_el: _Element): void => { graphicCharacterRepertoire = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "foregroundColour": (_el: _Element): void => { foregroundColour = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "backgroundColour": (_el: _Element): void => { backgroundColour = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "emphasis": (_el: _Element): void => { emphasis = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "font": (_el: _Element): void => { font = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FDCOupdate_Item_attributes,
        _extension_additions_list_spec_for_FDCOupdate_Item_attributes,
        _root_component_type_list_2_spec_for_FDCOupdate_Item_attributes,
        undefined,
    );
    return new FDCOupdate_Item_attributes(
        graphicCharacterRepertoire,
        foregroundColour,
        backgroundColour,
        emphasis,
        font
    );
}; }
    return _cached_decoder_for_FDCOupdate_Item_attributes(el);
}

let _cached_encoder_for_FDCOupdate_Item_attributes: $.ASN1Encoder<FDCOupdate_Item_attributes> | null = null;

/**
 * @summary Encodes a(n) FDCOupdate_Item_attributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FDCOupdate_Item_attributes, encoded as an ASN.1 Element.
 */
export
function _encode_FDCOupdate_Item_attributes (value: FDCOupdate_Item_attributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FDCOupdate_Item_attributes) { _cached_encoder_for_FDCOupdate_Item_attributes = function (value: FDCOupdate_Item_attributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.graphicCharacterRepertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.graphicCharacterRepertoire, $.BER)),
            /* IF_ABSENT  */ ((value.foregroundColour === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.foregroundColour, $.BER)),
            /* IF_ABSENT  */ ((value.backgroundColour === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.backgroundColour, $.BER)),
            /* IF_ABSENT  */ ((value.emphasis === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodePrintableString, $.BER)(value.emphasis, $.BER)),
            /* IF_ABSENT  */ ((value.font === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.font, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FDCOupdate_Item_attributes(value, elGetter);
}


/* eslint-enable */
