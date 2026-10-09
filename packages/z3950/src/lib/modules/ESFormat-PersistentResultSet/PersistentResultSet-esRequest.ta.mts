/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartNotToKeep, _decode_ClientPartNotToKeep, _encode_ClientPartNotToKeep } from "../ESFormat-PersistentResultSet/ClientPartNotToKeep.ta.mjs";
// export { ClientPartNotToKeep, _decode_ClientPartNotToKeep, _encode_ClientPartNotToKeep } from "../ESFormat-PersistentResultSet/ClientPartNotToKeep.ta.mjs";


/**
 * @summary PersistentResultSet_esRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersistentResultSet-esRequest ::= SEQUENCE {
 *     toKeep [1] IMPLICIT NULL,
 *     notToKeep [2] ClientPartNotToKeep OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PersistentResultSet_esRequest {
    /**
     * @summary `toKeep`.
     * @public
     * @readonly
     */
    readonly toKeep: NULL;
    /**
     * @summary `notToKeep`.
     * @public
     * @readonly
     */
    readonly notToKeep: OPTIONAL<ClientPartNotToKeep>;

    constructor (
        toKeep: NULL,
        notToKeep: OPTIONAL<ClientPartNotToKeep>
    ) {
        this.toKeep = toKeep;
        this.notToKeep = notToKeep;
    }

    /**
     * @summary Restructures an object into a PersistentResultSet_esRequest
     * @description
     * 
     * This takes an `object` and converts it to a `PersistentResultSet_esRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PersistentResultSet_esRequest`.
     * @returns {PersistentResultSet_esRequest}
     */
    public static _from_object (_o: { [_K in keyof (PersistentResultSet_esRequest)]: (PersistentResultSet_esRequest)[_K] }): PersistentResultSet_esRequest {
        return new PersistentResultSet_esRequest(_o.toKeep, _o.notToKeep);
    }


}

/**
 * @summary The Leading Root Component Types of PersistentResultSet_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PersistentResultSet_esRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("toKeep", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notToKeep", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PersistentResultSet_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PersistentResultSet_esRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PersistentResultSet_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PersistentResultSet_esRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PersistentResultSet_esRequest: $.ASN1Decoder<PersistentResultSet_esRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PersistentResultSet_esRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PersistentResultSet_esRequest (el: _Element): PersistentResultSet_esRequest {
    if (!_cached_decoder_for_PersistentResultSet_esRequest) { _cached_decoder_for_PersistentResultSet_esRequest = function (el: _Element): PersistentResultSet_esRequest {
    let toKeep!: NULL;
    let notToKeep: OPTIONAL<ClientPartNotToKeep>;
    const callbacks: $.DecodingMap = {
        "toKeep": (_el: _Element): void => { toKeep = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "notToKeep": (_el: _Element): void => { notToKeep = $._decode_explicit<ClientPartNotToKeep>(() => _decode_ClientPartNotToKeep)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PersistentResultSet_esRequest,
        _extension_additions_list_spec_for_PersistentResultSet_esRequest,
        _root_component_type_list_2_spec_for_PersistentResultSet_esRequest,
        undefined,
    );
    return new PersistentResultSet_esRequest(
        toKeep,
        notToKeep
    );
}; }
    return _cached_decoder_for_PersistentResultSet_esRequest(el);
}

let _cached_encoder_for_PersistentResultSet_esRequest: $.ASN1Encoder<PersistentResultSet_esRequest> | null = null;

/**
 * @summary Encodes a(n) PersistentResultSet_esRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersistentResultSet_esRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PersistentResultSet_esRequest (value: PersistentResultSet_esRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PersistentResultSet_esRequest) { _cached_encoder_for_PersistentResultSet_esRequest = function (value: PersistentResultSet_esRequest, elGetter: $.ASN1Encoder<PersistentResultSet_esRequest>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.toKeep, $.BER);
    if (value.notToKeep !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_ClientPartNotToKeep, $.BER)(value.notToKeep, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PersistentResultSet_esRequest(value, elGetter);
}


/* eslint-enable */
