/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Standard_Supplementary_Services, _decode_Standard_Supplementary_Services, _encode_Standard_Supplementary_Services } from "../HI2Operations/Standard-Supplementary-Services.ta.mjs";
// export { Standard_Supplementary_Services, _decode_Standard_Supplementary_Services, _encode_Standard_Supplementary_Services } from "../HI2Operations/Standard-Supplementary-Services.ta.mjs";
import { Non_Standard_Supplementary_Services, _decode_Non_Standard_Supplementary_Services, _encode_Non_Standard_Supplementary_Services } from "../HI2Operations/Non-Standard-Supplementary-Services.ta.mjs";
// export { Non_Standard_Supplementary_Services, _decode_Non_Standard_Supplementary_Services, _encode_Non_Standard_Supplementary_Services } from "../HI2Operations/Non-Standard-Supplementary-Services.ta.mjs";
import { Other_Services, _decode_Other_Services, _encode_Other_Services } from "../HI2Operations/Other-Services.ta.mjs";
// export { Other_Services, _decode_Other_Services, _encode_Other_Services } from "../HI2Operations/Other-Services.ta.mjs";


/**
 * @summary Supplementary_Services
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Supplementary-Services ::= SEQUENCE
 * {
 *     standard-Supplementary-Services        [1] Standard-Supplementary-Services OPTIONAL,
 *     non-Standard-Supplementary-Services    [2] Non-Standard-Supplementary-Services OPTIONAL,
 *     other-Services                        [3] Other-Services OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Supplementary_Services {
    constructor (
        /**
         * @summary `standard_Supplementary_Services`.
         * @public
         * @readonly
         */
        readonly standard_Supplementary_Services: OPTIONAL<Standard_Supplementary_Services>,
        /**
         * @summary `non_Standard_Supplementary_Services`.
         * @public
         * @readonly
         */
        readonly non_Standard_Supplementary_Services: OPTIONAL<Non_Standard_Supplementary_Services>,
        /**
         * @summary `other_Services`.
         * @public
         * @readonly
         */
        readonly other_Services: OPTIONAL<Other_Services>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Supplementary_Services
     * @description
     * 
     * This takes an `object` and converts it to a `Supplementary_Services`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Supplementary_Services`.
     * @returns {Supplementary_Services}
     */
    public static _from_object (_o: { [_K in keyof (Supplementary_Services)]: (Supplementary_Services)[_K] }): Supplementary_Services {
        return new Supplementary_Services(_o.standard_Supplementary_Services, _o.non_Standard_Supplementary_Services, _o.other_Services, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Supplementary_Services
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Supplementary_Services: $.ComponentSpec[] = [
    new $.ComponentSpec("standard-Supplementary-Services", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("non-Standard-Supplementary-Services", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("other-Services", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Supplementary_Services
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Supplementary_Services: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Supplementary_Services
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Supplementary_Services: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Supplementary_Services: $.ASN1Decoder<Supplementary_Services> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Supplementary_Services
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Supplementary_Services (el: _Element): Supplementary_Services {
    if (!_cached_decoder_for_Supplementary_Services) { _cached_decoder_for_Supplementary_Services = function (el: _Element): Supplementary_Services {
    let standard_Supplementary_Services: OPTIONAL<Standard_Supplementary_Services>;
    let non_Standard_Supplementary_Services: OPTIONAL<Non_Standard_Supplementary_Services>;
    let other_Services: OPTIONAL<Other_Services>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "standard-Supplementary-Services": (_el: _Element): void => { standard_Supplementary_Services = $._decode_implicit<Standard_Supplementary_Services>(() => _decode_Standard_Supplementary_Services)(_el); },
        "non-Standard-Supplementary-Services": (_el: _Element): void => { non_Standard_Supplementary_Services = $._decode_implicit<Non_Standard_Supplementary_Services>(() => _decode_Non_Standard_Supplementary_Services)(_el); },
        "other-Services": (_el: _Element): void => { other_Services = $._decode_implicit<Other_Services>(() => _decode_Other_Services)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Supplementary_Services,
        _extension_additions_list_spec_for_Supplementary_Services,
        _root_component_type_list_2_spec_for_Supplementary_Services,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Supplementary_Services(
        standard_Supplementary_Services,
        non_Standard_Supplementary_Services,
        other_Services,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Supplementary_Services(el);
}

let _cached_encoder_for_Supplementary_Services: $.ASN1Encoder<Supplementary_Services> | null = null;

/**
 * @summary Encodes a(n) Supplementary_Services into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Supplementary_Services, encoded as an ASN.1 Element.
 */
export
function _encode_Supplementary_Services (value: Supplementary_Services, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Supplementary_Services) { _cached_encoder_for_Supplementary_Services = function (value: Supplementary_Services, elGetter: $.ASN1Encoder<Supplementary_Services>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.standard_Supplementary_Services === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Standard_Supplementary_Services, $.BER)(value.standard_Supplementary_Services, $.BER)),
            /* IF_ABSENT  */ ((value.non_Standard_Supplementary_Services === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Non_Standard_Supplementary_Services, $.BER)(value.non_Standard_Supplementary_Services, $.BER)),
            /* IF_ABSENT  */ ((value.other_Services === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Other_Services, $.BER)(value.other_Services, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Supplementary_Services(value, elGetter);
}


/* eslint-enable */
