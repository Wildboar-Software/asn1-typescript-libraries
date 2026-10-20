/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/AlternativeId.ta.mjs";

/**
 * @summary PumIdentity_both
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumIdentity-both ::= [11] IMPLICIT SEQUENCE {
 *     pisnNumber PartyNumber,
 *     alternativeId AlternativeId
 * }
 * ```
 * 
 * @class
 */
export
class PumIdentity_both {
    /**
     * @summary `pisnNumber`.
     * @public
     * @readonly
     */
    readonly pisnNumber: PartyNumber;
    /**
     * @summary `alternativeId`.
     * @public
     * @readonly
     */
    readonly alternativeId: AlternativeId;

    constructor (
        pisnNumber: PartyNumber,
        alternativeId: AlternativeId
    ) {
        this.pisnNumber = pisnNumber;
        this.alternativeId = alternativeId;
    }

    /**
     * @summary Restructures an object into a PumIdentity_both
     * @description
     * 
     * This takes an `object` and converts it to a `PumIdentity_both`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PumIdentity_both`.
     * @returns {PumIdentity_both}
     */
    public static _from_object (_o: { [_K in keyof (PumIdentity_both)]: (PumIdentity_both)[_K] }): PumIdentity_both {
        return new PumIdentity_both(_o.pisnNumber, _o.alternativeId);
    }

}

/**
 * @summary The Leading Root Component Types of PumIdentity_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PumIdentity_both: $.ComponentSpec[] = [
    new $.ComponentSpec("pisnNumber", false, $.hasAnyTag),
    new $.ComponentSpec("alternativeId", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of PumIdentity_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PumIdentity_both: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PumIdentity_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PumIdentity_both: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PumIdentity_both: $.ASN1Decoder<PumIdentity_both> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumIdentity_both
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumIdentity_both (el: _Element): PumIdentity_both {
    if (!_cached_decoder_for_PumIdentity_both) { _cached_decoder_for_PumIdentity_both = function (el: _Element): PumIdentity_both {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PumIdentity-both contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pisnNumber";
    sequence[1].name = "alternativeId";
    const pisnNumber: PartyNumber = _decode_PartyNumber(sequence[0]);
    const alternativeId: AlternativeId = _decode_AlternativeId(sequence[1]);
    return new PumIdentity_both(
        pisnNumber,
        alternativeId,

    );
}; }
    return _cached_decoder_for_PumIdentity_both(el);
}

let _cached_encoder_for_PumIdentity_both: $.ASN1Encoder<PumIdentity_both> | null = null;

/**
 * @summary Encodes a(n) PumIdentity_both into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumIdentity_both, encoded as an ASN.1 Element.
 */
export
function _encode_PumIdentity_both (value: PumIdentity_both, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumIdentity_both) { _cached_encoder_for_PumIdentity_both = function (value: PumIdentity_both, _elGetter: $.ASN1Encoder<PumIdentity_both>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_PartyNumber(value.pisnNumber, $.BER),
        /* REQUIRED   */ _encode_AlternativeId(value.alternativeId, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PumIdentity_both(value, elGetter);
}

/* eslint-enable */
