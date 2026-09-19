/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KRBResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KRBResponse ::= SEQUENCE{
 *       userid       [1] IMPLICIT InternationalString OPTIONAL,
 *       ticket       [2] IMPLICIT OCTET STRING
 *                           -- origin responds with a ticket for the requested
 *                           -- service
 *                       }
 * ```
 * 
 * @class
 */
export
class KRBResponse {
    constructor (
        /**
         * @summary `userid`.
         * @public
         * @readonly
         */
        readonly userid: OPTIONAL<InternationalString>,
        /**
         * @summary `ticket`.
         * @public
         * @readonly
         */
        readonly ticket: OCTET_STRING
    ) {}

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
    /* FIXME: userid COULD_NOT_RESOLVE_TYPE_DEF */,
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.userid === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.userid, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.ticket, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KRBResponse(value, elGetter);
}


/* eslint-enable */
