/* eslint-disable */
import {
    type OPTIONAL,
    type RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IRIEvent, _decode_IRIEvent, _encode_IRIEvent } from "../TS33128Payloads/IRIEvent.ta.mjs";
// export { IRIEvent, _decode_IRIEvent, _encode_IRIEvent } from "../TS33128Payloads/IRIEvent.ta.mjs";
import { IRITargetIdentifier, _decode_IRITargetIdentifier, _encode_IRITargetIdentifier } from "../TS33128Payloads/IRITargetIdentifier.ta.mjs";
// export { IRITargetIdentifier, _decode_IRITargetIdentifier, _encode_IRITargetIdentifier } from "../TS33128Payloads/IRITargetIdentifier.ta.mjs";
import { type MediatedFromIndicator, _decode_MediatedFromIndicator, _encode_MediatedFromIndicator } from "../TS33128Payloads/MediatedFromIndicator.ta.mjs";
// export { MediatedFromIndicator, _decode_MediatedFromIndicator, _encode_MediatedFromIndicator } from "../TS33128Payloads/MediatedFromIndicator.ta.mjs";


/**
 * @summary IRIPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIPayload ::= SEQUENCE
 * {
 *     iRIPayloadOID          [1] RELATIVE-OID,
 *     event                  [2] IRIEvent,
 *     targetIdentifiers      [3] SEQUENCE OF IRITargetIdentifier OPTIONAL,
 *     mediatedFromIndicator  [4] MediatedFromIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRIPayload {
    /**
     * @summary `iRIPayloadOID`.
     * @description
     *
     * Shall be populated with the value of the iRIPayloadOID specified in the
     * version of the ASN.1 used by the MDF2 to generate the IRI record.
     *
     * 3GPP TS 33.128, clause 5.5.2.
     *
     * @public
     * @readonly
     */
    readonly iRIPayloadOID: RELATIVE_OID;
    /**
     * @summary `event`.
     * @description
     *
     * Unless otherwise specified, if the IRI event is generated from a
     * XIRIPayload received over LI_X2, then MDF2 shall choose the same choice
     * for the IRIPayload.event that was received in the xIRIPayload.event. If
     * the IRI event is generated due to another cause, the MDF2 shall choose
     * the IRIPayload.event appropriate for repoting the IRI event.
     *
     * 3GPP TS 33.128, clause 5.5.2.
     *
     * @public
     * @readonly
     */
    readonly event: IRIEvent;
    /**
     * @summary `targetIdentifiers`.
     * @description
     *
     * Shall be populated with all the Target Identifiers available at the MDF2.
     * See clause 5.5.5 for additional details. This parameter is conditional
     * only for backwards compatibility.
     *
     * 3GPP TS 33.128, clause 5.5.2.
     *
     * @public
     * @readonly
     */
    readonly targetIdentifiers: OPTIONAL<IRITargetIdentifier[]>;
    /**
     * @summary `mediatedFromIndicator`.
     * @description
     *
     * Shall be present if the IRI is generated from an xIRIPayload received
     * over LI_X2 and the release and version of the xIRIPayload.relativeOID is
     * different from the release and version of the IRIPayload.relativeOID. The
     * IRIPayload.mediatedFromIndicator.xIRIRelativeOID choice shall be used and
     * set to the value of the xIRIPayload.relativeOID of the xIRI message used
     * to generate the IRI message.
     *
     * 3GPP TS 33.128, clause 5.5.2.
     *
     * @public
     * @readonly
     */
    readonly mediatedFromIndicator: OPTIONAL<MediatedFromIndicator>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iRIPayloadOID: RELATIVE_OID,
        event: IRIEvent,
        targetIdentifiers?: OPTIONAL<IRITargetIdentifier[]>,
        mediatedFromIndicator?: OPTIONAL<MediatedFromIndicator>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iRIPayloadOID = iRIPayloadOID;
        this.event = event;
        this.targetIdentifiers = targetIdentifiers;
        this.mediatedFromIndicator = mediatedFromIndicator;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IRIPayload
     * @description
     * 
     * This takes an `object` and converts it to a `IRIPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRIPayload`.
     * @returns {IRIPayload}
     */
    public static _from_object (_o: { [_K in keyof (IRIPayload)]: (IRIPayload)[_K] }): IRIPayload {
        return new IRIPayload(_o.iRIPayloadOID, _o.event, _o.targetIdentifiers, _o.mediatedFromIndicator, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRIPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("iRIPayloadOID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("event", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetIdentifiers", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mediatedFromIndicator", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of IRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRIPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRIPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRIPayload: $.ASN1Decoder<IRIPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIPayload (el: _Element): IRIPayload {
    if (!_cached_decoder_for_IRIPayload) { _cached_decoder_for_IRIPayload = function (el: _Element): IRIPayload {
    let iRIPayloadOID!: RELATIVE_OID;
    let event!: IRIEvent;
    let targetIdentifiers: OPTIONAL<IRITargetIdentifier[]>;
    let mediatedFromIndicator: OPTIONAL<MediatedFromIndicator>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iRIPayloadOID": (_el: _Element): void => { iRIPayloadOID = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "event": (_el: _Element): void => { event = $._decode_explicit<IRIEvent>(() => _decode_IRIEvent)(_el); },
        "targetIdentifiers": (_el: _Element): void => { targetIdentifiers = $._decode_implicit<IRITargetIdentifier[]>(() => $._decodeSequenceOf<IRITargetIdentifier>(() => _decode_IRITargetIdentifier))(_el); },
        "mediatedFromIndicator": (_el: _Element): void => { mediatedFromIndicator = $._decode_explicit<MediatedFromIndicator>(() => _decode_MediatedFromIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRIPayload,
        _extension_additions_list_spec_for_IRIPayload,
        _root_component_type_list_2_spec_for_IRIPayload,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRIPayload(
        iRIPayloadOID,
        event,
        targetIdentifiers,
        mediatedFromIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRIPayload(el);
}

let _cached_encoder_for_IRIPayload: $.ASN1Encoder<IRIPayload> | null = null;

/**
 * @summary Encodes a(n) IRIPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIPayload, encoded as an ASN.1 Element.
 */
export
function _encode_IRIPayload (value: IRIPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIPayload) { _cached_encoder_for_IRIPayload = function (value: IRIPayload, elGetter: $.ASN1Encoder<IRIPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeRelativeOID, $.BER)(value.iRIPayloadOID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IRIEvent, $.BER)(value.event, $.BER);
    if (value.targetIdentifiers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<IRITargetIdentifier>(() => _encode_IRITargetIdentifier, $.BER), $.BER)(value.targetIdentifiers, $.BER);
    }
    if (value.mediatedFromIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_MediatedFromIndicator, $.BER)(value.mediatedFromIndicator, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRIPayload(value, elGetter);
}


/* eslint-enable */
