/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UERadioCapability
 * @description
 * 
 * The UERadioCapability contains the UE radio access capability information.
 * The UERadioCapability type is derived from UE Radio Capability IE defined in
 * TS 38.413 [23] clauses 9.3.1.74, and 9.3.1.74a.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UERadioCapability ::= SEQUENCE
 * {
 *     uERadioCapibilityNR    [1] OCTET STRING OPTIONAL,
 *     uERadioCapabilityEUTRA [2] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UERadioCapability {
    /**
     * @summary `uERadioCapibilityNR`.
     * @description
     *
     * Includes the UE Radio Capability information as defined in TS 38.413 [23]
     * clause 9.3.1.74.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.3.
     *
     * @public
     * @readonly
     */
    readonly uERadioCapibilityNR: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uERadioCapabilityEUTRA`.
     * @description
     *
     * Includes the UE Radio Capability – E-UTRA Format information message
     * defined in TS 38.413 [23] clause 9.3.1.74a.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.3.
     *
     * @public
     * @readonly
     */
    readonly uERadioCapabilityEUTRA: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uERadioCapibilityNR?: OPTIONAL<OCTET_STRING>,
        uERadioCapabilityEUTRA?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uERadioCapibilityNR = uERadioCapibilityNR;
        this.uERadioCapabilityEUTRA = uERadioCapabilityEUTRA;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UERadioCapability
     * @description
     * 
     * This takes an `object` and converts it to a `UERadioCapability`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UERadioCapability`.
     * @returns {UERadioCapability}
     */
    public static _from_object (_o: { [_K in keyof (UERadioCapability)]: (UERadioCapability)[_K] }): UERadioCapability {
        return new UERadioCapability(_o.uERadioCapibilityNR, _o.uERadioCapabilityEUTRA, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UERadioCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UERadioCapability: $.ComponentSpec[] = [
    new $.ComponentSpec("uERadioCapibilityNR", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uERadioCapabilityEUTRA", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UERadioCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UERadioCapability: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UERadioCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UERadioCapability: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UERadioCapability: $.ASN1Decoder<UERadioCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UERadioCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UERadioCapability (el: _Element): UERadioCapability {
    if (!_cached_decoder_for_UERadioCapability) { _cached_decoder_for_UERadioCapability = function (el: _Element): UERadioCapability {
    let uERadioCapibilityNR: OPTIONAL<OCTET_STRING>;
    let uERadioCapabilityEUTRA: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uERadioCapibilityNR": (_el: _Element): void => { uERadioCapibilityNR = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uERadioCapabilityEUTRA": (_el: _Element): void => { uERadioCapabilityEUTRA = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UERadioCapability,
        _extension_additions_list_spec_for_UERadioCapability,
        _root_component_type_list_2_spec_for_UERadioCapability,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UERadioCapability(
        uERadioCapibilityNR,
        uERadioCapabilityEUTRA,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UERadioCapability(el);
}

let _cached_encoder_for_UERadioCapability: $.ASN1Encoder<UERadioCapability> | null = null;

/**
 * @summary Encodes a(n) UERadioCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UERadioCapability, encoded as an ASN.1 Element.
 */
export
function _encode_UERadioCapability (value: UERadioCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UERadioCapability) { _cached_encoder_for_UERadioCapability = function (value: UERadioCapability, elGetter: $.ASN1Encoder<UERadioCapability>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.uERadioCapibilityNR !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.uERadioCapibilityNR, $.BER);
    }
    if (value.uERadioCapabilityEUTRA !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityEUTRA, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UERadioCapability(value, elGetter);
}


/* eslint-enable */
