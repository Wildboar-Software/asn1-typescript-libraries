/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary Finished
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Finished ::= SEQUENCE {
 * verify-data    Opaque(SIZE(12))
 * }
 * ```
 * 
 * @class
 */
export
class Finished {
    constructor (
        /**
         * @summary `verify_data`.
         * @public
         * @readonly
         */
        readonly verify_data: Opaque
    ) {}

    /**
     * @summary Restructures an object into a Finished
     * @description
     * 
     * This takes an `object` and converts it to a `Finished`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Finished`.
     * @returns {Finished}
     */
    public static _from_object (_o: { [_K in keyof (Finished)]: (Finished)[_K] }): Finished {
        return new Finished(_o.verify_data);
    }


}

/**
 * @summary The Leading Root Component Types of Finished
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Finished: $.ComponentSpec[] = [
    new $.ComponentSpec("verify-data", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Finished
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Finished: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Finished
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Finished: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Finished: $.ASN1Decoder<Finished> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Finished
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Finished (el: _Element): Finished {
    if (!_cached_decoder_for_Finished) { _cached_decoder_for_Finished = function (el: _Element): Finished {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Finished contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "verify-data";
    let verify_data!: Opaque;
    verify_data = _decode_Opaque(sequence[0]);
    return new Finished(
        verify_data,

    );
}; }
    return _cached_decoder_for_Finished(el);
}

let _cached_encoder_for_Finished: $.ASN1Encoder<Finished> | null = null;

/**
 * @summary Encodes a(n) Finished into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Finished, encoded as an ASN.1 Element.
 */
export
function _encode_Finished (value: Finished, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Finished) { _cached_encoder_for_Finished = function (value: Finished): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Opaque(value.verify_data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Finished(value, elGetter);
}


/* eslint-enable */
