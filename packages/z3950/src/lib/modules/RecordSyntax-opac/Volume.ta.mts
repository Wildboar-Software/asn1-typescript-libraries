/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Volume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Volume ::= SEQUENCE {
 *    enumeration        [1]    IMPLICIT InternationalString OPTIONAL,
 *    chronology         [2]    IMPLICIT InternationalString OPTIONAL,
 *    enumAndChron       [3]    IMPLICIT InternationalString OPTIONAL }
 * ```
 * 
 * @class
 */
export
class Volume {
    constructor (
        /**
         * @summary `enumeration`.
         * @public
         * @readonly
         */
        readonly enumeration: OPTIONAL<InternationalString>,
        /**
         * @summary `chronology`.
         * @public
         * @readonly
         */
        readonly chronology: OPTIONAL<InternationalString>,
        /**
         * @summary `enumAndChron`.
         * @public
         * @readonly
         */
        readonly enumAndChron: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a Volume
     * @description
     * 
     * This takes an `object` and converts it to a `Volume`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Volume`.
     * @returns {Volume}
     */
    public static _from_object (_o: { [_K in keyof (Volume)]: (Volume)[_K] }): Volume {
        return new Volume(_o.enumeration, _o.chronology, _o.enumAndChron);
    }


}

/**
 * @summary The Leading Root Component Types of Volume
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Volume: $.ComponentSpec[] = [
    /* FIXME: enumeration COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: chronology COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: enumAndChron COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of Volume
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Volume: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Volume
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Volume: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Volume: $.ASN1Decoder<Volume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Volume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Volume (el: _Element): Volume {
    if (!_cached_decoder_for_Volume) { _cached_decoder_for_Volume = function (el: _Element): Volume {
    let enumeration: OPTIONAL<InternationalString>;
    let chronology: OPTIONAL<InternationalString>;
    let enumAndChron: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "enumeration": (_el: _Element): void => { enumeration = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "chronology": (_el: _Element): void => { chronology = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "enumAndChron": (_el: _Element): void => { enumAndChron = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Volume,
        _extension_additions_list_spec_for_Volume,
        _root_component_type_list_2_spec_for_Volume,
        undefined,
    );
    return new Volume(
        enumeration,
        chronology,
        enumAndChron
    );
}; }
    return _cached_decoder_for_Volume(el);
}

let _cached_encoder_for_Volume: $.ASN1Encoder<Volume> | null = null;

/**
 * @summary Encodes a(n) Volume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Volume, encoded as an ASN.1 Element.
 */
export
function _encode_Volume (value: Volume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Volume) { _cached_encoder_for_Volume = function (value: Volume, elGetter: $.ASN1Encoder<Volume>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.enumeration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.enumeration, $.BER)),
            /* IF_ABSENT  */ ((value.chronology === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.chronology, $.BER)),
            /* IF_ABSENT  */ ((value.enumAndChron === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.enumAndChron, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Volume(value, elGetter);
}


/* eslint-enable */
