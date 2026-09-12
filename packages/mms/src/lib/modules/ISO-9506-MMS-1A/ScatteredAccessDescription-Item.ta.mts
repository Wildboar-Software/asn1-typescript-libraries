/* eslint-disable */
import {
    OPTIONAL,
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
import { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
// export { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
import { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";
// export { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";


/**
 * @summary ScatteredAccessDescription_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScatteredAccessDescription-Item ::= SEQUENCE {
 *     componentName [0] IMPLICIT Identifier OPTIONAL,
 *     variableSpecification [1] VariableSpecification,
 *     alternateAccess [2] IMPLICIT AlternateAccess OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ScatteredAccessDescription_Item {
    constructor (
        /**
         * @summary `componentName`.
         * @public
         * @readonly
         */
        readonly componentName: OPTIONAL<Identifier>,
        /**
         * @summary `variableSpecification`.
         * @public
         * @readonly
         */
        readonly variableSpecification: VariableSpecification,
        /**
         * @summary `alternateAccess`.
         * @public
         * @readonly
         */
        readonly alternateAccess: OPTIONAL<AlternateAccess>
    ) {}

    /**
     * @summary Restructures an object into a ScatteredAccessDescription_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ScatteredAccessDescription_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScatteredAccessDescription_Item`.
     * @returns {ScatteredAccessDescription_Item}
     */
    public static _from_object (_o: { [_K in keyof (ScatteredAccessDescription_Item)]: (ScatteredAccessDescription_Item)[_K] }): ScatteredAccessDescription_Item {
        return new ScatteredAccessDescription_Item(_o.componentName, _o.variableSpecification, _o.alternateAccess);
    }


}

/**
 * @summary The Leading Root Component Types of ScatteredAccessDescription_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScatteredAccessDescription_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("componentName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("variableSpecification", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("alternateAccess", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ScatteredAccessDescription_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScatteredAccessDescription_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScatteredAccessDescription_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScatteredAccessDescription_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScatteredAccessDescription_Item: $.ASN1Decoder<ScatteredAccessDescription_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScatteredAccessDescription_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScatteredAccessDescription_Item (el: _Element): ScatteredAccessDescription_Item {
    if (!_cached_decoder_for_ScatteredAccessDescription_Item) { _cached_decoder_for_ScatteredAccessDescription_Item = function (el: _Element): ScatteredAccessDescription_Item {
    let componentName: OPTIONAL<Identifier>;
    let variableSpecification!: VariableSpecification;
    let alternateAccess: OPTIONAL<AlternateAccess>;
    const callbacks: $.DecodingMap = {
        "componentName": (_el: _Element): void => { componentName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "variableSpecification": (_el: _Element): void => { variableSpecification = $._decode_explicit<VariableSpecification>(() => _decode_VariableSpecification)(_el); },
        "alternateAccess": (_el: _Element): void => { alternateAccess = $._decode_implicit<AlternateAccess>(() => _decode_AlternateAccess)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScatteredAccessDescription_Item,
        _extension_additions_list_spec_for_ScatteredAccessDescription_Item,
        _root_component_type_list_2_spec_for_ScatteredAccessDescription_Item,
        undefined,
    );
    return new ScatteredAccessDescription_Item(
        componentName,
        variableSpecification,
        alternateAccess
    );
}; }
    return _cached_decoder_for_ScatteredAccessDescription_Item(el);
}

let _cached_encoder_for_ScatteredAccessDescription_Item: $.ASN1Encoder<ScatteredAccessDescription_Item> | null = null;

/**
 * @summary Encodes a(n) ScatteredAccessDescription_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScatteredAccessDescription_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ScatteredAccessDescription_Item (value: ScatteredAccessDescription_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScatteredAccessDescription_Item) { _cached_encoder_for_ScatteredAccessDescription_Item = function (value: ScatteredAccessDescription_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.componentName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.componentName, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_VariableSpecification, $.BER)(value.variableSpecification, $.BER),
            /* IF_ABSENT  */ ((value.alternateAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AlternateAccess, $.BER)(value.alternateAccess, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ScatteredAccessDescription_Item(value, elGetter);
}


/* eslint-enable */
