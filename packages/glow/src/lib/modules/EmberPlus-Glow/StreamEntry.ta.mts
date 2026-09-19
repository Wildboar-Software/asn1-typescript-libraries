/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
import { Value, _decode_Value, _encode_Value } from "../EmberPlus-Glow/Value.ta.mjs";
// export { Value, _decode_Value, _encode_Value } from "../EmberPlus-Glow/Value.ta.mjs";


/**
 * @summary StreamEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamEntry ::= [APPLICATION 5] IMPLICIT
 *         SEQUENCE {
 *             streamIdentifier [0] Integer32,
 *             streamValue      [1] Value
 *         }
 * ```
 * 
 * @class
 */
export
class StreamEntry {
    constructor (
        /**
         * @summary `streamIdentifier`.
         * @public
         * @readonly
         */
        readonly streamIdentifier: Integer32,
        /**
         * @summary `streamValue`.
         * @public
         * @readonly
         */
        readonly streamValue: Value
    ) {}

    /**
     * @summary Restructures an object into a StreamEntry
     * @description
     * 
     * This takes an `object` and converts it to a `StreamEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StreamEntry`.
     * @returns {StreamEntry}
     */
    public static _from_object (_o: { [_K in keyof (StreamEntry)]: (StreamEntry)[_K] }): StreamEntry {
        return new StreamEntry(_o.streamIdentifier, _o.streamValue);
    }


}

/**
 * @summary The Leading Root Component Types of StreamEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StreamEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("streamIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamValue", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of StreamEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StreamEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StreamEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StreamEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StreamEntry: $.ASN1Decoder<StreamEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StreamEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StreamEntry (el: _Element): StreamEntry {
    if (!_cached_decoder_for_StreamEntry) { _cached_decoder_for_StreamEntry = $._decode_implicit<StreamEntry>(() => function (el: _Element): StreamEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("StreamEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "streamIdentifier";
    sequence[1].name = "streamValue";
    let streamIdentifier!: Integer32;
    let streamValue!: Value;
    streamIdentifier = $._decode_explicit<Integer32>(() => _decode_Integer32)(sequence[0]);
    streamValue = $._decode_explicit<Value>(() => _decode_Value)(sequence[1]);
    return new StreamEntry(
        streamIdentifier,
        streamValue,

    );
}); }
    return _cached_decoder_for_StreamEntry(el);
}

let _cached_encoder_for_StreamEntry: $.ASN1Encoder<StreamEntry> | null = null;

/**
 * @summary Encodes a(n) StreamEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreamEntry, encoded as an ASN.1 Element.
 */
export
function _encode_StreamEntry (value: StreamEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StreamEntry) { _cached_encoder_for_StreamEntry = $._encode_implicit(_TagClass.application, 5, () => function (value: StreamEntry, elGetter: $.ASN1Encoder<StreamEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.streamIdentifier, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Value, $.BER)(value.streamValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_StreamEntry(value, elGetter);
}


/* eslint-enable */
