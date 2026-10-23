/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM, _enum_for_EventTypeBCSM } from "../IN-CS-1-Datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS-1-Datatypes/EventTypeBCSM.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
import { EventSpecificInformationBCSM, _decode_EventSpecificInformationBCSM, _encode_EventSpecificInformationBCSM } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM.ta.mjs";
// export { EventSpecificInformationBCSM, _decode_EventSpecificInformationBCSM, _encode_EventSpecificInformationBCSM } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS-1-Datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS-1-Datatypes/MiscCallInfo.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";


/**
 * @summary EventReportBCSMArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventReportBCSMArg ::= SEQUENCE {
 *   eventTypeBCSM                 [0]  EventTypeBCSM,
 *   bcsmEventCorrelationID        [1]  CorrelationID OPTIONAL,
 *   eventSpecificInformationBCSM  [2]  EventSpecificInformationBCSM OPTIONAL,
 *   legID                         [3]  LegID OPTIONAL,
 *   miscCallInfo                  [4]  MiscCallInfo DEFAULT {messageType request},
 *   extensions
 *     [5]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventReportBCSMArg {
    /**
     * @summary `eventTypeBCSM`.
     * @public
     * @readonly
     */
    readonly eventTypeBCSM: EventTypeBCSM;
    /**
     * @summary `bcsmEventCorrelationID`.
     * @public
     * @readonly
     */
    readonly bcsmEventCorrelationID: OPTIONAL<CorrelationID>;
    /**
     * @summary `eventSpecificInformationBCSM`.
     * @public
     * @readonly
     */
    readonly eventSpecificInformationBCSM: OPTIONAL<EventSpecificInformationBCSM>;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
    /**
     * @summary `miscCallInfo`.
     * @public
     * @readonly
     */
    readonly miscCallInfo: OPTIONAL<MiscCallInfo>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: ExtensionField[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eventTypeBCSM: EventTypeBCSM,
        bcsmEventCorrelationID: OPTIONAL<CorrelationID>,
        eventSpecificInformationBCSM: OPTIONAL<EventSpecificInformationBCSM>,
        legID: OPTIONAL<LegID>,
        miscCallInfo: OPTIONAL<MiscCallInfo>,
        extensions: ExtensionField[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eventTypeBCSM = eventTypeBCSM;
        this.bcsmEventCorrelationID = bcsmEventCorrelationID;
        this.eventSpecificInformationBCSM = eventSpecificInformationBCSM;
        this.legID = legID;
        this.miscCallInfo = miscCallInfo;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventReportBCSMArg
     * @description
     * 
     * This takes an `object` and converts it to a `EventReportBCSMArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventReportBCSMArg`.
     * @returns {EventReportBCSMArg}
     */
    public static _from_object (_o: { [_K in keyof (EventReportBCSMArg)]: (EventReportBCSMArg)[_K] }): EventReportBCSMArg {
        return new EventReportBCSMArg(_o.eventTypeBCSM, _o.bcsmEventCorrelationID, _o.eventSpecificInformationBCSM, _o.legID, _o.miscCallInfo, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `miscCallInfo`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_miscCallInfo () { return new MiscCallInfo(MiscCallInfo._enum_for_messageType.request, undefined); }        /**
         * @summary The enum used as the type of the component `eventTypeBCSM`
         * @public
         * @static
         */

    public static _enum_for_eventTypeBCSM = _enum_for_EventTypeBCSM;
}

/**
 * @summary The Leading Root Component Types of EventReportBCSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventReportBCSMArg: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTypeBCSM", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bcsmEventCorrelationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventSpecificInformationBCSM", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("miscCallInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EventReportBCSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventReportBCSMArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventReportBCSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventReportBCSMArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventReportBCSMArg: $.ASN1Decoder<EventReportBCSMArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventReportBCSMArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventReportBCSMArg (el: _Element): EventReportBCSMArg {
    if (!_cached_decoder_for_EventReportBCSMArg) { _cached_decoder_for_EventReportBCSMArg = function (el: _Element): EventReportBCSMArg {
    let eventTypeBCSM!: EventTypeBCSM;
    let bcsmEventCorrelationID: OPTIONAL<CorrelationID>;
    let eventSpecificInformationBCSM: OPTIONAL<EventSpecificInformationBCSM>;
    let legID: OPTIONAL<LegID>;
    let miscCallInfo: OPTIONAL<MiscCallInfo> = EventReportBCSMArg._default_value_for_miscCallInfo;
    let extensions!: ExtensionField[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "bcsmEventCorrelationID": (_el: _Element): void => { bcsmEventCorrelationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "eventSpecificInformationBCSM": (_el: _Element): void => { eventSpecificInformationBCSM = $._decode_explicit<EventSpecificInformationBCSM>(() => _decode_EventSpecificInformationBCSM)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventReportBCSMArg,
        _extension_additions_list_spec_for_EventReportBCSMArg,
        _root_component_type_list_2_spec_for_EventReportBCSMArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventReportBCSMArg(
        eventTypeBCSM,
        bcsmEventCorrelationID,
        eventSpecificInformationBCSM,
        legID,
        miscCallInfo,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventReportBCSMArg(el);
}

let _cached_encoder_for_EventReportBCSMArg: $.ASN1Encoder<EventReportBCSMArg> | null = null;

/**
 * @summary Encodes a(n) EventReportBCSMArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportBCSMArg, encoded as an ASN.1 Element.
 */
export
function _encode_EventReportBCSMArg (value: EventReportBCSMArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventReportBCSMArg) { _cached_encoder_for_EventReportBCSMArg = function (value: EventReportBCSMArg, elGetter: $.ASN1Encoder<EventReportBCSMArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER);
    if (value.bcsmEventCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.bcsmEventCorrelationID, $.BER);
    }
    if (value.eventSpecificInformationBCSM !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_EventSpecificInformationBCSM, $.BER)(value.eventSpecificInformationBCSM, $.BER);
    }
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (value.miscCallInfo !== undefined && !$.deepEq(value.miscCallInfo, EventReportBCSMArg._default_value_for_miscCallInfo)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventReportBCSMArg(value, elGetter);
}


/* eslint-enable */
