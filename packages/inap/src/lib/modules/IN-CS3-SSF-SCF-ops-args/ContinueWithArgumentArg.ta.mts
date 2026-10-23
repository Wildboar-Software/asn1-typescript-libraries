/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContinueWithArgumentArg_legorCSID, _decode_ContinueWithArgumentArg_legorCSID, _encode_ContinueWithArgumentArg_legorCSID } from "../IN-CS3-SSF-SCF-ops-args/ContinueWithArgumentArg-legorCSID.ta.mjs";
// export { ContinueWithArgumentArg_legorCSID, _decode_ContinueWithArgumentArg_legorCSID, _encode_ContinueWithArgumentArg_legorCSID } from "../IN-CS3-SSF-SCF-ops-args/ContinueWithArgumentArg-legorCSID.ta.mjs";
import { leg1 } from "../IN-CS3-SSF-SCF-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-CS3-SSF-SCF-datatypes/leg1.va.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { GenericName, _decode_GenericName, _encode_GenericName } from "../IN-CS3-SSF-SCF-datatypes/GenericName.ta.mjs";
// export { GenericName, _decode_GenericName, _encode_GenericName } from "../IN-CS3-SSF-SCF-datatypes/GenericName.ta.mjs";
import { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
import { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
// export { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { SDSSinformation, _decode_SDSSinformation, _encode_SDSSinformation } from "../IN-CS3-SSF-SCF-datatypes/SDSSinformation.ta.mjs";
// export { SDSSinformation, _decode_SDSSinformation, _encode_SDSSinformation } from "../IN-CS3-SSF-SCF-datatypes/SDSSinformation.ta.mjs";


/**
 * @summary ContinueWithArgumentArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContinueWithArgumentArg ::= SEQUENCE {
 *   legorCSID
 *     CHOICE {legID  [0]  LegID,
 *             csID   [9]  CallSegmentID} DEFAULT legID:sendingSideID:leg1,
 *   alertingPattern                  [1]  AlertingPattern OPTIONAL,
 *   genericName                      [2]  GenericName OPTIONAL,
 *   iNServiceCompatibilityResponse   [3]  INServiceCompatibilityResponse OPTIONAL,
 *   forwardGVNS                      [4]  ForwardGVNS OPTIONAL,
 *   backwardGVNS                     [5]  BackwardGVNS OPTIONAL,
 *   extensions                       [6]  Extensions OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [7]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   sDSSinformation                  [8]  SDSSinformation OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ContinueWithArgumentArg {
    /**
     * @summary `legorCSID`.
     * @public
     * @readonly
     */
    readonly legorCSID: OPTIONAL<ContinueWithArgumentArg_legorCSID>;
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `genericName`.
     * @public
     * @readonly
     */
    readonly genericName: OPTIONAL<GenericName>;
    /**
     * @summary `iNServiceCompatibilityResponse`.
     * @public
     * @readonly
     */
    readonly iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    /**
     * @summary `forwardGVNS`.
     * @public
     * @readonly
     */
    readonly forwardGVNS: OPTIONAL<ForwardGVNS>;
    /**
     * @summary `backwardGVNS`.
     * @public
     * @readonly
     */
    readonly backwardGVNS: OPTIONAL<BackwardGVNS>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    /**
     * @summary `sDSSinformation`.
     * @public
     * @readonly
     */
    readonly sDSSinformation: OPTIONAL<SDSSinformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        legorCSID: OPTIONAL<ContinueWithArgumentArg_legorCSID>,
        alertingPattern: OPTIONAL<AlertingPattern>,
        genericName: OPTIONAL<GenericName>,
        iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>,
        forwardGVNS: OPTIONAL<ForwardGVNS>,
        backwardGVNS: OPTIONAL<BackwardGVNS>,
        extensions: OPTIONAL<Extensions>,
        serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        sDSSinformation: OPTIONAL<SDSSinformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.legorCSID = legorCSID;
        this.alertingPattern = alertingPattern;
        this.genericName = genericName;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.forwardGVNS = forwardGVNS;
        this.backwardGVNS = backwardGVNS;
        this.extensions = extensions;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.sDSSinformation = sDSSinformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ContinueWithArgumentArg
     * @description
     * 
     * This takes an `object` and converts it to a `ContinueWithArgumentArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinueWithArgumentArg`.
     * @returns {ContinueWithArgumentArg}
     */
    public static _from_object (_o: { [_K in keyof (ContinueWithArgumentArg)]: (ContinueWithArgumentArg)[_K] }): ContinueWithArgumentArg {
        return new ContinueWithArgumentArg(_o.legorCSID, _o.alertingPattern, _o.genericName, _o.iNServiceCompatibilityResponse, _o.forwardGVNS, _o.backwardGVNS, _o.extensions, _o.serviceInteractionIndicatorsTwo, _o.sDSSinformation, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legorCSID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legorCSID () { return { legID: { sendingSideID: leg1 } }; }
}

/**
 * @summary The Leading Root Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legorCSID", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 9))),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("genericName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sDSSinformation", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContinueWithArgumentArg: $.ASN1Decoder<ContinueWithArgumentArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContinueWithArgumentArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContinueWithArgumentArg (el: _Element): ContinueWithArgumentArg {
    if (!_cached_decoder_for_ContinueWithArgumentArg) { _cached_decoder_for_ContinueWithArgumentArg = function (el: _Element): ContinueWithArgumentArg {
    let legorCSID: OPTIONAL<ContinueWithArgumentArg_legorCSID> = ContinueWithArgumentArg._default_value_for_legorCSID;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let genericName: OPTIONAL<GenericName>;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let backwardGVNS: OPTIONAL<BackwardGVNS>;
    let extensions: OPTIONAL<Extensions>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let sDSSinformation: OPTIONAL<SDSSinformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legorCSID": (_el: _Element): void => { legorCSID = _decode_ContinueWithArgumentArg_legorCSID(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "genericName": (_el: _Element): void => { genericName = $._decode_implicit<GenericName>(() => _decode_GenericName)(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "backwardGVNS": (_el: _Element): void => { backwardGVNS = $._decode_implicit<BackwardGVNS>(() => _decode_BackwardGVNS)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "sDSSinformation": (_el: _Element): void => { sDSSinformation = $._decode_implicit<SDSSinformation>(() => _decode_SDSSinformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContinueWithArgumentArg,
        _extension_additions_list_spec_for_ContinueWithArgumentArg,
        _root_component_type_list_2_spec_for_ContinueWithArgumentArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContinueWithArgumentArg(
        legorCSID,
        alertingPattern,
        genericName,
        iNServiceCompatibilityResponse,
        forwardGVNS,
        backwardGVNS,
        extensions,
        serviceInteractionIndicatorsTwo,
        sDSSinformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContinueWithArgumentArg(el);
}

let _cached_encoder_for_ContinueWithArgumentArg: $.ASN1Encoder<ContinueWithArgumentArg> | null = null;

/**
 * @summary Encodes a(n) ContinueWithArgumentArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinueWithArgumentArg, encoded as an ASN.1 Element.
 */
export
function _encode_ContinueWithArgumentArg (value: ContinueWithArgumentArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContinueWithArgumentArg) { _cached_encoder_for_ContinueWithArgumentArg = function (value: ContinueWithArgumentArg, elGetter: $.ASN1Encoder<ContinueWithArgumentArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.legorCSID !== undefined && !$.deepEq(value.legorCSID, ContinueWithArgumentArg._default_value_for_legorCSID)) {
        _components[_components_i++] = /* IF_DEFAULT */ _encode_ContinueWithArgumentArg_legorCSID(value.legorCSID, $.BER);
    }
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.genericName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_GenericName, $.BER)(value.genericName, $.BER);
    }
    if (value.iNServiceCompatibilityResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_INServiceCompatibilityResponse, $.BER)(value.iNServiceCompatibilityResponse, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.backwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_BackwardGVNS, $.BER)(value.backwardGVNS, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.sDSSinformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_SDSSinformation, $.BER)(value.sDSSinformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ContinueWithArgumentArg(value, elGetter);
}


/* eslint-enable */
