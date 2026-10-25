/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ApplicationTimer, _decode_ApplicationTimer, _encode_ApplicationTimer } from "../IN-SSF-SCF-datatypes/ApplicationTimer.ta.mjs";
// export { ApplicationTimer, _decode_ApplicationTimer, _encode_ApplicationTimer } from "../IN-SSF-SCF-datatypes/ApplicationTimer.ta.mjs";
import { type AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { type DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-SSF-SCF-datatypes/DisplayInformation.ta.mjs";
// export { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-SSF-SCF-datatypes/DisplayInformation.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary ReconnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReconnectArg ::= SEQUENCE {
 *   notificationDuration  [0]  ApplicationTimer OPTIONAL,
 *   alertingPattern       [1]  AlertingPattern OPTIONAL,
 *   displayInformation    [2]  DisplayInformation OPTIONAL,
 *   extensions            [3]  Extensions OPTIONAL,
 *   callSegmentID         [4]  CallSegmentID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ReconnectArg {
    /**
     * @summary `notificationDuration`.
     * @public
     * @readonly
     */
    readonly notificationDuration: OPTIONAL<ApplicationTimer>;
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `displayInformation`.
     * @public
     * @readonly
     */
    readonly displayInformation: OPTIONAL<DisplayInformation>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: OPTIONAL<CallSegmentID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        notificationDuration?: OPTIONAL<ApplicationTimer>,
        alertingPattern?: OPTIONAL<AlertingPattern>,
        displayInformation?: OPTIONAL<DisplayInformation>,
        extensions?: OPTIONAL<Extensions>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.notificationDuration = notificationDuration;
        this.alertingPattern = alertingPattern;
        this.displayInformation = displayInformation;
        this.extensions = extensions;
        this.callSegmentID = callSegmentID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ReconnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReconnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReconnectArg`.
     * @returns {ReconnectArg}
     */
    public static _from_object (_o: { [_K in keyof (ReconnectArg)]: (ReconnectArg)[_K] }): ReconnectArg {
        return new ReconnectArg(_o.notificationDuration, _o.alertingPattern, _o.displayInformation, _o.extensions, _o.callSegmentID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReconnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("notificationDuration", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("displayInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReconnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReconnectArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReconnectArg: $.ASN1Decoder<ReconnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReconnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReconnectArg (el: _Element): ReconnectArg {
    if (!_cached_decoder_for_ReconnectArg) { _cached_decoder_for_ReconnectArg = function (el: _Element): ReconnectArg {
    let notificationDuration: OPTIONAL<ApplicationTimer>;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let displayInformation: OPTIONAL<DisplayInformation>;
    let extensions: OPTIONAL<Extensions>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "notificationDuration": (_el: _Element): void => { notificationDuration = $._decode_implicit<ApplicationTimer>(() => _decode_ApplicationTimer)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "displayInformation": (_el: _Element): void => { displayInformation = $._decode_implicit<DisplayInformation>(() => _decode_DisplayInformation)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReconnectArg,
        _extension_additions_list_spec_for_ReconnectArg,
        _root_component_type_list_2_spec_for_ReconnectArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReconnectArg(
        notificationDuration,
        alertingPattern,
        displayInformation,
        extensions,
        callSegmentID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReconnectArg(el);
}

let _cached_encoder_for_ReconnectArg: $.ASN1Encoder<ReconnectArg> | null = null;

/**
 * @summary Encodes a(n) ReconnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReconnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReconnectArg (value: ReconnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReconnectArg) { _cached_encoder_for_ReconnectArg = function (value: ReconnectArg, elGetter: $.ASN1Encoder<ReconnectArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.notificationDuration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ApplicationTimer, $.BER)(value.notificationDuration, $.BER);
    }
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.displayInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_DisplayInformation, $.BER)(value.displayInformation, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReconnectArg(value, elGetter);
}


/* eslint-enable */
