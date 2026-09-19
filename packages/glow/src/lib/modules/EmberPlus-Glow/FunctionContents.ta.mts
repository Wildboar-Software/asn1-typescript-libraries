/* eslint-disable */
import {
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
import { TupleDescription, _decode_TupleDescription, _encode_TupleDescription } from "../EmberPlus-Glow/TupleDescription.ta.mjs";
// export { TupleDescription, _decode_TupleDescription, _encode_TupleDescription } from "../EmberPlus-Glow/TupleDescription.ta.mjs";


/**
 * @summary FunctionContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionContents ::= SET {
 *         identifier       [0] EmberString         OPTIONAL,
 *         description      [1] EmberString         OPTIONAL,
 *         arguments        [2] TupleDescription    OPTIONAL,
 *         result           [3] TupleDescription    OPTIONAL,
 *         templateReference[4] RELATIVE-OID        OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class FunctionContents {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OPTIONAL<EmberString>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<EmberString>,
        /**
         * @summary `arguments`.
         * @public
         * @readonly
         */
        readonly arguments: OPTIONAL<TupleDescription>,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: OPTIONAL<TupleDescription>,
        /**
         * @summary `templateReference`.
         * @public
         * @readonly
         */
        readonly templateReference: OPTIONAL<RELATIVE_OID>
    ) {}

    /**
     * @summary Restructures an object into a FunctionContents
     * @description
     * 
     * This takes an `object` and converts it to a `FunctionContents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FunctionContents`.
     * @returns {FunctionContents}
     */
    public static _from_object (_o: { [_K in keyof (FunctionContents)]: (FunctionContents)[_K] }): FunctionContents {
        return new FunctionContents(_o.identifier, _o.description, _o.arguments, _o.result, _o.templateReference);
    }


}

/**
 * @summary The Leading Root Component Types of FunctionContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FunctionContents: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("arguments", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("result", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("templateReference", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of FunctionContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FunctionContents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FunctionContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FunctionContents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FunctionContents: $.ASN1Decoder<FunctionContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FunctionContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FunctionContents (el: _Element): FunctionContents {
    if (!_cached_decoder_for_FunctionContents) { _cached_decoder_for_FunctionContents = function (el: _Element): FunctionContents {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let identifier: OPTIONAL<EmberString>;
    let description: OPTIONAL<EmberString>;
    let arguments: OPTIONAL<TupleDescription>;
    let result: OPTIONAL<TupleDescription>;
    let templateReference: OPTIONAL<RELATIVE_OID>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "arguments": (_el: _Element): void => { arguments = $._decode_explicit<TupleDescription>(() => _decode_TupleDescription)(_el); },
        "result": (_el: _Element): void => { result = $._decode_explicit<TupleDescription>(() => _decode_TupleDescription)(_el); },
        "templateReference": (_el: _Element): void => { templateReference = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_FunctionContents,
        _extension_additions_list_spec_for_FunctionContents,
        _root_component_type_list_2_spec_for_FunctionContents,
        undefined,
    );
    return new FunctionContents( /* SET_CONSTRUCTOR_CALL */
        identifier,
        description,
        arguments,
        result,
        templateReference
    );
}; }
    return _cached_decoder_for_FunctionContents(el);
}

let _cached_encoder_for_FunctionContents: $.ASN1Encoder<FunctionContents> | null = null;

/**
 * @summary Encodes a(n) FunctionContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FunctionContents, encoded as an ASN.1 Element.
 */
export
function _encode_FunctionContents (value: FunctionContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FunctionContents) { _cached_encoder_for_FunctionContents = function (value: FunctionContents, elGetter: $.ASN1Encoder<FunctionContents>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.identifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_EmberString, $.BER)(value.identifier, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_EmberString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.arguments === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_TupleDescription, $.BER)(value.arguments, $.BER)),
            /* IF_ABSENT  */ ((value.result === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_TupleDescription, $.BER)(value.result, $.BER)),
            /* IF_ABSENT  */ ((value.templateReference === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => $._encodeRelativeOID, $.BER)(value.templateReference, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FunctionContents(value, elGetter);
}


/* eslint-enable */
