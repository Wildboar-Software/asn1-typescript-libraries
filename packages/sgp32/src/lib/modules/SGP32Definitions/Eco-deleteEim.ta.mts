/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Eco_deleteEim
 * @description
 *
 * deleteEim eCO inside a signed eUICC Package. It names the Associated eIM
 * whose configuration the eUICC removes. Only eimId is supplied. If the target
 * is the requesting eIM, the eUICC signs the eCO result before deleting the
 * configuration. If the target is the last Associated eIM, the result is
 * lastEimDeleted and the eUICC again accepts Unsigned eCO and
 * ES10b.AddInitialEim.
 *
 * SGP.32 v1.2, sections 2.11.1.1, 3.5.1.2, and 5.13.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Eco-deleteEim ::= SEQUENCE {
 *     eimId [0] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class Eco_deleteEim {
    constructor (
        /**
         * @summary `eimId`.
         * @description
         *
         * eimId of the target Associated eIM. It uniquely identifies that eIM in the
         * eUICC list. The text is at most 128 bytes. A missing eimId yields
         * commandError on DeleteEimResult.
         *
         * SGP.32 v1.2, sections 3.5.1.2 and 4.3.
         * @public
         * @readonly
         */
        readonly eimId: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a Eco_deleteEim
     * @description
     * 
     * This takes an `object` and converts it to a `Eco_deleteEim`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Eco_deleteEim`.
     * @returns {Eco_deleteEim}
     */
    public static _from_object (_o: { [_K in keyof (Eco_deleteEim)]: (Eco_deleteEim)[_K] }): Eco_deleteEim {
        return new Eco_deleteEim(_o.eimId);
    }


}

/**
 * @summary The Leading Root Component Types of Eco_deleteEim
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Eco_deleteEim: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Eco_deleteEim
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Eco_deleteEim: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Eco_deleteEim
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Eco_deleteEim: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Eco_deleteEim: $.ASN1Decoder<Eco_deleteEim> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Eco_deleteEim
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Eco_deleteEim (el: _Element): Eco_deleteEim {
    if (!_cached_decoder_for_Eco_deleteEim) { _cached_decoder_for_Eco_deleteEim = function (el: _Element): Eco_deleteEim {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Eco-deleteEim contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eimId";
    const eimId: UTF8String = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    return new Eco_deleteEim(
        eimId,

    );
}; }
    return _cached_decoder_for_Eco_deleteEim(el);
}

let _cached_encoder_for_Eco_deleteEim: $.ASN1Encoder<Eco_deleteEim> | null = null;

/**
 * @summary Encodes a(n) Eco_deleteEim into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Eco_deleteEim, encoded as an ASN.1 Element.
 */
export
function _encode_Eco_deleteEim (value: Eco_deleteEim, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Eco_deleteEim) { _cached_encoder_for_Eco_deleteEim = function (value: Eco_deleteEim): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Eco_deleteEim(value, elGetter);
}


/* eslint-enable */
