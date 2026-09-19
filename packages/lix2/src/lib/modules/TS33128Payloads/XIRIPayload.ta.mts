/* eslint-disable */
import {
    RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XIRIEvent, _decode_XIRIEvent, _encode_XIRIEvent } from "../TS33128Payloads/XIRIEvent.ta.mjs";
// export { XIRIEvent, _decode_XIRIEvent, _encode_XIRIEvent } from "../TS33128Payloads/XIRIEvent.ta.mjs";


/**
 * @summary XIRIPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XIRIPayload ::= SEQUENCE
 * {
 *     xIRIPayloadOID      [1] RELATIVE-OID,
 *     event               [2] XIRIEvent
 * }
 * ```
 * 
 * @class
 */
export
class XIRIPayload {
    constructor (
        /**
         * @summary `xIRIPayloadOID`.
         * @public
         * @readonly
         */
        readonly xIRIPayloadOID: RELATIVE_OID,
        /**
         * @summary `event`.
         * @public
         * @readonly
         */
        readonly event: XIRIEvent
    ) {}

    /**
     * @summary Restructures an object into a XIRIPayload
     * @description
     * 
     * This takes an `object` and converts it to a `XIRIPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `XIRIPayload`.
     * @returns {XIRIPayload}
     */
    public static _from_object (_o: { [_K in keyof (XIRIPayload)]: (XIRIPayload)[_K] }): XIRIPayload {
        return new XIRIPayload(_o.xIRIPayloadOID, _o.event);
    }


}

/**
 * @summary The Leading Root Component Types of XIRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_XIRIPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("xIRIPayloadOID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("event", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of XIRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_XIRIPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of XIRIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_XIRIPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_XIRIPayload: $.ASN1Decoder<XIRIPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) XIRIPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_XIRIPayload (el: _Element): XIRIPayload {
    if (!_cached_decoder_for_XIRIPayload) { _cached_decoder_for_XIRIPayload = function (el: _Element): XIRIPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("XIRIPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "xIRIPayloadOID";
    sequence[1].name = "event";
    let xIRIPayloadOID!: RELATIVE_OID;
    let event!: XIRIEvent;
    xIRIPayloadOID = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    event = $._decode_explicit<XIRIEvent>(() => _decode_XIRIEvent)(sequence[1]);
    return new XIRIPayload(
        xIRIPayloadOID,
        event,

    );
}; }
    return _cached_decoder_for_XIRIPayload(el);
}

let _cached_encoder_for_XIRIPayload: $.ASN1Encoder<XIRIPayload> | null = null;

/**
 * @summary Encodes a(n) XIRIPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XIRIPayload, encoded as an ASN.1 Element.
 */
export
function _encode_XIRIPayload (value: XIRIPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_XIRIPayload) { _cached_encoder_for_XIRIPayload = function (value: XIRIPayload, elGetter: $.ASN1Encoder<XIRIPayload>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeRelativeOID, $.BER)(value.xIRIPayloadOID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_XIRIEvent, $.BER)(value.event, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_XIRIPayload(value, elGetter);
}


/* eslint-enable */
