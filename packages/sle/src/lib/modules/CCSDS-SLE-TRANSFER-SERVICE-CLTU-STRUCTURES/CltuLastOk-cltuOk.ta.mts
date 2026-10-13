/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CltuIdentification, _decode_CltuIdentification, _encode_CltuIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuIdentification.ta.mjs";
// export { CltuIdentification, _decode_CltuIdentification, _encode_CltuIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuIdentification.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";


/**
 * @summary CltuLastOk_cltuOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuLastOk-cltuOk ::= SEQUENCE
 *    {  cltuIdentification               CltuIdentification
 *    ,  radiationStopTime                Time
 *    }
 * ```
 * 
 * @class
 */
export
class CltuLastOk_cltuOk {
    /**
     * @summary `cltuIdentification`.
     * @public
     * @readonly
     */
    readonly cltuIdentification: CltuIdentification;
    /**
     * @summary `radiationStopTime`.
     * @public
     * @readonly
     */
    readonly radiationStopTime: Time;

    constructor (
        cltuIdentification: CltuIdentification,
        radiationStopTime: Time
    ) {
        this.cltuIdentification = cltuIdentification;
        this.radiationStopTime = radiationStopTime;
    }

    /**
     * @summary Restructures an object into a CltuLastOk_cltuOk
     * @description
     * 
     * This takes an `object` and converts it to a `CltuLastOk_cltuOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuLastOk_cltuOk`.
     * @returns {CltuLastOk_cltuOk}
     */
    public static _from_object (_o: { [_K in keyof (CltuLastOk_cltuOk)]: (CltuLastOk_cltuOk)[_K] }): CltuLastOk_cltuOk {
        return new CltuLastOk_cltuOk(_o.cltuIdentification, _o.radiationStopTime);
    }


}

/**
 * @summary The Leading Root Component Types of CltuLastOk_cltuOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuLastOk_cltuOk: $.ComponentSpec[] = [
    new $.ComponentSpec("cltuIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("radiationStopTime", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuLastOk_cltuOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuLastOk_cltuOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuLastOk_cltuOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuLastOk_cltuOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuLastOk_cltuOk: $.ASN1Decoder<CltuLastOk_cltuOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuLastOk_cltuOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuLastOk_cltuOk (el: _Element): CltuLastOk_cltuOk {
    if (!_cached_decoder_for_CltuLastOk_cltuOk) { _cached_decoder_for_CltuLastOk_cltuOk = function (el: _Element): CltuLastOk_cltuOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuLastOk-cltuOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cltuIdentification";
    sequence[1].name = "radiationStopTime";
    let cltuIdentification!: CltuIdentification;
    let radiationStopTime!: Time;
    cltuIdentification = _decode_CltuIdentification(sequence[0]);
    radiationStopTime = _decode_Time(sequence[1]);
    return new CltuLastOk_cltuOk(
        cltuIdentification,
        radiationStopTime,

    );
}; }
    return _cached_decoder_for_CltuLastOk_cltuOk(el);
}

let _cached_encoder_for_CltuLastOk_cltuOk: $.ASN1Encoder<CltuLastOk_cltuOk> | null = null;

/**
 * @summary Encodes a(n) CltuLastOk_cltuOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuLastOk_cltuOk, encoded as an ASN.1 Element.
 */
export
function _encode_CltuLastOk_cltuOk (value: CltuLastOk_cltuOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuLastOk_cltuOk) { _cached_encoder_for_CltuLastOk_cltuOk = function (value: CltuLastOk_cltuOk, elGetter: $.ASN1Encoder<CltuLastOk_cltuOk>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_CltuIdentification(value.cltuIdentification, $.BER),
        /* REQUIRED   */ _encode_Time(value.radiationStopTime, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuLastOk_cltuOk(value, elGetter);
}


/* eslint-enable */
