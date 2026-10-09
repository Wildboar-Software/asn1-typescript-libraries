/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary KRBRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KRBRequest ::= SEQUENCE {
 *     service     [1] IMPLICIT InternationalString,
 *     instance    [2] IMPLICIT InternationalString OPTIONAL,
 *     realm       [3] IMPLICIT InternationalString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class KRBRequest {
    /**
     * @summary `service`.
     * @public
     * @readonly
     */
    readonly service: InternationalString;
    /**
     * @summary `instance`.
     * @public
     * @readonly
     */
    readonly instance: OPTIONAL<InternationalString>;
    /**
     * @summary `realm`.
     * @public
     * @readonly
     */
    readonly realm: OPTIONAL<InternationalString>;

    constructor (
        service: InternationalString,
        instance: OPTIONAL<InternationalString>,
        realm: OPTIONAL<InternationalString>
    ) {
        this.service = service;
        this.instance = instance;
        this.realm = realm;
    }

    /**
     * @summary Restructures an object into a KRBRequest
     * @description
     * 
     * This takes an `object` and converts it to a `KRBRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KRBRequest`.
     * @returns {KRBRequest}
     */
    public static _from_object (_o: { [_K in keyof (KRBRequest)]: (KRBRequest)[_K] }): KRBRequest {
        return new KRBRequest(_o.service, _o.instance, _o.realm);
    }


}

/**
 * @summary The Leading Root Component Types of KRBRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KRBRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("service", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("instance", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("realm", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of KRBRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KRBRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KRBRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KRBRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KRBRequest: $.ASN1Decoder<KRBRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KRBRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KRBRequest (el: _Element): KRBRequest {
    if (!_cached_decoder_for_KRBRequest) { _cached_decoder_for_KRBRequest = function (el: _Element): KRBRequest {
    let service!: InternationalString;
    let instance: OPTIONAL<InternationalString>;
    let realm: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "service": (_el: _Element): void => { service = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "instance": (_el: _Element): void => { instance = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "realm": (_el: _Element): void => { realm = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KRBRequest,
        _extension_additions_list_spec_for_KRBRequest,
        _root_component_type_list_2_spec_for_KRBRequest,
        undefined,
    );
    return new KRBRequest(
        service,
        instance,
        realm
    );
}; }
    return _cached_decoder_for_KRBRequest(el);
}

let _cached_encoder_for_KRBRequest: $.ASN1Encoder<KRBRequest> | null = null;

/**
 * @summary Encodes a(n) KRBRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRBRequest, encoded as an ASN.1 Element.
 */
export
function _encode_KRBRequest (value: KRBRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KRBRequest) { _cached_encoder_for_KRBRequest = function (value: KRBRequest, elGetter: $.ASN1Encoder<KRBRequest>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.service, $.BER);
    if (value.instance !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.instance, $.BER);
    }
    if (value.realm !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.realm, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_KRBRequest(value, elGetter);
}


/* eslint-enable */
