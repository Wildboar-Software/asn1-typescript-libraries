/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-PersistentQuery/ClientPartToKeep.ta.mjs";
import { ClientPartNotToKeep, _decode_ClientPartNotToKeep, _encode_ClientPartNotToKeep } from "../ESFormat-PersistentQuery/ClientPartNotToKeep.ta.mjs";


/**
 * @summary PersistentQuery_esRequest
 * @description
 * 
 * Client parameters of a Persistent Query request. Database names and
 * additional search information may be omitted; the query or the package
 * to copy may not.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.2, EXT.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersistentQuery-esRequest ::= SEQUENCE {
 *     toKeep [1] ClientPartToKeep OPTIONAL,
 *     notToKeep [2] ClientPartNotToKeep
 * }
 * ```
 * 
 * @class
 */
export
class PersistentQuery_esRequest {
    /**
     * @summary `toKeep`.
     * @description
     * 
     * Optional database names and additional search information, retained in
     * the task package.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.2.
     * 
     * @public
     * @readonly
     */
    readonly toKeep: OPTIONAL<ClientPartToKeep>;
    /**
     * @summary `notToKeep`.
     * @description
     * 
     * Either the query to save or the name of another persistent query to
     * copy. Not retained as submitted; the server part holds the actual query.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.2.
     * 
     * @public
     * @readonly
     */
    readonly notToKeep: ClientPartNotToKeep;

    constructor (
        toKeep: OPTIONAL<ClientPartToKeep>,
        notToKeep: ClientPartNotToKeep
    ) {
        this.toKeep = toKeep;
        this.notToKeep = notToKeep;
    }

    /**
     * @summary Restructures an object into a PersistentQuery_esRequest
     * @description
     * 
     * This takes an `object` and converts it to a `PersistentQuery_esRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PersistentQuery_esRequest`.
     * @returns {PersistentQuery_esRequest}
     */
    public static _from_object (_o: { [_K in keyof (PersistentQuery_esRequest)]: (PersistentQuery_esRequest)[_K] }): PersistentQuery_esRequest {
        return new PersistentQuery_esRequest(_o.toKeep, _o.notToKeep);
    }


}

/**
 * @summary The Leading Root Component Types of PersistentQuery_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PersistentQuery_esRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("toKeep", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notToKeep", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PersistentQuery_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PersistentQuery_esRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PersistentQuery_esRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PersistentQuery_esRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PersistentQuery_esRequest: $.ASN1Decoder<PersistentQuery_esRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PersistentQuery_esRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PersistentQuery_esRequest (el: _Element): PersistentQuery_esRequest {
    if (!_cached_decoder_for_PersistentQuery_esRequest) { _cached_decoder_for_PersistentQuery_esRequest = function (el: _Element): PersistentQuery_esRequest {
    let toKeep: OPTIONAL<ClientPartToKeep>;
    let notToKeep!: ClientPartNotToKeep;
    const callbacks: $.DecodingMap = {
        "toKeep": (_el: _Element): void => { toKeep = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(_el); },
        "notToKeep": (_el: _Element): void => { notToKeep = $._decode_explicit<ClientPartNotToKeep>(() => _decode_ClientPartNotToKeep)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PersistentQuery_esRequest,
        _extension_additions_list_spec_for_PersistentQuery_esRequest,
        _root_component_type_list_2_spec_for_PersistentQuery_esRequest,
        undefined,
    );
    return new PersistentQuery_esRequest(
        toKeep,
        notToKeep
    );
}; }
    return _cached_decoder_for_PersistentQuery_esRequest(el);
}

let _cached_encoder_for_PersistentQuery_esRequest: $.ASN1Encoder<PersistentQuery_esRequest> | null = null;

/**
 * @summary Encodes a(n) PersistentQuery_esRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersistentQuery_esRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PersistentQuery_esRequest (value: PersistentQuery_esRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PersistentQuery_esRequest) { _cached_encoder_for_PersistentQuery_esRequest = function (value: PersistentQuery_esRequest, elGetter: $.ASN1Encoder<PersistentQuery_esRequest>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.toKeep !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.toKeep, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ClientPartNotToKeep, $.BER)(value.notToKeep, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PersistentQuery_esRequest(value, elGetter);
}


/* eslint-enable */
