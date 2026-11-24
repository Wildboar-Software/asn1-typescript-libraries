/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Quality, _decode_Quality, _encode_Quality } from "../CBEFF-DATA-ELEMENTS/Quality.ta.mjs";


/**
 * @summary ConstructedQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConstructedQuality ::= SEQUENCE {
 *     organization    [0] INTEGER (0..65535),
 *     id              [1] INTEGER (0..65535),
 *     score           [2] Quality
 * }
 * ```
 * 
 * @class
 */
export
class ConstructedQuality {
    /**
     * @summary `organization`.
     * @public
     * @readonly
     */
    readonly organization: INTEGER;
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: INTEGER;
    /**
     * @summary `score`.
     * @public
     * @readonly
     */
    readonly score: Quality;

    constructor (
        organization: INTEGER,
        id: INTEGER,
        score: Quality
    ) {
        this.organization = organization;
        this.id = id;
        this.score = score;
    }

    /**
     * @summary Restructures an object into a ConstructedQuality
     * @description
     * 
     * This takes an `object` and converts it to a `ConstructedQuality`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConstructedQuality`.
     * @returns {ConstructedQuality}
     */
    public static _from_object (_o: { [_K in keyof (ConstructedQuality)]: (ConstructedQuality)[_K] }): ConstructedQuality {
        return new ConstructedQuality(_o.organization, _o.id, _o.score);
    }


}

/**
 * @summary The Leading Root Component Types of ConstructedQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConstructedQuality: $.ComponentSpec[] = [
    new $.ComponentSpec("organization", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ConstructedQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConstructedQuality: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConstructedQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConstructedQuality: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConstructedQuality: $.ASN1Decoder<ConstructedQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConstructedQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConstructedQuality (el: _Element): ConstructedQuality {
    if (!_cached_decoder_for_ConstructedQuality) { _cached_decoder_for_ConstructedQuality = function (el: _Element): ConstructedQuality {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ConstructedQuality contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "organization";
    sequence[1].name = "id";
    sequence[2].name = "score";
    const organization: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    const id: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    const score: Quality = $._decode_implicit<Quality>(() => _decode_Quality)(sequence[2]);
    return new ConstructedQuality(
        organization,
        id,
        score,

    );
}; }
    return _cached_decoder_for_ConstructedQuality(el);
}

let _cached_encoder_for_ConstructedQuality: $.ASN1Encoder<ConstructedQuality> | null = null;

/**
 * @summary Encodes a(n) ConstructedQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConstructedQuality, encoded as an ASN.1 Element.
 */
export
function _encode_ConstructedQuality (value: ConstructedQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConstructedQuality) { _cached_encoder_for_ConstructedQuality = function (value: ConstructedQuality, elGetter: $.ASN1Encoder<ConstructedQuality>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.organization, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.id, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Quality, $.BER)(value.score, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ConstructedQuality(value, elGetter);
}


/* eslint-enable */
