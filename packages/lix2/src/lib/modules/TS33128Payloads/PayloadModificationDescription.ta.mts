/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ModificationLocation, _decode_ModificationLocation, _encode_ModificationLocation } from "../TS33128Payloads/ModificationLocation.ta.mjs";
// export { ModificationLocation, _decode_ModificationLocation, _encode_ModificationLocation } from "../TS33128Payloads/ModificationLocation.ta.mjs";
import { ModificationType, _decode_ModificationType, _encode_ModificationType } from "../TS33128Payloads/ModificationType.ta.mjs";
// export { ModificationType, _decode_ModificationType, _encode_ModificationType } from "../TS33128Payloads/ModificationType.ta.mjs";


/**
 * @summary PayloadModificationDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadModificationDescription ::= SEQUENCE
 * {
 *     modificationLocation [1] ModificationLocation,
 *     modificationType     [2] ModificationType
 * }
 * ```
 * 
 * @class
 */
export
class PayloadModificationDescription {
    constructor (
        /**
         * @summary `modificationLocation`.
         * @public
         * @readonly
         */
        readonly modificationLocation: ModificationLocation,
        /**
         * @summary `modificationType`.
         * @public
         * @readonly
         */
        readonly modificationType: ModificationType
    ) {}

    /**
     * @summary Restructures an object into a PayloadModificationDescription
     * @description
     * 
     * This takes an `object` and converts it to a `PayloadModificationDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PayloadModificationDescription`.
     * @returns {PayloadModificationDescription}
     */
    public static _from_object (_o: { [_K in keyof (PayloadModificationDescription)]: (PayloadModificationDescription)[_K] }): PayloadModificationDescription {
        return new PayloadModificationDescription(_o.modificationLocation, _o.modificationType);
    }


}

/**
 * @summary The Leading Root Component Types of PayloadModificationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PayloadModificationDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("modificationLocation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("modificationType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PayloadModificationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PayloadModificationDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PayloadModificationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PayloadModificationDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PayloadModificationDescription: $.ASN1Decoder<PayloadModificationDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadModificationDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadModificationDescription (el: _Element): PayloadModificationDescription {
    if (!_cached_decoder_for_PayloadModificationDescription) { _cached_decoder_for_PayloadModificationDescription = function (el: _Element): PayloadModificationDescription {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PayloadModificationDescription contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modificationLocation";
    sequence[1].name = "modificationType";
    let modificationLocation!: ModificationLocation;
    let modificationType!: ModificationType;
    modificationLocation = $._decode_explicit<ModificationLocation>(() => _decode_ModificationLocation)(sequence[0]);
    modificationType = $._decode_explicit<ModificationType>(() => _decode_ModificationType)(sequence[1]);
    return new PayloadModificationDescription(
        modificationLocation,
        modificationType,

    );
}; }
    return _cached_decoder_for_PayloadModificationDescription(el);
}

let _cached_encoder_for_PayloadModificationDescription: $.ASN1Encoder<PayloadModificationDescription> | null = null;

/**
 * @summary Encodes a(n) PayloadModificationDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadModificationDescription, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadModificationDescription (value: PayloadModificationDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadModificationDescription) { _cached_encoder_for_PayloadModificationDescription = function (value: PayloadModificationDescription, elGetter: $.ASN1Encoder<PayloadModificationDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ModificationLocation, $.BER)(value.modificationLocation, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ModificationType, $.BER)(value.modificationType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PayloadModificationDescription(value, elGetter);
}


/* eslint-enable */
