/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    SEQUENCE,
    SET,
    FALSE,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    SupportedAttributes,
} from "../Q821-ASN1Module/SupportedAttributes.osa.mjs";



/**
 * @summary ProblemData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProblemData ::= SEQUENCE {
 *   identifier    [0]  Q821-ATTRIBUTE.&id({SupportedAttributes}),
 *   significance  [1]  BOOLEAN DEFAULT FALSE,
 *   information
 *     [2]  Q821-ATTRIBUTE.&Type({SupportedAttributes}{@identifier})
 * }
 * ```
 * 
 * @class
 */
export
class ProblemData {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `significance`.
         * @public
         * @readonly
         */
        readonly significance: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: _Element
    ) {}

    /**
     * @summary Restructures an object into a ProblemData
     * @description
     * 
     * This takes an `object` and converts it to a `ProblemData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProblemData`.
     * @returns {ProblemData}
     */
    public static _from_object (_o: { [_K in keyof (ProblemData)]: (ProblemData)[_K] }): ProblemData {
        return new ProblemData(_o.identifier, _o.significance, _o.information);
    }

    /**
     * @summary Getter that returns the default value for `significance`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_significance () { return false; }
}

/**
 * @summary The Leading Root Component Types of ProblemData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProblemData: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("significance", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("information", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ProblemData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProblemData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProblemData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProblemData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProblemData: $.ASN1Decoder<ProblemData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProblemData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProblemData (el: _Element): ProblemData {
    if (!_cached_decoder_for_ProblemData) { _cached_decoder_for_ProblemData = function (el: _Element): ProblemData {
    let identifier!: OBJECT_IDENTIFIER;
    let significance: OPTIONAL<BOOLEAN> = ProblemData._default_value_for_significance;
    let information!: _Element;
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "significance": (_el: _Element): void => { significance = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "information": (_el: _Element): void => { information = $._decode_explicit<_Element>(() => $._decodeAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProblemData,
        _extension_additions_list_spec_for_ProblemData,
        _root_component_type_list_2_spec_for_ProblemData,
        undefined,
    );
    return new ProblemData(
        identifier,
        significance,
        information
    );
}; }
    return _cached_decoder_for_ProblemData(el);
}

let _cached_encoder_for_ProblemData: $.ASN1Encoder<ProblemData> | null = null;

/**
 * @summary Encodes a(n) ProblemData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProblemData, encoded as an ASN.1 Element.
 */
export
function _encode_ProblemData (value: ProblemData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProblemData) { _cached_encoder_for_ProblemData = function (value: ProblemData, elGetter: $.ASN1Encoder<ProblemData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.identifier, $.BER),
            /* IF_DEFAULT */ (value.significance === undefined || $.deepEq(value.significance, ProblemData._default_value_for_significance) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.significance, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeAny, $.BER)(value.information, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProblemData(value, elGetter);
}


/* eslint-enable */
