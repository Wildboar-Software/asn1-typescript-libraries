/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { AuthorityIdentifier, _decode_AuthorityIdentifier, _encode_AuthorityIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/AuthorityIdentifier.ta.mjs";
import { PortId, _decode_PortId, _encode_PortId } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/PortId.ta.mjs";
import { ApplicationIdentifier, _decode_ApplicationIdentifier, _encode_ApplicationIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/ApplicationIdentifier.ta.mjs";
import { VersionNumber, _decode_VersionNumber, _encode_VersionNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/VersionNumber.ta.mjs";
import { ServiceInstanceIdentifier, _decode_ServiceInstanceIdentifier, _encode_ServiceInstanceIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceInstanceIdentifier.ta.mjs";


/**
 * @summary SleBindInvocation
 * @description
 * 
 * Invocation of BIND. Establishes an association. Valid only in state 1
 * (unbound). Service management decides whether the user or the provider is the
 * only permitted initiator. The invoker waits for the return before invoking
 * anything else. If the return does not arrive, the initiator may PEER-ABORT
 * and try BIND again.
 * 
 * CCSDS 911.1-B-5, sections 3.2.1 and A2.2.
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
     * @description
     * 
     * Information with which the performer authenticates this invocation. When
     * the agreed level is `all` or `bind`, BIND is authenticated. When the
     * level is `none`, the value should be `unused`.
     *
     * CCSDS 911.1-B-5, sections 3.2.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `initiatorIdentifier`.
     * @description
     * 
     * Authority on whose behalf the initiating application is binding. The
     * responder uses it to decide whether this initiator is registered and is
     * authorized for the service instance.
     *
     * CCSDS 911.1-B-5, sections 3.2.2.4, 3.1.4, and 1.6.1.8.6.
     * @public
     * @readonly
     */
    readonly initiatorIdentifier: AuthorityIdentifier;
    /**
     * @summary `responderPortIdentifier`.
     * @description
     * 
     * Logical name of the responding application's port. A gateway may
     * translate it into technology-specific addressing. The responding
     * application ignores it when judging the invocation. An incorrect value
     * generally yields no return, and the invoker then PEER-ABORTs with
     * `returnTimeout`.
     *
     * CCSDS 911.1-B-5, sections 3.2.2.6 and 2.6.4.5.
     * @public
     * @readonly
     */
    readonly responderPortIdentifier: PortId;
    /**
     * @summary `serviceType`.
     * @description
     * 
     * Service that will be provided if BIND succeeds. For RAF the value is
     * `rtnAllFrames` ('Rtn All Frames').
     *
     * CCSDS 911.1-B-5, section 3.2.2.7.
     * @public
     * @readonly
     */
    readonly serviceType: ApplicationIdentifier;
    /**
     * @summary `versionNumber`.
     * @description
     * 
     * Version of the service specification proposed for this association. This
     * issue of the RAF service uses 6. On a positive return the responder
     * accepts this version or, if it negotiates, proposes a lower one.
     *
     * CCSDS 911.1-B-5, section 3.2.2.8.
     * @public
     * @readonly
     */
    readonly versionNumber: VersionNumber;
    /**
     * @summary `serviceInstanceIdentifier`.
     * @description
     * 
     * Uniquely identifies this service instance within the service-providing
     * SLE Complex. The attribute concatenation is specified in annex A2.4.
     *
     * CCSDS 911.1-B-5, sections 3.2.2.9 and A2.4.
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
    if (!_cached_encoder_for_SleBindInvocation) { _cached_encoder_for_SleBindInvocation = function (value: SleBindInvocation, _elGetter: $.ASN1Encoder<SleBindInvocation>): _Element {
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
