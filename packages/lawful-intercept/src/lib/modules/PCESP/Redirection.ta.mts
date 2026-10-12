/* eslint-disable */
import {
    NULL,
    OPTIONAL,
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
import { TransitCarrierId, _decode_TransitCarrierId, _encode_TransitCarrierId } from "../PCESP/TransitCarrierId.ta.mjs";
// export { TransitCarrierId, _decode_TransitCarrierId, _encode_TransitCarrierId } from "../PCESP/TransitCarrierId.ta.mjs";


/**
 * @summary Redirection
 * @description
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
     * @public
     * @readonly
     */
    readonly caseId: CaseId;
    /**
     * @summary `accessingElementId`.
     * @public
     * @readonly
     */
    readonly accessingElementId: AccessingElementId;
    /**
     * @summary `eventTime`.
     * @public
     * @readonly
     */
    readonly eventTime: EventTime;
    /**
     * @summary `old`.
     * @public
     * @readonly
     */
    readonly old: CallId;
    /**
     * @summary `redirectedto`.
     * @public
     * @readonly
     */
    readonly redirectedto: PartyId;
    /**
     * @summary `transitCarrierId`.
     * @public
     * @readonly
     */
    readonly transitCarrierId: OPTIONAL<TransitCarrierId>;
    /**
     * @summary `reserved0`.
     * @public
     * @readonly
     */
    readonly reserved0: NULL;
    /**
     * @summary `reserved1`.
     * @public
     * @readonly
     */
    readonly reserved1: NULL;
    /**
     * @summary `new_`.
     * @public
     * @readonly
     */
    readonly new_: OPTIONAL<CallId>;
    /**
     * @summary `redirectedfrom`.
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
        new_: OPTIONAL<CallId>,
        redirectedfrom: OPTIONAL<PartyId>,
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
