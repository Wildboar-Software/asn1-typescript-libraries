/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
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


/**
 * @summary Release
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Release ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Release {
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
     * @summary `callId`.
     * @public
     * @readonly
     */
    readonly callId: CallId;
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
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Release
     * @description
     * 
     * This takes an `object` and converts it to a `Release`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Release`.
     * @returns {Release}
     */
    public static _from_object (_o: { [_K in keyof (Release)]: (Release)[_K] }): Release {
        return new Release(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Release
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Release: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Release
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Release: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Release
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Release: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Release: $.ASN1Decoder<Release> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Release
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Release (el: _Element): Release {
    if (!_cached_decoder_for_Release) { _cached_decoder_for_Release = function (el: _Element): Release {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("Release contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "caseId";
    sequence[1].name = "accessingElementId";
    sequence[2].name = "eventTime";
    sequence[3].name = "callId";
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(sequence[0]);
    accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(sequence[1]);
    eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(sequence[2]);
    callId = $._decode_implicit<CallId>(() => _decode_CallId)(sequence[3]);
    return new Release(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        sequence.slice(4),
    );
}; }
    return _cached_decoder_for_Release(el);
}

let _cached_encoder_for_Release: $.ASN1Encoder<Release> | null = null;

/**
 * @summary Encodes a(n) Release into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Release, encoded as an ASN.1 Element.
 */
export
function _encode_Release (value: Release, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Release) { _cached_encoder_for_Release = function (value: Release, elGetter: $.ASN1Encoder<Release>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Release(value, elGetter);
}


/* eslint-enable */
