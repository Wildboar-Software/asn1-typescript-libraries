/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-Update/ClientPartToKeep.ta.mjs";
import { ClientPartNotToKeep, _decode_ClientPartNotToKeep, _encode_ClientPartNotToKeep } from "../ESFormat-Update/ClientPartNotToKeep.ta.mjs";


/**
 * @summary Update_esRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Update-esRequest ::= SEQUENCE {
 *     toKeep [1] ClientPartToKeep,
 *     notToKeep [2] ClientPartNotToKeep
 * }
 * ```
 * 
 * @class
 */
export
class Update_esRequest {
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
     * @summary Restructures an object into a Update_esRequest
     * @description
     * 
     * This takes an `object` and converts it to a `Update_esRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Update_esRequest`.
     * @returns {Update_esRequest}
     */
    public static _from_object (_o: { [_K in keyof (Update_esRequest)]: (Update_esRequest)[_K] }): Update_esRequest {
        return new Update_esRequest(_o.toKeep, _o.notToKeep);
    }


}

/**
 * @summary The Leading Root Component Types of Update_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Update_esRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("toKeep", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notToKeep", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Update_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Update_esRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Update_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Update_esRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Update_esRequest: $.ASN1Decoder<Update_esRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Update_esRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Update_esRequest (el: _Element): Update_esRequest {
    if (!_cached_decoder_for_Update_esRequest) { _cached_decoder_for_Update_esRequest = function (el: _Element): Update_esRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Update-esRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "toKeep";
    sequence[1].name = "notToKeep";
    let toKeep!: ClientPartToKeep;
    let notToKeep!: ClientPartNotToKeep;
    toKeep = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(sequence[0]);
    notToKeep = $._decode_explicit<ClientPartNotToKeep>(() => _decode_ClientPartNotToKeep)(sequence[1]);
    return new Update_esRequest(
        toKeep,
        notToKeep,

    );
}; }
    return _cached_decoder_for_Update_esRequest(el);
}

let _cached_encoder_for_Update_esRequest: $.ASN1Encoder<Update_esRequest> | null = null;

/**
 * @summary Encodes a(n) Update_esRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Update_esRequest, encoded as an ASN.1 Element.
 */
export
function _encode_Update_esRequest (value: Update_esRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Update_esRequest) { _cached_encoder_for_Update_esRequest = function (value: Update_esRequest, elGetter: $.ASN1Encoder<Update_esRequest>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.toKeep, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ClientPartNotToKeep, $.BER)(value.notToKeep, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Update_esRequest(value, elGetter);
}


/* eslint-enable */
