/* eslint-disable */
import {
    ASN1SizeError,
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";


/**
 * @summary SearchRuleDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF      SearchRule,
 *   name         [28]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description  [29]  UnboundedDirectoryString OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class SearchRuleDescription {
    readonly _componentsOf_SearchRule: SearchRule;
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<UnboundedDirectoryString[]>;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<UnboundedDirectoryString>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        _componentsOf_SearchRule: SearchRule,
        name: OPTIONAL<UnboundedDirectoryString[]>,
        description: OPTIONAL<UnboundedDirectoryString>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this._componentsOf_SearchRule = _componentsOf_SearchRule;
        this.name = name;
        this.description = description;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        if (this.name !== undefined && this.name.length < 1) {
            throw new ASN1SizeError("SearchRuleDescription.name violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SearchRuleDescription
     * @description
     * 
     * This takes an `object` and converts it to a `SearchRuleDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchRuleDescription`.
     * @returns {SearchRuleDescription}
     */
    public static _from_object (_o: { [_K in keyof (SearchRuleDescription)]: (SearchRuleDescription)[_K] }): SearchRuleDescription {
        return new SearchRuleDescription(_o._componentsOf_SearchRule, _o.name, _o.description, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SearchRuleDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchRuleDescription: $.ComponentSpec[] = [
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of SearchRuleDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchRuleDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchRuleDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchRuleDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchRuleDescription: $.ASN1Decoder<SearchRuleDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchRuleDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchRuleDescription (el: _Element): SearchRuleDescription {
    if (!_cached_decoder_for_SearchRuleDescription) { _cached_decoder_for_SearchRuleDescription = function (el: _Element): SearchRuleDescription {
    let _componentsOf!: SearchRule;
    let name: OPTIONAL<UnboundedDirectoryString[]>;
    let description: OPTIONAL<UnboundedDirectoryString>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
        "name": (_el: _Element): void => { name = $._decode_explicit<UnboundedDirectoryString[]>(() => $._decodeSetOf<UnboundedDirectoryString>(() => _decode_UnboundedDirectoryString))(_el); },
        "description": (_el: _Element): void => { description = $._decode_explicit<UnboundedDirectoryString>(() => _decode_UnboundedDirectoryString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchRuleDescription,
        _extension_additions_list_spec_for_SearchRuleDescription,
        _root_component_type_list_2_spec_for_SearchRuleDescription,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SearchRuleDescription(
        _componentsOf,
        name,
        description,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SearchRuleDescription(el);
}

let _cached_encoder_for_SearchRuleDescription: $.ASN1Encoder<SearchRuleDescription> | null = null;

/**
 * @summary Encodes a(n) SearchRuleDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRuleDescription, encoded as an ASN.1 Element.
 */
export
function _encode_SearchRuleDescription (value: SearchRuleDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchRuleDescription) { _cached_encoder_for_SearchRuleDescription = function (value: SearchRuleDescription, elGetter: $.ASN1Encoder<SearchRuleDescription>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    if (value.name !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 28, () => $._encodeSetOf<UnboundedDirectoryString>(() => _encode_UnboundedDirectoryString, $.BER), $.BER)(value.name, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 29, () => _encode_UnboundedDirectoryString, $.BER)(value.description, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SearchRuleDescription(value, elGetter);
}


/* eslint-enable */
