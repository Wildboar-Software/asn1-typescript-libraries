/* eslint-disable */
import {
    ASN1SizeError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OBJECT_IDENTIFIER,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DITContentRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DITContentRule ::= SEQUENCE {
 *   structuralObjectClass       OBJECT-CLASS.&id,
 *   auxiliaries                 SET SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   mandatory              [1]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   optional               [2]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   precluded              [3]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class DITContentRule {
    /**
     * @summary `structuralObjectClass`.
     * @public
     * @readonly
     */
    readonly structuralObjectClass: OBJECT_IDENTIFIER;
    /**
     * @summary `auxiliaries`.
     * @public
     * @readonly
     */
    readonly auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `mandatory`.
     * @public
     * @readonly
     */
    readonly mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `optional`.
     * @public
     * @readonly
     */
    readonly optional: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `precluded`.
     * @public
     * @readonly
     */
    readonly precluded: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        structuralObjectClass: OBJECT_IDENTIFIER,
        auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>,
        mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>,
        optional: OPTIONAL<OBJECT_IDENTIFIER[]>,
        precluded: OPTIONAL<OBJECT_IDENTIFIER[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.structuralObjectClass = structuralObjectClass;
        this.auxiliaries = auxiliaries;
        this.mandatory = mandatory;
        this.optional = optional;
        this.precluded = precluded;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        if (this.auxiliaries !== undefined && this.auxiliaries.length < 1) {
            throw new ASN1SizeError("DITContentRule.auxiliaries violates SIZE constraint");
        }
        if (this.mandatory !== undefined && this.mandatory.length < 1) {
            throw new ASN1SizeError("DITContentRule.mandatory violates SIZE constraint");
        }
        if (this.optional !== undefined && this.optional.length < 1) {
            throw new ASN1SizeError("DITContentRule.optional violates SIZE constraint");
        }
        if (this.precluded !== undefined && this.precluded.length < 1) {
            throw new ASN1SizeError("DITContentRule.precluded violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a DITContentRule
     * @description
     * 
     * This takes an `object` and converts it to a `DITContentRule`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContentRule`.
     * @returns {DITContentRule}
     */
    public static _from_object (_o: { [_K in keyof (DITContentRule)]: (DITContentRule)[_K] }): DITContentRule {
        return new DITContentRule(_o.structuralObjectClass, _o.auxiliaries, _o.mandatory, _o.optional, _o.precluded, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of DITContentRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DITContentRule: $.ComponentSpec[] = [
    new $.ComponentSpec("structuralObjectClass", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("auxiliaries", true, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("mandatory", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("optional", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("precluded", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DITContentRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DITContentRule: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DITContentRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DITContentRule: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DITContentRule: $.ASN1Decoder<DITContentRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DITContentRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DITContentRule (el: _Element): DITContentRule {
    if (!_cached_decoder_for_DITContentRule) { _cached_decoder_for_DITContentRule = function (el: _Element): DITContentRule {
    let structuralObjectClass!: OBJECT_IDENTIFIER;
    let auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let optional: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let precluded: OPTIONAL<OBJECT_IDENTIFIER[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "structuralObjectClass": (_el: _Element): void => { structuralObjectClass = $._decodeObjectIdentifier(_el); },
        "auxiliaries": (_el: _Element): void => { auxiliaries = $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "mandatory": (_el: _Element): void => { mandatory = $._decode_explicit<OBJECT_IDENTIFIER[]>(() => $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "optional": (_el: _Element): void => { optional = $._decode_explicit<OBJECT_IDENTIFIER[]>(() => $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "precluded": (_el: _Element): void => { precluded = $._decode_explicit<OBJECT_IDENTIFIER[]>(() => $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DITContentRule,
        _extension_additions_list_spec_for_DITContentRule,
        _root_component_type_list_2_spec_for_DITContentRule,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DITContentRule(
        structuralObjectClass,
        auxiliaries,
        mandatory,
        optional,
        precluded,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DITContentRule(el);
}

let _cached_encoder_for_DITContentRule: $.ASN1Encoder<DITContentRule> | null = null;

/**
 * @summary Encodes a(n) DITContentRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContentRule, encoded as an ASN.1 Element.
 */
export
function _encode_DITContentRule (value: DITContentRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DITContentRule) { _cached_encoder_for_DITContentRule = function (value: DITContentRule, elGetter: $.ASN1Encoder<DITContentRule>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodeObjectIdentifier(value.structuralObjectClass, $.BER);
    if (value.auxiliaries !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER)(value.auxiliaries, $.BER);
    }
    if (value.mandatory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.mandatory, $.BER);
    }
    if (value.optional !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.optional, $.BER);
    }
    if (value.precluded !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.precluded, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DITContentRule(value, elGetter);
}

/* eslint-enable */
