/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OCCcomparisonParameters, _decode_OCCcomparisonParameters, _encode_OCCcomparisonParameters } from "../OCC-DATA-ELEMENTS/OCCcomparisonParameters.ta.mjs";
import { OCCfunctionalityInformation, _decode_OCCfunctionalityInformation, _encode_OCCfunctionalityInformation } from "../OCC-DATA-ELEMENTS/OCCfunctionalityInformation.ta.mjs";

/**
 * @summary OCCBiometricInformation_biometricInformationDO
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OCCBiometricInformation-biometricInformationDO ::= SET {
 *     comparisonParameters        [17] OCCcomparisonParameters OPTIONAL,
 *     functionalityInformation    [18] OCCfunctionalityInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class OCCBiometricInformation_biometricInformationDO {
    /**
     * @summary `comparisonParameters`.
     * @public
     * @readonly
     */
    readonly comparisonParameters: OPTIONAL<OCCcomparisonParameters>;
    /**
     * @summary `functionalityInformation`.
     * @public
     * @readonly
     */
    readonly functionalityInformation: OPTIONAL<OCCfunctionalityInformation>;

    constructor (
        comparisonParameters?: OPTIONAL<OCCcomparisonParameters>,
        functionalityInformation?: OPTIONAL<OCCfunctionalityInformation>
    ) {
        this.comparisonParameters = comparisonParameters;
        this.functionalityInformation = functionalityInformation;
    }

    /**
     * @summary Restructures an object into a OCCBiometricInformation_biometricInformationDO
     * @description
     * 
     * This takes an `object` and converts it to a `OCCBiometricInformation_biometricInformationDO`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OCCBiometricInformation_biometricInformationDO`.
     * @returns {OCCBiometricInformation_biometricInformationDO}
     */
    public static _from_object (_o: { [_K in keyof (OCCBiometricInformation_biometricInformationDO)]: (OCCBiometricInformation_biometricInformationDO)[_K] }): OCCBiometricInformation_biometricInformationDO {
        return new OCCBiometricInformation_biometricInformationDO(_o.comparisonParameters, _o.functionalityInformation);
    }

}

/**
 * @summary The Leading Root Component Types of OCCBiometricInformation_biometricInformationDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OCCBiometricInformation_biometricInformationDO: $.ComponentSpec[] = [
    new $.ComponentSpec("comparisonParameters", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("functionalityInformation", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of OCCBiometricInformation_biometricInformationDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OCCBiometricInformation_biometricInformationDO: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OCCBiometricInformation_biometricInformationDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OCCBiometricInformation_biometricInformationDO: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OCCBiometricInformation_biometricInformationDO: $.ASN1Decoder<OCCBiometricInformation_biometricInformationDO> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OCCBiometricInformation_biometricInformationDO
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OCCBiometricInformation_biometricInformationDO (el: _Element): OCCBiometricInformation_biometricInformationDO {
    if (!_cached_decoder_for_OCCBiometricInformation_biometricInformationDO) { _cached_decoder_for_OCCBiometricInformation_biometricInformationDO = function (el: _Element): OCCBiometricInformation_biometricInformationDO {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let comparisonParameters: OPTIONAL<OCCcomparisonParameters>;
    let functionalityInformation: OPTIONAL<OCCfunctionalityInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "comparisonParameters": (_el: _Element): void => { comparisonParameters = $._decode_implicit<OCCcomparisonParameters>(() => _decode_OCCcomparisonParameters)(_el); },
        "functionalityInformation": (_el: _Element): void => { functionalityInformation = $._decode_implicit<OCCfunctionalityInformation>(() => _decode_OCCfunctionalityInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OCCBiometricInformation_biometricInformationDO,
        _extension_additions_list_spec_for_OCCBiometricInformation_biometricInformationDO,
        _root_component_type_list_2_spec_for_OCCBiometricInformation_biometricInformationDO,
        undefined,
    );
    return new OCCBiometricInformation_biometricInformationDO( /* SET_CONSTRUCTOR_CALL */
        comparisonParameters,
        functionalityInformation
    );
}; }
    return _cached_decoder_for_OCCBiometricInformation_biometricInformationDO(el);
}

let _cached_encoder_for_OCCBiometricInformation_biometricInformationDO: $.ASN1Encoder<OCCBiometricInformation_biometricInformationDO> | null = null;

/**
 * @summary Encodes a(n) OCCBiometricInformation_biometricInformationDO into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OCCBiometricInformation_biometricInformationDO, encoded as an ASN.1 Element.
 */
export
function _encode_OCCBiometricInformation_biometricInformationDO (value: OCCBiometricInformation_biometricInformationDO, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OCCBiometricInformation_biometricInformationDO) { _cached_encoder_for_OCCBiometricInformation_biometricInformationDO = function (value: OCCBiometricInformation_biometricInformationDO, elGetter: $.ASN1Encoder<OCCBiometricInformation_biometricInformationDO>): _Element {
    const _components: _Element[] = [];
    if (value.comparisonParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_OCCcomparisonParameters, $.BER)(value.comparisonParameters, $.BER));
    }
    if (value.functionalityInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_OCCfunctionalityInformation, $.BER)(value.functionalityInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_OCCBiometricInformation_biometricInformationDO(value, elGetter);
}

/* eslint-enable */
