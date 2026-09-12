/* eslint-disable */
import {
    INTEGER,
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
import { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
// export { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";


/**
 * @summary ModifierStep
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifierStep ::= SEQUENCE {
 *     modifierID              INTEGER,
 *     modifier                Modifier
 * }
 * ```
 * 
 * @class
 */
export
class ModifierStep {
    constructor (
        /**
         * @summary `modifierID`.
         * @public
         * @readonly
         */
        readonly modifierID: INTEGER,
        /**
         * @summary `modifier`.
         * @public
         * @readonly
         */
        readonly modifier: Modifier
    ) {}

    /**
     * @summary Restructures an object into a ModifierStep
     * @description
     * 
     * This takes an `object` and converts it to a `ModifierStep`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifierStep`.
     * @returns {ModifierStep}
     */
    public static _from_object (_o: { [_K in keyof (ModifierStep)]: (ModifierStep)[_K] }): ModifierStep {
        return new ModifierStep(_o.modifierID, _o.modifier);
    }


}

/**
 * @summary The Leading Root Component Types of ModifierStep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModifierStep: $.ComponentSpec[] = [
    new $.ComponentSpec("modifierID", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("modifier", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ModifierStep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModifierStep: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModifierStep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModifierStep: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModifierStep: $.ASN1Decoder<ModifierStep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifierStep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifierStep (el: _Element): ModifierStep {
    if (!_cached_decoder_for_ModifierStep) { _cached_decoder_for_ModifierStep = function (el: _Element): ModifierStep {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ModifierStep contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modifierID";
    sequence[1].name = "modifier";
    let modifierID!: INTEGER;
    let modifier!: Modifier;
    modifierID = $._decodeInteger(sequence[0]);
    modifier = _decode_Modifier(sequence[1]);
    return new ModifierStep(
        modifierID,
        modifier,

    );
}; }
    return _cached_decoder_for_ModifierStep(el);
}

let _cached_encoder_for_ModifierStep: $.ASN1Encoder<ModifierStep> | null = null;

/**
 * @summary Encodes a(n) ModifierStep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifierStep, encoded as an ASN.1 Element.
 */
export
function _encode_ModifierStep (value: ModifierStep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifierStep) { _cached_encoder_for_ModifierStep = function (value: ModifierStep): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.modifierID, $.BER),
            /* REQUIRED   */ _encode_Modifier(value.modifier, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModifierStep(value, elGetter);
}


/* eslint-enable */
