/* eslint-disable */
import {
    BOOLEAN,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DisableProfileRequest_profileIdentifier, _decode_DisableProfileRequest_profileIdentifier, _encode_DisableProfileRequest_profileIdentifier } from "../RSPDefinitions/DisableProfileRequest-profileIdentifier.ta.mjs";
// export { DisableProfileRequest_profileIdentifier, _decode_DisableProfileRequest_profileIdentifier, _encode_DisableProfileRequest_profileIdentifier } from "../RSPDefinitions/DisableProfileRequest-profileIdentifier.ta.mjs";


/**
 * @summary DisableProfileRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableProfileRequest ::= [50] SEQUENCE { -- Tag 'BF32'
 *     profileIdentifier CHOICE {
 *         isdpAid [APPLICATION 15] OctetTo16, -- AID, tag '4F'
 *         iccid Iccid -- ICCID, tag '5A'
 *     },
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class DisableProfileRequest {
    constructor (
        /**
         * @summary `profileIdentifier`.
         * @public
         * @readonly
         */
        readonly profileIdentifier: DisableProfileRequest_profileIdentifier,
        /**
         * @summary `refreshFlag`.
         * @public
         * @readonly
         */
        readonly refreshFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a DisableProfileRequest
     * @description
     * 
     * This takes an `object` and converts it to a `DisableProfileRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisableProfileRequest`.
     * @returns {DisableProfileRequest}
     */
    public static _from_object (_o: { [_K in keyof (DisableProfileRequest)]: (DisableProfileRequest)[_K] }): DisableProfileRequest {
        return new DisableProfileRequest(_o.profileIdentifier, _o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of DisableProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisableProfileRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("profileIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DisableProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisableProfileRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisableProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisableProfileRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisableProfileRequest: $.ASN1Decoder<DisableProfileRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisableProfileRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisableProfileRequest (el: _Element): DisableProfileRequest {
    if (!_cached_decoder_for_DisableProfileRequest) { _cached_decoder_for_DisableProfileRequest = $._decode_implicit<DisableProfileRequest>(() => function (el: _Element): DisableProfileRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DisableProfileRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "profileIdentifier";
    sequence[1].name = "refreshFlag";
    let profileIdentifier!: DisableProfileRequest_profileIdentifier;
    let refreshFlag!: BOOLEAN;
    profileIdentifier = _decode_DisableProfileRequest_profileIdentifier(sequence[0]);
    refreshFlag = $._decodeBoolean(sequence[1]);
    return new DisableProfileRequest(
        profileIdentifier,
        refreshFlag,

    );
}); }
    return _cached_decoder_for_DisableProfileRequest(el);
}

let _cached_encoder_for_DisableProfileRequest: $.ASN1Encoder<DisableProfileRequest> | null = null;

/**
 * @summary Encodes a(n) DisableProfileRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisableProfileRequest, encoded as an ASN.1 Element.
 */
export
function _encode_DisableProfileRequest (value: DisableProfileRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisableProfileRequest) { _cached_encoder_for_DisableProfileRequest = $._encode_implicit(_TagClass.context, 50, () => function (value: DisableProfileRequest, elGetter: $.ASN1Encoder<DisableProfileRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DisableProfileRequest_profileIdentifier(value.profileIdentifier, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_DisableProfileRequest(value, elGetter);
}


/* eslint-enable */
