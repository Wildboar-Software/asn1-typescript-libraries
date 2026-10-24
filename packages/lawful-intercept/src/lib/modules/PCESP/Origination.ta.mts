/* eslint-disable */
import {
    NULL,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
// export { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
import { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
// export { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
import { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
// export { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
import { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
// export { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
import { Origination_input, _decode_Origination_input, _encode_Origination_input } from "../PCESP/Origination-input.ta.mjs";
// export { Origination_input, _decode_Origination_input, _encode_Origination_input } from "../PCESP/Origination-input.ta.mjs";
import { TransitCarrierId, _decode_TransitCarrierId, _encode_TransitCarrierId } from "../PCESP/TransitCarrierId.ta.mjs";
// export { TransitCarrierId, _decode_TransitCarrierId, _encode_TransitCarrierId } from "../PCESP/TransitCarrierId.ta.mjs";


/**
 * @summary Origination
 * @description
 *
 * Message alternative carrying the calling party, an optional called party, one
 * input string, and an optional transit-carrier identifier.
 *
 * `input` is either `userinput` or `translationinput`, each a `VisibleString`
 * of size 1 to 32, extensible. This edition does not define how those strings
 * differ. `reserved0` is `NULL` and marked reserved.
 *
 * Clause 3.1 defines origin as the number of the party initiating a call. Annex
 * A does not say which `PartyId` component carries that number.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 3.1 and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Origination ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     calling                 [4] PartyId,
 *     called                  [5] PartyId OPTIONAL,
 *     input                   CHOICE {
 *         userinput               [6] VisibleString (SIZE (1..32, ...)),
 *         translationinput        [7] VisibleString (SIZE (1..32, ...)),
 *         ...
 *     },
 *     reserved0               [8] NULL, -- Reserved
 *     transitCarrierId        [9] TransitCarrierId OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Origination {
    /**
     * @summary `caseId`.
     * @description
     *
     * Intercept case identifier. This edition does not define how it is
     * assigned. See `CaseId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly caseId: CaseId;
    /**
     * @summary `accessingElementId`.
     * @description
     *
     * Statically configured element number of the reporting element.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly accessingElementId: AccessingElementId;
    /**
     * @summary `eventTime`.
     * @description
     *
     * Time of this message, as `GeneralizedTime`. This edition does not say
     * which instant is recorded. It is a different field from the `UTCTime`
     * timestamp on `TARGETACTIVITYMONITOR` (clause 8.4.2.1.3).
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly eventTime: EventTime;
    /**
     * @summary `callId`.
     * @description
     *
     * Call identifier the Delivery Function builds from the
     * Billing-Correlation-ID in the Event Messages. See `CallId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly callId: CallId;
    /**
     * @summary `calling`.
     * @description
     *
     * Calling party. Mandatory. Clause 3.1 defines origin as the number of the
     * party initiating a call. This edition does not say which `PartyId`
     * components carry it.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly calling: PartyId;
    /**
     * @summary `called`.
     * @description
     *
     * Called party. Optional. This edition does not say when it is included, or
     * which `PartyId` components to populate.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly called: OPTIONAL<PartyId>;
    /**
     * @summary `input`.
     * @description
     *
     * Either user input or translation input. Each is a `VisibleString` of size
     * 1 to 32, extensible. This edition does not define how the two differ. See
     * `Origination_input`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly input: Origination_input;
    /**
     * @summary `reserved0`.
     * @description
     *
     * Marked reserved. Encoded as `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved0: NULL;
    /**
     * @summary `transitCarrierId`.
     * @description
     *
     * Transit carrier. A `VisibleString` of size 3 to 7, extensible. Optional.
     * This edition does not define the numbering plan. See `TransitCarrierId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly transitCarrierId: OPTIONAL<TransitCarrierId>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        caseId: CaseId,
        accessingElementId: AccessingElementId,
        eventTime: EventTime,
        callId: CallId,
        calling: PartyId,
        called: OPTIONAL<PartyId>,
        input: Origination_input,
        reserved0: NULL,
        transitCarrierId?: OPTIONAL<TransitCarrierId>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.calling = calling;
        this.called = called;
        this.input = input;
        this.reserved0 = reserved0;
        this.transitCarrierId = transitCarrierId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Origination
     * @description
     * 
     * This takes an `object` and converts it to a `Origination`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Origination`.
     * @returns {Origination}
     */
    public static _from_object (_o: { [_K in keyof (Origination)]: (Origination)[_K] }): Origination {
        return new Origination(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.calling, _o.called, _o.input, _o.reserved0, _o.transitCarrierId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Origination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Origination: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calling", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("called", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("input", false, $.hasAnyTag),
    new $.ComponentSpec("reserved0", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("transitCarrierId", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of Origination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Origination: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Origination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Origination: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Origination: $.ASN1Decoder<Origination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Origination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Origination (el: _Element): Origination {
    if (!_cached_decoder_for_Origination) { _cached_decoder_for_Origination = function (el: _Element): Origination {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    let calling!: PartyId;
    let called: OPTIONAL<PartyId>;
    let input!: Origination_input;
    let reserved0!: NULL;
    let transitCarrierId: OPTIONAL<TransitCarrierId>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "callId": (_el: _Element): void => { callId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "calling": (_el: _Element): void => { calling = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "called": (_el: _Element): void => { called = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "input": (_el: _Element): void => { input = _decode_Origination_input(_el); },
        "reserved0": (_el: _Element): void => { reserved0 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "transitCarrierId": (_el: _Element): void => { transitCarrierId = $._decode_implicit<TransitCarrierId>(() => _decode_TransitCarrierId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Origination,
        _extension_additions_list_spec_for_Origination,
        _root_component_type_list_2_spec_for_Origination,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Origination(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        calling,
        called,
        input,
        reserved0,
        transitCarrierId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Origination(el);
}

let _cached_encoder_for_Origination: $.ASN1Encoder<Origination> | null = null;

/**
 * @summary Encodes a(n) Origination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Origination, encoded as an ASN.1 Element.
 */
export
function _encode_Origination (value: Origination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Origination) { _cached_encoder_for_Origination = function (value: Origination, elGetter: $.ASN1Encoder<Origination>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PartyId, $.BER)(value.calling, $.BER);
    if (value.called !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PartyId, $.BER)(value.called, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_Origination_input(value.input, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.reserved0, $.BER);
    if (value.transitCarrierId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_TransitCarrierId, $.BER)(value.transitCarrierId, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Origination(value, elGetter);
}


/* eslint-enable */
