/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Flows
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Flows ::= SEQUENCE {
 *    mediaComponentNumber   [1] IMPLICIT INTEGER,
 *    flowNumber             [2] IMPLICIT SEQUENCE  OF
 *       INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class Flows {
    /**
     * @summary `mediaComponentNumber`.
     * @public
     * @readonly
     */
    readonly mediaComponentNumber: INTEGER;
    /**
     * @summary `flowNumber`.
     * @public
     * @readonly
     */
    readonly flowNumber: OPTIONAL<INTEGER[]>;

    constructor (
        mediaComponentNumber: INTEGER,
        flowNumber: OPTIONAL<INTEGER[]>
    ) {
        this.mediaComponentNumber = mediaComponentNumber;
        this.flowNumber = flowNumber;
    }

    /**
     * @summary Restructures an object into a Flows
     * @description
     * 
     * This takes an `object` and converts it to a `Flows`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Flows`.
     * @returns {Flows}
     */
    public static _from_object (_o: { [_K in keyof (Flows)]: (Flows)[_K] }): Flows {
        return new Flows(_o.mediaComponentNumber, _o.flowNumber);
    }


}

/**
 * @summary The Leading Root Component Types of Flows
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Flows: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaComponentNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("flowNumber", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Flows
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Flows: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Flows
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Flows: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Flows: $.ASN1Decoder<Flows> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Flows
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Flows (el: _Element): Flows {
    if (!_cached_decoder_for_Flows) { _cached_decoder_for_Flows = function (el: _Element): Flows {
    let mediaComponentNumber!: INTEGER;
    let flowNumber: OPTIONAL<INTEGER[]>;
    const callbacks: $.DecodingMap = {
        "mediaComponentNumber": (_el: _Element): void => { mediaComponentNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "flowNumber": (_el: _Element): void => { flowNumber = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Flows,
        _extension_additions_list_spec_for_Flows,
        _root_component_type_list_2_spec_for_Flows,
        undefined,
    );
    return new Flows(
        mediaComponentNumber,
        flowNumber
    );
}; }
    return _cached_decoder_for_Flows(el);
}

let _cached_encoder_for_Flows: $.ASN1Encoder<Flows> | null = null;

/**
 * @summary Encodes a(n) Flows into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Flows, encoded as an ASN.1 Element.
 */
export
function _encode_Flows (value: Flows, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Flows) { _cached_encoder_for_Flows = function (value: Flows, elGetter: $.ASN1Encoder<Flows>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.mediaComponentNumber, $.BER));
    if (value.flowNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.flowNumber, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Flows(value, elGetter);
}


/* eslint-enable */
