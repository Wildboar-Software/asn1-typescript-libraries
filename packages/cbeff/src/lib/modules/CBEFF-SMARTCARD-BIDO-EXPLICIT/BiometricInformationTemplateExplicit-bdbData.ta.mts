/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";
import { type CardholderChallengeType, _decode_CardholderChallengeType, _encode_CardholderChallengeType } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/CardholderChallengeType.ta.mjs";
import { type ProprietaryBDBType, _decode_ProprietaryBDBType, _encode_ProprietaryBDBType } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/ProprietaryBDBType.ta.mjs";
import { type StandardBDBType, _decode_StandardBDBType, _encode_StandardBDBType } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/StandardBDBType.ta.mjs";


/**
 * @summary BiometricInformationTemplateExplicit_bdbData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricInformationTemplateExplicit-bdbData ::= SET {
 *     -- A CBEFF BDB, mandatory for off-card-comparison
 *     challengeCardholder     [0] CardholderChallengeType OPTIONAL,
 *     -- defined in BDB-DATA-ELEMENTS
 *     standardBDB             [1] StandardBDBType OPTIONAL,
 *     -- defined in BDB-DATA-ELEMENTS
 *     proprietaryBDB          [2] ProprietaryBDBType OPTIONAL,
 *     -- defined in BDB-DATA-ELEMENTS
 *     referenceQualifier      [3] OCTET STRING (SIZE(1)) OPTIONAL,
 *     biometricData           [APPLICATION 46] OCTET STRING OPTIONAL -- primitive DO only
 * }
 * ```
 * 
 * @class
 */
export
class BiometricInformationTemplateExplicit_bdbData {
    /**
     * @summary `challengeCardholder`.
     * @public
     * @readonly
     */
    readonly challengeCardholder: OPTIONAL<CardholderChallengeType>;
    /**
     * @summary `standardBDB`.
     * @public
     * @readonly
     */
    readonly standardBDB: OPTIONAL<StandardBDBType>;
    /**
     * @summary `proprietaryBDB`.
     * @public
     * @readonly
     */
    readonly proprietaryBDB: OPTIONAL<ProprietaryBDBType>;
    /**
     * @summary `referenceQualifier`.
     * @public
     * @readonly
     */
    readonly referenceQualifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `biometricData`.
     * @public
     * @readonly
     */
    readonly biometricData: OPTIONAL<OCTET_STRING>;

    constructor (
        challengeCardholder?: OPTIONAL<CardholderChallengeType>,
        standardBDB?: OPTIONAL<StandardBDBType>,
        proprietaryBDB?: OPTIONAL<ProprietaryBDBType>,
        referenceQualifier?: OPTIONAL<OCTET_STRING>,
        biometricData?: OPTIONAL<OCTET_STRING>
    ) {
        if (referenceQualifier !== undefined) assertOctetSize(referenceQualifier, 1, 1, "BiometricInformationTemplateExplicit.bdbData.referenceQualifier");
        this.challengeCardholder = challengeCardholder;
        this.standardBDB = standardBDB;
        this.proprietaryBDB = proprietaryBDB;
        this.referenceQualifier = referenceQualifier;
        this.biometricData = biometricData;
    }

    /**
     * @summary Restructures an object into a BiometricInformationTemplateExplicit_bdbData
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricInformationTemplateExplicit_bdbData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricInformationTemplateExplicit_bdbData`.
     * @returns {BiometricInformationTemplateExplicit_bdbData}
     */
    public static _from_object (_o: { [_K in keyof (BiometricInformationTemplateExplicit_bdbData)]: (BiometricInformationTemplateExplicit_bdbData)[_K] }): BiometricInformationTemplateExplicit_bdbData {
        return new BiometricInformationTemplateExplicit_bdbData(_o.challengeCardholder, _o.standardBDB, _o.proprietaryBDB, _o.referenceQualifier, _o.biometricData);
    }


}

/**
 * @summary The Leading Root Component Types of BiometricInformationTemplateExplicit_bdbData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricInformationTemplateExplicit_bdbData: $.ComponentSpec[] = [
    new $.ComponentSpec("challengeCardholder", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("standardBDB", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("proprietaryBDB", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("referenceQualifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("biometricData", true, $.hasTag(_TagClass.application, 46))
];

/**
 * @summary The Trailing Root Component Types of BiometricInformationTemplateExplicit_bdbData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricInformationTemplateExplicit_bdbData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricInformationTemplateExplicit_bdbData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricInformationTemplateExplicit_bdbData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricInformationTemplateExplicit_bdbData: $.ASN1Decoder<BiometricInformationTemplateExplicit_bdbData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricInformationTemplateExplicit_bdbData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricInformationTemplateExplicit_bdbData (el: _Element): BiometricInformationTemplateExplicit_bdbData {
    if (!_cached_decoder_for_BiometricInformationTemplateExplicit_bdbData) { _cached_decoder_for_BiometricInformationTemplateExplicit_bdbData = function (el: _Element): BiometricInformationTemplateExplicit_bdbData {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let challengeCardholder: OPTIONAL<CardholderChallengeType>;
    let standardBDB: OPTIONAL<StandardBDBType>;
    let proprietaryBDB: OPTIONAL<ProprietaryBDBType>;
    let referenceQualifier: OPTIONAL<OCTET_STRING>;
    let biometricData: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "challengeCardholder": (_el: _Element): void => { challengeCardholder = $._decode_implicit<CardholderChallengeType>(() => _decode_CardholderChallengeType)(_el); },
        "standardBDB": (_el: _Element): void => { standardBDB = $._decode_implicit<StandardBDBType>(() => _decode_StandardBDBType)(_el); },
        "proprietaryBDB": (_el: _Element): void => { proprietaryBDB = $._decode_implicit<ProprietaryBDBType>(() => _decode_ProprietaryBDBType)(_el); },
        "referenceQualifier": (_el: _Element): void => { referenceQualifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "biometricData": (_el: _Element): void => { biometricData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricInformationTemplateExplicit_bdbData,
        _extension_additions_list_spec_for_BiometricInformationTemplateExplicit_bdbData,
        _root_component_type_list_2_spec_for_BiometricInformationTemplateExplicit_bdbData,
        undefined,
    );
    return new BiometricInformationTemplateExplicit_bdbData( /* SET_CONSTRUCTOR_CALL */
        challengeCardholder,
        standardBDB,
        proprietaryBDB,
        referenceQualifier,
        biometricData
    );
}; }
    return _cached_decoder_for_BiometricInformationTemplateExplicit_bdbData(el);
}

let _cached_encoder_for_BiometricInformationTemplateExplicit_bdbData: $.ASN1Encoder<BiometricInformationTemplateExplicit_bdbData> | null = null;

/**
 * @summary Encodes a(n) BiometricInformationTemplateExplicit_bdbData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricInformationTemplateExplicit_bdbData, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricInformationTemplateExplicit_bdbData (value: BiometricInformationTemplateExplicit_bdbData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricInformationTemplateExplicit_bdbData) { _cached_encoder_for_BiometricInformationTemplateExplicit_bdbData = function (value: BiometricInformationTemplateExplicit_bdbData, elGetter: $.ASN1Encoder<BiometricInformationTemplateExplicit_bdbData>): _Element {
    const _components: _Element[] = [];
    if (value.challengeCardholder !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CardholderChallengeType, $.BER)(value.challengeCardholder, $.BER));
    }
    if (value.standardBDB !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_StandardBDBType, $.BER)(value.standardBDB, $.BER));
    }
    if (value.proprietaryBDB !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ProprietaryBDBType, $.BER)(value.proprietaryBDB, $.BER));
    }
    if (value.referenceQualifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.referenceQualifier, $.BER));
    }
    if (value.biometricData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.application, 46, () => $._encodeOctetString, $.BER)(value.biometricData, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_BiometricInformationTemplateExplicit_bdbData(value, elGetter);
}


/* eslint-enable */
