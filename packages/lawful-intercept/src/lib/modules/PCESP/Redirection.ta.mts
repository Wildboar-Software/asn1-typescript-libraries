/* eslint-disable */
import {
    type NULL,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
// export { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
import { type AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
// export { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
import { type EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
import { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
// export { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
import { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
// export { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
import { type TransitCarrierId, _decode_TransitCarrierId, _encode_TransitCarrierId } from "../PCESP/TransitCarrierId.ta.mjs";
// export { TransitCarrierId, _decode_TransitCarrierId, _encode_TransitCarrierId } from "../PCESP/TransitCarrierId.ta.mjs";


/**
 * @summary Redirection
 * @description
 *
 * Message alternative naming the call before redirection (`old`), the party
 * redirected to, an optional new call identifier, an optional party redirected
 * from, and an optional transit carrier.
 *
 * `reserved0` and `reserved1` are `NULL` and marked reserved.
 *
 * Clause 3.1 defines a redirected call as a call that is transferred, or
 * redirected as a service to a terminating subscriber: unconditionally, when
 * the line is busy, or when the subscriber does not answer. A transferred call
 * changes the originating or terminating party because a party to the call
 * takes action. Clause 8.1.1 requires the IRI, when a call has been diverted,
 * to include the actual destination and the intermediate directory numbers.
 * Annex A does not map these fields onto those statements.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clauses 3.1 and 8.1.1 and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Redirection ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     old                     [3] CallId,
 *     redirectedto            [4] PartyId,
 *     transitCarrierId        [5] TransitCarrierId OPTIONAL,
 *     reserved0               [6] NULL, -- Reserved
 *     reserved1               [7] NULL, -- Reserved
 *     new                     [8] CallId OPTIONAL,
 *     redirectedfrom          [9] PartyId OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Redirection {
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
     * @summary `old`.
     * @description
     *
     * Call identifier of the call before redirection. See `CallId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly old: CallId;
    /**
     * @summary `redirectedto`.
     * @description
     *
     * Party the call is redirected to. Mandatory. This edition does not define
     * which `PartyId` components to populate.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly redirectedto: PartyId;
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
     * @summary `reserved1`.
     * @description
     *
     * Marked reserved. Encoded as `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly reserved1: NULL;
    /**
     * @summary `new_`.
     * @description
     *
     * Call identifier after redirection. Optional. This edition does not say
     * when a new call identifier is assigned. See `CallId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly new_: OPTIONAL<CallId>;
    /**
     * @summary `redirectedfrom`.
     * @description
     *
     * Party the call is redirected from. Optional. This edition does not say
     * when it is included.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly redirectedfrom: OPTIONAL<PartyId>;
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
        old: CallId,
        redirectedto: PartyId,
        transitCarrierId: OPTIONAL<TransitCarrierId>,
        reserved0: NULL,
        reserved1: NULL,
        new_?: OPTIONAL<CallId>,
        redirectedfrom?: OPTIONAL<PartyId>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.old = old;
        this.redirectedto = redirectedto;
        this.transitCarrierId = transitCarrierId;
        this.reserved0 = reserved0;
        this.reserved1 = reserved1;
        this.new_ = new_;
        this.redirectedfrom = redirectedfrom;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Redirection
     * @description
     * 
     * This takes an `object` and converts it to a `Redirection`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Redirection`.
     * @returns {Redirection}
     */
    public static _from_object (_o: { [_K in keyof (Redirection)]: (Redirection)[_K] }): Redirection {
        return new Redirection(_o.caseId, _o.accessingElementId, _o.eventTime, _o.old, _o.redirectedto, _o.transitCarrierId, _o.reserved0, _o.reserved1, _o.new_, _o.redirectedfrom, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Redirection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Redirection: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("old", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("redirectedto", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("transitCarrierId", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reserved0", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("reserved1", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("new", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("redirectedfrom", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of Redirection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Redirection: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Redirection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Redirection: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Redirection: $.ASN1Decoder<Redirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Redirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Redirection (el: _Element): Redirection {
    if (!_cached_decoder_for_Redirection) { _cached_decoder_for_Redirection = function (el: _Element): Redirection {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let old!: CallId;
    let redirectedto!: PartyId;
    let transitCarrierId: OPTIONAL<TransitCarrierId>;
    let reserved0!: NULL;
    let reserved1!: NULL;
    let new_: OPTIONAL<CallId>;
    let redirectedfrom: OPTIONAL<PartyId>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "old": (_el: _Element): void => { old = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "redirectedto": (_el: _Element): void => { redirectedto = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "transitCarrierId": (_el: _Element): void => { transitCarrierId = $._decode_implicit<TransitCarrierId>(() => _decode_TransitCarrierId)(_el); },
        "reserved0": (_el: _Element): void => { reserved0 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserved1": (_el: _Element): void => { reserved1 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "new": (_el: _Element): void => { new_ = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "redirectedfrom": (_el: _Element): void => { redirectedfrom = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Redirection,
        _extension_additions_list_spec_for_Redirection,
        _root_component_type_list_2_spec_for_Redirection,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Redirection(
        caseId,
        accessingElementId,
        eventTime,
        old,
        redirectedto,
        transitCarrierId,
        reserved0,
        reserved1,
        new_,
        redirectedfrom,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Redirection(el);
}

let _cached_encoder_for_Redirection: $.ASN1Encoder<Redirection> | null = null;

/**
 * @summary Encodes a(n) Redirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Redirection, encoded as an ASN.1 Element.
 */
export
function _encode_Redirection (value: Redirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Redirection) { _cached_encoder_for_Redirection = function (value: Redirection, elGetter: $.ASN1Encoder<Redirection>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.old, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PartyId, $.BER)(value.redirectedto, $.BER);
    if (value.transitCarrierId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_TransitCarrierId, $.BER)(value.transitCarrierId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.reserved0, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.reserved1, $.BER);
    if (value.new_ !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_CallId, $.BER)(value.new_, $.BER);
    }
    if (value.redirectedfrom !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PartyId, $.BER)(value.redirectedfrom, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Redirection(value, elGetter);
}


/* eslint-enable */
