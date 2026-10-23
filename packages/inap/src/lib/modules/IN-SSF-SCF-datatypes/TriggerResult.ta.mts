/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ActionPerformed, _encode_ActionPerformed, _enum_for_ActionPerformed, ActionPerformed } from "../IN-SSF-SCF-datatypes/ActionPerformed.ta.mjs";
// export { ActionPerformed, _enum_for_ActionPerformed, ActionPerformed_activated /* IMPORTED_LONG_ENUMERATION_ITEM */, activated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_deactivated /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_alreadyActive /* IMPORTED_LONG_ENUMERATION_ITEM */, alreadyActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_alreadyInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, alreadyInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_isActive /* IMPORTED_LONG_ENUMERATION_ITEM */, isActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_isInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, isInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_tDPunknown /* IMPORTED_LONG_ENUMERATION_ITEM */, tDPunknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActionPerformed, _encode_ActionPerformed } from "../IN-SSF-SCF-datatypes/ActionPerformed.ta.mjs";
import { _decode_EventTypeBCSM, _encode_EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM } from "../IN-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_authorizeRouteFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authorizeRouteFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_originationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_terminationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oModifyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, oModifyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oModifyResult /* IMPORTED_LONG_ENUMERATION_ITEM */, oModifyResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tModifyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, tModifyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tModifyResult /* IMPORTED_LONG_ENUMERATION_ITEM */, tModifyResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";


/**
 * @summary TriggerResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerResult ::= SEQUENCE {
 *   tDPIdentifer     [0]  INTEGER,
 *   actionPerformed  [1]  ActionPerformed,
 *   dPName           [2]  EventTypeBCSM OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TriggerResult {
    /**
     * @summary `tDPIdentifer`.
     * @public
     * @readonly
     */
    readonly tDPIdentifer: INTEGER;
    /**
     * @summary `actionPerformed`.
     * @public
     * @readonly
     */
    readonly actionPerformed: ActionPerformed;
    /**
     * @summary `dPName`.
     * @public
     * @readonly
     */
    readonly dPName: OPTIONAL<EventTypeBCSM>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        tDPIdentifer: INTEGER,
        actionPerformed: ActionPerformed,
        dPName: OPTIONAL<EventTypeBCSM>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.tDPIdentifer = tDPIdentifer;
        this.actionPerformed = actionPerformed;
        this.dPName = dPName;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TriggerResult
     * @description
     * 
     * This takes an `object` and converts it to a `TriggerResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerResult`.
     * @returns {TriggerResult}
     */
    public static _from_object (_o: { [_K in keyof (TriggerResult)]: (TriggerResult)[_K] }): TriggerResult {
        return new TriggerResult(_o.tDPIdentifer, _o.actionPerformed, _o.dPName, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `actionPerformed`
         * @public
         * @static
         */

    public static _enum_for_actionPerformed = _enum_for_ActionPerformed;        /**
         * @summary The enum used as the type of the component `dPName`
         * @public
         * @static
         */

    public static _enum_for_dPName = _enum_for_EventTypeBCSM;
}

/**
 * @summary The Leading Root Component Types of TriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TriggerResult: $.ComponentSpec[] = [
    new $.ComponentSpec("tDPIdentifer", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("actionPerformed", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dPName", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TriggerResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TriggerResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TriggerResult: $.ASN1Decoder<TriggerResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerResult (el: _Element): TriggerResult {
    if (!_cached_decoder_for_TriggerResult) { _cached_decoder_for_TriggerResult = function (el: _Element): TriggerResult {
    let tDPIdentifer!: INTEGER;
    let actionPerformed!: ActionPerformed;
    let dPName: OPTIONAL<EventTypeBCSM>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "tDPIdentifer": (_el: _Element): void => { tDPIdentifer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "actionPerformed": (_el: _Element): void => { actionPerformed = $._decode_implicit<ActionPerformed>(() => _decode_ActionPerformed)(_el); },
        "dPName": (_el: _Element): void => { dPName = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TriggerResult,
        _extension_additions_list_spec_for_TriggerResult,
        _root_component_type_list_2_spec_for_TriggerResult,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TriggerResult(
        tDPIdentifer,
        actionPerformed,
        dPName,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TriggerResult(el);
}

let _cached_encoder_for_TriggerResult: $.ASN1Encoder<TriggerResult> | null = null;

/**
 * @summary Encodes a(n) TriggerResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerResult, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerResult (value: TriggerResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerResult) { _cached_encoder_for_TriggerResult = function (value: TriggerResult, elGetter: $.ASN1Encoder<TriggerResult>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.tDPIdentifer, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ActionPerformed, $.BER)(value.actionPerformed, $.BER);
    if (value.dPName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTypeBCSM, $.BER)(value.dPName, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TriggerResult(value, elGetter);
}


/* eslint-enable */
