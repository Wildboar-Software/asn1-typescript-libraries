/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PendingNotification, _decode_PendingNotification, _encode_PendingNotification } from "../RSPDefinitions/PendingNotification.ta.mjs";
// export { PendingNotification, _decode_PendingNotification, _encode_PendingNotification } from "../RSPDefinitions/PendingNotification.ta.mjs";


/**
 * @summary HandleNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandleNotification ::= [61] SEQUENCE { -- Tag 'BF3D'
 *     pendingNotification PendingNotification
 * }
 * ```
 * 
 * @class
 */
export
class HandleNotification {
    constructor (
        /**
         * @summary `pendingNotification`.
         * @public
         * @readonly
         */
        readonly pendingNotification: PendingNotification
    ) {}

    /**
     * @summary Restructures an object into a HandleNotification
     * @description
     * 
     * This takes an `object` and converts it to a `HandleNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HandleNotification`.
     * @returns {HandleNotification}
     */
    public static _from_object (_o: { [_K in keyof (HandleNotification)]: (HandleNotification)[_K] }): HandleNotification {
        return new HandleNotification(_o.pendingNotification);
    }


}

/**
 * @summary The Leading Root Component Types of HandleNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HandleNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("pendingNotification", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of HandleNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HandleNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HandleNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HandleNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HandleNotification: $.ASN1Decoder<HandleNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandleNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandleNotification (el: _Element): HandleNotification {
    if (!_cached_decoder_for_HandleNotification) { _cached_decoder_for_HandleNotification = $._decode_implicit<HandleNotification>(() => function (el: _Element): HandleNotification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("HandleNotification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pendingNotification";
    let pendingNotification!: PendingNotification;
    pendingNotification = _decode_PendingNotification(sequence[0]);
    return new HandleNotification(
        pendingNotification,

    );
}); }
    return _cached_decoder_for_HandleNotification(el);
}

let _cached_encoder_for_HandleNotification: $.ASN1Encoder<HandleNotification> | null = null;

/**
 * @summary Encodes a(n) HandleNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandleNotification, encoded as an ASN.1 Element.
 */
export
function _encode_HandleNotification (value: HandleNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandleNotification) { _cached_encoder_for_HandleNotification = $._encode_implicit(_TagClass.context, 61, () => function (value: HandleNotification, elGetter: $.ASN1Encoder<HandleNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PendingNotification(value.pendingNotification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_HandleNotification(value, elGetter);
}


/* eslint-enable */
