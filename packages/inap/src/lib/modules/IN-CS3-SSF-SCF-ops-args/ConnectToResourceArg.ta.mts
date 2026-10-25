/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ConnectToResourceArg_resourceAddress, _decode_ConnectToResourceArg_resourceAddress, _encode_ConnectToResourceArg_resourceAddress } from "../IN-CS3-SSF-SCF-ops-args/ConnectToResourceArg-resourceAddress.ta.mjs";
// export { ConnectToResourceArg_resourceAddress, _decode_ConnectToResourceArg_resourceAddress, _encode_ConnectToResourceArg_resourceAddress } from "../IN-CS3-SSF-SCF-ops-args/ConnectToResourceArg-resourceAddress.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { type ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { type USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS3-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS3-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
import { type USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS3-SSF-SCF-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS3-SSF-SCF-datatypes/USIInformation.ta.mjs";


/**
 * @summary ConnectToResourceArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectToResourceArg ::= SEQUENCE {
 *   resourceAddress
 *     CHOICE {ipRoutingAddress         [0]  IPRoutingAddress,
 *             legID                    [1]  LegID,
 *             ipAddressAndLegID
 *               [2]  SEQUENCE {ipRoutingAddress  [0]  IPRoutingAddress,
 *                              legID             [1]  LegID,
 *                              ...},
 *             none                     [3]  NULL,
 *             callSegmentID            [5]  CallSegmentID,
 *             ipAddressAndCallSegment
 *               [6]  SEQUENCE {ipRoutingAddress  [0]  IPRoutingAddress,
 *                              callSegmentID     [1]  CallSegmentID,
 *                              ...}},
 *   extensions                       [4]  Extensions OPTIONAL,
 *   serviceInteractionIndicators
 *     [30]  ServiceInteractionIndicators OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [7]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   uSIServiceIndicator              [35]  USIServiceIndicator OPTIONAL,
 *   uSIInformation                   [36]  USIInformation OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ConnectToResourceArg {
    /**
     * @summary `resourceAddress`.
     * @public
     * @readonly
     */
    readonly resourceAddress: ConnectToResourceArg_resourceAddress;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `serviceInteractionIndicators`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    /**
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    /**
     * @summary `uSIServiceIndicator`.
     * @public
     * @readonly
     */
    readonly uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    /**
     * @summary `uSIInformation`.
     * @public
     * @readonly
     */
    readonly uSIInformation: OPTIONAL<USIInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        resourceAddress: ConnectToResourceArg_resourceAddress,
        extensions?: OPTIONAL<Extensions>,
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        uSIServiceIndicator?: OPTIONAL<USIServiceIndicator>,
        uSIInformation?: OPTIONAL<USIInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.resourceAddress = resourceAddress;
        this.extensions = extensions;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.uSIInformation = uSIInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ConnectToResourceArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectToResourceArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectToResourceArg`.
     * @returns {ConnectToResourceArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectToResourceArg)]: (ConnectToResourceArg)[_K] }): ConnectToResourceArg {
        return new ConnectToResourceArg(_o.resourceAddress, _o.extensions, _o.serviceInteractionIndicators, _o.serviceInteractionIndicatorsTwo, _o.uSIServiceIndicator, _o.uSIInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceAddress", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("uSIServiceIndicator", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("uSIInformation", true, $.hasTag(_TagClass.context, 36))
];

/**
 * @summary The Trailing Root Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectToResourceArg: $.ASN1Decoder<ConnectToResourceArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectToResourceArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectToResourceArg (el: _Element): ConnectToResourceArg {
    if (!_cached_decoder_for_ConnectToResourceArg) { _cached_decoder_for_ConnectToResourceArg = function (el: _Element): ConnectToResourceArg {
    let resourceAddress!: ConnectToResourceArg_resourceAddress;
    let extensions: OPTIONAL<Extensions>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    let uSIInformation: OPTIONAL<USIInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "resourceAddress": (_el: _Element): void => { resourceAddress = _decode_ConnectToResourceArg_resourceAddress(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_explicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectToResourceArg,
        _extension_additions_list_spec_for_ConnectToResourceArg,
        _root_component_type_list_2_spec_for_ConnectToResourceArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConnectToResourceArg(
        resourceAddress,
        extensions,
        serviceInteractionIndicators,
        serviceInteractionIndicatorsTwo,
        uSIServiceIndicator,
        uSIInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConnectToResourceArg(el);
}

let _cached_encoder_for_ConnectToResourceArg: $.ASN1Encoder<ConnectToResourceArg> | null = null;

/**
 * @summary Encodes a(n) ConnectToResourceArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectToResourceArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectToResourceArg (value: ConnectToResourceArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectToResourceArg) { _cached_encoder_for_ConnectToResourceArg = function (value: ConnectToResourceArg, elGetter: $.ASN1Encoder<ConnectToResourceArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_ConnectToResourceArg_resourceAddress(value.resourceAddress, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.uSIServiceIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 35, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    }
    if (value.uSIInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ConnectToResourceArg(value, elGetter);
}


/* eslint-enable */
