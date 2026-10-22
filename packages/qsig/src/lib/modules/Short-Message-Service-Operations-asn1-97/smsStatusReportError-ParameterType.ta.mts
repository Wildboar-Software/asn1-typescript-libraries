/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../Short-Message-Service-Operations-asn1-97/FailureCause.ta.mjs";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";

/**
 * @summary smsStatusReportError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsStatusReportError-ParameterType ::= SEQUENCE {
 *     failureCause FailureCause,
 *     protocolIdentifier [0] IMPLICIT ProtocolIdentifier OPTIONAL,
 *     userData [1] IMPLICIT UserData OPTIONAL,
 *     scAddressSaved [2] IMPLICIT BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class smsStatusReportError_ParameterType {
    /**
     * @summary `failureCause`.
     * @public
     * @readonly
     */
    readonly failureCause: FailureCause;
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
    /**
     * @summary `scAddressSaved`.
     * @public
     * @readonly
     */
    readonly scAddressSaved: OPTIONAL<BOOLEAN>;

    constructor (
        failureCause: FailureCause,
        protocolIdentifier: OPTIONAL<ProtocolIdentifier>,
        userData: OPTIONAL<UserData>,
        scAddressSaved: OPTIONAL<BOOLEAN>
    ) {
        this.failureCause = failureCause;
        this.protocolIdentifier = protocolIdentifier;
        this.userData = userData;
        this.scAddressSaved = scAddressSaved;
    }

    /**
     * @summary Restructures an object into a smsStatusReportError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `smsStatusReportError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `smsStatusReportError_ParameterType`.
     * @returns {smsStatusReportError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (smsStatusReportError_ParameterType)]: (smsStatusReportError_ParameterType)[_K] }): smsStatusReportError_ParameterType {
        return new smsStatusReportError_ParameterType(_o.failureCause, _o.protocolIdentifier, _o.userData, _o.scAddressSaved);
    }

    /**
     * @summary Getter that returns the default value for `scAddressSaved`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_scAddressSaved () { return false; }
}

/**
 * @summary The Leading Root Component Types of smsStatusReportError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_smsStatusReportError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("protocolIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("scAddressSaved", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of smsStatusReportError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_smsStatusReportError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of smsStatusReportError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_smsStatusReportError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_smsStatusReportError_ParameterType: $.ASN1Decoder<smsStatusReportError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) smsStatusReportError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_smsStatusReportError_ParameterType (el: _Element): smsStatusReportError_ParameterType {
    if (!_cached_decoder_for_smsStatusReportError_ParameterType) { _cached_decoder_for_smsStatusReportError_ParameterType = function (el: _Element): smsStatusReportError_ParameterType {
    let failureCause!: FailureCause;
    let protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    let userData: OPTIONAL<UserData>;
    let scAddressSaved: OPTIONAL<BOOLEAN> = smsStatusReportError_ParameterType._default_value_for_scAddressSaved;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); },
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = $._decode_implicit<ProtocolIdentifier>(() => _decode_ProtocolIdentifier)(_el); },
        "userData": (_el: _Element): void => { userData = $._decode_implicit<UserData>(() => _decode_UserData)(_el); },
        "scAddressSaved": (_el: _Element): void => { scAddressSaved = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_smsStatusReportError_ParameterType,
        _extension_additions_list_spec_for_smsStatusReportError_ParameterType,
        _root_component_type_list_2_spec_for_smsStatusReportError_ParameterType,
        undefined,
    );
    return new smsStatusReportError_ParameterType(
        failureCause,
        protocolIdentifier,
        userData,
        scAddressSaved
    );
}; }
    return _cached_decoder_for_smsStatusReportError_ParameterType(el);
}

let _cached_encoder_for_smsStatusReportError_ParameterType: $.ASN1Encoder<smsStatusReportError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) smsStatusReportError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The smsStatusReportError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_smsStatusReportError_ParameterType (value: smsStatusReportError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_smsStatusReportError_ParameterType) { _cached_encoder_for_smsStatusReportError_ParameterType = function (value: smsStatusReportError_ParameterType, _elGetter: $.ASN1Encoder<smsStatusReportError_ParameterType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_FailureCause(value.failureCause, $.BER));
    if (value.protocolIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProtocolIdentifier, $.BER)(value.protocolIdentifier, $.BER));
    }
    if (value.userData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserData, $.BER)(value.userData, $.BER));
    }
    if (value.scAddressSaved !== undefined && !$.deepEq(value.scAddressSaved, smsStatusReportError_ParameterType._default_value_for_scAddressSaved)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.scAddressSaved, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_smsStatusReportError_ParameterType(value, elGetter);
}

/* eslint-enable */
