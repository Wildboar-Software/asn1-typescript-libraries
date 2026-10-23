/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS-1-Datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS-1-Datatypes/Integer4.ta.mjs";


/**
 * @summary Tone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tone ::= SEQUENCE {toneID    [0]  Integer4,
 *                    duration  [1]  Integer4 OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Tone {
    /**
     * @summary `toneID`.
     * @public
     * @readonly
     */
    readonly toneID: Integer4;
    /**
     * @summary `duration`.
     * @public
     * @readonly
     */
    readonly duration: OPTIONAL<Integer4>;

    constructor (
        toneID: Integer4,
        duration: OPTIONAL<Integer4>
    ) {
        this.toneID = toneID;
        this.duration = duration;
    }

    /**
     * @summary Restructures an object into a Tone
     * @description
     * 
     * This takes an `object` and converts it to a `Tone`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Tone`.
     * @returns {Tone}
     */
    public static _from_object (_o: { [_K in keyof (Tone)]: (Tone)[_K] }): Tone {
        return new Tone(_o.toneID, _o.duration);
    }


}

/**
 * @summary The Leading Root Component Types of Tone
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Tone: $.ComponentSpec[] = [
    new $.ComponentSpec("toneID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Tone
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Tone: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Tone
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Tone: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Tone: $.ASN1Decoder<Tone> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Tone
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Tone (el: _Element): Tone {
    if (!_cached_decoder_for_Tone) { _cached_decoder_for_Tone = function (el: _Element): Tone {
    let toneID!: Integer4;
    let duration: OPTIONAL<Integer4>;
    const callbacks: $.DecodingMap = {
        "toneID": (_el: _Element): void => { toneID = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Tone,
        _extension_additions_list_spec_for_Tone,
        _root_component_type_list_2_spec_for_Tone,
        undefined,
    );
    return new Tone(
        toneID,
        duration
    );
}; }
    return _cached_decoder_for_Tone(el);
}

let _cached_encoder_for_Tone: $.ASN1Encoder<Tone> | null = null;

/**
 * @summary Encodes a(n) Tone into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tone, encoded as an ASN.1 Element.
 */
export
function _encode_Tone (value: Tone, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Tone) { _cached_encoder_for_Tone = function (value: Tone, elGetter: $.ASN1Encoder<Tone>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Integer4, $.BER)(value.toneID, $.BER));
    if (value.duration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Integer4, $.BER)(value.duration, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Tone(value, elGetter);
}


/* eslint-enable */
