/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../Short-Message-Service-Operations-asn1-97/FailureCause.ta.mjs";
import { ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";

/**
 * @summary smsCommandError_ParameterType
 * @description
 *
 * Parameter of `smsCommandError` (ECMA-325 Annex E.12). `failureCause` and
 * `serviceCentreTimeStamp` are mandatory.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsCommandError-ParameterType ::= SEQUENCE {
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
class smsCommandError_ParameterType {
    /**
     * @summary `failureCause`.
     * @description
     *
     * Why the command failed. §6.5.3.2.2 uses `commandCannotBeActioned` when no
     * Short Message is found. Table E.4 spells that cause
     * `commandCanNotBeActioned` (160) (ECMA-325 §E.12.1).
     * @public
     * @readonly
     */
    readonly failureCause: FailureCause;
    /**
     * @summary `serviceCentreTimeStamp`.
     * @description
     *
     * Arrival time at the Service Centre, as on a successful submit (ECMA-325
     * §E.12.2, §E.2.1).
     * @public
     * @readonly
     */
    readonly serviceCentreTimeStamp: ServiceCentreTimeStamp;
    /**
     * @summary `protocolIdentifier`.
     * @description
     *
     * As on the `smsCommand` invoke (ECMA-325 §E.12.3, §E.1.2.1).
     * @public
     * @readonly
     */
    readonly protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    /**
     * @summary `userData`.
     * @description
     *
     * For Service Centre use. The Service Centre may add headers after a
     * `dataHeaderSourceIndicator` (ECMA-325 §E.12.4). Unlike the submit error,
     * §E.12 does not say this echoes the invoke.
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
     * @summary Restructures an object into a smsCommandError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `smsCommandError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `smsCommandError_ParameterType`.
     * @returns {smsCommandError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (smsCommandError_ParameterType)]: (smsCommandError_ParameterType)[_K] }): smsCommandError_ParameterType {
        return new smsCommandError_ParameterType(_o.failureCause, _o.serviceCentreTimeStamp, _o.protocolIdentifier, _o.userData);
    }

}

/**
 * @summary The Leading Root Component Types of smsCommandError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_smsCommandError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("serviceCentreTimeStamp", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("protocolIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of smsCommandError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_smsCommandError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of smsCommandError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_smsCommandError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_smsCommandError_ParameterType: $.ASN1Decoder<smsCommandError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) smsCommandError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_smsCommandError_ParameterType (el: _Element): smsCommandError_ParameterType {
    if (!_cached_decoder_for_smsCommandError_ParameterType) { _cached_decoder_for_smsCommandError_ParameterType = function (el: _Element): smsCommandError_ParameterType {
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
        _root_component_type_list_1_spec_for_smsCommandError_ParameterType,
        _extension_additions_list_spec_for_smsCommandError_ParameterType,
        _root_component_type_list_2_spec_for_smsCommandError_ParameterType,
        undefined,
    );
    return new smsCommandError_ParameterType(
        failureCause,
        serviceCentreTimeStamp,
        protocolIdentifier,
        userData
    );
}; }
    return _cached_decoder_for_smsCommandError_ParameterType(el);
}

let _cached_encoder_for_smsCommandError_ParameterType: $.ASN1Encoder<smsCommandError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) smsCommandError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The smsCommandError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_smsCommandError_ParameterType (value: smsCommandError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_smsCommandError_ParameterType) { _cached_encoder_for_smsCommandError_ParameterType = function (value: smsCommandError_ParameterType, _elGetter: $.ASN1Encoder<smsCommandError_ParameterType>): _Element {
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
    return _cached_encoder_for_smsCommandError_ParameterType(value, elGetter);
}

/* eslint-enable */
