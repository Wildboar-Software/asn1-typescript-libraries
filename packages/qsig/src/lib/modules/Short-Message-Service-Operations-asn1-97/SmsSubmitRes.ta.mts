/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";

/**
 * @summary SmsSubmitRes
 * @description
 *
 * Result of `smsSubmit` (ECMA-325 §6.5.3.1.1, Annex E.2). The Service Centre
 * has accepted and time-stamped the Short Message. Tags [3] and [4] are the 25
 * September 2001 errata, so these optional elements stay distinct from
 * `SmsExtension`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsSubmitRes ::= SEQUENCE {
 *     serviceCentreTimeStamp ServiceCentreTimeStamp,
 *     protocolIdentifier [3] IMPLICIT ProtocolIdentifier OPTIONAL,
 *     userData [4] IMPLICIT UserData OPTIONAL,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SmsSubmitRes {
    /**
     * @summary `serviceCentreTimeStamp`.
     * @description
     *
     * Time of arrival at the Service Centre, local to the Service Centre, to
     * one second (ECMA-325 §E.2.1). If several Short Messages arrive together,
     * stamps for one Receiving User are made distinct with the smallest change.
     * @public
     * @readonly
     */
    readonly serviceCentreTimeStamp: ServiceCentreTimeStamp;
    /**
     * @summary `protocolIdentifier`.
     * @description
     *
     * Echo of `protocolIdentifier` from the invoke (ECMA-325 §E.2.2).
     * @public
     * @readonly
     */
    readonly protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    /**
     * @summary `userData`.
     * @description
     *
     * Optional, for Service Centre use. When present, includes the invoke's
     * user data. Further headers may follow a `dataHeaderSourceIndicator`
     * (ECMA-325 §E.2.3).
     * @public
     * @readonly
     */
    readonly userData: OPTIONAL<UserData>;
    /**
     * @summary `smsExtension`.
     * @description
     *
     * Manufacturer-specific extension. This edition defines none in `SmsExtSet`
     * (ECMA-325 §6.3.1).
     * @public
     * @readonly
     */
    readonly smsExtension: OPTIONAL<SmsExtension>;

    constructor (
        serviceCentreTimeStamp: ServiceCentreTimeStamp,
        protocolIdentifier?: OPTIONAL<ProtocolIdentifier>,
        userData?: OPTIONAL<UserData>,
        smsExtension?: OPTIONAL<SmsExtension>
    ) {
        this.serviceCentreTimeStamp = serviceCentreTimeStamp;
        this.protocolIdentifier = protocolIdentifier;
        this.userData = userData;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a SmsSubmitRes
     * @description
     * 
     * This takes an `object` and converts it to a `SmsSubmitRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmsSubmitRes`.
     * @returns {SmsSubmitRes}
     */
    public static _from_object (_o: { [_K in keyof (SmsSubmitRes)]: (SmsSubmitRes)[_K] }): SmsSubmitRes {
        return new SmsSubmitRes(_o.serviceCentreTimeStamp, _o.protocolIdentifier, _o.userData, _o.smsExtension);
    }

}

/**
 * @summary The Leading Root Component Types of SmsSubmitRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmsSubmitRes: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceCentreTimeStamp", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("protocolIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of SmsSubmitRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmsSubmitRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmsSubmitRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmsSubmitRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmsSubmitRes: $.ASN1Decoder<SmsSubmitRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsSubmitRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsSubmitRes (el: _Element): SmsSubmitRes {
    if (!_cached_decoder_for_SmsSubmitRes) { _cached_decoder_for_SmsSubmitRes = function (el: _Element): SmsSubmitRes {
    let serviceCentreTimeStamp!: ServiceCentreTimeStamp;
    let protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    let userData: OPTIONAL<UserData>;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "serviceCentreTimeStamp": (_el: _Element): void => { serviceCentreTimeStamp = _decode_ServiceCentreTimeStamp(_el); },
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = $._decode_implicit<ProtocolIdentifier>(() => _decode_ProtocolIdentifier)(_el); },
        "userData": (_el: _Element): void => { userData = $._decode_implicit<UserData>(() => _decode_UserData)(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmsSubmitRes,
        _extension_additions_list_spec_for_SmsSubmitRes,
        _root_component_type_list_2_spec_for_SmsSubmitRes,
        undefined,
    );
    return new SmsSubmitRes(
        serviceCentreTimeStamp,
        protocolIdentifier,
        userData,
        smsExtension
    );
}; }
    return _cached_decoder_for_SmsSubmitRes(el);
}

let _cached_encoder_for_SmsSubmitRes: $.ASN1Encoder<SmsSubmitRes> | null = null;

/**
 * @summary Encodes a(n) SmsSubmitRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsSubmitRes, encoded as an ASN.1 Element.
 */
export
function _encode_SmsSubmitRes (value: SmsSubmitRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsSubmitRes) { _cached_encoder_for_SmsSubmitRes = function (value: SmsSubmitRes, _elGetter: $.ASN1Encoder<SmsSubmitRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ServiceCentreTimeStamp(value.serviceCentreTimeStamp, $.BER));
    if (value.protocolIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ProtocolIdentifier, $.BER)(value.protocolIdentifier, $.BER));
    }
    if (value.userData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_UserData, $.BER)(value.userData, $.BER));
    }
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmsSubmitRes(value, elGetter);
}

/* eslint-enable */
