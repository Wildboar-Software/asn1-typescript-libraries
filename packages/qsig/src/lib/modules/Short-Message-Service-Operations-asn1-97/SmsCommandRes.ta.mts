/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";
// export { ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
// export { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
// export { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";
// export { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";


/**
 * @summary SmsCommandRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsCommandRes ::= SEQUENCE {
 *     serviceCentreTimeStamp ServiceCentreTimeStamp,
 *     protocolIdentifier ProtocolIdentifier OPTIONAL,
 *     userData UserData OPTIONAL,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SmsCommandRes {
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
    /**
     * @summary `smsExtension`.
     * @public
     * @readonly
     */
    readonly smsExtension: OPTIONAL<SmsExtension>;

    constructor (
        serviceCentreTimeStamp: ServiceCentreTimeStamp,
        protocolIdentifier: OPTIONAL<ProtocolIdentifier>,
        userData: OPTIONAL<UserData>,
        smsExtension: OPTIONAL<SmsExtension>
    ) {
        this.serviceCentreTimeStamp = serviceCentreTimeStamp;
        this.protocolIdentifier = protocolIdentifier;
        this.userData = userData;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a SmsCommandRes
     * @description
     * 
     * This takes an `object` and converts it to a `SmsCommandRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmsCommandRes`.
     * @returns {SmsCommandRes}
     */
    public static _from_object (_o: { [_K in keyof (SmsCommandRes)]: (SmsCommandRes)[_K] }): SmsCommandRes {
        return new SmsCommandRes(_o.serviceCentreTimeStamp, _o.protocolIdentifier, _o.userData, _o.smsExtension);
    }


}

/**
 * @summary The Leading Root Component Types of SmsCommandRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmsCommandRes: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceCentreTimeStamp", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("protocolIdentifier", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of SmsCommandRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmsCommandRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmsCommandRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmsCommandRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmsCommandRes: $.ASN1Decoder<SmsCommandRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsCommandRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsCommandRes (el: _Element): SmsCommandRes {
    if (!_cached_decoder_for_SmsCommandRes) { _cached_decoder_for_SmsCommandRes = function (el: _Element): SmsCommandRes {
    let serviceCentreTimeStamp!: ServiceCentreTimeStamp;
    let protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    let userData: OPTIONAL<UserData>;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "serviceCentreTimeStamp": (_el: _Element): void => { serviceCentreTimeStamp = _decode_ServiceCentreTimeStamp(_el); },
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = _decode_ProtocolIdentifier(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmsCommandRes,
        _extension_additions_list_spec_for_SmsCommandRes,
        _root_component_type_list_2_spec_for_SmsCommandRes,
        undefined,
    );
    return new SmsCommandRes(
        serviceCentreTimeStamp,
        protocolIdentifier,
        userData,
        smsExtension
    );
}; }
    return _cached_decoder_for_SmsCommandRes(el);
}

let _cached_encoder_for_SmsCommandRes: $.ASN1Encoder<SmsCommandRes> | null = null;

/**
 * @summary Encodes a(n) SmsCommandRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsCommandRes, encoded as an ASN.1 Element.
 */
export
function _encode_SmsCommandRes (value: SmsCommandRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsCommandRes) { _cached_encoder_for_SmsCommandRes = function (value: SmsCommandRes, elGetter: $.ASN1Encoder<SmsCommandRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ServiceCentreTimeStamp(value.serviceCentreTimeStamp, $.BER));
    if (value.protocolIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ProtocolIdentifier(value.protocolIdentifier, $.BER));
    }
    if (value.userData !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_UserData(value.userData, $.BER));
    }
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmsCommandRes(value, elGetter);
}


/* eslint-enable */
