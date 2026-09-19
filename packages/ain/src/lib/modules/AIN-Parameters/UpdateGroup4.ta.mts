/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service4, _decode_Service4, _encode_Service4, _enum_for_Service4 } from "../AIN-Parameters/Service4.ta.mjs";
// export { Service4, _enum_for_Service4, Service4_callForwardingVariable /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingVariable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service4_callForwardingDontAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingDontAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service4_callForwardingBusyLine /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingBusyLine /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service4, _encode_Service4 } from "../AIN-Parameters/Service4.ta.mjs";
import { Action4, _decode_Action4, _encode_Action4 } from "../AIN-Parameters/Action4.ta.mjs";
// export { Action4, _decode_Action4, _encode_Action4 } from "../AIN-Parameters/Action4.ta.mjs";


/**
 * @summary UpdateGroup4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup4 ::= SEQUENCE{
 *         service4 [1] IMPLICIT Service4,
 *         action4 Action4
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup4 {
    constructor (
        /**
         * @summary `service4`.
         * @public
         * @readonly
         */
        readonly service4: Service4,
        /**
         * @summary `action4`.
         * @public
         * @readonly
         */
        readonly action4: Action4
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup4
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup4`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup4`.
     * @returns {UpdateGroup4}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup4)]: (UpdateGroup4)[_K] }): UpdateGroup4 {
        return new UpdateGroup4(_o.service4, _o.action4);
    }

        /**
         * @summary The enum used as the type of the component `service4`
         * @public
         * @static
         */

    public static _enum_for_service4 = _enum_for_Service4;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup4
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup4: $.ComponentSpec[] = [
    new $.ComponentSpec("service4", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action4", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup4
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup4: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup4
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup4: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup4: $.ASN1Decoder<UpdateGroup4> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup4
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup4 (el: _Element): UpdateGroup4 {
    if (!_cached_decoder_for_UpdateGroup4) { _cached_decoder_for_UpdateGroup4 = function (el: _Element): UpdateGroup4 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup4 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service4";
    sequence[1].name = "action4";
    let service4!: Service4;
    let action4!: Action4;
    service4 = $._decode_implicit<Service4>(() => _decode_Service4)(sequence[0]);
    action4 = _decode_Action4(sequence[1]);
    return new UpdateGroup4(
        service4,
        action4,

    );
}; }
    return _cached_decoder_for_UpdateGroup4(el);
}

let _cached_encoder_for_UpdateGroup4: $.ASN1Encoder<UpdateGroup4> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup4 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup4, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup4 (value: UpdateGroup4, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup4) { _cached_encoder_for_UpdateGroup4 = function (value: UpdateGroup4, elGetter: $.ASN1Encoder<UpdateGroup4>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service4, $.BER)(value.service4, $.BER),
            /* REQUIRED   */ _encode_Action4(value.action4, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup4(value, elGetter);
}


/* eslint-enable */
