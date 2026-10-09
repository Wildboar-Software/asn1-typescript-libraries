/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-ExportInvocation/ClientPartToKeep.ta.mjs";
// export { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-ExportInvocation/ClientPartToKeep.ta.mjs";
import { ClientPartNotToKeep, _decode_ClientPartNotToKeep, _encode_ClientPartNotToKeep } from "../ESFormat-ExportInvocation/ClientPartNotToKeep.ta.mjs";
// export { ClientPartNotToKeep, _decode_ClientPartNotToKeep, _encode_ClientPartNotToKeep } from "../ESFormat-ExportInvocation/ClientPartNotToKeep.ta.mjs";


/**
 * @summary ExportInvocation_esRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExportInvocation-esRequest ::= SEQUENCE {
 *     toKeep [1] ClientPartToKeep,
 *     notToKeep [2] ClientPartNotToKeep
 * }
 * ```
 * 
 * @class
 */
export
class ExportInvocation_esRequest {
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
     * @summary Restructures an object into a ExportInvocation_esRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ExportInvocation_esRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExportInvocation_esRequest`.
     * @returns {ExportInvocation_esRequest}
     */
    public static _from_object (_o: { [_K in keyof (ExportInvocation_esRequest)]: (ExportInvocation_esRequest)[_K] }): ExportInvocation_esRequest {
        return new ExportInvocation_esRequest(_o.toKeep, _o.notToKeep);
    }


}

/**
 * @summary The Leading Root Component Types of ExportInvocation_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExportInvocation_esRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("toKeep", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notToKeep", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExportInvocation_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExportInvocation_esRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExportInvocation_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExportInvocation_esRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExportInvocation_esRequest: $.ASN1Decoder<ExportInvocation_esRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExportInvocation_esRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExportInvocation_esRequest (el: _Element): ExportInvocation_esRequest {
    if (!_cached_decoder_for_ExportInvocation_esRequest) { _cached_decoder_for_ExportInvocation_esRequest = function (el: _Element): ExportInvocation_esRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ExportInvocation-esRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "toKeep";
    sequence[1].name = "notToKeep";
    let toKeep!: ClientPartToKeep;
    let notToKeep!: ClientPartNotToKeep;
    toKeep = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(sequence[0]);
    notToKeep = $._decode_explicit<ClientPartNotToKeep>(() => _decode_ClientPartNotToKeep)(sequence[1]);
    return new ExportInvocation_esRequest(
        toKeep,
        notToKeep,

    );
}; }
    return _cached_decoder_for_ExportInvocation_esRequest(el);
}

let _cached_encoder_for_ExportInvocation_esRequest: $.ASN1Encoder<ExportInvocation_esRequest> | null = null;

/**
 * @summary Encodes a(n) ExportInvocation_esRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExportInvocation_esRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ExportInvocation_esRequest (value: ExportInvocation_esRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExportInvocation_esRequest) { _cached_encoder_for_ExportInvocation_esRequest = function (value: ExportInvocation_esRequest, elGetter: $.ASN1Encoder<ExportInvocation_esRequest>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.toKeep, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ClientPartNotToKeep, $.BER)(value.notToKeep, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ExportInvocation_esRequest(value, elGetter);
}


/* eslint-enable */
