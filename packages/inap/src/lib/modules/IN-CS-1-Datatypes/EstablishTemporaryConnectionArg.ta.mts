/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AssistingSSPIPRoutingAddress, _decode_AssistingSSPIPRoutingAddress, _encode_AssistingSSPIPRoutingAddress } from "../IN-CS-1-Datatypes/AssistingSSPIPRoutingAddress.ta.mjs";
// export { AssistingSSPIPRoutingAddress, _decode_AssistingSSPIPRoutingAddress, _encode_AssistingSSPIPRoutingAddress } from "../IN-CS-1-Datatypes/AssistingSSPIPRoutingAddress.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS-1-Datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS-1-Datatypes/ScfID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS-1-Datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS-1-Datatypes/Carrier.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS-1-Datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS-1-Datatypes/ServiceInteractionIndicators.ta.mjs";


/**
 * @summary EstablishTemporaryConnectionArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishTemporaryConnectionArg ::= SEQUENCE {
 *   assistingSSPIPRoutingAddress  [0]  AssistingSSPIPRoutingAddress,
 *   correlationID                 [1]  CorrelationID OPTIONAL,
 *   legID                         [2]  LegID OPTIONAL,
 *   scfID                         [3]  ScfID OPTIONAL,
 *   extensions
 *     [4]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            [4]  ExtensionField,
 *   carrier                       [5]  Carrier OPTIONAL,
 *   serviceInteractionIndicators  [30]  ServiceInteractionIndicators OPTIONAL,
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
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
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
    readonly extensions: ExtensionField[];
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        assistingSSPIPRoutingAddress: AssistingSSPIPRoutingAddress,
        correlationID: OPTIONAL<CorrelationID>,
        legID: OPTIONAL<LegID>,
        scfID: OPTIONAL<ScfID>,
        extensions: ExtensionField[],
        carrier: OPTIONAL<Carrier>,
        serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.assistingSSPIPRoutingAddress = assistingSSPIPRoutingAddress;
        this.correlationID = correlationID;
        this.legID = legID;
        this.scfID = scfID;
        this.extensions = extensions;
        this.carrier = carrier;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
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
        return new EstablishTemporaryConnectionArg(_o.assistingSSPIPRoutingAddress, _o.correlationID, _o.legID, _o.scfID, _o.extensions, _o.carrier, _o.serviceInteractionIndicators, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 30))
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
    let legID: OPTIONAL<LegID>;
    let scfID: OPTIONAL<ScfID>;
    let extensions!: ExtensionField[];
    let carrier: OPTIONAL<Carrier>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "assistingSSPIPRoutingAddress": (_el: _Element): void => { assistingSSPIPRoutingAddress = $._decode_implicit<AssistingSSPIPRoutingAddress>(() => _decode_AssistingSSPIPRoutingAddress)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => $._decode_implicit<ExtensionField>(() => _decode_ExtensionField)))(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); }
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
        legID,
        scfID,
        extensions,
        carrier,
        serviceInteractionIndicators,
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
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AssistingSSPIPRoutingAddress, $.BER)(value.assistingSSPIPRoutingAddress, $.BER);
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (value.scfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionField, $.BER), $.BER), $.BER)(value.extensions, $.BER);
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
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
