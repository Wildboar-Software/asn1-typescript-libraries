/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary OCCcomparisonParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OCCcomparisonParameters ::= SET {
 *     minimumMaximumProbeSize     [1]  INTEGER OPTIONAL,
 *     orderingFeatures            [2]  OCTET STRING OPTIONAL,
 *     featureHandlingIndicator    [3]  OCTET STRING OPTIONAL,
 *     alignmentInformation        [4]  OCTET STRING OPTIONAL,
 *     minimumVerificationQuality  [7]  OCTET STRING OPTIONAL,
 *     verificationTypes           [16] INTEGER (0..255) OPTIONAL,
 *     estimationTime              [17] INTEGER (0..65535) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class OCCcomparisonParameters {
    /**
     * @summary `minimumMaximumProbeSize`.
     * @public
     * @readonly
     */
    readonly minimumMaximumProbeSize: OPTIONAL<INTEGER>;
    /**
     * @summary `orderingFeatures`.
     * @public
     * @readonly
     */
    readonly orderingFeatures: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `featureHandlingIndicator`.
     * @public
     * @readonly
     */
    readonly featureHandlingIndicator: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `alignmentInformation`.
     * @public
     * @readonly
     */
    readonly alignmentInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `minimumVerificationQuality`.
     * @public
     * @readonly
     */
    readonly minimumVerificationQuality: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `verificationTypes`.
     * @public
     * @readonly
     */
    readonly verificationTypes: OPTIONAL<INTEGER>;
    /**
     * @summary `estimationTime`.
     * @public
     * @readonly
     */
    readonly estimationTime: OPTIONAL<INTEGER>;

    constructor (
        minimumMaximumProbeSize?: OPTIONAL<INTEGER>,
        orderingFeatures?: OPTIONAL<OCTET_STRING>,
        featureHandlingIndicator?: OPTIONAL<OCTET_STRING>,
        alignmentInformation?: OPTIONAL<OCTET_STRING>,
        minimumVerificationQuality?: OPTIONAL<OCTET_STRING>,
        verificationTypes?: OPTIONAL<INTEGER>,
        estimationTime?: OPTIONAL<INTEGER>
    ) {
        if (verificationTypes !== undefined) assertIntegerRange(verificationTypes, 0, 255, "OCCcomparisonParameters.verificationTypes");
        if (estimationTime !== undefined) assertIntegerRange(estimationTime, 0, 65535, "OCCcomparisonParameters.estimationTime");
        this.minimumMaximumProbeSize = minimumMaximumProbeSize;
        this.orderingFeatures = orderingFeatures;
        this.featureHandlingIndicator = featureHandlingIndicator;
        this.alignmentInformation = alignmentInformation;
        this.minimumVerificationQuality = minimumVerificationQuality;
        this.verificationTypes = verificationTypes;
        this.estimationTime = estimationTime;
    }

    /**
     * @summary Restructures an object into a OCCcomparisonParameters
     * @description
     * 
     * This takes an `object` and converts it to a `OCCcomparisonParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OCCcomparisonParameters`.
     * @returns {OCCcomparisonParameters}
     */
    public static _from_object (_o: { [_K in keyof (OCCcomparisonParameters)]: (OCCcomparisonParameters)[_K] }): OCCcomparisonParameters {
        return new OCCcomparisonParameters(_o.minimumMaximumProbeSize, _o.orderingFeatures, _o.featureHandlingIndicator, _o.alignmentInformation, _o.minimumVerificationQuality, _o.verificationTypes, _o.estimationTime);
    }

}

/**
 * @summary The Leading Root Component Types of OCCcomparisonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OCCcomparisonParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("minimumMaximumProbeSize", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("orderingFeatures", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("featureHandlingIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("alignmentInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("minimumVerificationQuality", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("verificationTypes", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("estimationTime", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of OCCcomparisonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OCCcomparisonParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OCCcomparisonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OCCcomparisonParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OCCcomparisonParameters: $.ASN1Decoder<OCCcomparisonParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OCCcomparisonParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OCCcomparisonParameters (el: _Element): OCCcomparisonParameters {
    if (!_cached_decoder_for_OCCcomparisonParameters) { _cached_decoder_for_OCCcomparisonParameters = function (el: _Element): OCCcomparisonParameters {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let minimumMaximumProbeSize: OPTIONAL<INTEGER>;
    let orderingFeatures: OPTIONAL<OCTET_STRING>;
    let featureHandlingIndicator: OPTIONAL<OCTET_STRING>;
    let alignmentInformation: OPTIONAL<OCTET_STRING>;
    let minimumVerificationQuality: OPTIONAL<OCTET_STRING>;
    let verificationTypes: OPTIONAL<INTEGER>;
    let estimationTime: OPTIONAL<INTEGER>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "minimumMaximumProbeSize": (_el: _Element): void => { minimumMaximumProbeSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "orderingFeatures": (_el: _Element): void => { orderingFeatures = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "featureHandlingIndicator": (_el: _Element): void => { featureHandlingIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "alignmentInformation": (_el: _Element): void => { alignmentInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "minimumVerificationQuality": (_el: _Element): void => { minimumVerificationQuality = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "verificationTypes": (_el: _Element): void => { verificationTypes = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "estimationTime": (_el: _Element): void => { estimationTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OCCcomparisonParameters,
        _extension_additions_list_spec_for_OCCcomparisonParameters,
        _root_component_type_list_2_spec_for_OCCcomparisonParameters,
        undefined,
    );
    return new OCCcomparisonParameters( /* SET_CONSTRUCTOR_CALL */
        minimumMaximumProbeSize,
        orderingFeatures,
        featureHandlingIndicator,
        alignmentInformation,
        minimumVerificationQuality,
        verificationTypes,
        estimationTime
    );
}; }
    return _cached_decoder_for_OCCcomparisonParameters(el);
}

let _cached_encoder_for_OCCcomparisonParameters: $.ASN1Encoder<OCCcomparisonParameters> | null = null;

/**
 * @summary Encodes a(n) OCCcomparisonParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OCCcomparisonParameters, encoded as an ASN.1 Element.
 */
export
function _encode_OCCcomparisonParameters (value: OCCcomparisonParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OCCcomparisonParameters) { _cached_encoder_for_OCCcomparisonParameters = function (value: OCCcomparisonParameters, elGetter: $.ASN1Encoder<OCCcomparisonParameters>): _Element {
    const _components: _Element[] = [];
    if (value.minimumMaximumProbeSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.minimumMaximumProbeSize, $.BER));
    }
    if (value.orderingFeatures !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.orderingFeatures, $.BER));
    }
    if (value.featureHandlingIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.featureHandlingIndicator, $.BER));
    }
    if (value.alignmentInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.alignmentInformation, $.BER));
    }
    if (value.minimumVerificationQuality !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.minimumVerificationQuality, $.BER));
    }
    if (value.verificationTypes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.verificationTypes, $.BER));
    }
    if (value.estimationTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.estimationTime, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_OCCcomparisonParameters(value, elGetter);
}

/* eslint-enable */
