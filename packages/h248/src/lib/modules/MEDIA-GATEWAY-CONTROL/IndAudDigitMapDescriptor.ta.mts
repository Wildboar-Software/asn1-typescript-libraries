/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DigitMapName, _decode_DigitMapName, _encode_DigitMapName } from "../MEDIA-GATEWAY-CONTROL/DigitMapName.ta.mjs";
// export { DigitMapName, _decode_DigitMapName, _encode_DigitMapName } from "../MEDIA-GATEWAY-CONTROL/DigitMapName.ta.mjs";


/**
 * @summary IndAudDigitMapDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudDigitMapDescriptor ::= SEQUENCE
 *     {
 *         digitMapName                [0] DigitMapName OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudDigitMapDescriptor {
    constructor (
        /**
         * @summary `digitMapName`.
         * @public
         * @readonly
         */
        readonly digitMapName: OPTIONAL<DigitMapName>
    ) {}

    /**
     * @summary Restructures an object into a IndAudDigitMapDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudDigitMapDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudDigitMapDescriptor`.
     * @returns {IndAudDigitMapDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudDigitMapDescriptor)]: (IndAudDigitMapDescriptor)[_K] }): IndAudDigitMapDescriptor {
        return new IndAudDigitMapDescriptor(_o.digitMapName);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudDigitMapDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudDigitMapDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("digitMapName", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of IndAudDigitMapDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudDigitMapDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudDigitMapDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudDigitMapDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudDigitMapDescriptor: $.ASN1Decoder<IndAudDigitMapDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudDigitMapDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudDigitMapDescriptor (el: _Element): IndAudDigitMapDescriptor {
    if (!_cached_decoder_for_IndAudDigitMapDescriptor) { _cached_decoder_for_IndAudDigitMapDescriptor = function (el: _Element): IndAudDigitMapDescriptor {
    let digitMapName: OPTIONAL<DigitMapName>;
    const callbacks: $.DecodingMap = {
        "digitMapName": (_el: _Element): void => { digitMapName = $._decode_implicit<DigitMapName>(() => _decode_DigitMapName)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudDigitMapDescriptor,
        _extension_additions_list_spec_for_IndAudDigitMapDescriptor,
        _root_component_type_list_2_spec_for_IndAudDigitMapDescriptor,
        undefined,
    );
    return new IndAudDigitMapDescriptor(
        digitMapName
    );
}; }
    return _cached_decoder_for_IndAudDigitMapDescriptor(el);
}

let _cached_encoder_for_IndAudDigitMapDescriptor: $.ASN1Encoder<IndAudDigitMapDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudDigitMapDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudDigitMapDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudDigitMapDescriptor (value: IndAudDigitMapDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudDigitMapDescriptor) { _cached_encoder_for_IndAudDigitMapDescriptor = function (value: IndAudDigitMapDescriptor, elGetter: $.ASN1Encoder<IndAudDigitMapDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.digitMapName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DigitMapName, $.BER)(value.digitMapName, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudDigitMapDescriptor(value, elGetter);
}


/* eslint-enable */
