/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
import { leg1 } from "../IN-CS2-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-CS2-datatypes/leg1.va.mjs";
import { type AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS2-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS2-datatypes/AlertingPattern.ta.mjs";
import { type GenericName, _decode_GenericName, _encode_GenericName } from "../IN-CS2-datatypes/GenericName.ta.mjs";
// export { GenericName, _decode_GenericName, _encode_GenericName } from "../IN-CS2-datatypes/GenericName.ta.mjs";
import { type INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS2-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS2-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { type ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS2-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS2-datatypes/ForwardGVNS.ta.mjs";
import { type BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS2-datatypes/BackwardGVNS.ta.mjs";
// export { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS2-datatypes/BackwardGVNS.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS2-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS2-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";


/**
 * @summary ContinueWithArgumentArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContinueWithArgumentArg ::= SEQUENCE {
 *   legID                            [0]  LegID DEFAULT sendingSideID:leg1,
 *   alertingPattern                  [1]  AlertingPattern OPTIONAL,
 *   genericName                      [2]  GenericName OPTIONAL,
 *   iNServiceCompatibilityResponse   [3]  INServiceCompatibilityResponse OPTIONAL,
 *   forwardGVNS                      [4]  ForwardGVNS OPTIONAL,
 *   backwardGVNS                     [5]  BackwardGVNS OPTIONAL,
 *   extensions
 *     [6]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [7]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ContinueWithArgumentArg {
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
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
    readonly extensions: OPTIONAL<ExtensionField[]>;
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
        legID?: OPTIONAL<LegID>,
        alertingPattern?: OPTIONAL<AlertingPattern>,
        genericName?: OPTIONAL<GenericName>,
        iNServiceCompatibilityResponse?: OPTIONAL<INServiceCompatibilityResponse>,
        forwardGVNS?: OPTIONAL<ForwardGVNS>,
        backwardGVNS?: OPTIONAL<BackwardGVNS>,
        extensions?: OPTIONAL<ExtensionField[]>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.legID = legID;
        this.alertingPattern = alertingPattern;
        this.genericName = genericName;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.forwardGVNS = forwardGVNS;
        this.backwardGVNS = backwardGVNS;
        this.extensions = extensions;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
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
        return new ContinueWithArgumentArg(_o.legID, _o.alertingPattern, _o.genericName, _o.iNServiceCompatibilityResponse, _o.forwardGVNS, _o.backwardGVNS, _o.extensions, _o.serviceInteractionIndicatorsTwo, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legID () { return { sendingSideID: leg1 }; }
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
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("genericName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 7))
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
    let legID: OPTIONAL<LegID> = ContinueWithArgumentArg._default_value_for_legID;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let genericName: OPTIONAL<GenericName>;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let backwardGVNS: OPTIONAL<BackwardGVNS>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "genericName": (_el: _Element): void => { genericName = $._decode_implicit<GenericName>(() => _decode_GenericName)(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "backwardGVNS": (_el: _Element): void => { backwardGVNS = $._decode_implicit<BackwardGVNS>(() => _decode_BackwardGVNS)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContinueWithArgumentArg,
        _extension_additions_list_spec_for_ContinueWithArgumentArg,
        _root_component_type_list_2_spec_for_ContinueWithArgumentArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContinueWithArgumentArg(
        legID,
        alertingPattern,
        genericName,
        iNServiceCompatibilityResponse,
        forwardGVNS,
        backwardGVNS,
        extensions,
        serviceInteractionIndicatorsTwo,
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
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.legID !== undefined && !$.deepEq(value.legID, ContinueWithArgumentArg._default_value_for_legID)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legID, $.BER);
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
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
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
