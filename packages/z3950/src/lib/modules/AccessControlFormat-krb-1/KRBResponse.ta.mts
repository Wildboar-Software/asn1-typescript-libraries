/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary KRBResponse
 * @description
 * 
 * The client returns a ticket for the requested service (ASN1.9.3).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KRBResponse ::= SEQUENCE {
 *     userid      [1] IMPLICIT InternationalString OPTIONAL,
 *     ticket      [2] IMPLICIT OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class KRBResponse {
    /**
     * @summary `userid`.
     * @description
     * 
     * Optional userid sent with the ticket. ASN1.9.3 does not define it
     * further.
     * 
     * @public
     * @readonly
     */
    readonly userid: OPTIONAL<InternationalString>;
    /**
     * @summary `ticket`.
     * @description
     * 
     * The ticket for the requested service.
     * 
     * @public
     * @readonly
     */
    readonly ticket: OCTET_STRING;

    constructor (
        userid: OPTIONAL<InternationalString>,
        ticket: OCTET_STRING
    ) {
        this.userid = userid;
        this.ticket = ticket;
    }

    /**
     * @summary Restructures an object into a KRBResponse
     * @description
     * 
     * This takes an `object` and converts it to a `KRBResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KRBResponse`.
     * @returns {KRBResponse}
     */
    public static _from_object (_o: { [_K in keyof (KRBResponse)]: (KRBResponse)[_K] }): KRBResponse {
        return new KRBResponse(_o.userid, _o.ticket);
    }


}

/**
 * @summary The Leading Root Component Types of KRBResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KRBResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("userid", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ticket", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of KRBResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KRBResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KRBResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KRBResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KRBResponse: $.ASN1Decoder<KRBResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KRBResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KRBResponse (el: _Element): KRBResponse {
    if (!_cached_decoder_for_KRBResponse) { _cached_decoder_for_KRBResponse = function (el: _Element): KRBResponse {
    let userid: OPTIONAL<InternationalString>;
    let ticket!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "userid": (_el: _Element): void => { userid = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "ticket": (_el: _Element): void => { ticket = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KRBResponse,
        _extension_additions_list_spec_for_KRBResponse,
        _root_component_type_list_2_spec_for_KRBResponse,
        undefined,
    );
    return new KRBResponse(
        userid,
        ticket
    );
}; }
    return _cached_decoder_for_KRBResponse(el);
}

let _cached_encoder_for_KRBResponse: $.ASN1Encoder<KRBResponse> | null = null;

/**
 * @summary Encodes a(n) KRBResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRBResponse, encoded as an ASN.1 Element.
 */
export
function _encode_KRBResponse (value: KRBResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KRBResponse) { _cached_encoder_for_KRBResponse = function (value: KRBResponse, elGetter: $.ASN1Encoder<KRBResponse>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.userid !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.userid, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.ticket, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_KRBResponse(value, elGetter);
}


/* eslint-enable */
