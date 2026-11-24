/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";
import { BiometricHeaderTemplateExplicit, _decode_BiometricHeaderTemplateExplicit, _encode_BiometricHeaderTemplateExplicit } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/BiometricHeaderTemplateExplicit.ta.mjs";
import { BiometricInformationTemplateExplicit_bdbData, _decode_BiometricInformationTemplateExplicit_bdbData, _encode_BiometricInformationTemplateExplicit_bdbData } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/BiometricInformationTemplateExplicit-bdbData.ta.mjs";
import { OCCBiometricInformation, _decode_OCCBiometricInformation, _encode_OCCBiometricInformation } from "../OCC-DATA-ELEMENTS/OCCBiometricInformation.ta.mjs";


/**
 * @summary BiometricInformationTemplateExplicit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricInformationTemplateExplicit ::= [APPLICATION 96] SET {
 *     algorithmReference              [0] OCTET STRING (SIZE(1)) OPTIONAL,
 *     -- A non-CBEFF data element, for on-card comparison – see ISO/IEC 24787
 *     referenceDataQualifier          [3] OCTET STRING (SIZE(1)) OPTIONAL,
 *     -- A non-CBEFF data element, for on-card comparison – see ISO/IEC 24787
 *     biometricHeaderTemplateExplicit [1] BiometricHeaderTemplateExplicit,
 *     occBiometricInformation         [2] OCCBiometricInformation OPTIONAL,
 *     bdbData                         [APPLICATION 46] SET {
 *         -- A CBEFF BDB, mandatory for off-card-comparison
 *         challengeCardholder     [0] CardholderChallengeType OPTIONAL,
 *         -- defined in BDB-DATA-ELEMENTS
 *         standardBDB             [1] StandardBDBType OPTIONAL,
 *         -- defined in BDB-DATA-ELEMENTS
 *         proprietaryBDB          [2] ProprietaryBDBType OPTIONAL,
 *         -- defined in BDB-DATA-ELEMENTS
 *         referenceQualifier      [3] OCTET STRING (SIZE(1)) OPTIONAL,
 *         biometricData           [APPLICATION 46] OCTET STRING OPTIONAL -- primitive DO only
 *     } OPTIONAL,
 *     -- A CBEFF BDB, mandatory for off-card-comparison
 *     birPayLoad [APPLICATION 19] OCTET STRING OPTIONAL
 *     -- CBEFF_BIR_payload, contents defined by ISO/IEC 24787
 * }
 * ```
 * 
 * @class
 */
export
class BiometricInformationTemplateExplicit {
    /**
     * @summary `algorithmReference`.
     * @public
     * @readonly
     */
    readonly algorithmReference: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `referenceDataQualifier`.
     * @public
     * @readonly
     */
    readonly referenceDataQualifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `biometricHeaderTemplateExplicit`.
     * @public
     * @readonly
     */
    readonly biometricHeaderTemplateExplicit: BiometricHeaderTemplateExplicit;
    /**
     * @summary `occBiometricInformation`.
     * @public
     * @readonly
     */
    readonly occBiometricInformation: OPTIONAL<OCCBiometricInformation>;
    /**
     * @summary `bdbData`.
     * @public
     * @readonly
     */
    readonly bdbData: OPTIONAL<BiometricInformationTemplateExplicit_bdbData>;
    /**
     * @summary `birPayLoad`.
     * @public
     * @readonly
     */
    readonly birPayLoad: OPTIONAL<OCTET_STRING>;

    constructor (
        algorithmReference: OPTIONAL<OCTET_STRING>,
        referenceDataQualifier: OPTIONAL<OCTET_STRING>,
        biometricHeaderTemplateExplicit: BiometricHeaderTemplateExplicit,
        occBiometricInformation?: OPTIONAL<OCCBiometricInformation>,
        bdbData?: OPTIONAL<BiometricInformationTemplateExplicit_bdbData>,
        birPayLoad?: OPTIONAL<OCTET_STRING>
    ) {
        if (algorithmReference !== undefined) assertOctetSize(algorithmReference, 1, 1, "BiometricInformationTemplateExplicit.algorithmReference");
        if (referenceDataQualifier !== undefined) assertOctetSize(referenceDataQualifier, 1, 1, "BiometricInformationTemplateExplicit.referenceDataQualifier");
        this.algorithmReference = algorithmReference;
        this.referenceDataQualifier = referenceDataQualifier;
        this.biometricHeaderTemplateExplicit = biometricHeaderTemplateExplicit;
        this.occBiometricInformation = occBiometricInformation;
        this.bdbData = bdbData;
        this.birPayLoad = birPayLoad;
    }

    /**
     * @summary Restructures an object into a BiometricInformationTemplateExplicit
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricInformationTemplateExplicit`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricInformationTemplateExplicit`.
     * @returns {BiometricInformationTemplateExplicit}
     */
    public static _from_object (_o: { [_K in keyof (BiometricInformationTemplateExplicit)]: (BiometricInformationTemplateExplicit)[_K] }): BiometricInformationTemplateExplicit {
        return new BiometricInformationTemplateExplicit(_o.algorithmReference, _o.referenceDataQualifier, _o.biometricHeaderTemplateExplicit, _o.occBiometricInformation, _o.bdbData, _o.birPayLoad);
    }


}

/**
 * @summary The Leading Root Component Types of BiometricInformationTemplateExplicit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricInformationTemplateExplicit: $.ComponentSpec[] = [
    new $.ComponentSpec("algorithmReference", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("referenceDataQualifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("biometricHeaderTemplateExplicit", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("occBiometricInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bdbData", true, $.hasTag(_TagClass.application, 46)),
    new $.ComponentSpec("birPayLoad", true, $.hasTag(_TagClass.application, 19))
];

/**
 * @summary The Trailing Root Component Types of BiometricInformationTemplateExplicit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricInformationTemplateExplicit: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricInformationTemplateExplicit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricInformationTemplateExplicit: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricInformationTemplateExplicit: $.ASN1Decoder<BiometricInformationTemplateExplicit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricInformationTemplateExplicit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricInformationTemplateExplicit (el: _Element): BiometricInformationTemplateExplicit {
    if (!_cached_decoder_for_BiometricInformationTemplateExplicit) { _cached_decoder_for_BiometricInformationTemplateExplicit = $._decode_implicit<BiometricInformationTemplateExplicit>(() => function (el: _Element): BiometricInformationTemplateExplicit {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let algorithmReference: OPTIONAL<OCTET_STRING>;
    let referenceDataQualifier: OPTIONAL<OCTET_STRING>;
    let biometricHeaderTemplateExplicit!: BiometricHeaderTemplateExplicit;
    let occBiometricInformation: OPTIONAL<OCCBiometricInformation>;
    let bdbData: OPTIONAL<BiometricInformationTemplateExplicit_bdbData>;
    let birPayLoad: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "algorithmReference": (_el: _Element): void => { algorithmReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "referenceDataQualifier": (_el: _Element): void => { referenceDataQualifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "biometricHeaderTemplateExplicit": (_el: _Element): void => { biometricHeaderTemplateExplicit = $._decode_implicit<BiometricHeaderTemplateExplicit>(() => _decode_BiometricHeaderTemplateExplicit)(_el); },
        "occBiometricInformation": (_el: _Element): void => { occBiometricInformation = $._decode_implicit<OCCBiometricInformation>(() => _decode_OCCBiometricInformation)(_el); },
        "bdbData": (_el: _Element): void => { bdbData = $._decode_implicit<BiometricInformationTemplateExplicit_bdbData>(() => _decode_BiometricInformationTemplateExplicit_bdbData)(_el); },
        "birPayLoad": (_el: _Element): void => { birPayLoad = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricInformationTemplateExplicit,
        _extension_additions_list_spec_for_BiometricInformationTemplateExplicit,
        _root_component_type_list_2_spec_for_BiometricInformationTemplateExplicit,
        undefined,
    );
    return new BiometricInformationTemplateExplicit( /* SET_CONSTRUCTOR_CALL */
        algorithmReference,
        referenceDataQualifier,
        biometricHeaderTemplateExplicit,
        occBiometricInformation,
        bdbData,
        birPayLoad
    );
}); }
    return _cached_decoder_for_BiometricInformationTemplateExplicit(el);
}

let _cached_encoder_for_BiometricInformationTemplateExplicit: $.ASN1Encoder<BiometricInformationTemplateExplicit> | null = null;

/**
 * @summary Encodes a(n) BiometricInformationTemplateExplicit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricInformationTemplateExplicit, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricInformationTemplateExplicit (value: BiometricInformationTemplateExplicit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricInformationTemplateExplicit) { _cached_encoder_for_BiometricInformationTemplateExplicit = $._encode_implicit(_TagClass.application, 96, () => function (value: BiometricInformationTemplateExplicit, elGetter: $.ASN1Encoder<BiometricInformationTemplateExplicit>): _Element {
    const _components: _Element[] = [];
    if (value.algorithmReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.algorithmReference, $.BER));
    }
    if (value.referenceDataQualifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.referenceDataQualifier, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_BiometricHeaderTemplateExplicit, $.BER)(value.biometricHeaderTemplateExplicit, $.BER));
    if (value.occBiometricInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_OCCBiometricInformation, $.BER)(value.occBiometricInformation, $.BER));
    }
    if (value.bdbData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.application, 46, () => _encode_BiometricInformationTemplateExplicit_bdbData, $.BER)(value.bdbData, $.BER));
    }
    if (value.birPayLoad !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.application, 19, () => $._encodeOctetString, $.BER)(value.birPayLoad, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}, $.BER); }
    return _cached_encoder_for_BiometricInformationTemplateExplicit(value, elGetter);
}


/* eslint-enable */
