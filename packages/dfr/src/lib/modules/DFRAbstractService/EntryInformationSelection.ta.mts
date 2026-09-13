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
import { EntryInformationSelection_read_selector, _enum_for_EntryInformationSelection_read_selector, EntryInformationSelection_read_selector_attributes_only /* IMPORTED_LONG_ENUMERATION_ITEM */, attributes_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_attributes_and_content /* IMPORTED_LONG_ENUMERATION_ITEM */, attributes_and_content /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_content_only /* IMPORTED_LONG_ENUMERATION_ITEM */, content_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_dor_to_attr_only /* IMPORTED_LONG_ENUMERATION_ITEM */, dor_to_attr_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_attr_and_dor_to_content /* IMPORTED_LONG_ENUMERATION_ITEM */, attr_and_dor_to_content /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_dor_to_content_only /* IMPORTED_LONG_ENUMERATION_ITEM */, dor_to_content_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_dor_to_entire_object /* IMPORTED_LONG_ENUMERATION_ITEM */, dor_to_entire_object /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_attr_and_dor_to_entire_object /* IMPORTED_LONG_ENUMERATION_ITEM */, attr_and_dor_to_entire_object /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EntryInformationSelection_read_selector, _encode_EntryInformationSelection_read_selector } from "../DFRAbstractService/EntryInformationSelection-read-selector.ta.mjs";
// export { EntryInformationSelection_read_selector, _enum_for_EntryInformationSelection_read_selector, EntryInformationSelection_read_selector_attributes_only /* IMPORTED_LONG_ENUMERATION_ITEM */, attributes_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_attributes_and_content /* IMPORTED_LONG_ENUMERATION_ITEM */, attributes_and_content /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_content_only /* IMPORTED_LONG_ENUMERATION_ITEM */, content_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_dor_to_attr_only /* IMPORTED_LONG_ENUMERATION_ITEM */, dor_to_attr_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_attr_and_dor_to_content /* IMPORTED_LONG_ENUMERATION_ITEM */, attr_and_dor_to_content /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_dor_to_content_only /* IMPORTED_LONG_ENUMERATION_ITEM */, dor_to_content_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_dor_to_entire_object /* IMPORTED_LONG_ENUMERATION_ITEM */, dor_to_entire_object /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntryInformationSelection_read_selector_attr_and_dor_to_entire_object /* IMPORTED_LONG_ENUMERATION_ITEM */, attr_and_dor_to_entire_object /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EntryInformationSelection_read_selector, _encode_EntryInformationSelection_read_selector } from "../DFRAbstractService/EntryInformationSelection-read-selector.ta.mjs";
import { AttributeSelection, _decode_AttributeSelection, _encode_AttributeSelection } from "../DFRAbstractService/AttributeSelection.ta.mjs";
// export { AttributeSelection, _decode_AttributeSelection, _encode_AttributeSelection } from "../DFRAbstractService/AttributeSelection.ta.mjs";


/**
 * @summary EntryInformationSelection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformationSelection ::= SEQUENCE {
 *     read-selector           [0] ENUMERATED {
 *         attributes-only                 (0),
 *         attributes-and-content          (1),
 *         content-only                    (2),
 *         dor-to-attr-only                (3),
 *         attr-and-dor-to-content         (4),
 *         dor-to-content-only             (5),
 *         dor-to-entire-object            (6),
 *         attr-and-dor-to-entire-object   (7)
 *     } DEFAULT attributes-only,
 *     attribute-selection     [1] AttributeSelection OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EntryInformationSelection {
    constructor (
        /**
         * @summary `read_selector`.
         * @public
         * @readonly
         */
        readonly read_selector: OPTIONAL<EntryInformationSelection_read_selector>,
        /**
         * @summary `attribute_selection`.
         * @public
         * @readonly
         */
        readonly attribute_selection: OPTIONAL<AttributeSelection>
    ) {}

    /**
     * @summary Restructures an object into a EntryInformationSelection
     * @description
     * 
     * This takes an `object` and converts it to a `EntryInformationSelection`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryInformationSelection`.
     * @returns {EntryInformationSelection}
     */
    public static _from_object (_o: { [_K in keyof (EntryInformationSelection)]: (EntryInformationSelection)[_K] }): EntryInformationSelection {
        return new EntryInformationSelection(_o.read_selector, _o.attribute_selection);
    }

    /**
     * @summary Getter that returns the default value for `read_selector`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_read_selector () { return EntryInformationSelection_read_selector_attributes_only; }        /**
         * @summary The enum used as the type of the component `read_selector`
         * @public
         * @static
         */

    public static _enum_for_read_selector = _enum_for_EntryInformationSelection_read_selector;
}

/**
 * @summary The Leading Root Component Types of EntryInformationSelection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryInformationSelection: $.ComponentSpec[] = [
    new $.ComponentSpec("read-selector", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attribute-selection", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EntryInformationSelection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryInformationSelection: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryInformationSelection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryInformationSelection: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryInformationSelection: $.ASN1Decoder<EntryInformationSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryInformationSelection (el: _Element): EntryInformationSelection {
    if (!_cached_decoder_for_EntryInformationSelection) { _cached_decoder_for_EntryInformationSelection = function (el: _Element): EntryInformationSelection {
    let read_selector: OPTIONAL<EntryInformationSelection_read_selector> = EntryInformationSelection._default_value_for_read_selector;
    let attribute_selection: OPTIONAL<AttributeSelection>;
    const callbacks: $.DecodingMap = {
        "read-selector": (_el: _Element): void => { read_selector = $._decode_implicit<EntryInformationSelection_read_selector>(() => _decode_EntryInformationSelection_read_selector)(_el); },
        "attribute-selection": (_el: _Element): void => { attribute_selection = $._decode_explicit<AttributeSelection>(() => _decode_AttributeSelection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntryInformationSelection,
        _extension_additions_list_spec_for_EntryInformationSelection,
        _root_component_type_list_2_spec_for_EntryInformationSelection,
        undefined,
    );
    return new EntryInformationSelection(
        read_selector,
        attribute_selection
    );
}; }
    return _cached_decoder_for_EntryInformationSelection(el);
}

let _cached_encoder_for_EntryInformationSelection: $.ASN1Encoder<EntryInformationSelection> | null = null;

/**
 * @summary Encodes a(n) EntryInformationSelection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection, encoded as an ASN.1 Element.
 */
export
function _encode_EntryInformationSelection (value: EntryInformationSelection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryInformationSelection) { _cached_encoder_for_EntryInformationSelection = function (value: EntryInformationSelection, elGetter: $.ASN1Encoder<EntryInformationSelection>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.read_selector === undefined || $.deepEq(value.read_selector, EntryInformationSelection._default_value_for_read_selector) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_EntryInformationSelection_read_selector, $.BER)(value.read_selector, $.BER)),
            /* IF_ABSENT  */ ((value.attribute_selection === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_AttributeSelection, $.BER)(value.attribute_selection, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryInformationSelection(value, elGetter);
}


/* eslint-enable */
