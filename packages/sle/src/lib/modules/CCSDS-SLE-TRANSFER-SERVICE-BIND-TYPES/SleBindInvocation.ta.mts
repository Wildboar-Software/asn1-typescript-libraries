/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { AuthorityIdentifier, _decode_AuthorityIdentifier, _encode_AuthorityIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/AuthorityIdentifier.ta.mjs";
// export { AuthorityIdentifier, _decode_AuthorityIdentifier, _encode_AuthorityIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/AuthorityIdentifier.ta.mjs";
import { PortId, _decode_PortId, _encode_PortId } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/PortId.ta.mjs";
// export { PortId, _decode_PortId, _encode_PortId } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/PortId.ta.mjs";
import { ApplicationIdentifier, _decode_ApplicationIdentifier, _encode_ApplicationIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/ApplicationIdentifier.ta.mjs";
// export { ApplicationIdentifier, ApplicationIdentifier_rtnAllFrames /* IMPORTED_LONG_NAMED_INTEGER */, rtnAllFrames /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_rtnInsert /* IMPORTED_LONG_NAMED_INTEGER */, rtnInsert /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_rtnChFrames /* IMPORTED_LONG_NAMED_INTEGER */, rtnChFrames /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_rtnChFsh /* IMPORTED_LONG_NAMED_INTEGER */, rtnChFsh /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_rtnChOcf /* IMPORTED_LONG_NAMED_INTEGER */, rtnChOcf /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_rtnBitstr /* IMPORTED_LONG_NAMED_INTEGER */, rtnBitstr /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_rtnSpacePkt /* IMPORTED_LONG_NAMED_INTEGER */, rtnSpacePkt /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdAosSpacePkt /* IMPORTED_LONG_NAMED_INTEGER */, fwdAosSpacePkt /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdAosVca /* IMPORTED_LONG_NAMED_INTEGER */, fwdAosVca /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdBitstr /* IMPORTED_LONG_NAMED_INTEGER */, fwdBitstr /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdProtoVcdu /* IMPORTED_LONG_NAMED_INTEGER */, fwdProtoVcdu /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdInsert /* IMPORTED_LONG_NAMED_INTEGER */, fwdInsert /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdCVcdu /* IMPORTED_LONG_NAMED_INTEGER */, fwdCVcdu /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdTcSpacePkt /* IMPORTED_LONG_NAMED_INTEGER */, fwdTcSpacePkt /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdTcVca /* IMPORTED_LONG_NAMED_INTEGER */, fwdTcVca /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdTcFrame /* IMPORTED_LONG_NAMED_INTEGER */, fwdTcFrame /* IMPORTED_SHORT_NAMED_INTEGER */, ApplicationIdentifier_fwdCltu /* IMPORTED_LONG_NAMED_INTEGER */, fwdCltu /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ApplicationIdentifier, _encode_ApplicationIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/ApplicationIdentifier.ta.mjs";
import { VersionNumber, _decode_VersionNumber, _encode_VersionNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/VersionNumber.ta.mjs";
// export { VersionNumber, _decode_VersionNumber, _encode_VersionNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/VersionNumber.ta.mjs";
import { ServiceInstanceIdentifier, _decode_ServiceInstanceIdentifier, _encode_ServiceInstanceIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceInstanceIdentifier.ta.mjs";
// export { ServiceInstanceIdentifier, _decode_ServiceInstanceIdentifier, _encode_ServiceInstanceIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceInstanceIdentifier.ta.mjs";


/**
 * @summary SleBindInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleBindInvocation ::= SEQUENCE
 * { invokerCredentials         Credentials
 * , initiatorIdentifier        AuthorityIdentifier
 * , responderPortIdentifier    PortId
 * , serviceType                ApplicationIdentifier
 * , versionNumber              VersionNumber
 * , serviceInstanceIdentifier ServiceInstanceIdentifier
 * }
 * ```
 * 
 * @class
 */
export
class SleBindInvocation {
    /**
     * @summary `invokerCredentials`.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `initiatorIdentifier`.
     * @public
     * @readonly
     */
    readonly initiatorIdentifier: AuthorityIdentifier;
    /**
     * @summary `responderPortIdentifier`.
     * @public
     * @readonly
     */
    readonly responderPortIdentifier: PortId;
    /**
     * @summary `serviceType`.
     * @public
     * @readonly
     */
    readonly serviceType: ApplicationIdentifier;
    /**
     * @summary `versionNumber`.
     * @public
     * @readonly
     */
    readonly versionNumber: VersionNumber;
    /**
     * @summary `serviceInstanceIdentifier`.
     * @public
     * @readonly
     */
    readonly serviceInstanceIdentifier: ServiceInstanceIdentifier;

    constructor (
        invokerCredentials: Credentials,
        initiatorIdentifier: AuthorityIdentifier,
        responderPortIdentifier: PortId,
        serviceType: ApplicationIdentifier,
        versionNumber: VersionNumber,
        serviceInstanceIdentifier: ServiceInstanceIdentifier
    ) {
        this.invokerCredentials = invokerCredentials;
        this.initiatorIdentifier = initiatorIdentifier;
        this.responderPortIdentifier = responderPortIdentifier;
        this.serviceType = serviceType;
        this.versionNumber = versionNumber;
        this.serviceInstanceIdentifier = serviceInstanceIdentifier;
    }

    /**
     * @summary Restructures an object into a SleBindInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `SleBindInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SleBindInvocation`.
     * @returns {SleBindInvocation}
     */
    public static _from_object (_o: { [_K in keyof (SleBindInvocation)]: (SleBindInvocation)[_K] }): SleBindInvocation {
        return new SleBindInvocation(_o.invokerCredentials, _o.initiatorIdentifier, _o.responderPortIdentifier, _o.serviceType, _o.versionNumber, _o.serviceInstanceIdentifier);
    }


}

/**
 * @summary The Leading Root Component Types of SleBindInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SleBindInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("initiatorIdentifier", false, $.hasTag(_TagClass.universal, 26)),
    new $.ComponentSpec("responderPortIdentifier", false, $.hasTag(_TagClass.universal, 26)),
    new $.ComponentSpec("serviceType", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("versionNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("serviceInstanceIdentifier", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of SleBindInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SleBindInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SleBindInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SleBindInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SleBindInvocation: $.ASN1Decoder<SleBindInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleBindInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleBindInvocation (el: _Element): SleBindInvocation {
    if (!_cached_decoder_for_SleBindInvocation) { _cached_decoder_for_SleBindInvocation = function (el: _Element): SleBindInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("SleBindInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "initiatorIdentifier";
    sequence[2].name = "responderPortIdentifier";
    sequence[3].name = "serviceType";
    sequence[4].name = "versionNumber";
    sequence[5].name = "serviceInstanceIdentifier";
    let invokerCredentials!: Credentials;
    let initiatorIdentifier!: AuthorityIdentifier;
    let responderPortIdentifier!: PortId;
    let serviceType!: ApplicationIdentifier;
    let versionNumber!: VersionNumber;
    let serviceInstanceIdentifier!: ServiceInstanceIdentifier;
    invokerCredentials = _decode_Credentials(sequence[0]);
    initiatorIdentifier = _decode_AuthorityIdentifier(sequence[1]);
    responderPortIdentifier = _decode_PortId(sequence[2]);
    serviceType = _decode_ApplicationIdentifier(sequence[3]);
    versionNumber = _decode_VersionNumber(sequence[4]);
    serviceInstanceIdentifier = _decode_ServiceInstanceIdentifier(sequence[5]);
    return new SleBindInvocation(
        invokerCredentials,
        initiatorIdentifier,
        responderPortIdentifier,
        serviceType,
        versionNumber,
        serviceInstanceIdentifier,

    );
}; }
    return _cached_decoder_for_SleBindInvocation(el);
}

let _cached_encoder_for_SleBindInvocation: $.ASN1Encoder<SleBindInvocation> | null = null;

/**
 * @summary Encodes a(n) SleBindInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleBindInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_SleBindInvocation (value: SleBindInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleBindInvocation) { _cached_encoder_for_SleBindInvocation = function (value: SleBindInvocation, elGetter: $.ASN1Encoder<SleBindInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_AuthorityIdentifier(value.initiatorIdentifier, $.BER),
        /* REQUIRED   */ _encode_PortId(value.responderPortIdentifier, $.BER),
        /* REQUIRED   */ _encode_ApplicationIdentifier(value.serviceType, $.BER),
        /* REQUIRED   */ _encode_VersionNumber(value.versionNumber, $.BER),
        /* REQUIRED   */ _encode_ServiceInstanceIdentifier(value.serviceInstanceIdentifier, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SleBindInvocation(value, elGetter);
}


/* eslint-enable */
