/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { type Criteria, _decode_Criteria, _encode_Criteria } from "../SelectedAttributeTypes/Criteria.ta.mjs";
// export { Criteria, _decode_Criteria, _encode_Criteria } from "../SelectedAttributeTypes/Criteria.ta.mjs";
import { type EnhancedGuide_subset, _decode_EnhancedGuide_subset, _encode_EnhancedGuide_subset, oneLevel /* IMPORTED_SHORT_NAMED_INTEGER */ } from "../SelectedAttributeTypes/EnhancedGuide-subset.ta.mjs";
// export { EnhancedGuide_subset, EnhancedGuide_subset_baseObject /* IMPORTED_LONG_NAMED_INTEGER */, baseObject /* IMPORTED_SHORT_NAMED_INTEGER */, EnhancedGuide_subset_oneLevel /* IMPORTED_LONG_NAMED_INTEGER */, oneLevel /* IMPORTED_SHORT_NAMED_INTEGER */, EnhancedGuide_subset_wholeSubtree /* IMPORTED_LONG_NAMED_INTEGER */, wholeSubtree /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EnhancedGuide_subset, _encode_EnhancedGuide_subset } from "../SelectedAttributeTypes/EnhancedGuide-subset.ta.mjs";


/**
 * @summary EnhancedGuide
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnhancedGuide ::= SEQUENCE {
 *   objectClass  [0]  OBJECT-CLASS.&id,
 *   criteria     [1]  Criteria,
 *   subset       [2]  INTEGER {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2)} DEFAULT oneLevel,
 *   ... }
 * ```
 * 
 * @class
 */
export
class EnhancedGuide {
    /**
     * @summary `objectClass`.
     * @public
     * @readonly
     */
    readonly objectClass: OBJECT_IDENTIFIER;
    /**
     * @summary `criteria`.
     * @public
     * @readonly
     */
    readonly criteria: Criteria;
    /**
     * @summary `subset`.
     * @public
     * @readonly
     */
    readonly subset: OPTIONAL<EnhancedGuide_subset>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        objectClass: OBJECT_IDENTIFIER,
        criteria: Criteria,
        subset: OPTIONAL<EnhancedGuide_subset>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.objectClass = objectClass;
        this.criteria = criteria;
        this.subset = subset;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EnhancedGuide
     * @description
     * 
     * This takes an `object` and converts it to a `EnhancedGuide`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnhancedGuide`.
     * @returns {EnhancedGuide}
     */
    public static _from_object (_o: { [_K in keyof (EnhancedGuide)]: (EnhancedGuide)[_K] }): EnhancedGuide {
        return new EnhancedGuide(_o.objectClass, _o.criteria, _o.subset, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `subset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subset () { return oneLevel; }
}

/**
 * @summary The Leading Root Component Types of EnhancedGuide
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnhancedGuide: $.ComponentSpec[] = [
    new $.ComponentSpec("objectClass", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("criteria", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subset", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EnhancedGuide
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnhancedGuide: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnhancedGuide
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnhancedGuide: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnhancedGuide: $.ASN1Decoder<EnhancedGuide> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnhancedGuide
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnhancedGuide (el: _Element): EnhancedGuide {
    if (!_cached_decoder_for_EnhancedGuide) { _cached_decoder_for_EnhancedGuide = function (el: _Element): EnhancedGuide {
    let objectClass!: OBJECT_IDENTIFIER;
    let criteria!: Criteria;
    let subset: OPTIONAL<EnhancedGuide_subset> = EnhancedGuide._default_value_for_subset;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "objectClass": (_el: _Element): void => { objectClass = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "criteria": (_el: _Element): void => { criteria = $._decode_explicit<Criteria>(() => _decode_Criteria)(_el); },
        "subset": (_el: _Element): void => { subset = $._decode_explicit<EnhancedGuide_subset>(() => _decode_EnhancedGuide_subset)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EnhancedGuide,
        _extension_additions_list_spec_for_EnhancedGuide,
        _root_component_type_list_2_spec_for_EnhancedGuide,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EnhancedGuide(
        objectClass,
        criteria,
        subset,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EnhancedGuide(el);
}

let _cached_encoder_for_EnhancedGuide: $.ASN1Encoder<EnhancedGuide> | null = null;

/**
 * @summary Encodes a(n) EnhancedGuide into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnhancedGuide, encoded as an ASN.1 Element.
 */
export
function _encode_EnhancedGuide (value: EnhancedGuide, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnhancedGuide) { _cached_encoder_for_EnhancedGuide = function (value: EnhancedGuide, elGetter: $.ASN1Encoder<EnhancedGuide>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.objectClass, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Criteria, $.BER)(value.criteria, $.BER);
    if (value.subset !== undefined && !$.deepEq(value.subset, EnhancedGuide._default_value_for_subset)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => _encode_EnhancedGuide_subset, $.BER)(value.subset, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EnhancedGuide(value, elGetter);
}


/* eslint-enable */
