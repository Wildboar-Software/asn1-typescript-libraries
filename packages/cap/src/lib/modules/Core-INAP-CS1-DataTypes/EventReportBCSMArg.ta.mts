/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventTypeBCSM, _enum_for_EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../Core-INAP-CS1-DataTypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analyzedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analyzedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../Core-INAP-CS1-DataTypes/EventTypeBCSM.ta.mjs";
import { EventSpecificInformationBCSM, _decode_EventSpecificInformationBCSM, _encode_EventSpecificInformationBCSM } from "../Core-INAP-CS1-DataTypes/EventSpecificInformationBCSM.ta.mjs";
// export { EventSpecificInformationBCSM, _decode_EventSpecificInformationBCSM, _encode_EventSpecificInformationBCSM } from "../Core-INAP-CS1-DataTypes/EventSpecificInformationBCSM.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../Core-INAP-CS1-DataTypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../Core-INAP-CS1-DataTypes/MiscCallInfo.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary EventReportBCSMArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventReportBCSMArg ::= SEQUENCE {
 *      eventTypeBCSM     [0] EventTypeBCSM,
 *      eventSpecificInformationBCSM     [2] EventSpecificInformationBCSM     OPTIONAL,
 *      legID     [3] LegID     OPTIONAL,
 *      miscCallInfo     [4] MiscCallInfo     DEFAULT {messageType request},
 *      extensions     [5] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class EventReportBCSMArg {
    constructor (
        /**
         * @summary `eventTypeBCSM`.
         * @public
         * @readonly
         */
        readonly eventTypeBCSM: EventTypeBCSM,
        /**
         * @summary `eventSpecificInformationBCSM`.
         * @public
         * @readonly
         */
        readonly eventSpecificInformationBCSM: OPTIONAL<EventSpecificInformationBCSM>,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `miscCallInfo`.
         * @public
         * @readonly
         */
        readonly miscCallInfo: OPTIONAL<MiscCallInfo>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

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
        return new EventReportBCSMArg(_o.eventTypeBCSM, _o.eventSpecificInformationBCSM, _o.legID, _o.miscCallInfo, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `miscCallInfo`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_miscCallInfo () { return MiscCallInfo._from_object({ messageType: MiscCallInfo._enum_for_messageType.request }); }        /**
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
    new $.ComponentSpec("eventSpecificInformationBCSM", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("miscCallInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5))
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
    let eventSpecificInformationBCSM: OPTIONAL<EventSpecificInformationBCSM>;
    let legID: OPTIONAL<LegID>;
    let miscCallInfo: OPTIONAL<MiscCallInfo> = EventReportBCSMArg._default_value_for_miscCallInfo;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "eventSpecificInformationBCSM": (_el: _Element): void => { eventSpecificInformationBCSM = $._decode_explicit<EventSpecificInformationBCSM>(() => _decode_EventSpecificInformationBCSM)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventReportBCSMArg,
        _extension_additions_list_spec_for_EventReportBCSMArg,
        _root_component_type_list_2_spec_for_EventReportBCSMArg,
        undefined,
    );
    return new EventReportBCSMArg(
        eventTypeBCSM,
        eventSpecificInformationBCSM,
        legID,
        miscCallInfo,
        extensions
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
    if (!_cached_encoder_for_EventReportBCSMArg) { _cached_encoder_for_EventReportBCSMArg = function (value: EventReportBCSMArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER),
            /* IF_ABSENT  */ ((value.eventSpecificInformationBCSM === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_EventSpecificInformationBCSM, $.BER)(value.eventSpecificInformationBCSM, $.BER)),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_LegID, $.BER)(value.legID, $.BER)),
            /* IF_DEFAULT */ (value.miscCallInfo === undefined || $.deepEq(value.miscCallInfo, EventReportBCSMArg._default_value_for_miscCallInfo) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventReportBCSMArg(value, elGetter);
}


/* eslint-enable */
