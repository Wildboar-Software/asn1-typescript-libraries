/* eslint-disable */
import {
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRIEvent, _decode_IRIEvent, _encode_IRIEvent } from "../TS33128Payloads/IRIEvent.ta.mjs";
// export { IRIEvent, _decode_IRIEvent, _encode_IRIEvent } from "../TS33128Payloads/IRIEvent.ta.mjs";
import { IRITargetIdentifier, _decode_IRITargetIdentifier, _encode_IRITargetIdentifier } from "../TS33128Payloads/IRITargetIdentifier.ta.mjs";
// export { IRITargetIdentifier, _decode_IRITargetIdentifier, _encode_IRITargetIdentifier } from "../TS33128Payloads/IRITargetIdentifier.ta.mjs";
import { MediatedFromIndicator, _decode_MediatedFromIndicator, _encode_MediatedFromIndicator } from "../TS33128Payloads/MediatedFromIndicator.ta.mjs";
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
    constructor (
        /**
         * @summary `iRIPayloadOID`.
         * @public
         * @readonly
         */
        readonly iRIPayloadOID: RELATIVE_OID,
        /**
         * @summary `event`.
         * @public
         * @readonly
         */
        readonly event: IRIEvent,
        /**
         * @summary `targetIdentifiers`.
         * @public
         * @readonly
         */
        readonly targetIdentifiers: OPTIONAL<IRITargetIdentifier[]>,
        /**
         * @summary `mediatedFromIndicator`.
         * @public
         * @readonly
         */
        readonly mediatedFromIndicator: OPTIONAL<MediatedFromIndicator>
    ) {}

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
        return new IRIPayload(_o.iRIPayloadOID, _o.event, _o.targetIdentifiers, _o.mediatedFromIndicator);
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
        undefined,
    );
    return new IRIPayload(
        iRIPayloadOID,
        event,
        targetIdentifiers,
        mediatedFromIndicator
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeRelativeOID, $.BER)(value.iRIPayloadOID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IRIEvent, $.BER)(value.event, $.BER),
            /* IF_ABSENT  */ ((value.targetIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<IRITargetIdentifier>(() => _encode_IRITargetIdentifier, $.BER), $.BER)(value.targetIdentifiers, $.BER)),
            /* IF_ABSENT  */ ((value.mediatedFromIndicator === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_MediatedFromIndicator, $.BER)(value.mediatedFromIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IRIPayload(value, elGetter);
}


/* eslint-enable */
