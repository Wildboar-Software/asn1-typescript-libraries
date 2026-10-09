/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";
import { ElementRequest, _decode_ElementRequest, _encode_ElementRequest } from "../ElementSpecification-eSpec-2/ElementRequest.ta.mjs";


/**
 * @summary Espec_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Espec-2 ::= SEQUENCE {
 *     elementSetNames         [1] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     -- See comment 1
 *     defaultVariantSetId     [2] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     -- If supplied, applies whenever variantRequest does not include variantSetId
 *     defaultVariantRequest   [3] IMPLICIT Variant OPTIONAL,
 *     -- See comment 2.
 *     defaultTagType          [4] IMPLICIT INTEGER OPTIONAL,
 *     -- If supplied, applies whenever 'tagType'
 *     -- (within 'tag' within TagPath) is omitted
 *     elements                [5] IMPLICIT SEQUENCE OF ElementRequest OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Espec_2 {
    /**
     * @summary `elementSetNames`.
     * @public
     * @readonly
     */
    readonly elementSetNames: OPTIONAL<InternationalString[]>;
    /**
     * @summary `defaultVariantSetId`.
     * @public
     * @readonly
     */
    readonly defaultVariantSetId: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `defaultVariantRequest`.
     * @public
     * @readonly
     */
    readonly defaultVariantRequest: OPTIONAL<Variant>;
    /**
     * @summary `defaultTagType`.
     * @public
     * @readonly
     */
    readonly defaultTagType: OPTIONAL<INTEGER>;
    /**
     * @summary `elements`.
     * @public
     * @readonly
     */
    readonly elements: OPTIONAL<ElementRequest[]>;

    constructor (
        elementSetNames: OPTIONAL<InternationalString[]>,
        defaultVariantSetId: OPTIONAL<OBJECT_IDENTIFIER>,
        defaultVariantRequest: OPTIONAL<Variant>,
        defaultTagType: OPTIONAL<INTEGER>,
        elements: OPTIONAL<ElementRequest[]>
    ) {
        this.elementSetNames = elementSetNames;
        this.defaultVariantSetId = defaultVariantSetId;
        this.defaultVariantRequest = defaultVariantRequest;
        this.defaultTagType = defaultTagType;
        this.elements = elements;
    }

    /**
     * @summary Restructures an object into a Espec_2
     * @description
     * 
     * This takes an `object` and converts it to a `Espec_2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Espec_2`.
     * @returns {Espec_2}
     */
    public static _from_object (_o: { [_K in keyof (Espec_2)]: (Espec_2)[_K] }): Espec_2 {
        return new Espec_2(_o.elementSetNames, _o.defaultVariantSetId, _o.defaultVariantRequest, _o.defaultTagType, _o.elements);
    }


}

/**
 * @summary The Leading Root Component Types of Espec_2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Espec_2: $.ComponentSpec[] = [
    new $.ComponentSpec("elementSetNames", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("defaultVariantSetId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultVariantRequest", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("defaultTagType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("elements", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of Espec_2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Espec_2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Espec_2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Espec_2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Espec_2: $.ASN1Decoder<Espec_2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Espec_2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Espec_2 (el: _Element): Espec_2 {
    if (!_cached_decoder_for_Espec_2) { _cached_decoder_for_Espec_2 = function (el: _Element): Espec_2 {
    let elementSetNames: OPTIONAL<InternationalString[]>;
    let defaultVariantSetId: OPTIONAL<OBJECT_IDENTIFIER>;
    let defaultVariantRequest: OPTIONAL<Variant>;
    let defaultTagType: OPTIONAL<INTEGER>;
    let elements: OPTIONAL<ElementRequest[]>;
    const callbacks: $.DecodingMap = {
        "elementSetNames": (_el: _Element): void => { elementSetNames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "defaultVariantSetId": (_el: _Element): void => { defaultVariantSetId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "defaultVariantRequest": (_el: _Element): void => { defaultVariantRequest = $._decode_implicit<Variant>(() => _decode_Variant)(_el); },
        "defaultTagType": (_el: _Element): void => { defaultTagType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "elements": (_el: _Element): void => { elements = $._decode_implicit<ElementRequest[]>(() => $._decodeSequenceOf<ElementRequest>(() => _decode_ElementRequest))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Espec_2,
        _extension_additions_list_spec_for_Espec_2,
        _root_component_type_list_2_spec_for_Espec_2,
        undefined,
    );
    return new Espec_2(
        elementSetNames,
        defaultVariantSetId,
        defaultVariantRequest,
        defaultTagType,
        elements
    );
}; }
    return _cached_decoder_for_Espec_2(el);
}

let _cached_encoder_for_Espec_2: $.ASN1Encoder<Espec_2> | null = null;

/**
 * @summary Encodes a(n) Espec_2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Espec_2, encoded as an ASN.1 Element.
 */
export
function _encode_Espec_2 (value: Espec_2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Espec_2) { _cached_encoder_for_Espec_2 = function (value: Espec_2, elGetter: $.ASN1Encoder<Espec_2>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.elementSetNames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.elementSetNames, $.BER);
    }
    if (value.defaultVariantSetId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeObjectIdentifier, $.BER)(value.defaultVariantSetId, $.BER);
    }
    if (value.defaultVariantRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Variant, $.BER)(value.defaultVariantRequest, $.BER);
    }
    if (value.defaultTagType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.defaultTagType, $.BER);
    }
    if (value.elements !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ElementRequest>(() => _encode_ElementRequest, $.BER), $.BER)(value.elements, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Espec_2(value, elGetter);
}


/* eslint-enable */
