/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ActionOnProfile, _decode_ActionOnProfile, _encode_ActionOnProfile, _enum_for_ActionOnProfile } from "../IN-SSF-SCF-datatypes/ActionOnProfile.ta.mjs";
// export { ActionOnProfile, _enum_for_ActionOnProfile, ActionOnProfile_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionOnProfile_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActionOnProfile, _encode_ActionOnProfile } from "../IN-SSF-SCF-datatypes/ActionOnProfile.ta.mjs";
import { type TDPIdentifier, _decode_TDPIdentifier, _encode_TDPIdentifier } from "../IN-SSF-SCF-datatypes/TDPIdentifier.ta.mjs";
// export { TDPIdentifier, _decode_TDPIdentifier, _encode_TDPIdentifier } from "../IN-SSF-SCF-datatypes/TDPIdentifier.ta.mjs";
import { EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM, _enum_for_EventTypeBCSM } from "../IN-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_authorizeRouteFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authorizeRouteFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_originationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_terminationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oModifyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, oModifyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oModifyResult /* IMPORTED_LONG_ENUMERATION_ITEM */, oModifyResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tModifyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, tModifyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tModifyResult /* IMPORTED_LONG_ENUMERATION_ITEM */, tModifyResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary INprofile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * INprofile ::= SEQUENCE {
 *   actionOnProfile  [0]  ActionOnProfile,
 *   tDPIdentifier    [1]  TDPIdentifier,
 *   dPName           [2]  EventTypeBCSM OPTIONAL,
 *   extensions       [3]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class INprofile {
    /**
     * @summary `actionOnProfile`.
     * @public
     * @readonly
     */
    readonly actionOnProfile: ActionOnProfile;
    /**
     * @summary `tDPIdentifier`.
     * @public
     * @readonly
     */
    readonly tDPIdentifier: TDPIdentifier;
    /**
     * @summary `dPName`.
     * @public
     * @readonly
     */
    readonly dPName: OPTIONAL<EventTypeBCSM>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        actionOnProfile: ActionOnProfile,
        tDPIdentifier: TDPIdentifier,
        dPName?: OPTIONAL<EventTypeBCSM>,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.actionOnProfile = actionOnProfile;
        this.tDPIdentifier = tDPIdentifier;
        this.dPName = dPName;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a INprofile
     * @description
     * 
     * This takes an `object` and converts it to a `INprofile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `INprofile`.
     * @returns {INprofile}
     */
    public static _from_object (_o: { [_K in keyof (INprofile)]: (INprofile)[_K] }): INprofile {
        return new INprofile(_o.actionOnProfile, _o.tDPIdentifier, _o.dPName, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `actionOnProfile`
         * @public
         * @static
         */

    public static _enum_for_actionOnProfile = _enum_for_ActionOnProfile;        /**
         * @summary The enum used as the type of the component `dPName`
         * @public
         * @static
         */

    public static _enum_for_dPName = _enum_for_EventTypeBCSM;
}

/**
 * @summary The Leading Root Component Types of INprofile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_INprofile: $.ComponentSpec[] = [
    new $.ComponentSpec("actionOnProfile", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tDPIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dPName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of INprofile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_INprofile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of INprofile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_INprofile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_INprofile: $.ASN1Decoder<INprofile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) INprofile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_INprofile (el: _Element): INprofile {
    if (!_cached_decoder_for_INprofile) { _cached_decoder_for_INprofile = function (el: _Element): INprofile {
    let actionOnProfile!: ActionOnProfile;
    let tDPIdentifier!: TDPIdentifier;
    let dPName: OPTIONAL<EventTypeBCSM>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "actionOnProfile": (_el: _Element): void => { actionOnProfile = $._decode_implicit<ActionOnProfile>(() => _decode_ActionOnProfile)(_el); },
        "tDPIdentifier": (_el: _Element): void => { tDPIdentifier = $._decode_explicit<TDPIdentifier>(() => _decode_TDPIdentifier)(_el); },
        "dPName": (_el: _Element): void => { dPName = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_INprofile,
        _extension_additions_list_spec_for_INprofile,
        _root_component_type_list_2_spec_for_INprofile,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new INprofile(
        actionOnProfile,
        tDPIdentifier,
        dPName,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_INprofile(el);
}

let _cached_encoder_for_INprofile: $.ASN1Encoder<INprofile> | null = null;

/**
 * @summary Encodes a(n) INprofile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The INprofile, encoded as an ASN.1 Element.
 */
export
function _encode_INprofile (value: INprofile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_INprofile) { _cached_encoder_for_INprofile = function (value: INprofile, elGetter: $.ASN1Encoder<INprofile>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ActionOnProfile, $.BER)(value.actionOnProfile, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TDPIdentifier, $.BER)(value.tDPIdentifier, $.BER);
    if (value.dPName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTypeBCSM, $.BER)(value.dPName, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_INprofile(value, elGetter);
}


/* eslint-enable */
