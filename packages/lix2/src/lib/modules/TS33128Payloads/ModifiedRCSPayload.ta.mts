/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncapsulatedRCSPayload, _decode_EncapsulatedRCSPayload, _encode_EncapsulatedRCSPayload } from "../TS33128Payloads/EncapsulatedRCSPayload.ta.mjs";
// export { EncapsulatedRCSPayload, _decode_EncapsulatedRCSPayload, _encode_EncapsulatedRCSPayload } from "../TS33128Payloads/EncapsulatedRCSPayload.ta.mjs";
import { PayloadModifications, _decode_PayloadModifications, _encode_PayloadModifications } from "../TS33128Payloads/PayloadModifications.ta.mjs";
// export { PayloadModifications, _decode_PayloadModifications, _encode_PayloadModifications } from "../TS33128Payloads/PayloadModifications.ta.mjs";


/**
 * @summary ModifiedRCSPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifiedRCSPayload ::= SEQUENCE
 * {
 *     modifiedRCSPayload [1] EncapsulatedRCSPayload,
 *     modifications      [2] PayloadModifications
 * }
 * ```
 * 
 * @class
 */
export
class ModifiedRCSPayload {
    constructor (
        /**
         * @summary `modifiedRCSPayload`.
         * @public
         * @readonly
         */
        readonly modifiedRCSPayload: EncapsulatedRCSPayload,
        /**
         * @summary `modifications`.
         * @public
         * @readonly
         */
        readonly modifications: PayloadModifications
    ) {}

    /**
     * @summary Restructures an object into a ModifiedRCSPayload
     * @description
     * 
     * This takes an `object` and converts it to a `ModifiedRCSPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifiedRCSPayload`.
     * @returns {ModifiedRCSPayload}
     */
    public static _from_object (_o: { [_K in keyof (ModifiedRCSPayload)]: (ModifiedRCSPayload)[_K] }): ModifiedRCSPayload {
        return new ModifiedRCSPayload(_o.modifiedRCSPayload, _o.modifications);
    }


}

/**
 * @summary The Leading Root Component Types of ModifiedRCSPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModifiedRCSPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("modifiedRCSPayload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("modifications", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ModifiedRCSPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModifiedRCSPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModifiedRCSPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModifiedRCSPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModifiedRCSPayload: $.ASN1Decoder<ModifiedRCSPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifiedRCSPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifiedRCSPayload (el: _Element): ModifiedRCSPayload {
    if (!_cached_decoder_for_ModifiedRCSPayload) { _cached_decoder_for_ModifiedRCSPayload = function (el: _Element): ModifiedRCSPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ModifiedRCSPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modifiedRCSPayload";
    sequence[1].name = "modifications";
    let modifiedRCSPayload!: EncapsulatedRCSPayload;
    let modifications!: PayloadModifications;
    modifiedRCSPayload = $._decode_explicit<EncapsulatedRCSPayload>(() => _decode_EncapsulatedRCSPayload)(sequence[0]);
    modifications = $._decode_implicit<PayloadModifications>(() => _decode_PayloadModifications)(sequence[1]);
    return new ModifiedRCSPayload(
        modifiedRCSPayload,
        modifications,

    );
}; }
    return _cached_decoder_for_ModifiedRCSPayload(el);
}

let _cached_encoder_for_ModifiedRCSPayload: $.ASN1Encoder<ModifiedRCSPayload> | null = null;

/**
 * @summary Encodes a(n) ModifiedRCSPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifiedRCSPayload, encoded as an ASN.1 Element.
 */
export
function _encode_ModifiedRCSPayload (value: ModifiedRCSPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifiedRCSPayload) { _cached_encoder_for_ModifiedRCSPayload = function (value: ModifiedRCSPayload, elGetter: $.ASN1Encoder<ModifiedRCSPayload>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_EncapsulatedRCSPayload, $.BER)(value.modifiedRCSPayload, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PayloadModifications, $.BER)(value.modifications, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModifiedRCSPayload(value, elGetter);
}


/* eslint-enable */
