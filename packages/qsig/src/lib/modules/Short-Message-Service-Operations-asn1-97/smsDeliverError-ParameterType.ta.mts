/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../Short-Message-Service-Operations-asn1-97/FailureCause.ta.mjs";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";

/**
 * @summary smsDeliverError_ParameterType
 * @description
 *
 * Parameter of `smsDeliverError` (ECMA-325 Annex E.6). `failureCause` is
 * mandatory. `scAddressSaved` defaults to FALSE.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsDeliverError-ParameterType ::= SEQUENCE {
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
class smsDeliverError_ParameterType {
    /**
     * @summary `failureCause`.
     * @description
     *
     * Why delivery failed. Table E.4 lists the defined values; every other
     * integer is reserved (ECMA-325 §E.3.1, §E.6.1). §6.5.4.2 and §6.5.5.2 use
     * `memoryCapacityExceeded` or `simSmsStorageFull` when the Short Message
     * cannot be stored.
     * @public
     * @readonly
     */
    readonly failureCause: FailureCause;
    /**
     * @summary `protocolIdentifier`.
     * @description
     *
     * Optional copy of `protocolIdentifier` from the `smsDeliver` invoke
     * (ECMA-325 §6.5.4.2, §E.6.2).
     * @public
     * @readonly
     */
    readonly protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    /**
     * @summary `userData`.
     * @description
     *
     * Optional copy of `userData` from the `smsDeliver` invoke. The receiver
     * may add headers after a `dataHeaderSourceIndicator` (ECMA-325 §E.6.3).
     * @public
     * @readonly
     */
    readonly userData: OPTIONAL<UserData>;
    /**
     * @summary `scAddressSaved`.
     * @description
     *
     * Default FALSE. TRUE means the Receiving User PINX or Message Centre
     * stored the Service Centre address in Short Message Waiting Data, so the
     * Service Centre does not poll and an `scAlert` will follow (ECMA-325
     * §E.6.4, §6.5.4.2). FALSE means no `scAlert` will be sent; the Service
     * Centre may start timer T4 (§6.5.3.2.1). §6.5.5 sometimes spells this
     * element `scAddressStored`.
     * @public
     * @readonly
     */
    readonly scAddressSaved: OPTIONAL<BOOLEAN>;

    constructor (
        failureCause: FailureCause,
        protocolIdentifier?: OPTIONAL<ProtocolIdentifier>,
        userData?: OPTIONAL<UserData>,
        scAddressSaved?: OPTIONAL<BOOLEAN>
    ) {
        this.failureCause = failureCause;
        this.protocolIdentifier = protocolIdentifier;
        this.userData = userData;
        this.scAddressSaved = scAddressSaved;
    }

    /**
     * @summary Restructures an object into a smsDeliverError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `smsDeliverError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `smsDeliverError_ParameterType`.
     * @returns {smsDeliverError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (smsDeliverError_ParameterType)]: (smsDeliverError_ParameterType)[_K] }): smsDeliverError_ParameterType {
        return new smsDeliverError_ParameterType(_o.failureCause, _o.protocolIdentifier, _o.userData, _o.scAddressSaved);
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
 * @summary The Leading Root Component Types of smsDeliverError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_smsDeliverError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("protocolIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("scAddressSaved", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of smsDeliverError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_smsDeliverError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of smsDeliverError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_smsDeliverError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_smsDeliverError_ParameterType: $.ASN1Decoder<smsDeliverError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) smsDeliverError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_smsDeliverError_ParameterType (el: _Element): smsDeliverError_ParameterType {
    if (!_cached_decoder_for_smsDeliverError_ParameterType) { _cached_decoder_for_smsDeliverError_ParameterType = function (el: _Element): smsDeliverError_ParameterType {
    let failureCause!: FailureCause;
    let protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    let userData: OPTIONAL<UserData>;
    let scAddressSaved: OPTIONAL<BOOLEAN> = smsDeliverError_ParameterType._default_value_for_scAddressSaved;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); },
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = $._decode_implicit<ProtocolIdentifier>(() => _decode_ProtocolIdentifier)(_el); },
        "userData": (_el: _Element): void => { userData = $._decode_implicit<UserData>(() => _decode_UserData)(_el); },
        "scAddressSaved": (_el: _Element): void => { scAddressSaved = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_smsDeliverError_ParameterType,
        _extension_additions_list_spec_for_smsDeliverError_ParameterType,
        _root_component_type_list_2_spec_for_smsDeliverError_ParameterType,
        undefined,
    );
    return new smsDeliverError_ParameterType(
        failureCause,
        protocolIdentifier,
        userData,
        scAddressSaved
    );
}; }
    return _cached_decoder_for_smsDeliverError_ParameterType(el);
}

let _cached_encoder_for_smsDeliverError_ParameterType: $.ASN1Encoder<smsDeliverError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) smsDeliverError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The smsDeliverError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_smsDeliverError_ParameterType (value: smsDeliverError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_smsDeliverError_ParameterType) { _cached_encoder_for_smsDeliverError_ParameterType = function (value: smsDeliverError_ParameterType, _elGetter: $.ASN1Encoder<smsDeliverError_ParameterType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_FailureCause(value.failureCause, $.BER));
    if (value.protocolIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProtocolIdentifier, $.BER)(value.protocolIdentifier, $.BER));
    }
    if (value.userData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserData, $.BER)(value.userData, $.BER));
    }
    if (value.scAddressSaved !== undefined && !$.deepEq(value.scAddressSaved, smsDeliverError_ParameterType._default_value_for_scAddressSaved)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.scAddressSaved, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_smsDeliverError_ParameterType(value, elGetter);
}

/* eslint-enable */
