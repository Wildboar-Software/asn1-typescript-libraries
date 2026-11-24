/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ObjectIdentifier as _OID,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OCCBiometricInformation_biometricInformationDO, _decode_OCCBiometricInformation_biometricInformationDO, _encode_OCCBiometricInformation_biometricInformationDO } from "../OCC-DATA-ELEMENTS/OCCBiometricInformation-biometricInformationDO.ta.mjs";
import { type OCCBiometricInformation_tagAllocationAuthority, _decode_OCCBiometricInformation_tagAllocationAuthority, _encode_OCCBiometricInformation_tagAllocationAuthority } from "../OCC-DATA-ELEMENTS/OCCBiometricInformation-tagAllocationAuthority.ta.mjs";


/**
 * @summary OCCBiometricInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OCCBiometricInformation ::= SET {
 *     tagAllocationAuthority      [APPLICATION 24] CHOICE {
 *         oid             OBJECT IDENTIFIER,
 *         country         [APPLICATION 1]  OCTET STRING,
 *         issuerID        [APPLICATION 2]  OCTET STRING,
 *         application     [APPLICATION 15] OCTET STRING
 *     } DEFAULT oid: {1 0 24787 2024},
 *     biometricInformationDO   [APPLICATION 16] SET {
 *         comparisonParameters        [17] OCCcomparisonParameters OPTIONAL,
 *         functionalityInformation    [18] OCCfunctionalityInformation OPTIONAL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class OCCBiometricInformation {
    /**
     * @summary `tagAllocationAuthority`.
     * @public
     * @readonly
     */
    readonly tagAllocationAuthority: OPTIONAL<OCCBiometricInformation_tagAllocationAuthority>;
    /**
     * @summary `biometricInformationDO`.
     * @public
     * @readonly
     */
    readonly biometricInformationDO: OCCBiometricInformation_biometricInformationDO;

    constructor (
        tagAllocationAuthority: OPTIONAL<OCCBiometricInformation_tagAllocationAuthority>,
        biometricInformationDO: OCCBiometricInformation_biometricInformationDO
    ) {
        this.tagAllocationAuthority = tagAllocationAuthority;
        this.biometricInformationDO = biometricInformationDO;
    }

    /**
     * @summary Restructures an object into a OCCBiometricInformation
     * @description
     * 
     * This takes an `object` and converts it to a `OCCBiometricInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OCCBiometricInformation`.
     * @returns {OCCBiometricInformation}
     */
    public static _from_object (_o: { [_K in keyof (OCCBiometricInformation)]: (OCCBiometricInformation)[_K] }): OCCBiometricInformation {
        return new OCCBiometricInformation(_o.tagAllocationAuthority, _o.biometricInformationDO);
    }

    /**
     * @summary Getter that returns the default value for `tagAllocationAuthority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_tagAllocationAuthority () { return { oid: _OID.fromParts([1, 0, 24787, 2024,]) }; }
}

/**
 * @summary The Leading Root Component Types of OCCBiometricInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OCCBiometricInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("tagAllocationAuthority", true, $.hasTag(_TagClass.application, 24)),
    new $.ComponentSpec("biometricInformationDO", false, $.hasTag(_TagClass.application, 16))
];

/**
 * @summary The Trailing Root Component Types of OCCBiometricInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OCCBiometricInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OCCBiometricInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OCCBiometricInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OCCBiometricInformation: $.ASN1Decoder<OCCBiometricInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OCCBiometricInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OCCBiometricInformation (el: _Element): OCCBiometricInformation {
    if (!_cached_decoder_for_OCCBiometricInformation) { _cached_decoder_for_OCCBiometricInformation = function (el: _Element): OCCBiometricInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let tagAllocationAuthority: OPTIONAL<OCCBiometricInformation_tagAllocationAuthority> = OCCBiometricInformation._default_value_for_tagAllocationAuthority;
    let biometricInformationDO!: OCCBiometricInformation_biometricInformationDO;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "tagAllocationAuthority": (_el: _Element): void => { tagAllocationAuthority = $._decode_explicit<OCCBiometricInformation_tagAllocationAuthority>(() => _decode_OCCBiometricInformation_tagAllocationAuthority)(_el); },
        "biometricInformationDO": (_el: _Element): void => { biometricInformationDO = $._decode_implicit<OCCBiometricInformation_biometricInformationDO>(() => _decode_OCCBiometricInformation_biometricInformationDO)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OCCBiometricInformation,
        _extension_additions_list_spec_for_OCCBiometricInformation,
        _root_component_type_list_2_spec_for_OCCBiometricInformation,
        undefined,
    );
    return new OCCBiometricInformation( /* SET_CONSTRUCTOR_CALL */
        tagAllocationAuthority,
        biometricInformationDO
    );
}; }
    return _cached_decoder_for_OCCBiometricInformation(el);
}

let _cached_encoder_for_OCCBiometricInformation: $.ASN1Encoder<OCCBiometricInformation> | null = null;

/**
 * @summary Encodes a(n) OCCBiometricInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OCCBiometricInformation, encoded as an ASN.1 Element.
 */
export
function _encode_OCCBiometricInformation (value: OCCBiometricInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OCCBiometricInformation) { _cached_encoder_for_OCCBiometricInformation = function (value: OCCBiometricInformation, elGetter: $.ASN1Encoder<OCCBiometricInformation>): _Element {
    const _components: _Element[] = [];
    if (value.tagAllocationAuthority !== undefined && !$.deepEq(value.tagAllocationAuthority, OCCBiometricInformation._default_value_for_tagAllocationAuthority)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.application, 24, () => _encode_OCCBiometricInformation_tagAllocationAuthority, $.BER)(value.tagAllocationAuthority, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.application, 16, () => _encode_OCCBiometricInformation_biometricInformationDO, $.BER)(value.biometricInformationDO, $.BER));
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_OCCBiometricInformation(value, elGetter);
}


/* eslint-enable */
