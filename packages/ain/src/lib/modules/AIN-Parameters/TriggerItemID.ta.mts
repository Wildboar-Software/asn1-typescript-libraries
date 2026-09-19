/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DPNumber, _decode_DPNumber, _encode_DPNumber } from "../AIN-Parameters/DPNumber.ta.mjs";
// export { DPNumber, _decode_DPNumber, _encode_DPNumber } from "../AIN-Parameters/DPNumber.ta.mjs";
import { TriggerItemSubnumber, _decode_TriggerItemSubnumber, _encode_TriggerItemSubnumber } from "../AIN-Parameters/TriggerItemSubnumber.ta.mjs";
// export { TriggerItemSubnumber, _decode_TriggerItemSubnumber, _encode_TriggerItemSubnumber } from "../AIN-Parameters/TriggerItemSubnumber.ta.mjs";


/**
 * @summary TriggerItemID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerItemID ::= SEQUENCE{
 *         dPNumber [1] IMPLICIT DPNumber,
 *         triggerItemSubnumber [2] IMPLICIT TriggerItemSubnumber
 *     }
 * ```
 * 
 * @class
 */
export
class TriggerItemID {
    constructor (
        /**
         * @summary `dPNumber`.
         * @public
         * @readonly
         */
        readonly dPNumber: DPNumber,
        /**
         * @summary `triggerItemSubnumber`.
         * @public
         * @readonly
         */
        readonly triggerItemSubnumber: TriggerItemSubnumber
    ) {}

    /**
     * @summary Restructures an object into a TriggerItemID
     * @description
     * 
     * This takes an `object` and converts it to a `TriggerItemID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerItemID`.
     * @returns {TriggerItemID}
     */
    public static _from_object (_o: { [_K in keyof (TriggerItemID)]: (TriggerItemID)[_K] }): TriggerItemID {
        return new TriggerItemID(_o.dPNumber, _o.triggerItemSubnumber);
    }


}

/**
 * @summary The Leading Root Component Types of TriggerItemID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TriggerItemID: $.ComponentSpec[] = [
    new $.ComponentSpec("dPNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("triggerItemSubnumber", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TriggerItemID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TriggerItemID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TriggerItemID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TriggerItemID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TriggerItemID: $.ASN1Decoder<TriggerItemID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerItemID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerItemID (el: _Element): TriggerItemID {
    if (!_cached_decoder_for_TriggerItemID) { _cached_decoder_for_TriggerItemID = function (el: _Element): TriggerItemID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TriggerItemID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dPNumber";
    sequence[1].name = "triggerItemSubnumber";
    let dPNumber!: DPNumber;
    let triggerItemSubnumber!: TriggerItemSubnumber;
    dPNumber = $._decode_implicit<DPNumber>(() => _decode_DPNumber)(sequence[0]);
    triggerItemSubnumber = $._decode_implicit<TriggerItemSubnumber>(() => _decode_TriggerItemSubnumber)(sequence[1]);
    return new TriggerItemID(
        dPNumber,
        triggerItemSubnumber,

    );
}; }
    return _cached_decoder_for_TriggerItemID(el);
}

let _cached_encoder_for_TriggerItemID: $.ASN1Encoder<TriggerItemID> | null = null;

/**
 * @summary Encodes a(n) TriggerItemID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerItemID, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerItemID (value: TriggerItemID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerItemID) { _cached_encoder_for_TriggerItemID = function (value: TriggerItemID, elGetter: $.ASN1Encoder<TriggerItemID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DPNumber, $.BER)(value.dPNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TriggerItemSubnumber, $.BER)(value.triggerItemSubnumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TriggerItemID(value, elGetter);
}


/* eslint-enable */
