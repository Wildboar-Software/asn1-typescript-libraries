/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../Short-Message-Service-Operations-asn1-97/FailureCause.ta.mjs";
// export { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../Short-Message-Service-Operations-asn1-97/FailureCause.ta.mjs";
import { ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";
// export { ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
// export { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
// export { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";


/**
 * @summary smsSubmitError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsSubmitError-ParameterType ::= SEQUENCE {
 *     failureCause FailureCause,
 *     serviceCentreTimeStamp ServiceCentreTimeStamp,
 *     protocolIdentifier [0] IMPLICIT ProtocolIdentifier OPTIONAL,
 *     userData [1] IMPLICIT UserData OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class smsSubmitError_ParameterType {
    /**
     * @summary `failureCause`.
     * @public
     * @readonly
     */
    readonly failureCause: FailureCause;
    /**
     * @summary `serviceCentreTimeStamp`.
     * @public
     * @readonly
     */
    readonly serviceCentreTimeStamp: ServiceCentreTimeStamp;
    /**
     * @summary `protocolIdentifier`.
     * @public
     * @readonly
     */
    readonly protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    /**
     * @summary `userData`.
     * @public
     * @readonly
     */
    readonly userData: OPTIONAL<UserData>;

    constructor (
        failureCause: FailureCause,
        serviceCentreTimeStamp: ServiceCentreTimeStamp,
        protocolIdentifier: OPTIONAL<ProtocolIdentifier>,
        userData: OPTIONAL<UserData>
    ) {
        this.failureCause = failureCause;
        this.serviceCentreTimeStamp = serviceCentreTimeStamp;
        this.protocolIdentifier = protocolIdentifier;
        this.userData = userData;
    }

    /**
     * @summary Restructures an object into a smsSubmitError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `smsSubmitError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `smsSubmitError_ParameterType`.
     * @returns {smsSubmitError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (smsSubmitError_ParameterType)]: (smsSubmitError_ParameterType)[_K] }): smsSubmitError_ParameterType {
        return new smsSubmitError_ParameterType(_o.failureCause, _o.serviceCentreTimeStamp, _o.protocolIdentifier, _o.userData);
    }


}

/**
 * @summary The Leading Root Component Types of smsSubmitError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_smsSubmitError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("serviceCentreTimeStamp", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("protocolIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of smsSubmitError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_smsSubmitError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of smsSubmitError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_smsSubmitError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_smsSubmitError_ParameterType: $.ASN1Decoder<smsSubmitError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) smsSubmitError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_smsSubmitError_ParameterType (el: _Element): smsSubmitError_ParameterType {
    if (!_cached_decoder_for_smsSubmitError_ParameterType) { _cached_decoder_for_smsSubmitError_ParameterType = function (el: _Element): smsSubmitError_ParameterType {
    let failureCause!: FailureCause;
    let serviceCentreTimeStamp!: ServiceCentreTimeStamp;
    let protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    let userData: OPTIONAL<UserData>;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); },
        "serviceCentreTimeStamp": (_el: _Element): void => { serviceCentreTimeStamp = _decode_ServiceCentreTimeStamp(_el); },
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = $._decode_implicit<ProtocolIdentifier>(() => _decode_ProtocolIdentifier)(_el); },
        "userData": (_el: _Element): void => { userData = $._decode_implicit<UserData>(() => _decode_UserData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_smsSubmitError_ParameterType,
        _extension_additions_list_spec_for_smsSubmitError_ParameterType,
        _root_component_type_list_2_spec_for_smsSubmitError_ParameterType,
        undefined,
    );
    return new smsSubmitError_ParameterType(
        failureCause,
        serviceCentreTimeStamp,
        protocolIdentifier,
        userData
    );
}; }
    return _cached_decoder_for_smsSubmitError_ParameterType(el);
}

let _cached_encoder_for_smsSubmitError_ParameterType: $.ASN1Encoder<smsSubmitError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) smsSubmitError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The smsSubmitError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_smsSubmitError_ParameterType (value: smsSubmitError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_smsSubmitError_ParameterType) { _cached_encoder_for_smsSubmitError_ParameterType = function (value: smsSubmitError_ParameterType, elGetter: $.ASN1Encoder<smsSubmitError_ParameterType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_FailureCause(value.failureCause, $.BER));
    _components.push(/* REQUIRED   */ _encode_ServiceCentreTimeStamp(value.serviceCentreTimeStamp, $.BER));
    if (value.protocolIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProtocolIdentifier, $.BER)(value.protocolIdentifier, $.BER));
    }
    if (value.userData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserData, $.BER)(value.userData, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_smsSubmitError_ParameterType(value, elGetter);
}


/* eslint-enable */
