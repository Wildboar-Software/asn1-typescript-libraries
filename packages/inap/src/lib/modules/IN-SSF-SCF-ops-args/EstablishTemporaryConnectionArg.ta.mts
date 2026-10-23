/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AssistingSSPIPRoutingAddress, _decode_AssistingSSPIPRoutingAddress, _encode_AssistingSSPIPRoutingAddress } from "../IN-SSF-SCF-datatypes/AssistingSSPIPRoutingAddress.ta.mjs";
// export { AssistingSSPIPRoutingAddress, _decode_AssistingSSPIPRoutingAddress, _encode_AssistingSSPIPRoutingAddress } from "../IN-SSF-SCF-datatypes/AssistingSSPIPRoutingAddress.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { EstablishTemporaryConnectionArg_partyToConnect, _decode_EstablishTemporaryConnectionArg_partyToConnect, _encode_EstablishTemporaryConnectionArg_partyToConnect } from "../IN-SSF-SCF-ops-args/EstablishTemporaryConnectionArg-partyToConnect.ta.mjs";
// export { EstablishTemporaryConnectionArg_partyToConnect, _decode_EstablishTemporaryConnectionArg_partyToConnect, _encode_EstablishTemporaryConnectionArg_partyToConnect } from "../IN-SSF-SCF-ops-args/EstablishTemporaryConnectionArg-partyToConnect.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-SSF-SCF-datatypes/ScfID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-SSF-SCF-datatypes/Carrier.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";


/**
 * @summary EstablishTemporaryConnectionArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishTemporaryConnectionArg ::= SEQUENCE {
 *   assistingSSPIPRoutingAddress     [0]  AssistingSSPIPRoutingAddress,
 *   correlationID                    [1]  CorrelationID OPTIONAL,
 *   partyToConnect
 *     CHOICE {legID          [2]  LegID,
 *             callSegmentID  [7]  CallSegmentID} OPTIONAL,
 *   scfID                            [3]  ScfID OPTIONAL,
 *   extensions                       [4]  Extensions OPTIONAL,
 *   carrier                          [5]  Carrier OPTIONAL,
 *   serviceInteractionIndicators
 *     [30]  ServiceInteractionIndicators OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [6]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EstablishTemporaryConnectionArg {
    /**
     * @summary `assistingSSPIPRoutingAddress`.
     * @public
     * @readonly
     */
    readonly assistingSSPIPRoutingAddress: AssistingSSPIPRoutingAddress;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: OPTIONAL<CorrelationID>;
    /**
     * @summary `partyToConnect`.
     * @public
     * @readonly
     */
    readonly partyToConnect: OPTIONAL<EstablishTemporaryConnectionArg_partyToConnect>;
    /**
     * @summary `scfID`.
     * @public
     * @readonly
     */
    readonly scfID: OPTIONAL<ScfID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `carrier`.
     * @public
     * @readonly
     */
    readonly carrier: OPTIONAL<Carrier>;
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        assistingSSPIPRoutingAddress: AssistingSSPIPRoutingAddress,
        correlationID?: OPTIONAL<CorrelationID>,
        partyToConnect?: OPTIONAL<EstablishTemporaryConnectionArg_partyToConnect>,
        scfID?: OPTIONAL<ScfID>,
        extensions?: OPTIONAL<Extensions>,
        carrier?: OPTIONAL<Carrier>,
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.assistingSSPIPRoutingAddress = assistingSSPIPRoutingAddress;
        this.correlationID = correlationID;
        this.partyToConnect = partyToConnect;
        this.scfID = scfID;
        this.extensions = extensions;
        this.carrier = carrier;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EstablishTemporaryConnectionArg
     * @description
     * 
     * This takes an `object` and converts it to a `EstablishTemporaryConnectionArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishTemporaryConnectionArg`.
     * @returns {EstablishTemporaryConnectionArg}
     */
    public static _from_object (_o: { [_K in keyof (EstablishTemporaryConnectionArg)]: (EstablishTemporaryConnectionArg)[_K] }): EstablishTemporaryConnectionArg {
        return new EstablishTemporaryConnectionArg(_o.assistingSSPIPRoutingAddress, _o.correlationID, _o.partyToConnect, _o.scfID, _o.extensions, _o.carrier, _o.serviceInteractionIndicators, _o.serviceInteractionIndicatorsTwo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("assistingSSPIPRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("partyToConnect", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 7))),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EstablishTemporaryConnectionArg: $.ASN1Decoder<EstablishTemporaryConnectionArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishTemporaryConnectionArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishTemporaryConnectionArg (el: _Element): EstablishTemporaryConnectionArg {
    if (!_cached_decoder_for_EstablishTemporaryConnectionArg) { _cached_decoder_for_EstablishTemporaryConnectionArg = function (el: _Element): EstablishTemporaryConnectionArg {
    let assistingSSPIPRoutingAddress!: AssistingSSPIPRoutingAddress;
    let correlationID: OPTIONAL<CorrelationID>;
    let partyToConnect: OPTIONAL<EstablishTemporaryConnectionArg_partyToConnect>;
    let scfID: OPTIONAL<ScfID>;
    let extensions: OPTIONAL<Extensions>;
    let carrier: OPTIONAL<Carrier>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "assistingSSPIPRoutingAddress": (_el: _Element): void => { assistingSSPIPRoutingAddress = $._decode_implicit<AssistingSSPIPRoutingAddress>(() => _decode_AssistingSSPIPRoutingAddress)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "partyToConnect": (_el: _Element): void => { partyToConnect = _decode_EstablishTemporaryConnectionArg_partyToConnect(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EstablishTemporaryConnectionArg,
        _extension_additions_list_spec_for_EstablishTemporaryConnectionArg,
        _root_component_type_list_2_spec_for_EstablishTemporaryConnectionArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EstablishTemporaryConnectionArg(
        assistingSSPIPRoutingAddress,
        correlationID,
        partyToConnect,
        scfID,
        extensions,
        carrier,
        serviceInteractionIndicators,
        serviceInteractionIndicatorsTwo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EstablishTemporaryConnectionArg(el);
}

let _cached_encoder_for_EstablishTemporaryConnectionArg: $.ASN1Encoder<EstablishTemporaryConnectionArg> | null = null;

/**
 * @summary Encodes a(n) EstablishTemporaryConnectionArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishTemporaryConnectionArg, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishTemporaryConnectionArg (value: EstablishTemporaryConnectionArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishTemporaryConnectionArg) { _cached_encoder_for_EstablishTemporaryConnectionArg = function (value: EstablishTemporaryConnectionArg, elGetter: $.ASN1Encoder<EstablishTemporaryConnectionArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AssistingSSPIPRoutingAddress, $.BER)(value.assistingSSPIPRoutingAddress, $.BER);
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.partyToConnect !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_EstablishTemporaryConnectionArg_partyToConnect(value.partyToConnect, $.BER);
    }
    if (value.scfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EstablishTemporaryConnectionArg(value, elGetter);
}


/* eslint-enable */
