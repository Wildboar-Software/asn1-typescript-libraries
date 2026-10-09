/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-PeriodicQuerySchedule/ClientPartToKeep.ta.mjs";
import { ClientPartNotToKeep, _decode_ClientPartNotToKeep, _encode_ClientPartNotToKeep } from "../ESFormat-PeriodicQuerySchedule/ClientPartNotToKeep.ta.mjs";


/**
 * @summary PeriodicQuerySchedule_esRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicQuerySchedule-esRequest ::= SEQUENCE {
 *     toKeep [1] ClientPartToKeep,
 *     notToKeep [2] ClientPartNotToKeep
 * }
 * ```
 * 
 * @class
 */
export
class PeriodicQuerySchedule_esRequest {
    /**
     * @summary `toKeep`.
     * @public
     * @readonly
     */
    readonly toKeep: ClientPartToKeep;
    /**
     * @summary `notToKeep`.
     * @public
     * @readonly
     */
    readonly notToKeep: ClientPartNotToKeep;

    constructor (
        toKeep: ClientPartToKeep,
        notToKeep: ClientPartNotToKeep
    ) {
        this.toKeep = toKeep;
        this.notToKeep = notToKeep;
    }

    /**
     * @summary Restructures an object into a PeriodicQuerySchedule_esRequest
     * @description
     * 
     * This takes an `object` and converts it to a `PeriodicQuerySchedule_esRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeriodicQuerySchedule_esRequest`.
     * @returns {PeriodicQuerySchedule_esRequest}
     */
    public static _from_object (_o: { [_K in keyof (PeriodicQuerySchedule_esRequest)]: (PeriodicQuerySchedule_esRequest)[_K] }): PeriodicQuerySchedule_esRequest {
        return new PeriodicQuerySchedule_esRequest(_o.toKeep, _o.notToKeep);
    }


}

/**
 * @summary The Leading Root Component Types of PeriodicQuerySchedule_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeriodicQuerySchedule_esRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("toKeep", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notToKeep", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PeriodicQuerySchedule_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeriodicQuerySchedule_esRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeriodicQuerySchedule_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeriodicQuerySchedule_esRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PeriodicQuerySchedule_esRequest: $.ASN1Decoder<PeriodicQuerySchedule_esRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodicQuerySchedule_esRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeriodicQuerySchedule_esRequest (el: _Element): PeriodicQuerySchedule_esRequest {
    if (!_cached_decoder_for_PeriodicQuerySchedule_esRequest) { _cached_decoder_for_PeriodicQuerySchedule_esRequest = function (el: _Element): PeriodicQuerySchedule_esRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PeriodicQuerySchedule-esRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "toKeep";
    sequence[1].name = "notToKeep";
    let toKeep!: ClientPartToKeep;
    let notToKeep!: ClientPartNotToKeep;
    toKeep = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(sequence[0]);
    notToKeep = $._decode_explicit<ClientPartNotToKeep>(() => _decode_ClientPartNotToKeep)(sequence[1]);
    return new PeriodicQuerySchedule_esRequest(
        toKeep,
        notToKeep,

    );
}; }
    return _cached_decoder_for_PeriodicQuerySchedule_esRequest(el);
}

let _cached_encoder_for_PeriodicQuerySchedule_esRequest: $.ASN1Encoder<PeriodicQuerySchedule_esRequest> | null = null;

/**
 * @summary Encodes a(n) PeriodicQuerySchedule_esRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodicQuerySchedule_esRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PeriodicQuerySchedule_esRequest (value: PeriodicQuerySchedule_esRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeriodicQuerySchedule_esRequest) { _cached_encoder_for_PeriodicQuerySchedule_esRequest = function (value: PeriodicQuerySchedule_esRequest, elGetter: $.ASN1Encoder<PeriodicQuerySchedule_esRequest>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.toKeep, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ClientPartNotToKeep, $.BER)(value.notToKeep, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PeriodicQuerySchedule_esRequest(value, elGetter);
}


/* eslint-enable */
