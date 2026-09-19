/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Sic, _decode_Sic, _encode_Sic } from "../MMSHeadingExtensions/Sic.ta.mjs";
// export { Sic, _decode_Sic, _encode_Sic } from "../MMSHeadingExtensions/Sic.ta.mjs";
import { DistributionExtensionField, _decode_DistributionExtensionField, _encode_DistributionExtensionField } from "../MMSHeadingExtensions/DistributionExtensionField.ta.mjs";
// export { DistributionExtensionField, _decode_DistributionExtensionField, _encode_DistributionExtensionField } from "../MMSHeadingExtensions/DistributionExtensionField.ta.mjs";


/**
 * @summary DistributionCodes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionCodes ::= SET {
 *   sics
 *     [0]  SEQUENCE SIZE (1..ub-military-number-of-sics) OF Sic OPTIONAL,
 *   dist-Extensions  [1]  SEQUENCE OF DistributionExtensionField OPTIONAL}
 * ```
 * 
 * @class
 */
export
class DistributionCodes {
    constructor (
        /**
         * @summary `sics`.
         * @public
         * @readonly
         */
        readonly sics: OPTIONAL<Sic[]>,
        /**
         * @summary `dist_Extensions`.
         * @public
         * @readonly
         */
        readonly dist_Extensions: OPTIONAL<DistributionExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a DistributionCodes
     * @description
     * 
     * This takes an `object` and converts it to a `DistributionCodes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DistributionCodes`.
     * @returns {DistributionCodes}
     */
    public static _from_object (_o: { [_K in keyof (DistributionCodes)]: (DistributionCodes)[_K] }): DistributionCodes {
        return new DistributionCodes(_o.sics, _o.dist_Extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DistributionCodes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DistributionCodes: $.ComponentSpec[] = [
    new $.ComponentSpec("sics", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dist-Extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DistributionCodes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DistributionCodes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DistributionCodes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DistributionCodes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DistributionCodes: $.ASN1Decoder<DistributionCodes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionCodes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionCodes (el: _Element): DistributionCodes {
    if (!_cached_decoder_for_DistributionCodes) { _cached_decoder_for_DistributionCodes = function (el: _Element): DistributionCodes {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let sics: OPTIONAL<Sic[]>;
    let dist_Extensions: OPTIONAL<DistributionExtensionField[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sics": (_el: _Element): void => { sics = $._decode_implicit<Sic[]>(() => $._decodeSequenceOf<Sic>(() => _decode_Sic))(_el); },
        "dist-Extensions": (_el: _Element): void => { dist_Extensions = $._decode_implicit<DistributionExtensionField[]>(() => $._decodeSequenceOf<DistributionExtensionField>(() => _decode_DistributionExtensionField))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_DistributionCodes,
        _extension_additions_list_spec_for_DistributionCodes,
        _root_component_type_list_2_spec_for_DistributionCodes,
        undefined,
    );
    return new DistributionCodes( /* SET_CONSTRUCTOR_CALL */
        sics,
        dist_Extensions
    );
}; }
    return _cached_decoder_for_DistributionCodes(el);
}

let _cached_encoder_for_DistributionCodes: $.ASN1Encoder<DistributionCodes> | null = null;

/**
 * @summary Encodes a(n) DistributionCodes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionCodes, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionCodes (value: DistributionCodes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionCodes) { _cached_encoder_for_DistributionCodes = function (value: DistributionCodes, elGetter: $.ASN1Encoder<DistributionCodes>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<Sic>(() => _encode_Sic, $.BER), $.BER)(value.sics, $.BER)),
            /* IF_ABSENT  */ ((value.dist_Extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<DistributionExtensionField>(() => _encode_DistributionExtensionField, $.BER), $.BER)(value.dist_Extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DistributionCodes(value, elGetter);
}


/* eslint-enable */
