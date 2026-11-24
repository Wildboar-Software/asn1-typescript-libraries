/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Quality, _decode_Quality, _encode_Quality } from "../CBEFF-DATA-ELEMENTS/Quality.ta.mjs";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";


/**
 * @summary OCCfunctionalityInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OCCfunctionalityInformation ::= SET {
 *     maximumProbeSize            [0]  INTEGER (0..16777215) OPTIONAL,
 *     maximumReferenceSize        [1]  INTEGER (0..16777215) OPTIONAL,
 *     supportedNumberReferences   [2]  INTEGER (0..255) OPTIONAL,
 *     enrolmentPossibility        [3]  INTEGER (0..255) OPTIONAL,
 *     minimumVerificationQuality  [5]  Quality OPTIONAL,
 *     minimumQualityRequirements  [7]  OCTET STRING OPTIONAL,
 *     proprietaryData             [15] OCTET STRING OPTIONAL,
 *     verificationTypes           [16] OCTET STRING OPTIONAL,
 *     comparisonAlgID             [4]  RegistryID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class OCCfunctionalityInformation {
    /**
     * @summary `maximumProbeSize`.
     * @public
     * @readonly
     */
    readonly maximumProbeSize: OPTIONAL<INTEGER>;
    /**
     * @summary `maximumReferenceSize`.
     * @public
     * @readonly
     */
    readonly maximumReferenceSize: OPTIONAL<INTEGER>;
    /**
     * @summary `supportedNumberReferences`.
     * @public
     * @readonly
     */
    readonly supportedNumberReferences: OPTIONAL<INTEGER>;
    /**
     * @summary `enrolmentPossibility`.
     * @public
     * @readonly
     */
    readonly enrolmentPossibility: OPTIONAL<INTEGER>;
    /**
     * @summary `minimumVerificationQuality`.
     * @public
     * @readonly
     */
    readonly minimumVerificationQuality: OPTIONAL<Quality>;
    /**
     * @summary `minimumQualityRequirements`.
     * @public
     * @readonly
     */
    readonly minimumQualityRequirements: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proprietaryData`.
     * @public
     * @readonly
     */
    readonly proprietaryData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `verificationTypes`.
     * @public
     * @readonly
     */
    readonly verificationTypes: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `comparisonAlgID`.
     * @public
     * @readonly
     */
    readonly comparisonAlgID: OPTIONAL<RegistryID>;

    constructor (
        maximumProbeSize?: OPTIONAL<INTEGER>,
        maximumReferenceSize?: OPTIONAL<INTEGER>,
        supportedNumberReferences?: OPTIONAL<INTEGER>,
        enrolmentPossibility?: OPTIONAL<INTEGER>,
        minimumVerificationQuality?: OPTIONAL<Quality>,
        minimumQualityRequirements?: OPTIONAL<OCTET_STRING>,
        proprietaryData?: OPTIONAL<OCTET_STRING>,
        verificationTypes?: OPTIONAL<OCTET_STRING>,
        comparisonAlgID?: OPTIONAL<RegistryID>
    ) {
        this.maximumProbeSize = maximumProbeSize;
        this.maximumReferenceSize = maximumReferenceSize;
        this.supportedNumberReferences = supportedNumberReferences;
        this.enrolmentPossibility = enrolmentPossibility;
        this.minimumVerificationQuality = minimumVerificationQuality;
        this.minimumQualityRequirements = minimumQualityRequirements;
        this.proprietaryData = proprietaryData;
        this.verificationTypes = verificationTypes;
        this.comparisonAlgID = comparisonAlgID;
    }

    /**
     * @summary Restructures an object into a OCCfunctionalityInformation
     * @description
     * 
     * This takes an `object` and converts it to a `OCCfunctionalityInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OCCfunctionalityInformation`.
     * @returns {OCCfunctionalityInformation}
     */
    public static _from_object (_o: { [_K in keyof (OCCfunctionalityInformation)]: (OCCfunctionalityInformation)[_K] }): OCCfunctionalityInformation {
        return new OCCfunctionalityInformation(_o.maximumProbeSize, _o.maximumReferenceSize, _o.supportedNumberReferences, _o.enrolmentPossibility, _o.minimumVerificationQuality, _o.minimumQualityRequirements, _o.proprietaryData, _o.verificationTypes, _o.comparisonAlgID);
    }


}

/**
 * @summary The Leading Root Component Types of OCCfunctionalityInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OCCfunctionalityInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("maximumProbeSize", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maximumReferenceSize", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supportedNumberReferences", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("enrolmentPossibility", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("minimumVerificationQuality", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("minimumQualityRequirements", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("proprietaryData", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("verificationTypes", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("comparisonAlgID", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of OCCfunctionalityInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OCCfunctionalityInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OCCfunctionalityInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OCCfunctionalityInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OCCfunctionalityInformation: $.ASN1Decoder<OCCfunctionalityInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OCCfunctionalityInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OCCfunctionalityInformation (el: _Element): OCCfunctionalityInformation {
    if (!_cached_decoder_for_OCCfunctionalityInformation) { _cached_decoder_for_OCCfunctionalityInformation = function (el: _Element): OCCfunctionalityInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let maximumProbeSize: OPTIONAL<INTEGER>;
    let maximumReferenceSize: OPTIONAL<INTEGER>;
    let supportedNumberReferences: OPTIONAL<INTEGER>;
    let enrolmentPossibility: OPTIONAL<INTEGER>;
    let minimumVerificationQuality: OPTIONAL<Quality>;
    let minimumQualityRequirements: OPTIONAL<OCTET_STRING>;
    let proprietaryData: OPTIONAL<OCTET_STRING>;
    let verificationTypes: OPTIONAL<OCTET_STRING>;
    let comparisonAlgID: OPTIONAL<RegistryID>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "maximumProbeSize": (_el: _Element): void => { maximumProbeSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maximumReferenceSize": (_el: _Element): void => { maximumReferenceSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "supportedNumberReferences": (_el: _Element): void => { supportedNumberReferences = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "enrolmentPossibility": (_el: _Element): void => { enrolmentPossibility = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "minimumVerificationQuality": (_el: _Element): void => { minimumVerificationQuality = $._decode_implicit<Quality>(() => _decode_Quality)(_el); },
        "minimumQualityRequirements": (_el: _Element): void => { minimumQualityRequirements = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proprietaryData": (_el: _Element): void => { proprietaryData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "verificationTypes": (_el: _Element): void => { verificationTypes = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "comparisonAlgID": (_el: _Element): void => { comparisonAlgID = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OCCfunctionalityInformation,
        _extension_additions_list_spec_for_OCCfunctionalityInformation,
        _root_component_type_list_2_spec_for_OCCfunctionalityInformation,
        undefined,
    );
    return new OCCfunctionalityInformation( /* SET_CONSTRUCTOR_CALL */
        maximumProbeSize,
        maximumReferenceSize,
        supportedNumberReferences,
        enrolmentPossibility,
        minimumVerificationQuality,
        minimumQualityRequirements,
        proprietaryData,
        verificationTypes,
        comparisonAlgID
    );
}; }
    return _cached_decoder_for_OCCfunctionalityInformation(el);
}

let _cached_encoder_for_OCCfunctionalityInformation: $.ASN1Encoder<OCCfunctionalityInformation> | null = null;

/**
 * @summary Encodes a(n) OCCfunctionalityInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OCCfunctionalityInformation, encoded as an ASN.1 Element.
 */
export
function _encode_OCCfunctionalityInformation (value: OCCfunctionalityInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OCCfunctionalityInformation) { _cached_encoder_for_OCCfunctionalityInformation = function (value: OCCfunctionalityInformation, elGetter: $.ASN1Encoder<OCCfunctionalityInformation>): _Element {
    const _components: _Element[] = [];
    if (value.maximumProbeSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.maximumProbeSize, $.BER));
    }
    if (value.maximumReferenceSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maximumReferenceSize, $.BER));
    }
    if (value.supportedNumberReferences !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.supportedNumberReferences, $.BER));
    }
    if (value.enrolmentPossibility !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.enrolmentPossibility, $.BER));
    }
    if (value.minimumVerificationQuality !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Quality, $.BER)(value.minimumVerificationQuality, $.BER));
    }
    if (value.minimumQualityRequirements !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.minimumQualityRequirements, $.BER));
    }
    if (value.proprietaryData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.proprietaryData, $.BER));
    }
    if (value.verificationTypes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.verificationTypes, $.BER));
    }
    if (value.comparisonAlgID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RegistryID, $.BER)(value.comparisonAlgID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_OCCfunctionalityInformation(value, elGetter);
}


/* eslint-enable */
