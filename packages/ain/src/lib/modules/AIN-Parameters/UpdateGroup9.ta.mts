/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service9, _decode_Service9, _encode_Service9, _enum_for_Service9 } from "../AIN-Parameters/Service9.ta.mjs";
// export { Service9, _enum_for_Service9, Service9_speedCalling /* IMPORTED_LONG_ENUMERATION_ITEM */, speedCalling /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service9, _encode_Service9 } from "../AIN-Parameters/Service9.ta.mjs";
import { Action9, _decode_Action9, _encode_Action9 } from "../AIN-Parameters/Action9.ta.mjs";
// export { Action9, _decode_Action9, _encode_Action9 } from "../AIN-Parameters/Action9.ta.mjs";


/**
 * @summary UpdateGroup9
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup9 ::= SEQUENCE{
 *         service9    [1] IMPLICIT Service9,
 *         action9      Action9
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup9 {
    constructor (
        /**
         * @summary `service9`.
         * @public
         * @readonly
         */
        readonly service9: Service9,
        /**
         * @summary `action9`.
         * @public
         * @readonly
         */
        readonly action9: Action9
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup9
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup9`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup9`.
     * @returns {UpdateGroup9}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup9)]: (UpdateGroup9)[_K] }): UpdateGroup9 {
        return new UpdateGroup9(_o.service9, _o.action9);
    }

        /**
         * @summary The enum used as the type of the component `service9`
         * @public
         * @static
         */

    public static _enum_for_service9 = _enum_for_Service9;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup9
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup9: $.ComponentSpec[] = [
    new $.ComponentSpec("service9", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action9", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup9
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup9: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup9
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup9: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup9: $.ASN1Decoder<UpdateGroup9> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup9
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup9 (el: _Element): UpdateGroup9 {
    if (!_cached_decoder_for_UpdateGroup9) { _cached_decoder_for_UpdateGroup9 = function (el: _Element): UpdateGroup9 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup9 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service9";
    sequence[1].name = "action9";
    let service9!: Service9;
    let action9!: Action9;
    service9 = $._decode_implicit<Service9>(() => _decode_Service9)(sequence[0]);
    action9 = _decode_Action9(sequence[1]);
    return new UpdateGroup9(
        service9,
        action9,

    );
}; }
    return _cached_decoder_for_UpdateGroup9(el);
}

let _cached_encoder_for_UpdateGroup9: $.ASN1Encoder<UpdateGroup9> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup9 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup9, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup9 (value: UpdateGroup9, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup9) { _cached_encoder_for_UpdateGroup9 = function (value: UpdateGroup9, elGetter: $.ASN1Encoder<UpdateGroup9>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service9, $.BER)(value.service9, $.BER),
            /* REQUIRED   */ _encode_Action9(value.action9, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup9(value, elGetter);
}


/* eslint-enable */
